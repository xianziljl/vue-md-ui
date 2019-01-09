import MMenu from './menu.vue'
import MMenuItem from './menu-item.vue'

const menu = {}

menu.install = function (Vue) {
  Vue.component(MMenu.name, MMenu)
  Vue.component(MMenuItem.name, MMenuItem)
}

export default menu
