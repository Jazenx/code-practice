/**
 * 实现要素
 * 1. Boolean | Number| String 类型会自动转换成对应的原始值。
 * 2. undefined、任意函数以及symbol，会被忽略（出现在非数组对象的属性值中时），或者被转换成 null（出现在数组中时）。
 * 3. 不可枚举的属性会被忽略
 * 4. 如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略。
 */

function jsonStringify(obj) {
  let type = typeof obj
  //
  if (type !== 'object') {
    if (/string|undefined|function/.test(type)) {
      obj = '"' + obj + '"'
    }
    return String(obj)
  } else {
    let json = []
    let isArr = Array.isArray(obj)
    for (const k in obj) {
      let v = obj[k]
      let type = typeof v
      if (/string|undefined|function/.test(type)) {
        v = '"' + v + '"'
      } else if (type === 'object') {
        v = jsonStringify(v)
      }
      json.push((isArr? "" : '"' + k + '":') + String(v))
    }
    return (isArr ? "[" : "{") + String(json) + (isArr ? "]" : "}") 
  }
}
