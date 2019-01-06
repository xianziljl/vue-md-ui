<template>
<label
  class="m-checkbox"
  :class="{
    'm-checkbox-disabled': disabled,
    'm-checkbox-checked': checked
  }">
  <input
    type="checkbox"
    v-bind="$attrs"
    v-on="$listeners"
    :checked="checked"
    :disabled="disabled">
  <div class="m-checkbox-icon" v-ripple.center>
  </div>
  <!-- <span>选择</span> -->
</label>
</template>

<script>
export default {
  name: 'm-checkbox',
  props: {
    value: [Number, String, Boolean],
    checked: Boolean,
    disabled: Boolean
  },
  model: {
    prop: 'value',
    event: 'change'
  }
}
</script>

<style lang="less">
.m-checkbox{
  display: inline-flex;
  input{display: none;}
  &-icon{position: relative;display: inline-block;width: 16px;height: 16px;border: 2px solid #888;border-radius: 2px;
  cursor: pointer;vertical-align: middle;}
  &-checked{
    .m-checkbox-icon{border-color: @primary-color;background: @primary-color;}
  }
}
</style>
