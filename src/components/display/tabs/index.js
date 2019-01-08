import MTabs from './tabs.vue'
import MTab from './tab.vue'
import MTabItems from './tab-items.vue'
import MTabItem from './tab-item.vue'

const tabs = {}

tabs.install = function (Vue) {
  Vue.component(MTabs.name, MTabs)
  Vue.component(MTab.name, MTab)
  Vue.component(MTabItems.name, MTabItems)
  Vue.component(MTabItem.name, MTabItem)
}

export default tabs
