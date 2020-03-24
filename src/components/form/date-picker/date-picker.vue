<template>
<div class="m-date-picker">
  <m-inputer
    v-bind="$attrs"
    :value="value"
    readonly
    v-on="listeners"
  ></m-inputer>
  <transition-group name="m-date-panel">
    <div
      class="m-date-picker-mask"
      v-if="panelShow"
      key="0"
      :data-mid="mid"
      @mousedown="hidePanel"></div>
    <div
      v-if="panelShow"
      class="m-date-picker-panel"
      :data-mid="mid"
      :style="{ left: left + 'px', top: top + 'px' }"
      key="1"
      ref="panel">
      <div class="m-date-picker-ctn">
        <m-date-picker-calendar
          :value="val"
          :noToday="noToday"
          :forward="forward"
          :backward="backward"
          :start="start"
          :end="end"
          @change="onChange"
        ></m-date-picker-calendar>
      </div>
      <div class="m-date-picker-btns">
        <span></span>
        <m-button flat @click="cancel">取消</m-button>
        <m-button type="primary" flat @click="confirm">确定</m-button>
      </div>
    </div>
  </transition-group>
</div>
</template>

<script>
import MInputer from '../input/inputer'
import MButton from '../button/button'
import MDatePickerCalendar from './calendar'

export default {
  name: 'm-date-picker',
  components: { MInputer, MButton, MDatePickerCalendar },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    },
    noToday: Boolean, // 不能选今天
    forward: Boolean, // 向前看，只能选今天及以后
    backward: Boolean, // 向后看
    start: String, // 可选范围开始日期
    end: String // 可选范围结束日期
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    return {
      mid: Math.random().toString(16).substr(2),
      panelShow: false,
      panelShowOnTop: false,
      defaultValue: this.value,
      val: this.value,
      left: 0,
      top: 0
    }
  },
  computed: {
    listeners: function () {
      const vm = this
      return Object.assign({}, this.$listeners, {
        focus: function (e) {
          vm.panelShow = true
          vm.$nextTick(vm.showPanel)
          vm.$emit('focus', e)
        },
        input: function (e) {
          vm.$emit('change', e)
        }
      })
    }
  },
  watch: {
    value (val) {
      this.val = val
    }
  },
  methods: {
    showPanel () {
      const { mid } = this
      this.defaultValue = this.value
      const panel = document.querySelector(`.m-date-picker-panel[data-mid="${mid}"]`)
      const mask = document.querySelector(`.m-date-picker-mask[data-mid="${mid}"]`)
      document.body.appendChild(panel)
      document.body.appendChild(mask)
      const rect = this.$el.getBoundingClientRect()
      const { left, top } = rect
      const elHeight = this.$el.clientHeight
      const { clientWidth, clientHeight } = this.$refs.panel
      this.left = left
      this.top = elHeight + top
      const { innerHeight, innerWidth } = window
      if ((this.top + clientHeight) >= innerHeight) this.top = top - clientHeight
      if ((this.left + clientWidth) >= innerWidth) this.left = innerWidth - clientWidth
    },
    hidePanel (e) {
      this.panelShow = false
    },
    onChange (e) {
      this.$emit('change', e)
    },
    cancel () {
      this.$emit('change', this.defaultValue)
      this.panelShow = false
    },
    confirm () {
      this.$emit('change', this.val)
      this.panelShow = false
    }
  }
}
</script>

<style lang="less">
.m-date-picker{
  position: relative;overflow: visible;
  &-panel{
    display: flex;flex-direction: column;
    position: fixed;top: 100%;z-index: 9999;
    background: #fff;min-width: 250px;min-height: 220px;border-radius: @border-radius;padding: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,.2), 0 4px 10px rgba(0,0,0,.1);
  }
  &-mask{position: fixed;left: 0;top: 0;width: 100%;height: 100%;z-index: 9998;}
  &-ctn{flex: 1;}
  &-btns{display: flex;
    span{flex: 1}
  }
  .m-date-panel-enter-active, .m-date-panel-leave-active{opacity: 1;transition: opacity .2s linear;}
  .m-date-panel-enter, .m-date-panel-leave-to{opacity: 0;}
}
</style>
