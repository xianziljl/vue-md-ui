<template>
<div :class="{'m-toast-show': show}" class="m-toast" :style="{bottom: `${bottom}px`}">
  <div class="m-toast-content">
    <div class="m-toast-text">{{content}}</div>
  </div>
  <m-button v-if="action" flat type="primary" class="m-toast-btn" @click="actionClick">{{action}}</m-button>
</div>
</template>

<script>
import MButton from '../../form/button/button'

export default {
  name: 'm-toast',
  components: { MButton },
  data () {
    return {
      show: false,
      bottom: 10,
      height: 0,
      width: 0
    }
  }
}
</script>

<style lang="less">
.m-toast{
  position: fixed;display: flex;vertical-align: middle;z-index: 9999;
  background: #444;padding: 10px 15px;box-shadow: 0 2px 5px rgba(0,0,0,0.2);font-size: 14px;
  border-radius: 5px;color: #fff;align-items: center;overflow: hidden;left: 50%;
  transition: transform .2s, opacity .2s, bottom .2s;transform: translate3d(0, 10px, 0);opacity: 0;
  min-height: 54px;max-width: 450px;min-width: 200px;
  &-content{flex: 1;max-height: 90px;overflow: hidden;}
  &-show{transform: translate3d(0, 0, 0);opacity: 1;}
  .m-toast-btn{margin-left: 10px;color: #4499ff;}
  // &-anim-enter-active, &-anim-leave-active{transform: translateY(0);opacity: 1;}
  // &-anim-enter, &-anim-leave-to{transform: translateY(10px);opacity: 0;}
}
</style>
