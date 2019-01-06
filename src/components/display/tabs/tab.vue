<template>
  <a
    class="m-tab"
    v-ripple
    :class="{'m-tab-on': value === parentValue}"
    @click="onClick">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'm-tab',
  inject: ['setValue', 'getValue'],
  props: {
    value: [String, Number]
  },
  computed: {
    parentValue () {
      const value = this.getValue()
      if (this.$el && value === this.value) this.onClick()
      return value
    }
  },
  mounted () {
    if (this.parentValue === this.value) this.onClick()
  },
  methods: {
    onClick () {
      const left = this.$el.offsetLeft
      const width = this.$el.clientWidth
      this.setValue(this.value, left, width)
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
