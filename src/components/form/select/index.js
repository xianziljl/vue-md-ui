import MSelect from './select'
import MSelectOption from './select-option'

const select = {}

select.install = function (Vue) {
  Vue.component(MSelect.name, MSelect)
  Vue.component(MSelectOption.name, MSelectOption)
}

export default select
