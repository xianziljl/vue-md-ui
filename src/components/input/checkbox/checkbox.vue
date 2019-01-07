<template>
<label
  class="m-checkbox"
  :class="{
    'm-checkbox-checked': isChecked,
    'm-checkbox-disabled': $attrs.disabled !== undefined
  }">
  <input
    type="checkbox"
    v-bind="$attrs"
    :checked="isChecked"
    v-on="listeners">
  <div class="m-checkbox-icon" v-ripple.center></div>
  <span v-if="$slots.default" class="m-checkbox-label">
    <slot></slot>
  </span>
</label>
</template>

<script>
export default {
  name: 'm-checkbox',
  props: {
    checked: Boolean,
    value: [String, Number] // 在 checkbox-group 中使用
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  data () {
    return {
      isChecked: this.checked || false
    }
  },
  watch: {
    checked (val) {
      this.isChecked = val
    }
  },
  // inject: {
  //   checkboxGroupValue: {
  //     default: []
  //   }
  // },
  computed: {
    listeners () {
      const vm = this
      return Object.assign({}, vm.$listeners, {
        change: vm.onChange
      })
    }
  },
  methods: {
    onChange (e) {
      this.isChecked = e.target.checked
      this.$emit('change', e.target.checked)
    }
  }
}
</script>

<style lang="less">
.m-checkbox{
  display: inline-flex;padding: 4px;cursor: pointer;align-items: center;line-height: 1em;
  input{display: none;}
  &-label{margin-left: 8px;}
  &-icon{
    position: relative;display: inline-block;width: 16px;height: 16px;border: 2px solid #888;border-radius: 2px;
    vertical-align: middle;transition: all .3s;
    &:after{
      content: '';display: block;position: absolute;left: 1px;top: 2px;width: 8px;height: 4px;border: 2px solid #fff;
      border-width: 0 0 2px 2px;visibility: hidden;
      transition: all .3s;transform: scale(0.2) rotate(-45deg);
    }
  }
  &-checked{
    .m-checkbox-icon{
      border-color: transparent;background: @primary-color;
      &:after{visibility: visible;transition: transform .2s, background .3s;transform: scale(1) rotate(-45deg);}
    }
    .m-ripple-animation{background: fadeout(@primary-color, 80%);}
  }
  &-disabled &-icon{border-color: #aaa;}
  &-disabled&-checked &-icon{border-color: transparent;background: fadeout(@primary-color, 30%);}
}
</style>
