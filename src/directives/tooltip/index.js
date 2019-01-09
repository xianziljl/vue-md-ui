const tips = []

function showToolTip (e) {
  const el = e.currentTarget || e.target
  el._m_tooltip_over = true
  let tip = tips.find(item => !item._m_tooltip_using)
  if (!tip) {
    tip = document.createElement('div')
    tip.className = 'm-tooltip-container'
    tips.push(tip)
  }
  tip._m_tooltip_using = true
  console.log(tips, tip._m_tooltip_using)
}

function hideToolTip (e) {
  const el = e.currentTarget || e.target
  el._m_tooltip_over = false
  const tip = el.querySelector('.m-tooltip-container')
  if (tip) {
    tip._m_tooltip_using = false
  }
  console.log('hide tooltip')
}

const Tooltip = {
  install (Vue) {
    Vue.directive('tooltip', {
      bind (el, { modifiers, value }) {
        console.log(value)
        el._m_tooltip = value
        el.addEventListener('mouseover', showToolTip)
        el.addEventListener('mouseout', hideToolTip)
      },
      update (el, { modifiers, value }) {},
      unbind (el, { modifiers, value }) {
        el.removeEventListener('mouseover', showToolTip)
        el.removeEventListener('mouseout', hideToolTip)
      }
    })
  }
}

export default Tooltip
