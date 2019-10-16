<template>
<div class="doc">
  <doc-header></doc-header>
  <doc-nav></doc-nav>
  <router-view class="doc-content"></router-view>
</div>
</template>

<script>
import DocHeader from './components/header'
import DocNav from './components/nav'

export default {
  name: 'doc',
  components: { DocHeader, DocNav }
}
</script>

<style lang="less">
.doc{
  .doc-content{padding: 100px 60px 60px 360px;}
}
</style>
