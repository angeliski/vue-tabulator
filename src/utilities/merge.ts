import joint from './joint'

export default function merge(objValue: any, srcValue: any, key: string): any | undefined {
  if (typeof objValue == "function" && typeof srcValue == "function") {
    return joint([objValue, srcValue])
  }
}