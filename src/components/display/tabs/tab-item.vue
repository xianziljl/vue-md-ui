<template>
<div v-if="value === tabItems.value" class="m-tab-item">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'm-tab-item',
  props: {
    value: [String, Number]
  },
  inject: {
    tabItems: {
      default: null
    }
  },
  data () {
    return {
      index: 0
    }
  },
  created () {
    if (!this.tabItems) return
    this.tabItems.allItems.push(this.value)
    this.index = this.tabItems.allItems.length - 1
  }
}
</script>
