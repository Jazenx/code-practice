/**
 * new 操作符做了以下事情
 * 1. 创建了一个全新的对象
 * 2. 会被执行 [[Prototype]]
 * 3. 使 this 指向新创建的对象
 * 4. 通过new创建的每个对象将最终被 [[Prototype]] 链接到这个函数的 prototype 对象上
 * 5. 如果函数没有返回对象类型 Object(包含 Functoin, Array, Date, RegExg, Error)，那么 new 表达式中的函数调用将返回该对象引用s
 */

function New(func) {
  const res = {}
  if (func.prototype !== null) {
    res.__proto__ = func.prototype
  }
  const ret = func.apply(res, Array.prototype.slice.call(arguments, 1))
  if ((typeof ret === 'function' || typeof ret === 'object') && ret !== null) {
    return ret
  }
  return res
}