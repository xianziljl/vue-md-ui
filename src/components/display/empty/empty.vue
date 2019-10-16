<template>
<div class="m-empty">
  <div>
    <m-icon class="m-empty-icon" size="50">{{icon || 'insert_drive_file'}}</m-icon>
  </div>
  <div class="m-empty-text">
    <slot v-if="$slots.default"></slot>
    <div v-else>无数据</div>
  </div>
</div>
</template>

<script>
import MIcon from '../icon/icon'

export default {
  name: 'm-empty',
  components: { MIcon },
  props: {
    icon: String
  }
}
</script>

<style lang="less">
.m-empty{
  text-align: center;padding: 20px;
  &-icon{font-size: 50px;color: rgba(0,0,0,0.2);}
  &-text{margin-top: 10px;font-size: 12px;color: #888;}
}
</style>
