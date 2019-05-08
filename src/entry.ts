import Vue from 'vue';
import TabulatorComponent from '@/components/TabulatorComponent.vue';
import GridBuilder from '@/providers/grid-builder';

export { TabulatorComponent, GridBuilder };

export default {
  install(VueApp: typeof Vue, options: any = {}) {
    const name = options.name || 'VueTabulator';
    VueApp.component(name, TabulatorComponent);
  },
};
