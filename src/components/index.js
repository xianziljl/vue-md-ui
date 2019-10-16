import '@/less/global.less'
import '@/less/value.less'
import Vue from 'vue'

import Button from './form/button'
import Checkbox from './form/checkbox'
import DatePicker from './form/date-picker'
import TimePicker from './form/time-picker'
import Form from './form/form'
import Radio from './form/radio'
import Input from './form/input'
import Select from './form/select'
import Switcher from './form/switcher'

import Icon from './display/icon'
import Card from './display/card'
import Tabs from './display/tabs'
import Avatar from './display/avatar'
import Tag from './display/tag'
import Tree from './display/tree'
import Divider from './display/divider'
import Empty from './display/empty'

import Menu from './feedback/menu'
import Modal from './feedback/modal'
import Progress from './feedback/progress'
import Collapse from './display/collapse'
import Popover from './feedback/popover'
import Toast from './feedback/toast'

Vue.use(Avatar)
Vue.use(Button)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Empty)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switcher)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Popover)
Vue.use(Tabs)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Divider)
Vue.use(Menu)
Vue.use(Modal)
Vue.use(Progress)
Vue.use(Collapse)
Vue.use(Form)
Vue.use(Toast)
