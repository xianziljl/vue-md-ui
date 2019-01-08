<template>
  <a
    class="m-tab"
    v-ripple
    :class="{'m-tab-on': tabs ? tabs.value === value : false}"
    @click="onClick">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'm-tab',
  props: {
    value: [String, Number]
  },
  watch: {
    'tabs.value' (val) {
      if (this.value === val) this.tabs.setSlider(this.$el.offsetLeft, this.$el.clientWidth)
    }
  },
  inject: {
    tabs: {
      default: null
    }
  },
  mounted () {
    if (this.tabs && this.value === this.tabs.value) {
      this.tabs.setSlider(this.$el.offsetLeft, this.$el.clientWidth)
    }
  },
  methods: {
    onClick () {
      if (this.tabs) {
        this.tabs.$emit('change', this.value)
      }
    }
  }
}
</script>

<style lang="less">
.m-tab{
  position: relative;height: 100%;display: inline-flex;align-items: center;padding: 0 12px;font-size: 14px;line-height: 1em;
  cursor: pointer;color: @text-color;transition: color .2s;user-select: none;white-space: nowrap;justify-content: center;
  .m-ripple-animation{background: fadeout(@primary-color, 90%);}
  &-on{color: @primary-color;}
  &:hover{color: @primary-color;}
}
</style>
