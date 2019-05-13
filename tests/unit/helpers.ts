import { Wrapper } from '@vue/test-utils';
import Vue from 'vue';

/* eslint-disable import/prefer-default-export */
export function getInstance<V extends Vue>(wrapper: Wrapper<V>) {
  // TODO find a better way
  return (wrapper.vm as any).getInstance();
}
