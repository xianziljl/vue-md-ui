<template>
<div class="m-tab-items">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'm-tab-items',
  props: {
    value: [String, Number]
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    return {
      allItems: []
    }
  },
  computed: {
    index () {
      return this.allItems.indexOf(this.value)
    }
  },
  provide () {
    return {
      tabItems: this
    }
  }
}
</script>
