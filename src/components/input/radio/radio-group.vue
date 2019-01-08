<template>
<div class="m-radio-group">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'm-radio-group',
  props: {
    value: [String, Number]
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    return {
      val: this.value
    }
  },
  provide () {
    return {
      radioGroup: this
    }
  }
}
</script>
