<template>
<div class="m-progress-bar" :style="{
  height: `${size}px`,
  borderRadius: round ? '100px' : 0
}"
:class="{'m-progress-bar-infinite': infinite}">
  <div
    class="m-progress-bar-thumb"
    :style="{
      width: `${percent}%`,
      borderRadius: round ? '100px' : 0
    }"></div>
</div>
</template>

<script>
export default {
  name: 'm-progress-bar',
  props: {
    color: String,
    size: [String, Number],
    percent: [String, Number],
    round: Boolean,
    infinite: Boolean
  }
}
</script>

<style lang="less">
.m-progress-bar{
  position:relative;background: rgba(0,0,0,0.1);height: 10px;
  &-thumb{position: absolute;left: 0;top: 0;height: 100%;background: currentColor;transition: all .15s;}
  &-infinite{overflow: hidden;
    .m-progress-bar-thumb{width: 60%;animation: m-progress-bar-infinite 1s linear infinite;}
  }
}
@keyframes m-progress-bar-infinite {
  0%  {left: -60%}
  100%{left: 100%}
}
</style>
