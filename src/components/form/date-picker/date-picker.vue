<template>
<div class="m-date-picker">
  <m-inputer
    v-bind="$attrs"
    :value="value"
    readonly
    v-on="listeners"
  ></m-inputer>
  <transition v-if="panelShow" name="m-date-panel">
    <div
      class="m-date-picker-panel"
      :class="{'m-date-picker-panel-ontop': panelShowOnTop}"
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
  </transition>
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
      panelShow: false,
      panelShowOnTop: false,
      defaultValue: this.value,
      val: this.value
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
  mounted () {
    document.addEventListener('mousedown', this.hidePanel)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('mousedown', this.hidePanel)
    })
  },
  methods: {
    showPanel () {
      this.defaultValue = this.value
      const top = this.$el.getBoundingClientRect().top
      const elHeight = this.$el.clientHeight
      const panelHeight = this.$refs.panel.clientHeight
      const windowHeight = window.innerHeight
      if ((top + elHeight + panelHeight) >= windowHeight) this.panelShowOnTop = true
      else this.panelShowOnTop = false
    },
    hidePanel (e) {
      const el = this.$el
      const path = e.path || (e.composedPath && e.composedPath())
      if (el && !path.includes(el)) this.panelShow = false
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
    position: absolute;top: 100%;z-index: 40;
    background: #fff;min-width: 250px;min-height: 220px;border-radius: @border-radius;padding: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,.2), 0 4px 10px rgba(0,0,0,.1);
    &-ontop{bottom: 100%;top: auto;}
  }
  &-ctn{flex: 1;}
  &-btns{display: flex;
    span{flex: 1}
  }
  .m-date-panel-enter-active, .m-date-panel-leave-active{opacity: 1;transition: opacity .2s linear;}
  .m-date-panel-enter, .m-date-panel-leave-to{opacity: 0;}
}
</style>
