<template>
<div class="m-checkbox-group">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'm-checkbox-group',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  provide () {
    return {
      checkboxGroupValue: this.value
    }
  },
  methods: {
    getValue (name) {
      return this.value
    },
    setValue (name, value) {}
  }
}
</script>

<style lang="less">
.m-checkbox-group{
  //
}
</style>
