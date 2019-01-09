<template>
<div
  class="m-divider"
  :style="{
    paddingLeft: `${insert}px`,
    height: `${height}px`
  }"
></div>
</template>

<script>
export default {
  name: 'm-divider',
  props: {
    height: [Number, String],
    insert: [Number, String]
  }
}
</script>

<style lang="less">
.m-divider{
  &:after{position: relative;content: '';display: block;height: 1px;background: rgba(0, 0, 0, .1);margin: auto 0;top: 50%;}
}
</style>
