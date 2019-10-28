<template>
<div class="m-tree-node">
  <div class="m-tree-node-item" :style="{ paddingLeft }">
    <slot name="item" :item="model" :open="isOpen" :toggle="toggleGroup">
      <div class="m-tree-node-default-slot">
        <m-button icon flat round v-if="isGroup" @click="toggleGroup" >{{isOpen ? 'folder_open' : 'folder'}}</m-button>
        <m-button icon flat round v-else disabled>insert_drive_file</m-button>
        <span class="m-tree-node-name">{{model.name}}</span>
      </div>
    </slot>
  </div>
  <m-transition-expand>
    <div v-if="isGroup && isOpen">
      <m-tree-node
        v-for="node in model[childrenText]"
        v-bind="$attrs"
        :level="level + 1"
        :key="node[idText]"
        :model="node">
        <slot
          slot="item"
          name="item"
          slot-scope="{ item, open, toggle }"
          :item="item"
          :open="open"
          :toggle="toggle"></slot>
      </m-tree-node>
    </div>
  </m-transition-expand>
</div>
</template>

<script>
import MButton from '../../form/button/button'
import MTransitionExpand from '../transition-expand/transition-expand'

export default {
  name: 'm-tree-node',
  components: { MButton, MTransitionExpand },
  props: {
    level: { type: Number, default: 0 },
    model: { type: Object, default: () => ({}) },
    idText: { type: String, default: 'id' },
    childrenText: { type: String, default: 'children' }
  },
  data () {
    return {
      isOpen: false,
      childrenHeight: 0
    }
  },
  computed: {
    isGroup () {
      const { model, childrenText } = this
      // console.log(model)
      return !!(model[childrenText] && model[childrenText].length)
    },
    paddingLeft () {
      return this.level * 15 + 'px'
    }
  },
  mounted () {},
  methods: {
    toggleGroup () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="less">
.m-tree-node{
  &-item{
    &:hover{background: rgba(0,0,0,0.05);}
  }
  &-default-slot{display: flex;align-items: center;}
  &-name{flex: 1;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
  &-children-box{transition: height .2s;overflow: hidden;}
}
</style>
