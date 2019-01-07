import MCheckbox from './checkbox.vue'
import MCheckboxGroup from './checkbox-group.vue'

const checkbox = {}

checkbox.install = function (Vue) {
  Vue.component(MCheckbox.name, MCheckbox)
  Vue.component(MCheckboxGroup.name, MCheckboxGroup)
}

export default checkbox
