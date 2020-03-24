<template>
<div
  class="m-select-option"
  v-ripple
  @mousedown="onSelect"
  :class="{
    'm-select-option-on': on,
    'm-select-option-disabled': disabled
  }">
  <slot name="prefix"></slot>
  <div class="m-select-option-text"><slot></slot></div>
  <slot name="suffix"></slot>
</div>
</template>

<script>
export default {
  name: 'm-select-option',
  props: {
    value: [String, Number],
    disabled: Boolean
  },
  inject: {
    select: {
      default: null
    }
  },
  computed: {
    on () {
      return this.select.value === this.value
    }
  },
  methods: {
    onSelect () {
      if (this.disabled) return
      this.select.$emit('change', this.value)
    }
  }
}
</script>

<style lang="less">
.m-select-option{
  position: relative;
  padding: 10px 15px;line-height: 1em;min-height: 32px;width: 100%;
  &:hover{background: rgba(0,0,0,0.06);}
  &-on{color: @primary-color;background: fadeout(@primary-color, 92%)}
  &-disabled{opacity: 0.6;pointer-events: none;}
  &-text{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
}
</style>
