<template>
<div class="m-card">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'm-card'
}
</script>

<style lang="less">
.m-card{border: 1px solid rgba(0, 0, 0, 0.12);border-radius: @border-radius;background: #fff;}
</style>
