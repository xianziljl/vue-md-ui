<template>
<span class="m-menu">
  <span ref="menuActivator" class="m-menu-activator" @click="onClick">
    <slot name="activator">
      <m-button icon round flat><m-icon>more_vert</m-icon></m-button>
    </slot>
  </span>
  <div ref="menuItems" v-if="menuShow" class="m-menu-items">
    <div class="m-menu-items-content" :class="[
      `m-menu-items-content-${posX}`,
      `m-menu-items-content-${posY}`
    ]">
      <slot></slot>
    </div>
  </div>
</span>
</template>

<script>
import MButton from '../../form/button/button'

export default {
  name: 'm-menu',
  components: { MButton },
  data () {
    return {
      menuShow: false,
      isTransition: false,
      posX: 'left',
      posY: 'top',
      appendNode: null
    }
  },
  provide () {
    return {
      menu: this
    }
  },
  watch: {
    menuShow (val) {
      if (val) {
        this.$nextTick(this.showMenuItems)
        setTimeout(() => {
          document.body.addEventListener('mousedown', this.hideMenuItems)
        }, 10)
      } else {
        document.body.removeEventListener('mousedown', this.hideMenuItems)
      }
    }
  },
  beforeDestroy () {
    const items = this.$refs.menuItems
    if (items) {
      document.removeEventListener('mousedown', this.hideMenuItems)
      document.body.removeChild(items)
    }
  },
  methods: {
    onClick () {
      this.menuShow = !this.menuShow
    },
    showMenuItems () {
      const items = this.$refs.menuItems
      const activator = this.$refs.menuActivator
      const boundingClientRect = activator.getBoundingClientRect()
      let x = boundingClientRect.x
      let y = boundingClientRect.y
      this.posX = 'left'
      this.posY = 'top'
      document.body.appendChild(items)
      const content = items.querySelector('.m-menu-items-content')
      const w = content.clientWidth
      const h = content.clientHeight
      const winW = document.documentElement.clientWidth
      const winH = document.documentElement.clientHeight
      if (w + x > winW) {
        this.posX = 'right'
        x = winW - x - boundingClientRect.width - pageXOffset
      } else {
        x += pageXOffset
      }
      if (h + y > winH) {
        this.posY = 'bottom'
        y = winH - y - boundingClientRect.height - pageYOffset
      } else {
        y += pageYOffset
      }
      const { posX, posY } = this
      items.setAttribute('style', `width: 0;height: 0;${posX}: ${x}px;${posY}: ${y}px;opacity: 0;`)
      items.setAttribute('style', `width: ${w}px;height: ${h}px;${posX}: ${x}px;${posY}: ${y}px;opacity: 1;`)
    },
    hideMenuItems (e) {
      const items = this.$refs.menuItems
      if (e) {
        const path = e.path || (e.composedPath && e.composedPath())
        if (path.includes(items)) return
      }
      if (items) items.style.opacity = 0
      setTimeout(() => { this.menuShow = false }, 250)
    }
  }
}
</script>

<style lang="less">
.m-menu{
  display: inline;
  &-items{
    width: 0;height: 0;
    position: fixed;display: inline-block;background: #fff;z-index: 100;
    box-shadow: 0 2px 5px rgba(0,0,0,.2), 0 4px 10px rgba(0,0,0,.1);opacity: 1;
    border-radius: @border-radius;transition: all .3s cubic-bezier(0, 0.24, 0.25, 1);
    overflow: hidden;transform: translate3d(0,0,0);
  }
  &-items-content{position: absolute;padding: 10px 0;}
  &-items-content-left{right: 0;}
  &-items-content-top{top: 0;}
  &-items-content-right{left: 0;}
  &-items-content-bottom{bottom: 0;}
}
</style>
