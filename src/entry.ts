import Vue from 'vue';
import TabulatorComponent from '@/components/TabulatorComponent.vue';

export { TabulatorComponent };

export default {
  install(VueApp: typeof Vue, options: any = {}) {
    const name = options.name || 'VueTabulator';
    VueApp.component(name, TabulatorComponent);
  },
};
