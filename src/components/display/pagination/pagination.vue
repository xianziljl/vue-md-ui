<template>
<ul class="m-pagination f-12">
  <li v-ripple v-tooltip="'上一页'" :class="{'disabled': current <= 1}" @click="prev()">
    <m-icon size="20">keyboard_arrow_left</m-icon>
  </li>
  <li
    v-ripple
    v-for="item in arr"
    :key="item"
    :class="{ 'on': item === current }"
    @click="changePage(item)"
    v-text="typeof item === 'string' ? '...' : item"
  ></li>
  <li v-ripple v-tooltip="'下一页'" :class="{'disabled': current >= len}" @click="next()">
    <m-icon size="20">keyboard_arrow_right</m-icon>
  </li>
</ul>
</template>

<script>
export default {
  name: 'm-pagination',
  props: {
    total: { type: Number, default: 1 },
    size: { type: Number, default: 10 },
    current: { type: Number, default: 1 }
  },
  computed: {
    len () { return Math.ceil(this.total / this.size) },
    arr () {
      let result = []
      let len = this.len
      if (len <= 7) {
        for (let i = 0; i < len; i++) result.push(i + 1)
      } else {
        if (this.current < 5) {
          result = [1, 2, 3, 4, 5, 6, '>', len]
        } else if (this.current > len - 4) {
          result = [1, '<', len - 5, len - 4, len - 3, len - 2, len - 1, len]
        } else {
          result = [1, '<', this.current - 2, this.current - 1, this.current, this.current + 1, this.current + 2, '>', this.len]
        }
      }
      return result
    }
  },
  methods: {
    changePage (p) {
      if (p === '<') p = this.current - 5 < 1 ? 2 : this.current - 5
      if (p === '>') p = this.current + 5 > this.len ? this.len - 1 : this.current + 5
      if (p !== this.current) this.$emit('change', p)
    },
    prev () {
      let p = this.current > 1 ? this.current - 1 : 1
      this.$emit('change', p)
    },
    next () {
      let p = this.current < this.len ? this.current + 1 : this.len
      this.$emit('change', p)
    }
  }
}
</script>

<style lang="less">
.m-pagination{display: flex;align-items: center;font-weight: bold;user-select: none;
  li{position: relative;display: inline-flex;width: 30px;height: 30px;cursor: pointer;border-radius: 15px;
    transition: background-color .2s;align-items: center;justify-content: center;line-height: 1em;}
  li:hover{background: rgba(0, 0, 0, .06)}
  li.disabled{opacity: .5;pointer-events: none;}
  li.on{color: @primary-color;background: fadeout(@primary-color, 80%);}
}

</style>
