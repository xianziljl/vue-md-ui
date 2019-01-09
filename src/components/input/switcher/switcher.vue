<template>
<label
  class="m-switcher"
  v-ripple.center="'.m-switcher-thumb'"
  tabindex="0"
  :class="{
    'm-switcher-disabled': disabled,
    'm-switcher-checked': isChecked
  }">
  <input
    type="checkbox"
    v-bind="$attrs"
    v-on="listeners"
    :checked="isChecked"
    :disabled="disabled">
  <div class="m-switcher-icon">
    <div class="m-switcher-thumb"></div>
  </div>
</label>
</template>

<script>
export default {
  name: 'm-switcher',
  props: {
    checked: Boolean,
    disabled: Boolean
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
      this.$emit('change', this.isChecked)
    }
  }
}
</script>

<style lang="less">
.m-switcher{
  @bg-color: rgba(0,0,0,.2);
  position: relative;display: inline-block;vertical-align: middle;background: none;width: 28px;padding: 3px;
  cursor: pointer;vertical-align: middle;outline: none;
  input{display: none;}
  &-icon{
    position: relative;width: 28px;height: 12px;background: @bg-color;border-radius: 10px;
    transition: all .3s;
  }
  &-thumb{
    position: absolute;width: 18px;height: 18px;background: #fff;left: -3px;top: -3px;border-radius: 12px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, .25);transform: translateX(0);transition: all .3s;
  }
  &-disabled{
    cursor: default;
    .m-ripple-container{display: none;}
    .m-switcher-icon{opacity: .5;}
  }
  &-checked{
    .m-switcher-thumb{transform: translateX(16px);background: @primary-color;}
    .m-switcher-icon{background: fadeout(@primary-color, 50%);}
    .m-ripple-animation{background: fadeout(@primary-color, 80%);}
  }
}
</style>
