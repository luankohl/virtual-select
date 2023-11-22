<template>
  <div
    ref="virtualselect"
    class="virtual-select"
    :class="{
      active: !!value && !disabled,
      disabled: disabled,
      invert: invert,
    }"
    @click.passive="isActive = true"
    @keyup="keyboardCheck"
  >
    <fieldset :class="{ active: isActive }">
      <button
        @click.prevent.stop="selectValue('')"
        class="clear"
        v-if="value && !disabled"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="red"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <legend>
        <span>{{ getLabel() }}</span>
      </legend>
      <input
        :disabled="disabled"
        tabindex="1"
        type="text"
        name="search"
        @focusin="disabled ? (isActive = false) : (isActive = true)"
        autocomplete="off"
        v-model="search"
      />
      <div class="chevron" :class="{ active: isActive }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </fieldset>

    <transition :name="invert ? 'sv' : 'vs'">
      <div
        v-show="isActive"
        ref="virtualcontainer"
        class="options"
        @focusin="disabled ? (isActive = false) : (isActive = true)"
      >
        <div class="content" :style="contentStyle()">
          <div
            class="option-item"
            v-for="(item, index) in items"
            :key="index"
            @click.stop="() => selectValue(item.value)"
            @keydown="(e) => keyboardSelectValue(e, item.value)"
            :tabindex="2 + index"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "VirtualSelect",
  data() {
    return {
      search: "",
      isActive: false,
      scrollAdd: 0,
    };
  },
  props: {
    value: {},
    placeholder: {
      type: String,
      default: "Selecione uma opção",
    },
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    invert: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectValue(value) {
      this.search = "";
      this.isActive = false;
      this.$emit("input", value);
      this.$emit("blur", value);
    },
    keyboardSelectValue(e, value) {
      if (e.code === "Enter" || e.code === "Space") {
        this.selectValue(value);
      }
    },
    keyboardCheck(e) {
      if (e.code !== "Enter" && e.code !== "Space" && !this.disabled && e.code !== 'Escape') {
        this.isActive = true;
      }
    },
    contentStyle() {
      const virtulHeight = this.findItems.length * 34;
      const paddingTop = this.scrollAdd * 34;
      return `height: ${virtulHeight}px; padding-top: ${paddingTop}px`;
    },
    getLabel() {
      if (this.value) {
        const valueFind = this.options.find((opt) => opt.value === this.value);
        if (valueFind) {
          return valueFind.label + ` (${this.placeholder})`;
        } else {
          return this.value;
        }
      }

      return this.placeholder;
    },
    scrollTop() {
      this.scrollAdd = 0;
    },

    // Listeners
    clickOut(e) {
      if (!e.target.closest(".virtual-select")) {
        this.isActive = false;
      }
    },
    escapeKey(e) {
      if (e.key === "Escape") {
        this.isActive = false;
      }
    },
  },
  computed: {
    findItems() {
      if (this.search !== "") {
        this.scrollTop();
        const regExp = new RegExp(this.search, "gi");
        return this.options.filter((opt) => {
          return regExp.test(opt.label);
        });
      }
      return this.options;
    },
    items() {
      const scrollPosition = this.scrollAdd;
      return this.findItems.slice(scrollPosition, scrollPosition + 10);
    },
  },
  mounted() {
    window.addEventListener("click", this.clickOut);
    window.addEventListener("keydown", this.escapeKey);
    this.$refs.virtualcontainer.addEventListener("scroll", () => {
      this.scrollAdd = Math.floor(this.$refs.virtualcontainer.scrollTop / 34);
    });
  },
  beforeMount() {
    window.removeEventListener("click", this.clickOut);
    window.removeEventListener("keydown", this.escapeKey);
  },
};
</script>

<style scoped>
fieldset,
.virtual-select {
  position: relative;
  display: flex;
  align-items: center;
}

.virtual-select.disabled {
  pointer-events: none;
}

fieldset {
  padding: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
}

.virtual-select.disabled fieldset {
  background-color: #f5f6f7;
}

fieldset legend {
  pointer-events: none;
  color: #6a6a6a;
  position: absolute;
  font-size: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  max-width: calc(100% - 2rem);
  transition: all 0.2s ease-in-out 0s;
}

.virtual-select.active fieldset legend {
  left: 24px;
}

fieldset legend span {
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  padding: 0 5px;
  border-radius: 8px;
}

fieldset input {
  all: unset;
  width: 100%;
  height: 40px;
  padding: 0 1rem;
}

.virtual-select.active fieldset input {
  padding: 0 5px;
}

fieldset.active legend {
  top: 0;
  transform: translateY(-55%);
}

.options {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 999;
  border-radius: 8px;
  background-color: white;
  height: 200px;
  border: 1px solid #e2e2e2;
}

.invert .options {
  top: unset;
  bottom: calc(100% + 5px);
}

.option-item {
  transition: hover 0.2s ease-in-out 0s;
  padding: 0 10px;
  height: 34px;
  line-height: 34px;
}

.option-item:hover {
  background-color: #f5f6f7;
}

.clear,
.chevron {
  all: unset;
  width: 24px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out 0s;
}

.chevron {
  width: 48px;
}

.clear {
  cursor: pointer;
}

.chevron.active {
  transform: rotate(180deg);
}

/* Transition */
.vs-enter-active {
  animation: bounce-in 0.2s;
}
.vs-leave-active {
  animation: bounce-out 0.2s;
}
.sv-enter-active {
  animation: invert-bounce-in 0.2s;
}
.sv-leave-active {
  animation: invert-bounce-out 0.2s;
}

@keyframes bounce-in {
  0% {
    transform-origin: top;
    transform: scaleY(0);
  }
  100% {
    transform-origin: top;
    transform: scaleY(1);
  }
}
@keyframes bounce-out {
  0% {
    transform-origin: top;
    transform: scaleY(1);
  }
  100% {
    transform-origin: top;
    transform: scaleY(0);
  }
}

@keyframes invert-bounce-in {
  0% {
    transform-origin: bottom;
    transform: scaleY(0);
  }
  100% {
    transform-origin: bottom;
    transform: scaleY(1);
  }
}
@keyframes invert-bounce-out {
  0% {
    transform-origin: bottom;
    transform: scaleY(1);
  }
  100% {
    transform-origin: bottom;
    transform: scaleY(0);
  }
}
</style>

