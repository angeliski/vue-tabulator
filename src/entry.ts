import Vue from 'vue';
import VueTabulator from '@/components/VueTabulator.vue';

export default {
    install(VueApp: typeof Vue) {
      VueApp.component(VueTabulator.name, VueTabulator);
    },
  };