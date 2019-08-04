import Vue from 'vue'
import dashify from 'dashify'

export default function (this: Vue, events: string[]): Object {
  const vm = this
  let obj: {[index:string] : {}} = {}
  events.forEach(event => {
    obj[event] = function(...args: any[]) {
      vm.$emit(dashify(event),...args) 
    }
  })
  return obj
}