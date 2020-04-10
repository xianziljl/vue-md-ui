<template>
<form
  class="m-form"
  v-bind="$attrs"
  v-on="listeners">
  <slot></slot>
</form>
</template>

<script>
export default {
  name: 'm-form',
  computed: {
    listeners () {
      const vm = this
      return Object.assign({}, vm.$listeners, {
        submit: vm.submit,
        reset: vm.reset
      })
    }
  },
  methods: {
    getInputers () {
      const inputers = []
      function getInputer (children) {
        children.forEach(child => {
          const { _componentTag } = child.$options
          if (_componentTag === 'm-inputer') inputers.push(child)
          else getInputer(child.$children)
        })
      }
      getInputer(this.$children)
      return inputers
    },
    reset (e) {
      e.preventDefault()
      const inputers = this.getInputers()
      inputers.forEach(inputer => {
        inputer.clear()
      })
    },
    submit (e) {
      e.preventDefault()
      let checkResult = true
      this.$children.forEach(item => {
        if (typeof item.ruleCheck === 'function') {
          if (!item.ruleCheck(item.value)) checkResult = false
        }
      })
      if (!checkResult) return
      this.$emit('submit', e)
    }
  }
}
</script>
