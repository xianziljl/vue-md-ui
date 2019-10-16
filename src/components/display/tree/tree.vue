<template>
<div class="m-tree">
  <m-tree-node
    v-bind="$attrs">
    <slot></slot>
  </m-tree-node>
</div>
</template>

<script>
import MTreeNode from './tree-node'

export default {
  name: 'm-tree',
  components: { MTreeNode },
  props: {
    data: { type: Array, default: () => [] },
    rootId: { type: [String, Number], default: '0' },
    idText: { type: String, default: 'id' },
    parentIdText: { type: String, default: 'parentid' },
    childrenText: { type: String, default: 'children' },
    activeId: [String, Number]
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style lang="less">
// .m-tree{
//   //
// }
</style>
