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
  provide () {
    return {
      checkboxGroupValue: this.value
    }
  }
}
</script>
