<template>
<div class="m-tree">
  <m-tree-node
    v-bind="$attrs"
    v-for="node in model"
    :model="node"
    :key="node[idText]">
    <slot
      slot="item"
      name="item"
      slot-scope="{ item, open, toggle }"
      :item="item"
      :open="open"
      :toggle="toggle"></slot>
  </m-tree-node>
</div>
</template>

<script>
import SWorker from 'simple-web-worker'
import MTreeNode from './tree-node'

export default {
  name: 'm-tree',
  components: { MTreeNode },
  props: {
    data: { type: Array, default: () => [] },
    rootId: { type: [String, Number], default: '0' },
    idText: { type: String, default: 'id' },
    parentidText: { type: String, default: 'parentid' },
    childrenText: { type: String, default: 'children' }
  },
  data () {
    return {
      model: []
    }
  },
  created () {
    this.analytical()
  },
  watch: {
    data () {
      this.analytical()
    }
  },
  methods: {
    analytical () {
      let { data, idText, parentidText, childrenText, rootId } = this
      SWorker.run((data, rootId, idText, parentidText, childrenText) => {
        function getNode (id) {
          let node = []
          for (let i = 0; i < data.length; i++) {
            if (data[i][parentidText] === id) {
              data[i][childrenText] = getNode(data[i][idText]) || null
              node.push(data[i])
            }
          }
          return node
        }
        return getNode(rootId)
      }, [data, rootId, idText, parentidText, childrenText]).then(res => {
        this.model = res
      })
    }
  }
}
</script>

<style lang="less">
// .m-tree{
//   color: @text-color;
// }
</style>
