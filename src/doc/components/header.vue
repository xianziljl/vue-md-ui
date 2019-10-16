<template>
<div class="doc-header">
  <m-button icon flat round size="large">menu</m-button>
  <h1>VUE MD UI</h1>
  <!-- <label class="search">
  </label> -->
  <m-button slot="activator" flat>Github</m-button>
  <m-menu>
    <m-menu-item>关于</m-menu-item>
  </m-menu>
</div>
</template>

<script>
export default {
  name: 'doc-header'
}
</script>

<style lang="less">
.doc-header{
  position: fixed;left: 0;top: 0;width: 100%;height: 60px;padding: 0 15px;background: #fff;
  display: flex;align-items: center;border-bottom: 1px solid #eee;z-index: 2;
  h1{margin: 0;font-size: 18px;padding: 0 10px;flex: 1;line-height: 1em;}
  button{margin-left: 10px;}
}
</style>
