
function showRipple (e) {
  e = e.touches ? e.touches[0] : e
  const el = e.currentTarget
  const container = document.createElement('span')
  const animation = document.createElement('span')
  container.appendChild(animation)
  container.className = 'm-ripple-container'
  animation.className = 'm-ripple-animation'
  const offset = el.getBoundingClientRect()
  const w = el.clientWidth
  const h = el.clientHeight
  const d = w > h ? w : h // 直径
  const x = e.clientX - offset.left
  const y = e.clientY - offset.top // -(d - w) / 2
  animation.setAttribute('style', `width: ${d}px;height: ${d}px;left: ${x}px;top: ${y}px;margin-left:${-d / 2}px;margin-top:${-d / 2}px;`)
  el.appendChild(container)
  setTimeout(() => { animation.className = 'm-ripple-animation m-ripple-show' }, 5)
  setTimeout(() => { animation.className = 'm-ripple-animation m-ripple-show m-ripple-hide' }, 305)
  setTimeout(() => { animation.className = 'm-ripple-animation m-ripple-show m-ripple-hide' }, 310)
  setTimeout(() => { el.removeChild(container) }, 620)
}

const Ripple = {
  install (Vue, options) {
    Vue.directive('ripple', {
      bind (el, { modifiers }, vnode, oldVnode) {
        for (let key in modifiers) el.setAttribute(`data-ripple-${key}`, true)
        el.addEventListener('mousedown', showRipple, false)
        el.addEventListener('touchstart', showRipple, false)
      },
      update (el, binding, vnode, oldVnode) {},
      unbind (el, binding, vnode, oldVnode) {
        el.removeEventListener('mousedown', showRipple, false)
        el.removeEventListener('touchstart', showRipple, false)
      }
    })
  }
}
export default Ripple
