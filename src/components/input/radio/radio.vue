<template>
<label class="m-radio"
  v-ripple.center="'.m-radio-icon'"
  :class="{
    'm-radio-checked': isChecked,
    'm-radio-disabled': $attrs.disabled
  }"
>
  <input
    type="radio"
    v-bind="$attrs"
    v-on="listeners"
    :checked="isChecked"
    :disabled="$attrs.disabled">
  <div class="m-radio-icon"></div>
  <span v-if="$slots.default" class="m-radio-label">
    <slot></slot>
  </span>
</label>
</template>

<script>
export default {
  name: 'm-radio',
  props: {
    checked: Boolean,
    value: [Number, String, Boolean]
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  data () {
    return {
      isChecked: this.checked
    }
  },
  inject: {
    radioGroup: {
      default: null
    }
  },
  watch: {
    'radioGroup.value' (val) {
      this.isChecked = val === this.value
    }
  },
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
      const val = e.target.checked
      this.isChecked = val
      this.$emit('change', val)
      if (this.radioGroup) this.radioGroup.$emit('change', this.value)
    }
  }
}
</script>

<style lang="less">
.m-radio{
  @icon-color: rgba(0,0,0,.5);
  display: inline-flex;padding: 4px;cursor: pointer;align-items: center;line-height: 1em;vertical-align: middle;
  input{display: none;}
  &-icon{position: relative;width: 16px;height: 16px;border: 2px solid @icon-color;border-radius: 8px;
    transition: all .3s;
    &:after{
      content: '';position: absolute;display: block;width: 8px;height: 8px;background: @icon-color;
      left: 2px;top: 2px;border-radius: 4px;transform: scale(0);transition: all .2s;
    }
  }
  &-label{margin-left: 8px;}
  &-checked{
    .m-radio-icon{border-color: @primary-color;}
    .m-radio-icon:after{transform: scale(1);background: @primary-color;}
    .m-ripple-animation{background: fadeout(@primary-color, 80%);}
  }
  &-disabled{
    cursor: default;
    .m-radio-icon{opacity: .5;}
    .m-ripple-animation{display: none;}
  }
}
</style>
