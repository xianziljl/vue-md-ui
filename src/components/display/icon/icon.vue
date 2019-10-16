<template>
<i
  class="m-icon material-icons"
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
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(./material-icons-outline.woff2) format('woff2');
}
.material-icons{transition: color .2s;user-select: none;font-family: Material Icons;font-style: normal;
font-size: 24px;}
</style>
