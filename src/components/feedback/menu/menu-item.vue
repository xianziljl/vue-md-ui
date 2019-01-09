<template>
<div
  class="m-menu-item"
  v-ripple
  :tabindex="disabled ? '' : '0'"
  :class="{'m-menu-item-disabled': disabled}"
  @click="onClick">
  <i v-if="icon" class="material-icons m-menu-item-icon">{{icon}}</i>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'm-menu-item',
  props: {
    icon: String,
    disabled: Boolean
  },
  inject: {
    menu: {
      default: null
    }
  },
  methods: {
    onClick (e) {
      if (this.disabled) return
      if (this.menu) this.menu.hideMenuItems()
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">
.m-menu-item{
  @icon-color: rgba(0,0,0,.5);
  position: relative;display: flex;align-items: center;padding: 7px 20px;white-space: nowrap;cursor: pointer;
  line-height: 20px;user-select: none;outline: none;
  &-icon{font-size: 20px;margin-right: 15px;opacity: .75;}
  &:hover, &:focus{background: rgba(0,0,0,.05);}
  &-disabled{cursor: default;opacity: .6;}
  &-disabled:hover, &-disabled:focus{background: initial;}
  &-disabled .m-ripple-container{display: none;}
}
</style>
