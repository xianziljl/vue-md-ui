import MRadio from './radio'
import MRadioGroup from './radio-group'

const radio = {}

radio.install = function (Vue) {
  Vue.component(MRadioGroup.name, MRadioGroup)
  Vue.component(MRadio.name, MRadio)
}

export default radio
