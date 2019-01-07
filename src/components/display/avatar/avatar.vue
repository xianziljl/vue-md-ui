<template>
  <div
    class="m-avatar"
    :title="alt"
    :style="size ? {
      width: `${size}px`,
      height: `${size}px`
    } : ''"
    :class="{'m-avatar-square': square}">
    <div v-if="!src" class="m-avatar-text" :style="{transform: `scale(${textScale})`}">
      <span :style="{fontSize, lineHeight: fontSize}"><slot></slot></span>
    </div>
    <img v-else :src="src" :alt="alt">
  </div>
</template>

<script>
export default {
  name: 'm-avatar',
  props: {
    size: [String, Number],
    alt: String,
    square: Boolean, // circle, square
    src: String,
    autoColor: Boolean
  },
  data () {
    return {
      textScale: 1
    }
  },
  mounted () {
    this.setTextSize()
  },
  updated () {
    this.setTextSize()
  },
  computed: {
    fontSize () {
      return (this.size || 40) / 2.5 + 'px'
    }
  },
  methods: {
    setTextSize () {
      if (!this.src) {
        const avatarText = this.$el.querySelector('.m-avatar-text span')
        if (!avatarText) return
        const boxWidth = this.$el.clientWidth
        const textWidth = avatarText.clientWidth
        if (textWidth > boxWidth * 0.8) this.textScale = boxWidth * 0.8 / textWidth
      }
    }
  }
}
</script>

<style lang="less">
.m-avatar{
  position: relative;display: inline-flex;width:40px;height: 40px;align-items:center;justify-content: center;
  background: rgba(0,0,0,.08);border-radius: 50%;
  img{width: 100%;height: 100%;border-radius: 50%;}
  &-text{position: absolute;display: inline-block;width: 100%;height: 100%;display:flex;align-items:center;
  justify-content: center;white-space: nowrap;}
  &-square, &-square img{border-radius: 3px;}
}
</style>
