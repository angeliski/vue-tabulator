import Vue from 'vue';
import TabulatorComponent from '@/components/TabulatorComponent.vue';

export { TabulatorComponent };

function install(VueApp: typeof Vue, options: any = {}) {
  const name = options.name || 'VueTabulator';
  VueApp.component(name, TabulatorComponent);
}; 

export default {
  install,
};

if (typeof window !== 'undefined' && (<any>window).Vue && (<any>window).Vue === Vue) {
  install((<any>window).Vue)
}
