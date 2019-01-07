<template>
<div class="m-input"
  :class="[
  size ? `m-input-${size}` : '',
  `m-input-${status}`,
  {
    'm-input-outline': outline,
    'm-input-disabled': disabled,
    'm-input-focus': isFocus
  }]">
  <div class="m-input-container">
    <slot name="prepend"></slot>
    <m-icon
      class="m-input-prefix-icon"
      :class="{'m-input-icon-clickable': $listeners['click:prefix-icon']}"
      v-if="prefixIcon"
      size="20"
      @click="$emit('click:prefix-icon')"
    >{{prefixIcon}}</m-icon>
    <span
      class="m-input-prefix"
      v-if="prefix"
    >{{prefix}}</span>
    <div class="m-input-box">
      <label
        class="m-input-label"
        v-if="!singleLine"
        :class="{'m-input-label-transform': labelTransform}"
        :style="{transform: labelTransform}"
      >{{label}}</label>
      <input
        v-bind="$attrs"
        v-on="listeners"
        :value="val"
        :disabled="disabled"
        :placeholder="singleLine ? label : ''">
    </div>
    <slot name="append"></slot>
    <span
      class="m-input-suffix"
      v-if="suffix"
    >{{suffix}}</span>
    <m-icon
      class="m-input-suffix-icon"
      v-if="suffixIcon"
      size="20"
      :class="{'m-input-icon-clickable': $listeners['click:suffix-icon']}"
      @click="$emit('click:suffix-icon')"
    >{{suffixIcon}}</m-icon>
    <div v-if="!outline" class="m-input-underline"></div>
    <m-icon
      class="m-input-clear-btn"
      v-if="clearable"
      size="20"
      @click="clear"
    >clear</m-icon>
  </div>
  <div class="m-input-detail" v-if="counter || hint">
    <span class="m-input-hint">
      <transition name="m-input-hint-show">
        <span v-if="showHint">{{message || hint}}</span>
      </transition>
    </span>
    <span v-if="counter" class="m-input-count" >{{value.length}}/{{counter}}</span>
  </div>
</div>
</template>

<script>
import MIcon from '@/components/display/icon'

export default {
  name: 'm-input',
  components: { MIcon },
  props: {
    value: [String, Number],
    size: String, // 大小
    label: String, // 标签
    hint: String, // 默认提示文字
    hintOnDemand: Boolean, // 提示文字按需显示（输入框聚焦、规则校验不通过）
    prefix: String, // 插入内部之前文字
    prefixIcon: String, // 插入内部之前图标
    suffix: String, // 插入内部之后文字
    suffixIcon: String, // 插入内部之后图标
    counter: [String, Number], // 字数提示
    disabled: Boolean, // 禁用
    outline: Boolean, // 使用边框而不是下划线
    clearable: Boolean, // 清除按钮
    singleLine: Boolean, // 单行，无 label
    rules: Array, // 校验规则
    checkOnInput: Boolean // 在输入时进行规则校验
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
      val: '',
      isFocus: false,
      labelLeft: 0,
      status: 'normal', // normal, error
      message: ''
    }
  },
  watch: {
    value (val) {
      this.val = val
    }
  },
  computed: {
    labelTransform () {
      if (!(this.isFocus || this.val)) return ''
      const input = this.$el.querySelector('.m-input-box')
      return `translate3d(${-(this.outline ? input.offsetLeft - 10 : input.offsetLeft)}px, -21px, 0) scale(0.88)`
    },
    listeners () {
      const vm = this
      return Object.assign({}, vm.$listeners, {
        input: vm.onInput,
        change: vm.onChange,
        blur: vm.onBlur,
        focus: vm.onFocus
      })
    },
    // 时控制是否显示 hint.
    showHint () {
      const { isFocus, hintOnDemand, status } = this
      if (!hintOnDemand) return true
      return isFocus || status !== 'normal'
    }
  },
  methods: {
    clear () {
      this.val = ''
      this.$emit('input', '')
    },
    onInput (e) {
      this.val = e.target.value
      this.$emit('input', e.target.value)
      if (!this.rules || !this.checkOnInput) return
      this.ruleCheck(e.target.value)
    },
    onChange (e) {
      this.val = e.target.value
      this.$emit('change', e.target.value)
      if (this.rules) this.ruleCheck(e.target.value)
    },
    onFocus (e) {
      this.isFocus = true
      this.$emit('focus', e)
    },
    onBlur (e) {
      this.isFocus = false
      this.$emit('blur', e)
    },
    ruleCheck (value) {
      const { rules } = this
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i]
        if (typeof rule !== 'function') console.error('Rules must be functions.')
        const checkResult = rule(value)
        if (checkResult !== true) {
          this.status = 'error'
          this.message = checkResult
          break
        } else {
          this.status = 'normal'
          this.message = ''
        }
      }
    }
  }
}
</script>

