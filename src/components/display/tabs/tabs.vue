<template>
  <div class="m-tabs">
    <div
      class="m-tabs-header"
      :class="{
        'm-tabs-header-center': center,
        'm-tabs-header-full': full
      }">
      <div class="m-tabs-header-container">
        <slot></slot>
        <div
          class="m-tabs-slider"
          :style="{left: `${sliderLeft}px`, width: `${sliderWidth}px`}"></div>
      </div>
    </div>
    <div class="m-tabs-items">
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-tabs',
  props: {
    value: [String, Number],
    center: Boolean,
    full: Boolean
  },
  data () {
    return {
      sliderLeft: 0,
      sliderWidth: 0
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  provide () {
    return {
      setValue: this.setValue,
      getValue: this.getValue
    }
  },
  methods: {
    setValue (value, left, width) {
      this.sliderLeft = left
      this.sliderWidth = width
      this.$emit('change', value)
    },
    getValue () {
      return this.value
    }
  }
}
</script>

<style lang="less">
.m-tabs{
  &-header{position: relative;height: 45px;border-bottom: 1px solid rgba(0, 0, 0, .15);}
  &-header-center{text-align: center;}
  &-header-full{
    .m-tabs-header-container{width: 100%;}
    .m-tab{flex: 1}
  }
  &-header-container{position: relative;display: inline-flex;height: 100%;}
  &-slider{position: absolute;bottom: -1px;height: 3px;width: 80px;background: @primary-color;
  border-radius: 4px 4px 0 0;transition: all .2s;}
}
</style>
