import SwitchView from "./components/SwitchView.vue";

const SwitchViewSimple = {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("switch-view", SwitchView);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(SwitchViewSimple);
}

export default SwitchViewSimple;