<style lang="less">
.m-input{
  padding: 14px 0 5px 0;vertical-align: top;
  @border-color: rgba(0, 0, 0, .2);
  display: inline-block;position: relative;line-height: 1em;
  &-container{display: flex;position: relative;width: 100%;border: 1px solid @border-color;border-width: 0 0 1px;align-items: center;cursor: text;
  transition: all .2s;}
  label{box-sizing: border-box;}
  input{position: relative;width: 100%;height: 32px;line-height: 32px;font-size: 14px;outline: none;border: none;padding: 0;color: #444;font-size: 14px;
  background: transparent;appearance: none;}
  input[type=number]{-moz-appearance:textfield;}
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {-webkit-appearance: none;margin: 0;}
  &-label{
    position: absolute;font-size: 14px;left: 0;top: 0;height: 20px;line-height: 20px;
    color: rgba(0,0,0,.5);pointer-events: none;top: 6px;transition: all .2s;transform-origin: left;
    &-transform{color: rgba(0, 0, 0, .7);}
  }
  &-underline{position: absolute;width: 100%;height: 2px;bottom: -1px;left: 0;width: 0;background: @primary-color;
  transition: width .2s;}
  &-container:hover{
    .m-input{
      &-clear-btn{color: rgba(0, 0, 0, .6)}
    }
  }
  &-outline{
    padding-top: 10px;
    input{padding: 0 3px;}
    .m-input-container{height: 42px;padding: 0 10px;border: 1px solid @border-color;border-radius: 5px;background: #fff;}
    .m-input-label{height: 20px;top: 6px;padding: 0 3px;border-radius: 4px;}
    .m-input-label-transform{background: #fff;}
  }
  &-disabled{
    .m-input-container{border-style: dashed;}
  }
  &-focus{
    .m-input-label{color: @primary-color;}
    &.m-input{
      .m-input-underline{width: 100%;}
      &-outline{
        .m-input-container{border-color: @primary-color;box-shadow: inset 0 0 0 1px @primary-color;}
      }
    }
  }
  &-clear-btn{cursor: pointer;color: rgba(0, 0, 0, .2);margin-left: 5px;}
  &-prefix, &-suffix{line-height: 1em;color: rgba(0, 0, 0, .5);}
  &-prefix-icon, &-suffix-icon{color: #888;}
  &-prefix-icon{margin-right: 5px;}
  &-suffix-icon{margin-left: 5px;}
  &-icon-clickable{cursor: pointer;}
  &-prefix{margin-right: 5px;}
  &-suffix{margin-left: 5px;}
  &-box{position: relative;flex: 1;}
  &-detail{font-size: 12px;padding: 4px 0;color: #888;display: flex;align-items: center;white-space: nowrap;}
  &-hint{display: block;height: 14px;flex: 1;overflow: hidden;}
  &-hint span{display: block;overflow: hidden;text-overflow: ellipsis;width: 100%;}
  &-count{display: block;height: 14px;margin-left: 5px;}

  &-success{}
  &-warning{}
  &-error, &-error&-focus{
    .m-input{
      &-detail, &-label{color: @denger-color;}
      &-container{border-color: @denger-color;}
    }
  }
  &-error&-focus&-outline &-container{box-shadow: inset 0 0 0 1px @denger-color;}
  &-error &-underline{background: @denger-color;}
  &-hint-show-enter-active, &-hint-show-leave-active {transition: all .3s ease;}
  &-hint-show-enter, &-hint-show-leave-to{opacity: 0;transform: translateY(-14px);}
}
</style>
