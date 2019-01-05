<template>
<label class="m-input"
  :class="{
    'm-input-box': box,
    'm-input-outline': outline,
    'm-input-focus': isFocus
  }">
  <div class="m-input-container">
    <label>{{label}}</label>
    <input
      ref="input"
      v-bind="$attrs"
      v-on="listeners">
    <div v-if="!outline" class="m-input-underline"></div>
  </div>
</label>
</template>

<script>
export default {
  name: 'm-input',
  props: {
    value: [String, Number],
    label: String,
    size: String,
    box: Boolean,
    outline: Boolean,
    clearable: Boolean,
    singleLine: Boolean
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
      isFocus: false
    }
  },
  computed: {

    listeners () {
      const vm = this
      return Object.assign({}, vm.$listeners, {
        input (e) { vm.$emit('input', e.target.value) },
        change (e) { vm.$emit('change', e.target.value) },
        blur (e) { vm.isFocus = false; vm.$emit('blur', e) },
        focus (e) { vm.isFocus = true; vm.$emit('focus', e) }
      })
    }
  }
}
</script>

<style lang="less">
.m-input{
  @border-color: rgba(0, 0, 0, .2);
  display: inline-flex;position: relative;cursor: text;
  &-container{display: flex;position: relative;width: 100%;border-bottom: 1px solid @border-color;align-items: center;
  transition: all .2s;}
  input{width: 100%;height: 32px;line-height: 32px;font-size: 14px;outline: none;border: none;padding: 0;color: #444;
  background: transparent;}
  label{
    position: absolute;font-size: 14px;left: 0;top: 0;height: 20px;line-height: 20px;
    color: rgba(0,0,0,.5);pointer-events: none;top: 6px;transition: all .2s;transform-origin: left;
  }
  &-underline{position: absolute;width: 100%;height: 2px;bottom: -1px;left: 0;width: 0;background: @primary-color;
  transition: width .2s;}
  &:hover{
    //
  }
  &-box{
    .m-input-container{height: 36px;background: rgba(0, 0, 0, .08);padding: 0 12px;border-radius: 5px 5px 0 0;}
    label{left: 12px;top: 8px;}
  }
  &-outline{
    .m-input-container{height: 42px;padding: 0 12px;border: 1px solid @border-color;border-radius: 5px;}
    label{left: 7px;height: 20px;top: 9px;padding: 0 5px;}
  }
  &-focus{
    label{transform: translateY(-22px) scale(0.9);}
    &.m-input{
      .m-input-underline{width: 100%;}
      &-outline{
        .m-input-container{border-color: @primary-color;box-shadow: inset 0 0 0 1px @primary-color;}
        label{transform: translateY(-20px) scale(0.9);background: #fff;color: @primary-color;}
      }
    }
  }
}
</style>
