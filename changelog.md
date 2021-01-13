## 0.6.2
- 修复 input 值为 `0` 时 `label` 显示位置错误问题
## 0.5.8
- 修复 modal 内部 `position: fixed` 元素不相对浏览器窗口定位的问题

## 0.5.7
- 修复 select 组件有默认值时进入页面闪烁的问题

## 0.5.6
- tag 组件样式优化

## 0.5.5
- form 组件 `form-type` 新增 `reset`

## 0.5.4
- 修复 select 组件规则检查无法触发的问题
- 修复 input 组件在状态为 `readonly` 时，规则检查无效的问题

## 0.5.2
- 修复 select 组件选项为空时报错

## 0.5.1
- 修复 modal 组件 `title` 插槽不起作用问题

## 0.5.0
- 优化 select 显示与关闭的触发条件
- 修复 date picker 组件与 modal 组件同时使用时显示不全的问题

## 0.4.9
- 修复 select 组件与 modal 组件同时使用时 select-option 错位问题

## 0.4.8
- icon 样式微调

## 0.4.7
- checkbox-group 增加 `change` 事件

## 0.4.6
- 调整 select 选项列表宽度为自适应

## 0.4.5
- input 调整聚焦触发区域

## 0.4.4
- 修复 select 默认值问题

## 0.4.2
- 优化 select

## 0.4.1
- 优化 button 性能

## 0.4.0
- 修复 select 组件 默认值为 `0` 时无法显示默认选项的问题

## 0.3.9
- 修复 select-option 组件 `slot` 内额外内容显示在 select `input` 输入框的问题

## 0.3.6
- select 组件 options 显示时禁止页面滚动

## 0.3.5
- 修复 select 组件 `change` 事件多次触发的问题

## 0.3.4
- input select 等新增了 `humble` 属性，以用在无样式环境

## 0.3.2
- 修复 radio-group 组件默认值的问题

## 0.3.1
- 新增了 pagination 组件

## 0.2.9
- 修复 tooltip 在绑定元素移除后无法消失的问题

## 0.2.7
- 修复 popover 位置错误的问题

## 0.2.6
- checkbox 和 radio 新增 `readonly`

## 0.2.5
- input 和 select 新增 slot： `prepend` 和 `append`

## 0.2.3
- 修复 avatar 背景颜色问题

## 0.2.2
- 修改 popover 触发点击关闭为组件 `$el.parentNode` 以外区域而非组件 `$el`

## 0.2.1
- 修复 tree 在数据变化后重新解析的问题
- 修复 input select 等 `readonly` 属性失效问题

## 0.1.8
- 新增了 transition-expand 组件，用于高度过渡
- 新增了 tree 组件

## 0.1.0
- 第一个版本