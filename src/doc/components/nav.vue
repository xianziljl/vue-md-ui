<template>
<div class="doc-nav">
  <!-- <m-collapse> -->
    <!-- <div class="doc-nav-header" slot="header">
      <m-icon style="margin-right: 15px;">view_compact</m-icon>
      <span>组件</span>
      <m-icon>keyboard_arrow_down</m-icon>
    </div> -->
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>account_circle</m-icon>Avatar</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>crop_landscape</m-icon>Button</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>check_box</m-icon>Checkbox</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>arrow_drop_down_circle</m-icon>Collapse</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>fiber_manual_record</m-icon>Icon</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>keyboard</m-icon>Input</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>menu</m-icon>Menu</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>warning</m-icon>Modal</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>autorenew</m-icon>Progress</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>radio_button_checked</m-icon>Radio</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>swap_horiz</m-icon>Switcher</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>tab</m-icon>Table</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>tab</m-icon>Tabs</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>label</m-icon>Tag</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>location_on</m-icon>Tree</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>location_on</m-icon>Button</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>location_on</m-icon>Button</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>location_on</m-icon>Button</router-link>
  <router-link v-ripple to="/" class="doc-nav-item"><m-icon>location_on</m-icon>Button</router-link>
  <!-- </m-collapse> -->
</div>
</template>

<script>
export default {
  name: 'doc-nav'
}
</script>

<style lang="less">
.doc-nav{
  position: fixed;left: 0;top: 0;height: 100%;width: 300px;padding: 80px 0 20px;border-right: 1px solid #eee;
  &-header{display: flex;align-items: center;font-weight: bold;height: 36px;padding: 0 10px 0 32px;
    span{flex: 1;}
    &:hover{background: #f8f8f8;}
  }
  &-item{display: flex;align-items: center;height: 36px;padding: 0 10px 0 35px;position: relative;overflow: hidden;
    &:hover{background: #f8f8f8;}
    .m-icon{margin-right: 20px;}
  }
}
</style>
