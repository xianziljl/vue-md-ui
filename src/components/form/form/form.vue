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
        submit: vm.submit
      })
    }
  },
  methods: {
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
