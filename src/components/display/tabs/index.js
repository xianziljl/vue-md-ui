import MTabs from './tabs.vue'
import MTab from './tab.vue'

const tabs = {}

tabs.install = function (Vue) {
  Vue.component(MTabs.name, MTabs)
  Vue.component(MTab.name, MTab)
}

export default tabs
