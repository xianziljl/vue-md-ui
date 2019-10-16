import tree from './tree.vue'

tree.install = function (Vue) {
  Vue.component(tree.name, tree)
}

export default tree
