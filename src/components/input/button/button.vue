<template>
<button
  class="m-button"
  v-ripple.circle
  :class="[
    type ? `m-button-${type}` : '',
    size ? `m-button-${size}` : '',
    {
      'm-button-flat': flat,
      'm-button-round': round,
      'm-button-outline': outline,
      'm-button-icon': icon,
      'm-button-loading': loading
    }
  ]"
  v-bind="$attrs"
  v-on="$listeners">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: 'm-button',
  props: {
    // button 默认属性.
    type: String, // normal, primary, warning, denger; default: normal
    size: String, // normal, small, large; default: normal
    flat: Boolean,
    round: Boolean,
    outline: Boolean,
    icon: Boolean, // 作为 icon button 使用
    loading: Boolean
  }
}
</script>

<style lang="less">
.m-button{
  @normal-bg: rgba(0, 0, 0, .07);
  @dark-hover: rgba(0, 0, 0, .2);
  @light-hover: rgba(255, 255, 255, .1);
  @ripple: m-ripple-animation;
  .shadow(@color){
    box-shadow: 0 2px 6px @color;
  }
  position: relative;display: inline-flex;align-items: center;justify-content: center;color: @text-color;
  height: 34px;line-height: 1em;padding: 0 15px;font-size: @font-size;cursor: pointer;border-radius: 4px;
  outline: none;background: @normal-bg;overflow: hidden;border: none;vertical-align: middle;
  transition: background-color .3s, border-color .3s, box-shadow .3s;white-space: nowrap;
  &[disabled]{opacity: .6;cursor: default;pointer-events: none;}
  &:hover{.shadow(@dark-hover);}
  &-round{border-radius: 100px;}

  &-primary{background: @primary-color;color: #fff;}
  &-warning{background: @warning-color;color: #fff;}
  &-denger{background: @denger-color;color: #fff;}
  &:hover{
    &.m-button{
      &-primary{.shadow(fadeout(@primary-color, 60%));}
      &-warning{.shadow(fadeout(@warning-color, 60%));}
      &-denger{.shadow(fadeout(@denger-color, 60%));}
    }
  }

  &-flat, &-outline{
    background: transparent;
    &:hover{box-shadow: none;background: fadeout(@normal-bg, 2%);}
    &.m-button{
      &-primary{color: @primary-color;}
      &-primary:hover{background: fadeout(@primary-color, 95%);box-shadow: none;}
      &-warning{color: @warning-color;}
      &-warning:hover{background: fadeout(@warning-color, 95%);box-shadow: none;}
      &-denger{color: @denger-color;}
      &-denger:hover{background: fadeout(@denger-color, 95%);box-shadow: none;}
    }
  }
  &-outline{border: 1px solid rgba(0, 0, 0, .1);padding: 0 14px;}
  &-outline{
    &.m-button{
      &-primary:hover{border-color: fadeout(@primary-color, 80%);}
      &-warning:hover{border-color: fadeout(@warning-color, 80%);}
      &-denger:hover{border-color: fadeout(@denger-color, 80%);}
    }
  }
  .material-icons{font-size: 18px;vertical-align: sub;}
  &-large{height: 40px;padding: 0 20px;font-size: 1.1em;
    .material-icons{font-size: 24px;}
  }
  &-small{height: 28px;padding: 0 10px;font-size: 0.8em;
    .material-icons{font-size: 16px;}
  }
  &-primary, &-warning, &-denger{
    .@{ripple}{background: fadein(@light-hover, 10%);}
  }
  &-flat, &-outline{
    &.m-button{
      &-primary .@{ripple}{background: fadeout(@primary-color, 80%);}
      &-warning .@{ripple}{background: fadeout(@warning-color, 80%);}
      &-denger .@{ripple}{background: fadeout(@denger-color, 80%);}
    }
  }
  &-icon{padding: 0;width: 32px;height: 32px;
    .material-icons{font-size: 20px;}
  }
  &-small&-icon{width: 28px;height: 28px;
    .material-icons{font-size: 18px;}
  }
  &-large&-icon{width: 40px;height: 40px;
    .material-icons{font-size: 24px;}
  }
}
</style>
