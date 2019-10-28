<script>
// http://ovo7.cn/passages/VUE/%E5%9C%A8%20Vue.js%20%E4%B8%AD%E8%BF%87%E6%B8%A1%E5%88%B0%20auto%20%E9%AB%98%E5%BA%A6/
/* eslint-disable no-unused-expressions */
export default {
  name: 'm-transition-expand',
  functional: true,
  render (createElement, context) {
    const data = {
      props: {
        name: 'expand'
      },
      on: {
        afterEnter (element) {
          element.style.height = 'auto'
        },
        enter (element) {
          const width = getComputedStyle(element).width

          element.style.width = width
          element.style.position = 'absolute'
          element.style.visibility = 'hidden'
          element.style.height = 'auto'

          const height = getComputedStyle(element).height

          element.style.width = null
          element.style.position = null
          element.style.visibility = null
          element.style.height = 0

          // 强制重绘保证动画被正确地触发
          getComputedStyle(element).height

          setTimeout(() => {
            element.style.height = height
          })
        },
        leave (element) {
          const height = getComputedStyle(element).height

          element.style.height = height

          // 强制重绘保证动画被正确地触发
          getComputedStyle(element).height

          setTimeout(() => {
            element.style.height = 0
          })
        }
      }
    }
    return createElement('transition', data, context.children)
  }
}
/* eslint-enable no-unused-expressions */
</script>

<style lang="less">
.expand-enter-active,
.expand-leave-active {
  transition-property: opacity, height;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
  opacity: 0;
}
</style>
