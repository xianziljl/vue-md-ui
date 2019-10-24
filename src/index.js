import './directives/ripple/ripple.less'
import './directives/tooltip/tooltip.less'

import Button from './components/form/button'
import Checkbox from './components/form/checkbox'
import DatePicker from './components/form/date-picker'
import TimePicker from './components/form/time-picker'
import Form from './components/form/form'
import Radio from './components/form/radio'
import Input from './components/form/input'
import Select from './components/form/select'
import Switcher from './components/form/switcher'

import Icon from './components/display/icon'
import Card from './components/display/card'
import Tabs from './components/display/tabs'
import Avatar from './components/display/avatar'
import Tag from './components/display/tag'
import Tree from './components/display/tree'
import Divider from './components/display/divider'
import Empty from './components/display/empty'

import Menu from './components/feedback/menu'
import Modal from './components/feedback/modal'
import Progress from './components/feedback/progress'
import Collapse from './components/display/collapse'
import Popover from './components/feedback/popover'
import Toast from './components/feedback/toast'

import Ripple from './directives/ripple'
import Tooltip from './directives/tooltip'

const components = {
  Button,
  Checkbox,
  DatePicker,
  TimePicker,
  Form,
  Radio,
  Input,
  Select,
  Switcher,
  Icon,
  Card,
  Tabs,
  Avatar,
  Tag,
  Tree,
  Divider,
  Empty,
  Menu,
  Modal,
  Progress,
  Collapse,
  Popover,
  Toast,
  Ripple,
  Tooltip
}

const install = function (Vue) {
  Object.values(components).forEach(component => {
    Vue.use(component)
  })
}

export default { ...components, install }
