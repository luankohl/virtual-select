<template>
  <div id="app">
    <VirtualSelect
      v-model="selectValue"
      :tabindex="1"
      :options="options"
      placeholder="teste"
    />
    <VirtualSelect
      :tabindex="2"
      disabled
      v-model="selectValue"
      :options="options"
      placeholder="teste"
    />
    <VirtualSelect
      :tabindex="3"
      invert
      v-model="selectValue2"
      :options="options"
      placeholder="teste"
    />
  </div>
</template>

<script>
import VirtualSelect from "./components/VirtualSelect.vue";

export default {
  name: "App",
  components: { VirtualSelect },
  data() {
    return {
      selectValue: "",
      selectValue2: "",
      options: [],
    };
  },
  mounted() {
    for (let i = 1; i <= 1000; i++) {
      this.options.push({
        label: `option ${i}`,
        value: `option-${i}`,
      });
    }
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  align-items: center;
  /* justify-content: center;
  flex-direction: column; */
  gap: 2rem;
}
</style>
