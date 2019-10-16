<template>
<div class="m-progress"
  :style="{width: `${size}px`, height: `${size}px`}">
  <svg
    xmlns="http://www.w3.org/2000/svg" width="50" height="50" :viewBox="`0 0 50 50`"
    :class="{
      'm-progress-infinity': percent === undefined,
      'm-progress-inverted': inverted
    }">
    <circle
      v-if="percent !== undefined"
      fill="transparent"
      class="m-progress-circle-bg"
      stroke-width="5"
      cx="25" cy="25" r="20">
    </circle>
    <circle
      fill="transparent"
      class="m-progress-circle-bar"
      :class="[`m-progress-${type}`]"
      stroke-width="5"
      cx="25" cy="25" r="20"
      :style="infinity ? '' : {
        strokeDasharray: `${pathLen * percentNum / 100} ${pathLen}`,
        strokeDashoffset: 0
      }">
    </circle>
  </svg>
</div>
</template>

<script>
export default {
  name: 'm-progress',
  props: {
    value: Number,
    infinity: Boolean,
    percent: Number,
    inverted: Boolean,
    type: {
      type: String,
      default: 'normal'
    },
    size: {
      type: Number,
      default: 30
    }
  },
  computed: {
    percentNum () {
      const { percent } = this
      if (percent < 0) return 0
      if (percent > 100) return 100
      return percent
    },
    pathLen () {
      return 40 * Math.PI
    }
  }
}
</script>

<style lang="less">
@pathLen: 282.7433388230814;
.m-progress{
  display: inline-block;position: relative;overflow: hidden;vertical-align: middle;
  svg{vertical-align: middle;position: absolute;width: 100%;height: 100%;left: 0;top: 0;transform-origin: center;}
  circle{transform: rotate(-90deg);transform-origin: center;transition: all .2s;stroke: currentColor;z-index: 2;}
  & &-infinity{
    animation: m-progress-rotate 1.5s linear infinite;
    circle{stroke-dasharray: 80,200;stroke-dashoffset: 0px;animation: m-progress-infinity 1.5s ease-in-out infinite;transform: none;}
  }
  & &-primary{stroke: @primary-color;}
  & &-warning{stroke: @warning-color;}
  & &-denger{stroke: @denger-color;}
  & &-circle-bg{stroke: rgba(0,0,0,.1);}
  & &-inverted{
    .m-progress-circle-bg{stroke: rgba(255, 255, 255, .1);}
    .m-progress-circle-bar{stroke: #fff;}
  }
}
@keyframes m-progress-infinity {
  0%  {stroke-dasharray:1,200;stroke-dashoffset:0px}
  50% {stroke-dasharray:100,200;stroke-dashoffset:-15px}
  100%{stroke-dasharray:100,200;stroke-dashoffset:-125px}
}
@keyframes m-progress-rotate{
  to{transform:rotate(1turn)}
}
</style>
