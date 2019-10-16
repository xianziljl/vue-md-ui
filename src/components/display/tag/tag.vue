<template>
<div
  class="m-tag"
  :class="{
    'm-tag-close': close,
    'm-tag-small': small,
    'm-tag-outline': outline
  }">
  <slot></slot>
  <i v-if="close" @click="$emit('close')" class="material-icons m-tag-close-btn">cancel</i>
</div>
</template>

<script>
export default {
  name: 'm-tag',
  props: {
    color: String,
    close: Boolean,
    small: Boolean,
    outline: Boolean
  }
}
</script>

<style lang="less">
.m-tag{
  @bg-color: rgba(0,0,0,0.1);position: relative;
  display: inline-flex;height: 30px;align-items: center;line-height: 1em;padding: 0 10px;background: @bg-color;font-size: 14px;
  border-radius: 30px;vertical-align: middle;border: 1px solid transparent;
  &-close{padding-right: 4px;}
  &-close-btn{font-size: 18px;margin-left: 5px;cursor: pointer;opacity: .4;}
  &-close-btn:hover{opacity: 1;}
  &-outline{background: transparent;border-color: @bg-color;}
  .m-avatar{width: 24px;height: 24px;margin: 0 5px 0 -9px;}
  &-small{
    font-size: 12px;height: 24px;padding: 0 7px;
    &.m-tag-close{padding-right: 2px;}
    .m-tag{
      &-close-btn{font-size: 16px;}
    }
    .m-avatar{width: 20px;height: 20px;margin: 0 5px 0 -7px;}
  }
}
</style>
