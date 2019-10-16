<template>
<transition name="slide-y">
  <div v-if="show" class="m-popover" :class="['m-popover-'+pos]" :style="style">
    <div class="m-popover-arrow bg-f" :style="arrowStyle"></div>
    <div class="m-popover-ctn relative bg-f scroll-y" @click="onElClick">
      <slot></slot>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'm-popover',
  props: {
    show: Boolean,
    pos: { type: String, default: 'bottom' }, // left, top, right, bottom
    align: { type: String, default: 'center' } // center, start, end
  },
  model: {
    prop: 'show',
    event: 'close'
  },
  data () {
    return {
      style: '',
      arrowStyle: ''
    }
  },
  mounted () {
    this.style = this.getStyle()
    this.arrowStyle = this.getArrowStyle()
    document.addEventListener('click', this.close, true)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('click', this.close, true)
    })
  },
  methods: {
    getStyle () {
      let pel = this.$el ? this.$el.parentElement : null
      if (!pel) return ''
      if (this.pos === 'left' || this.pos === 'right') {
        switch (this.align) {
          case 'center':
            return `top: ${pel.clientHeight / 2 - this.$el.clientHeight / 2}px;`
          case 'start':
            return 'top: 0;'
          case 'end':
            return 'bottom: 0;'
        }
      } else if (this.pos === 'top' || this.pos === 'bottom') {
        switch (this.align) {
          case 'center':
            return `left: ${(pel.clientWidth - this.$el.clientWidth) / 2}px;`
          case 'start':
            return 'left: 0;'
          case 'end':
            return 'right: 0;'
        }
      }
    },
    getArrowStyle () {
      let pel = this.$el ? this.$el.parentElement : null
      if (!pel) return ''
      if (this.pos === 'left' || this.pos === 'right') {
        switch (this.align) {
          case 'center':
            return `top: ${this.$el.clientHeight / 2 - 6}px;`
          case 'start':
            return `top: ${pel.clientHeight / 2 - 6}px;`
          case 'end':
            return `bottom: ${pel.clientHeight / 2 - 6}px;`
        }
      } else if (this.pos === 'top' || this.pos === 'bottom') {
        switch (this.align) {
          case 'center':
            return `left: ${this.$el.clientWidth / 2 - 6}px;`
          case 'start':
            return `left: ${pel.clientWidth / 2 - 6}px;`
          case 'end':
            return `right: ${pel.clientWidth / 2 - 6}px;`
        }
      }
    },
    onElClick (e) {
      e.stopPropagation()
    },
    close (e) {
      const path = e.path || (e.composedPath && e.composedPath())
      if (path.includes(this.$el)) return
      this.$emit('close')
    }
  }
}

</script>

<style>
.m-popover{position: absolute;z-index: 100;}
.m-popover-left{right: 100%;padding-right: 10px;}
.m-popover-right{left: 100%;padding-left: 10px;}
.m-popover-top{bottom: 100%;padding-bottom: 10px;}
.m-popover-bottom{top: 100%;padding-top: 10px;}

.m-popover-arrow{position: absolute;width: 12px;height: 12px;border: 1px solid rgba(0, 0, 0, .08);border-width: 1px 0 0 1px;border-radius: 2px 0 0 0;z-index: 2;}
.m-popover-left .m-popover-arrow{right: 4px;transform: rotate(135deg);}
.m-popover-right .m-popover-arrow{left: 4px;transform: rotate(-45deg);}
.m-popover-top .m-popover-arrow{bottom: 4px;transform: rotate(225deg);}
.m-popover-bottom .m-popover-arrow{top: 4px;transform: rotate(45deg);}

.m-popover-ctn{padding: 0;height: 100%;text-align: left;
  border-radius: 10px;box-shadow: 0 0 2px 1px rgba(0,0,0,.06), 0 5px 15px rgba(0, 0, 0, .15);pointer-events: auto;}
</style>
