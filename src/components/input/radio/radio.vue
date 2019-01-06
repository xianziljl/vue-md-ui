<template>
<div class="m-radio">
  <input
    type="radio"
    v-bind="$attrs"
    v-on="$listeners"
    :checked="checked"
    :disabled="disabled">
</div>
</template>

<script>
export default {
  name: 'm-radio',
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
.m-radio{
  display: inline-block;
}
</style>
