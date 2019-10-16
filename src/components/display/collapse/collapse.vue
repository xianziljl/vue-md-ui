<template>
<div class="m-collapse">
  <div class="m-collapse-header" @click="toggle">
    <slot name="header">
      <div class="m-collapse-default-header">
        <span>{{header || 'HEADER'}}</span>
        <m-icon class="m-collapse-header-arrow" :style="open ? {transform: 'rotate(180deg)'} : ''">arrow_drop_down</m-icon>
      </div>
    </slot>
  </div>
  <div class="m-collapse-content" v-if="open" ref="content" style="height: 0px;">
    <div class="m-collapse-container">
      <slot>content</slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'm-collapse',
  props: {
    header: String
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      if (this.isTransition) return
      if (!this.open) {
        this.open = true
        this.$nextTick(() => {
          const content = this.$refs.content
          const height = this.$el.querySelector('.m-collapse-container').clientHeight
          setTimeout(() => { content.setAttribute('style', `height: ${height}px`) }, 10)
          setTimeout(() => { content.setAttribute('style', 'height: auto;') }, 210)
        })
      } else {
        const content = this.$refs.content
        const height = this.$el.querySelector('.m-collapse-container').clientHeight
        content.setAttribute('style', `height: ${height}px`)
        setTimeout(() => { content.setAttribute('style', 'height: 0px') }, 10)
        setTimeout(() => { this.open = false }, 210)
      }
    }
  }
}
</script>

<style lang="less">
.m-collapse{
  &-header{cursor: pointer;}
  &-content{position: relative;transition: all .2s;overflow: hidden;}
  &-default-header{display: flex;align-items: center;height: 34px;padding: 0 20px;
    span{flex: 1;}
  }
  &-header-arrow{transition: all .2s;}
}
</style>
