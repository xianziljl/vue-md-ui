import './src/directives/ripple/ripple.less'
import './src/directives/tooltip/tooltip.less'

import Button from './src/components/form/button'
import Checkbox from './src/components/form/checkbox'
import DatePicker from './src/components/form/date-picker'
import TimePicker from './src/components/form/time-picker'
import Form from './src/components/form/form'
import Radio from './src/components/form/radio'
import Input from './src/components/form/input'
import Select from './src/components/form/select'
import Switcher from './src/components/form/switcher'

import Icon from './src/components/display/icon'
import Card from './src/components/display/card'
import Tabs from './src/components/display/tabs'
import Avatar from './src/components/display/avatar'
import Tag from './src/components/display/tag'
import Tree from './src/components/display/tree'
import Divider from './src/components/display/divider'
import Empty from './src/components/display/empty'

import Menu from './src/components/feedback/menu'
import Modal from './src/components/feedback/modal'
import Progress from './src/components/feedback/progress'
import Collapse from './src/components/display/collapse'
import Popover from './src/components/feedback/popover'
import Toast from './src/components/feedback/toast'

import Ripple from './src/directives/ripple'
import Tooltip from './src/directives/tooltip'

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
