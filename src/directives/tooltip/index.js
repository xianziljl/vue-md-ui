const tips = []

function showToolTip (e) {
  const el = e.currentTarget || e.target
  const CLASS_NAME = 'm-tooltip-container'
  const rect = el.getBoundingClientRect()
  const pos = el._m_tooltip_pos
  el._m_tooltip_over = true
  let tip = el._m_tooltip || tips.find(item => !item._m_tooltip_using)
  if (!tip) {
    tip = document.createElement('div')
    tip.className = CLASS_NAME
    tips.push(tip)
  }
  el._m_tooltip = tip
  tip.innerText = el._m_tooltip_content
  tip._m_tooltip_using = true
  document.body.appendChild(tip)
  const w = tip.clientWidth
  const h = tip.clientHeight
  const docW = document.documentElement.clientWidth
  let x, y
  switch (pos) {
    case 'top':
      x = rect.x + rect.width / 2 - w / 2
      y = rect.y - h - 10
      break
    case 'bottom':
      x = rect.x + rect.width / 2 - w / 2
      y = rect.y + rect.height + 10
      break
    case 'left':
      x = rect.x - w - 10
      y = rect.y + rect.height / 2 - h / 2
      break
    case 'right':
      x = rect.x + rect.width + 10
      y = rect.y + rect.height / 2 - h / 2
      break
    default:
      x = rect.x + rect.width / 2 - w / 2
      y = rect.y - h - 10
      if (x < 0) x = 10
      if (y < 0) y = rect.y + rect.height + 10
      if (x + w > docW) x = docW - w - 10
      break
  }
  tip.setAttribute('style', `left: ${x}px;top: ${y}px;transform: scale(1);opacity: 1;`)
}

function hideToolTip (e) {
  const el = e.currentTarget || e.target
  el._m_tooltip_over = false
  const tip = el._m_tooltip
  if (tip) {
    tip.className = 'm-tooltip-container'
    tip.setAttribute('style', '')
    tip._m_tooltip_using = false
    el._m_tooltip = null
    document.body.removeChild(tip)
  }
}

const Tooltip = {
  install (Vue) {
    Vue.directive('tooltip', {
      bind (el, { modifiers, arg, value }) {
        el._m_tooltip_content = value.toString()
        el._m_tooltip_pos = arg || 'auto'
        el.addEventListener('DOMNodeRemovedFromDocument', hideToolTip)
        el.addEventListener('mouseenter', showToolTip)
        el.addEventListener('mouseleave', hideToolTip)
      },
      update (el, { modifiers, value }) {
        el._m_tooltip_content = value.toString()
      },
      unbind (el, { modifiers, value }) {
        el.removeEventListener('mouseenter', showToolTip)
        el.removeEventListener('mouseleave', hideToolTip)
        el.removeEventListener('DOMNodeRemoved', hideToolTip)
      }
    })
  }
}

export default Tooltip
