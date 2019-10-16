<template>
<div
  class="m-select-option"
  v-ripple
  @click="onSelect"
  :class="{
    'm-select-option-on': on,
    'm-select-option-disabled': disabled
  }">
  <slot></slot>
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
      this.select.text = this.$el.innerText
      this.select.$emit('change', this.value)
    }
  }
}
</script>

<style lang="less">
.m-select-option{
  position: relative;
  padding: 0 15px;line-height: 1em;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;min-height: 32px;
  &:hover{background: rgba(0,0,0,0.06);}
  &&-on{color: @primary-color;background: fadeout(@primary-color, 92%)}
  &&-disabled{opacity: 0.6;pointer-events: none;}
}
</style>
