<template>
<i
  class="material-icons"
  v-on="$listeners"
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
.material-icons{transition: color .2s;user-select: none;}
</style>
