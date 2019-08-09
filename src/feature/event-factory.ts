import Vue from 'vue';
import dashify from 'dashify';

export default function (this: Vue, events: string[]): Object {
  const vm = this;
  const obj: {[index:string] : {}} = {};
  events.forEach((event) => {
    obj[event] = (...args: any[]) => {
      vm.$emit(dashify(event), ...args);
    };
  });
  return obj;
}
