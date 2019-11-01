<template>
<div class="m-collapse">
  <div class="m-collapse-header" @click="open = !open">
    <slot name="header">
      <div class="m-collapse-default-header">
        <span>{{header || 'HEADER'}}</span>
        <m-icon class="m-collapse-header-arrow" :style="open ? {transform: 'rotate(180deg)'} : ''">arrow_drop_down</m-icon>
      </div>
    </slot>
  </div>
  <m-transition-expand>
    <div v-if="open" class="m-collapse-container">
      <slot>content</slot>
    </div>
  </m-transition-expand>
</div>
</template>

<script>
import MIcon from '../icon/icon'
import MTransitionExpand from '../transition-expand/transition-expand'

export default {
  name: 'm-collapse',
  components: { MIcon, MTransitionExpand },
  props: {
    header: String
  },
  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="less">
.m-collapse{
  &-header{cursor: pointer;}
  &-default-header{display: flex;align-items: center;height: 34px;padding: 0 20px;
    span{flex: 1;}
  }
  &-header-arrow{transition: all .2s;}
}
</style>
