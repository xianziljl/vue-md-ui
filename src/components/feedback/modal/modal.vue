<template>
<transition name="m-modal">
  <div v-if="show" class="m-modal" :tabindex="maskClick && !isLoading ? 1 : ''" @keydown.esc="$emit('cancel')">
    <div class="m-modal-bg" @click="onMaskClick"></div>
    <div class="m-modal-container" :style="maxWidth ? { maxWidth } : ''">
      <h2 class="m-modal-title" v-if="title">{{title}}</h2>
      <div class="m-modal-title" v-else>
        <slot name="title">{{title}}</slot>
      </div>
      <div class="m-modal-content" :class="{'m-modal-no-title': !title}">
        <slot>{{content}}</slot>
      </div>
      <div class="m-modal-btns">
        <slot name="footer">
          <m-button flat :disabled="isLoading" :loading="cancelLoading"  :type="cancelType" @click="$emit('cancel')">{{cancelText || '取消'}}</m-button>
          <m-button flat :disabled="isLoading" :loading="confirmLoading" :type="confirmType || 'primary'" @click="$emit('confirm')">{{confirmText || '确定'}}</m-button>
        </slot>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import MButton from '../../form/button/button'

export default {
  name: 'm-modal',
  components: { MButton },
  props: {
    maxWidth: [Number, String],
    title: String,
    content: String,
    type: String,
    maskClick: Boolean,

    confirmText: String,
    confirmType: String,
    confirmLoading: Boolean,

    cancelText: String,
    cancelType: String,
    cancelLoading: Boolean
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    isLoading () {
      return this.confirmLoading || this.cancelLoading
    }
  },
  created () {
    this.show = false
  },
  mounted () {
    this.show = true
    const bodyStyle = getComputedStyle(document.body)
    const bodyPaddingRight = parseFloat(bodyStyle.paddingRight)
    const bodyPaddingBottom = parseFloat(bodyStyle.paddingLeft)
    const scrollBarWidth = window.innerWidth - document.body.clientWidth
    const scrollBarHeight = window.innerHeight - document.body.clientHeight
    const { style } = document.body
    style.paddingRight = bodyPaddingRight + scrollBarWidth + 'px'
    style.paddingBottom = bodyPaddingBottom + scrollBarHeight + 'px'
    style.overflow = 'hidden'
    this.$nextTick(() => {
      this.$el.focus()
    })
  },
  destroyed () {
    setTimeout(() => {
      const { style } = document.body
      style.paddingRight = ''
      style.paddingBottom = ''
      style.overflow = ''
    }, 300)
  },
  methods: {
    onMaskClick () {
      if (!this.maskClick || this.confirmLoading) return
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="less">
.m-modal{
  display: flex;align-items: center;justify-content: center;transition: all .3s;
  position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 9998;
  &-bg{position: absolute;width: 100%;height: 100%;left: 0;top: 0;background: rgba(0, 0, 0, 0.5);transition: background .3s;}
  &-container{display: flex;flex-direction: column;min-width: 200px;min-height: 100px;max-width: 90%;max-height: 90%;background: #fff;z-index: 10;
    border-radius: 10px;box-shadow: 0 10px 20px rgba(0, 0, 0, .2);opacity: 1;transition: transform .3s, opacity .15s;}
  &-title{margin: 0;padding: 24px 24px 12px;font-weight: normal;font-size: 20px;}
  &-content{padding: 12px 24px;flex: 1;overflow-y: auto;}
  &-no-title{padding-top: 24px;}
  &-btns{text-align: right;padding: 12px;
    button{margin-left: 5px;}
  }
  &-enter, &-leave-to{
    .m-modal-bg{background: rgba(0, 0, 0, 0);}
    .m-modal-container{transform: scale(0.9);opacity: 0;}
  }
}
</style>
