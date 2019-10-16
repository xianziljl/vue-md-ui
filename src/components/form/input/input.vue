<template>
<div class="m-input">
  <m-inputer
    v-bind="$attrs"
    v-on="$listeners"
    ref="inputer"></m-inputer>
</div>
</template>

<script>
import MInputer from './inputer'

export default {
  name: 'm-input',
  components: { MInputer },
  inheritAttrs: false,
  methods: {
    clear () {
      this.$refs.inputer.clear()
    },
    ruleCheck () {
      return this.$refs.inputer.ruleCheck()
    }
  }
}
</script>

<style lang="less">
.m-input{
  display: inline-block;vertical-align: middle;
}
</style>
