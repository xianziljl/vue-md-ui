<template>
<div class="m-switch">
  <input
    type="switch"
    v-bind="$attrs"
    v-on="$listeners"
    :checked="checked"
    :disabled="disabled">
</div>
</template>

<script>
export default {
  name: 'm-switch',
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
.m-switch{
  display: inline-block;
}
</style>
