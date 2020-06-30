/** 
 * 实现一个 call
 * call 核心思想
 * 1. 将函数设为对象的属性
 * 2. 执行和删除这个函数
 * 3. 指定 this 到函数并传入参数执行函数
 * 4. 如果不传入参数，默认指向为 window
 * 
*/

Function.prototype.zcall = function (context = window) {
  context.fn = this
  const args = [...arguments].slice(1)
  const res = context.fn(...args)
  delete context.fn
  return res
}

/** 
 * 实现一个 apply
 * 
*/

Function.prototype.zapply = function (ctx = window) {
  ctx.fn = this
  let res = null
  const args = arguments[1]
  if (args) {
    res = context.fn(...arguments[1])
  } else {
    res = context.fn
  }
  ctx.fn()
  delete ctx.fn
  return res
}

/** 
 * 实现一个 bind
 */

Funciton.prototype.zbind = funciton (ctx) {
  if (typeof this != 'function') {
    throw Error('not a function!')
  }
  let fn = this
  let args = [...arguments].slice(1)
  let resFn = function () {
    return fn.apply(this instanceof resFn ? this : ctx, args.contact(...arguments))
  }
  function tmp() {}
  tmp.prototype = this.prototype
  resFn.prototype = new tmp()
  return resFn
}