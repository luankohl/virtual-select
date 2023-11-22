/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/VirtualSelect.vue?vue&type=template&id=7c110a18&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "virtualselect",
    staticClass: "virtual-select",
    class: {
      active: !!_vm.value && !_vm.disabled,
      disabled: _vm.disabled,
      invert: _vm.invert
    },
    on: {
      "&click": function ($event) {
        _vm.isActive = true;
      },
      "keyup": _vm.keyboardCheck
    }
  }, [_c('fieldset', {
    class: {
      active: _vm.isActive
    }
  }, [_vm.value && !_vm.disabled ? _c('button', {
    staticClass: "clear",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.selectValue('');
      }
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "16px",
      "height": "16px",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke": "red"
    }
  }, [_c('line', {
    attrs: {
      "x1": "18",
      "y1": "6",
      "x2": "6",
      "y2": "18"
    }
  }), _c('line', {
    attrs: {
      "x1": "6",
      "y1": "6",
      "x2": "18",
      "y2": "18"
    }
  })])]) : _vm._e(), _c('legend', [_c('span', [_vm._v(_vm._s(_vm.getLabel()))])]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    attrs: {
      "disabled": _vm.disabled,
      "tabindex": "1",
      "type": "text",
      "name": "search",
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.search
    },
    on: {
      "focusin": function ($event) {
        _vm.disabled ? _vm.isActive = false : _vm.isActive = true;
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  }), _c('div', {
    staticClass: "chevron",
    class: {
      active: _vm.isActive
    }
  }, [_c('svg', {
    staticClass: "feather feather-chevron-down",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24px",
      "height": "24px",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "stroke": "black",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [_c('polyline', {
    attrs: {
      "points": "6 9 12 15 18 9"
    }
  })])])]), _c('transition', {
    attrs: {
      "name": _vm.invert ? 'sv' : 'vs'
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isActive,
      expression: "isActive"
    }],
    ref: "virtualcontainer",
    staticClass: "options",
    on: {
      "focusin": function ($event) {
        _vm.disabled ? _vm.isActive = false : _vm.isActive = true;
      }
    }
  }, [_c('div', {
    staticClass: "content",
    style: _vm.contentStyle()
  }, _vm._l(_vm.items, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "option-item",
      attrs: {
        "tabindex": 2 + index
      },
      on: {
        "click": function ($event) {
          $event.stopPropagation();
          return (() => _vm.selectValue(item.value)).apply(null, arguments);
        },
        "keydown": e => _vm.keyboardSelectValue(e, item.value)
      }
    }, [_vm._v(" " + _vm._s(item.label) + " ")]);
  }), 0)])])], 1);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/VirtualSelect.vue?vue&type=script&lang=js
/* harmony default export */ var VirtualSelectvue_type_script_lang_js = ({
  name: "VirtualSelect",
  data() {
    return {
      search: "",
      isActive: false,
      scrollAdd: 0
    };
  },
  props: {
    value: {},
    placeholder: {
      type: String,
      default: "Selecione uma opção"
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    invert: {
      type: Boolean,
      default: false
    }
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
      if (e.code !== "Enter" && e.code !== "Space" && !this.disabled) {
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
        const valueFind = this.options.find(opt => opt.value === this.value);
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
    }
  },
  computed: {
    findItems() {
      if (this.search !== "") {
        this.scrollTop();
        const regExp = new RegExp(this.search, "gi");
        return this.options.filter(opt => {
          return regExp.test(opt.label);
        });
      }
      return this.options;
    },
    items() {
      const scrollPosition = this.scrollAdd;
      return this.findItems.slice(scrollPosition, scrollPosition + 10);
    }
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
  }
});
;// CONCATENATED MODULE: ./src/components/VirtualSelect.vue?vue&type=script&lang=js
 /* harmony default export */ var components_VirtualSelectvue_type_script_lang_js = (VirtualSelectvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/VirtualSelect.vue?vue&type=style&index=0&id=7c110a18&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/VirtualSelect.vue?vue&type=style&index=0&id=7c110a18&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/VirtualSelect.vue



;


/* normalize component */

var component = normalizeComponent(
  components_VirtualSelectvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "7c110a18",
  null
  
)

/* harmony default export */ var VirtualSelect = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (VirtualSelect);


module.exports = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=VirtualSelect.common.js.map