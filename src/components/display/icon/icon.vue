<template>
<i
  class="m-icon"
  :style="size ? {fontSize: `${size}px`} : ''">
  <slot></slot>
</i>
</template>

<script>
export default {
  name: 'm-icon',
  props: {
    size: [Number, String] // default: 24
  }
}
</script>

<style lang="less">
.m-icon{
  //
}
</style>
