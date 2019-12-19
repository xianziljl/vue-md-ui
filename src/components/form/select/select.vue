<template>
<div class="m-select">
  <m-inputer
    v-bind="$attrs"
    v-on="listeners"
    readonly
    ref="inputer"
    :size="size"
    :value="text"
    :suffix-icon="optionShow ? 'arrow_drop_up' : 'arrow_drop_down'">
    <slot slot="prepend" name="prepend"></slot>
    <slot slot="append" name="append"></slot>
  </m-inputer>
  <div v-if="optionShow" class="m-select-mask"></div>
  <transition name="m-select-option">
    <div
      class="m-select-options"
      v-if="optionShow"
      :style="{
        width: `${width}px`,
        left: `${left}px`,
        top: `${top}px`
      }">
      <div class="m-select-options-list">
        <slot></slot>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import MInputer from '../input/inputer'

export default {
  name: 'm-select',
  components: { MInputer },
  inheritAttrs: false,
  props: {
    value: [String, Number],
    size: [Number]
  },
  data () {
    return {
      left: 0,
      top: 0,
      width: this.size,
      optionShow: false,
      text: ''
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    listeners: function () {
      const vm = this
      return Object.assign({}, this.$listeners, {
        focus: function (e) {
          vm.optionShow = true
          vm.$nextTick(vm.showOptions)
          vm.$emit('focus', e)
        },
        blur: function (e) {
          vm.optionShow = false
          vm.$emit('blur', e)
        }
      })
    }
  },
  watch: {
    value (val) {
      this.setValueText()
    }
  },
  provide () {
    return {
      select: this
    }
  },
  mounted () {
    const { value } = this
    if (value === null || value === undefined || value === '' || isNaN(value)) return
    this.setValueText()
  },
  methods: {
    showOptions () {
      const scroller = this.$el.querySelector('.m-select-options')
      const container = this.$el.querySelector('.m-inputer-container')
      const input = this.$el.querySelector('.m-inputer-container input')
      const onItem = this.$el.querySelector('.m-select-option.m-select-option-on') || this.$el.querySelector('.m-select-option')
      const bodyHeight = window.innerHeight

      this.width = this.$el.clientWidth
      let left = container.getBoundingClientRect().left
      let top = input.getBoundingClientRect().top
      this.left = left
      scroller.scrollTop = onItem.offsetTop - scroller.clientHeight * (top / bodyHeight)
      top = top - onItem.offsetTop + scroller.scrollTop
      if (top < 0) top = 0
      if (top + scroller.clientHeight > bodyHeight) top = bodyHeight - scroller.clientHeight
      this.top = top
    },
    setValueText () {
      this.optionShow = true
      this.$nextTick(() => {
        const onItem = this.$children.find(item => item.on)
        if (!onItem) {
          this.optionShow = false
          this.text = ''
          return
        }
        const textElm = onItem.$slots.default[0].elm
        const text = textElm.nodeType === 3 ? textElm.data : textElm.innerText
        this.text = text.replace(/[\s\n]/g, '')
        this.optionShow = false
      })
    },
    clear () {
      this.$emit('change', '')
      this.$refs.inputer.clear()
    },
    ruleCheck () {
      return this.$refs.inputer.ruleCheck(this.value)
    }
  }
}
</script>

<style lang="less">
.m-select{
  display: inline-block;vertical-align: middle;
  &-options{
    position: fixed;z-index: 1000;background: #fff;border-radius: @border-radius;padding: 10px 0;
    min-width: 100px;box-shadow: 0 2px 5px rgba(0,0,0,.2), 0 4px 10px rgba(0,0,0,.1);
    max-width: 80%;overflow-y: auto;max-height: 100%;
  }
  .m-select-option-enter-active, .m-select-option-leave-active{opacity: 1;transition: opacity .2s linear;}
  .m-select-option-enter, .m-select-option-leave-to{opacity: 0;}
  &-mask{position: fixed;left: 0;top: 0;width: 100%;height: 100%;z-index: 999;}
}
</style>
