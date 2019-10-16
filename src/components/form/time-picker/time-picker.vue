<template>
<div class="m-time-picker">
  <m-inputer
    v-bind="$attrs"
    :value="displayValue"
    readonly
    v-on="listeners"
  ></m-inputer>
  <transition name="m-time-panel">
    <div
      class="m-time-picker-panel"
      v-if="panelShow"
      ref="panel"
      :class="{'m-time-picker-panel-ontop': panelShowOnTop}">
      <div class="m-time-picker-col" ref="$h">
        <div class="m-time-picker-th">时</div>
        <div class="m-time-picker-item"
          v-for="(item, i) in 24"
          :key="item"
          :class="{'m-time-picker-item-on': time.h === i}"
          @click="onClick('h', i)"
        >{{i > 9 ? i : '0' + i}}</div>
      </div>
      <div class="m-time-picker-col" ref="$m">
        <div class="m-time-picker-th">分</div>
        <div class="m-time-picker-item"
          v-for="(item, i) in 60"
          :key="item"
          :class="{'m-time-picker-item-on': time.m === i}"
          @click="onClick('m', i)"
        >{{i > 9 ? i : '0' + i}}</div>
      </div>
      <div class="m-time-picker-col" ref="$s">
        <div class="m-time-picker-th">秒</div>
        <div class="m-time-picker-item"
          v-for="(item, i) in 60"
          :key="item"
          :class="{'m-time-picker-item-on': time.s === i}"
          @click="onClick('s', i)"
        >{{i > 9 ? i : '0' + i}}</div>
      </div>
    </div>
  </transition>
  <!-- <vue-timepicker></vue-timepicker> -->
</div>
</template>

<script>
import MInputer from '../input/inputer'
function formatNum (num) {
  return num < 10 ? '0' + num : num
}

export default {
  name: 'm-time-picker',
  components: { MInputer },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    return {
      val: this.value || '',
      defaultValue: '',
      panelShow: false,
      panelShowOnTop: false,
      time: { h: 0, m: 0, s: 0 }
    }
  },
  created () {
    this.getTime()
  },
  watch: {
    value (val) {
      this.getTime()
    }
  },
  computed: {
    displayValue () {
      const { h, m, s } = this.time
      if (!h && !m && !s) return ''
      return `${formatNum(h)}:${formatNum(m)}:${formatNum(s)}`
    },
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
  mounted () {
    document.addEventListener('mousedown', this.hidePanel)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('mousedown', this.hidePanel)
    })
  },
  methods: {
    showPanel () {
      this.defaultValue = this.value
      // console.log(this.val)
      const now = new Date()
      if (!this.val) {
        this.$emit('change', `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)
      } else {
        this.$emit('change', this.defaultValue)
      }
      const top = this.$el.getBoundingClientRect().top
      const elHeight = this.$el.clientHeight
      const panelHeight = this.$refs.panel.clientHeight
      const windowHeight = window.innerHeight
      if ((top + elHeight + panelHeight) >= windowHeight) this.panelShowOnTop = true
      else this.panelShowOnTop = false
      this.$nextTick(() => {
        const { $h, $m, $s } = this.$refs
        const h = $h.querySelector('.m-time-picker-item-on')
        const m = $m.querySelector('.m-time-picker-item-on')
        const s = $s.querySelector('.m-time-picker-item-on')
        if (h) $h.scrollTop = h.offsetTop - 100
        if (m) $m.scrollTop = m.offsetTop - 100
        if (s) $s.scrollTop = s.offsetTop - 100
      })
    },
    hidePanel (e) {
      const el = this.$el
      const path = e.path || (e.composedPath && e.composedPath())
      if (el && !path.includes(el)) this.panelShow = false
    },
    onClick (type, value) {
      this.time[type] = ~~value
      this.$emit('change', this.displayValue)
    },
    getTime () {
      this.val = this.value
      if (!this.val) this.time = {}
      const arr = this.val.split(':')
      let h = ~~(arr[0] || '00')
      let m = ~~(arr[1] || '00')
      let s = ~~(arr[2] || '00')
      if (h < 0 || h > 23) h = 0
      if (m < 0 || m > 59) m = 0
      if (m < 0 || m > 59) m = 0
      this.time = { h, m, s }
    }
  }
}
</script>

<style lang="less">
.m-time-picker{
  position: relative;
  &-panel{
    display: flex;
    position: absolute;top: 100%;z-index: 40;
    background: #fff;min-width: 200px;height: 220px;border-radius: @border-radius;
    box-shadow: 0 2px 5px rgba(0,0,0,.2), 0 4px 10px rgba(0,0,0,.1);
    &-ontop{bottom: 100%;top: auto;}
  }
  &-col{flex: 1;overflow-y: auto;border-right: 1px solid #eee;padding: 0 0 10px 0;
    &:last-child{border: none;}
  }
  &-th{text-align: center;position: sticky;top: 0;padding: 10px 0 5px 0;background: #fff;color: #999;}
  &-item{text-align: center;padding: 5px;cursor: pointer;
    &:hover{background: rgba(0,0,0,.1);}
    &-on{background: @primary-color!important;color: #fff;}
  }
  .m-time-panel-enter-active, .m-time-panel-leave-active{opacity: 1;transition: opacity .2s linear;}
  .m-time-panel-enter, .m-time-panel-leave-to{opacity: 0;}
}
</style>
