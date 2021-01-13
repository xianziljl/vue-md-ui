<template>
<div class="m-inputer"
  :class="[
  size ? `m-inputer-${size}` : '',
  `m-inputer-${status}`,
  {
    'm-inputer-outline': outline,
    'm-inputer-disabled': disabled,
    'm-inputer-focus': isFocus,
    'm-inputer-humble': humble
  }]">
  <label class="m-inputer-container">
    <slot name="prepend"></slot>
    <m-icon
      class="m-inputer-prefix-icon"
      :class="{'m-inputer-icon-clickable': $listeners['click:prefix-icon']}"
      v-if="prefixIcon"
      size="20"
      @click="$emit('click:prefix-icon')"
    >{{prefixIcon}}</m-icon>
    <span
      class="m-inputer-prefix"
      v-if="prefix"
    >{{prefix}}</span>
    <div class="m-inputer-box">
      <div
        class="m-inputer-label"
        v-if="!singleLine && !humble"
        :class="{'m-inputer-label-transform': labelTransform}"
        :style="{transform: labelTransform}"
      >{{label}}</div>
      <input
        v-bind="$attrs"
        v-on="listeners"
        :value="val"
        :disabled="disabled"
        :placeholder="(singleLine || humble) ? label : ''">
    </div>
    <slot name="append"></slot>
    <span
      class="m-inputer-suffix"
      v-if="suffix"
    >{{suffix}}</span>
    <m-icon
      class="m-inputer-suffix-icon"
      v-if="suffixIcon"
      size="20"
      :class="{'m-inputer-icon-clickable': $listeners['click:suffix-icon']}"
      @click="$emit('click:suffix-icon')"
    >{{suffixIcon}}</m-icon>
    <div v-if="!outline && !humble" class="m-inputer-underline"></div>
    <m-icon
      class="m-inputer-clear-btn"
      v-if="clearable && !disabled"
      size="20"
      @click="clear"
    >clear</m-icon>
  </label>
  <div class="m-inputer-detail" v-if="counter || hint !== undefined">
    <span class="m-inputer-hint">
      <transition name="m-inputer-hint-show">
        <span v-if="showHint">{{message || hint}}</span>
      </transition>
    </span>
    <span v-if="counter" class="m-inputer-count" >{{val.length}}/{{counter}}</span>
  </div>
</div>
</template>

<script>
import MIcon from '../../display/icon'

export default {
  name: 'm-inputer',
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
    checkOnInput: Boolean, // 在输入时进行规则校验
    humble: Boolean
  },
  data () {
    return {
      val: this.value,
      isFocus: false,
      labelLeft: 0,
      status: 'normal', // normal, error
      message: '',
      labelTransform: ''
    }
  },
  watch: {
    value (val) {
      this.val = val
      this.getLabelTransform()
    },
    isFocus (val) {
      this.getLabelTransform()
    }
  },
  computed: {
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
  mounted () {
    this.getLabelTransform()
  },
  methods: {
    getLabelTransform () {
      const { isFocus, val, $el } = this
      if ((!isFocus || !$el) && (val === undefined || val === '' || val === null || (!val && isNaN(val)))) {
        this.labelTransform = ''
        return
      }
      console.log(1)
      const input = this.$el.querySelector('.m-inputer-box')
      const container = this.$el.querySelector('.m-inputer-container')
      this.labelTransform = `translate3d(${-(this.outline ? input.offsetLeft - 10 : input.offsetLeft)}px, -${container.clientHeight / 2}px, 0) scale(0.88)`
    },
    clear () {
      this.$emit('input', '')
      this.$emit('change', '')
      this.val = ''
      this.message = ''
      this.$nextTick(() => {
        this.status = 'normal'
      })
    },
    onInput (e) {
      this.$emit('input', e.target.value)
      if (!this.rules || !this.checkOnInput) return
      this.ruleCheck()
    },
    onChange (e) {
      this.$emit('change', e.target.value)
      if (this.rules) this.ruleCheck()
    },
    onFocus (e) {
      this.isFocus = true
      this.$emit('focus', e)
    },
    onBlur (e) {
      this.isFocus = false
      this.$emit('blur', e)
    },
    ruleCheck (val) {
      const value = val === undefined ? this.value : val
      const { rules } = this
      if (!rules) return true
      var checkResult = true
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i]
        if (typeof rule !== 'function') throw new Error('Rules must be functions.')
        checkResult = rule(value)
        if (checkResult !== true) {
          this.status = 'error'
          this.message = checkResult
          break
        } else {
          this.status = 'normal'
          this.message = ''
        }
      }
      return checkResult === true
    }
  }
}
</script>

<style lang="less">
.m-inputer{
  padding: 14px 0 5px 0;vertical-align: top;
  @border-color: rgba(0, 0, 0, .2);
  position: relative;line-height: 1em;
  &-container{display: flex;position: relative;width: 100%;border: 1px solid @border-color;border-width: 0 0 1px;align-items: center;cursor: text;
  transition: all .2s;}
  label{box-sizing: border-box;}
  input{position: relative;width: 100%;height: 32px;line-height: 32px;font-size: 14px;outline: none;border: none;padding: 0;color: darken(@text-color, 10%);font-size: 14px;
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
    .m-inputer{
      &-clear-btn{color: rgba(0, 0, 0, .6)}
    }
  }
  &-outline{
    padding-top: 5px;
    input{padding: 0 3px;}
    .m-inputer-container{height: 42px;padding: 0 10px;border: 1px solid @border-color;border-radius: 5px;background: #fff;}
    .m-inputer-label{height: 20px;top: 6px;padding: 0 3px;border-radius: 4px;}
    .m-inputer-label-transform{background: #fff;}
  }
  &-disabled{
    .m-inputer-container{border-style: dashed;}
  }
  &-humble{
    padding: 0;
    .m-inputer-container{border: none;height: auto;}
  }
  &-focus{
    .m-inputer-label{color: @primary-color;}
    &.m-inputer{
      .m-inputer-underline{width: 100%;}
      &-outline{
        .m-inputer-container{border-color: @primary-color;box-shadow: inset 0 0 0 1px @primary-color;}
      }
    }
  }
  &-large .m-inputer-container{height: 50px;}
  &-small .m-inputer-container{height: 36px;}
  &-clear-btn{cursor: pointer;color: rgba(0, 0, 0, .2);margin-left: 5px;}
  &-prefix, &-suffix{line-height: 1em;color: rgba(0, 0, 0, .5);}
  &-prefix-icon, &-suffix-icon{color: fadeout(@text-color, 20%);}
  &-prefix-icon{margin-right: 5px;}
  &-suffix-icon{margin-left: 5px;}
  &-icon-clickable{cursor: pointer;}
  &-prefix{margin-right: 5px;}
  &-suffix{margin-left: 5px;}
  &-box{position: relative;flex: 1;}
  &-detail{font-size: 12px;padding-top: 4px;color: fadeout(@text-color, 20%);display: flex;align-items: center;white-space: nowrap;}
  &-hint{display: block;height: 14px;flex: 1;overflow: hidden;}
  &-hint span{display: block;overflow: hidden;text-overflow: ellipsis;width: 100%;}
  &-count{display: block;height: 14px;margin-left: 5px;}

  // &-success{}
  // &-warning{}
  &-error, &-error&-focus{
    .m-inputer{
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
