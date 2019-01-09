<template>
<div class="m-menu">
  <div ref="menuActivator" class="m-menu-activator" @click="menuShow = !menuShow">
    <slot name="activator">
      <m-button icon round flat><m-icon>more_vert</m-icon></m-button>
    </slot>
  </div>
  <div ref="menuItems" v-if="menuShow" class="m-menu-items">
    <div class="m-menu-items-content" :class="[
      `m-menu-items-content-${posX}`,
      `m-menu-items-content-${posY}`
    ]">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'm-menu',
  data () {
    return {
      menuShow: false,
      isTransition: false,
      posX: 'left',
      posY: 'top'
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
        document.addEventListener('click', this.hideMenuItems)
      } else {
        document.removeEventListener('click', this.hideMenuItems)
      }
    }
  },
  methods: {
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
      items.setAttribute('style', `width: 0;height: 0;${this.posX}: ${x}px;${this.posY}: ${y}px;opacity: 0;`)
      items.setAttribute(
        'style',
        `width: ${w}px;height: ${h}px;${this.posX}: ${x}px;${this.posY}: ${y}px;opacity: 1;`
      )
    },
    hideMenuItems (e) {
      const items = this.$refs.menuItems
      if (e && e.path.includes(items)) return
      items.style.opacity = 0
      setTimeout(() => { this.menuShow = false }, 250)
    }
  }
}
</script>

<style lang="less">
.m-menu{
  display: inline-block;
  &-activator{cursor: pointer;}
  &-items{
    width: 0;height: 0;
    position: absolute;display: inline-block;background: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,.2), 0 4px 10px rgba(0,0,0,.1);opacity: 1;
    border-radius: 8px;transition: all 0.25s cubic-bezier(0, 0.24, 0.25, 1);
    overflow: hidden;transform: translate3d(0,0,0);
  }
  &-items-content{position: absolute;padding: 10px 0;}
  &-items-content-left{right: 0;}
  &-items-content-top{bottom: 0;}
  &-items-content-right{left: 0;}
  &-items-content-bottom{top: 0;}
  // &-items-content&-items-transition{}
  // &-items-hide{opacity: 0;}
  // &-items-content{}
}
</style>
