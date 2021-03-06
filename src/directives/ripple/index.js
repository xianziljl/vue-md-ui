function showRipple (e) {
  e = e.touches ? e.touches[0] : e
  const rootEl = e.currentTarget || e.target
  const el = rootEl.querySelector(rootEl._m_ripple_selector) || rootEl
  const container = document.createElement('span')
  const animation = document.createElement('span')
  container.appendChild(animation)
  container.className = 'm-ripple-container'
  animation.className = 'm-ripple-animation'
  let x, y, d, w, h
  if (rootEl._m_ripple_center) {
    container.className = 'm-ripple-container m-ripple-container-center'
    w = h = d = 40
    x = y = 20
  } else {
    const offset = el.getBoundingClientRect()
    const borderRadius = getComputedStyle(el).borderRadius
    container.setAttribute('style', `border-radius: ${borderRadius}`)
    w = el.clientWidth
    h = el.clientHeight
    d = w > h ? w : h // 直径
    x = e.clientX - offset.left
    y = e.clientY - offset.top // -(d - w) / 2
  }
  animation.setAttribute('style', `width: ${d}px;height: ${d}px;left: ${x}px;top: ${y}px;margin-left:${-d / 2}px;margin-top:${-d / 2}px;`)
  el.appendChild(container)
  setTimeout(() => { animation.className = 'm-ripple-animation m-ripple-show' }, 5)
  setTimeout(() => { animation.className = 'm-ripple-animation m-ripple-show m-ripple-hide' }, 400)
  setTimeout(() => { el.removeChild(container) }, 700)
}

const Ripple = {
  install (Vue, options) {
    Vue.directive('ripple', {
      bind (el, { modifiers, value }) {
        if (value && typeof value === 'string') el._m_ripple_selector = value
        if (modifiers.center) el._m_ripple_center = true
        el.addEventListener('mousedown', showRipple, false)
        el.addEventListener('touchstart', showRipple, false)
      },
      update (el, { modifiers, value }) {
        if (value && typeof value === 'string') el._m_ripple_selector = value
        else delete el._m_ripple_selector
        if (modifiers.center) el._m_ripple_center = true
        else delete el._m_ripple_center
      },
      unbind (el, binding) {
        el.removeEventListener('mousedown', showRipple, false)
        el.removeEventListener('touchstart', showRipple, false)
      }
    })
  }
}
export default Ripple
