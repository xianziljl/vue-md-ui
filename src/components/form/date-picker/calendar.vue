<template>
<div class="m-date-picker-calendar">
  <!--日期选择-->
  <div class="m-datepicker-panel" style="position: static;" :style="{visibility: monthPanelIsShow ? 'hidden' : 'visible'}">
    <div class="m-datepicker-month">
      <m-button flat round icon @click="prevMonth">keyboard_arrow_left</m-button>
      <span class="m-datepicker-btn" @click="startChoiceMonth">{{ year }}年 {{ month+1 }}月</span>
      <m-button flat round icon @click="nextMonth">keyboard_arrow_right</m-button>
    </div>
    <table class="m-datepicker-tb">
      <thead>
      <tr>
        <th v-for="d in langConf.week" :key="d">{{ d }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(m, mIndex) in monthDays" :key="mIndex">
        <td v-for="(d, dIndex) in m" :key="dIndex" @click="choiceDay(d, $event)"
          :class="classDay(d)">
          <span>{{ d }}</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <!--年月选择-->
  <div class="m-datepicker-panel" v-show="monthPanelIsShow">
    <div class="m-datepicker-month">
      <m-button flat round icon @click="prevYear">keyboard_arrow_left</m-button>
      <!-- <a class="m-datepicker-prev" @click="prevYear"><i class="icon">keyboard_arrow_left</i></a> -->
      <span>{{ year }}年</span>
      <!-- <a class="m-datepicker-next" @click="nextYear"><i class="icon">keyboard_arrow_right</i></a> -->
      <m-button flat round icon @click="nextYear">keyboard_arrow_right</m-button>
    </div>
    <table class="m-datepicker-tb2">
      <col width="33%"/>
      <col width="33%"/>
      <col width="33%"/>
      <tbody>
      <tr v-for="(season, rIndex) in monthArr" :key="rIndex">
        <td
          v-for="(m, dIndex) in season"
          :key="dIndex"
          :class="classMonth(m.id)"
          @click="choiceMonth(m.id)">
          <span>{{ m.name }}</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import MButton from '../../form/button/button'

function dateFormat (y, m, d, fm) {
  if (!fm) fm = 'yyyy-mm-dd'
  m = ('0' + (parseInt(m) + 1)).slice(-2)
  d = ('0' + d).slice(-2)
  return fm.replace('yyyy', y)
    .replace('YYYY', y)
    .replace('mm', m)
    .replace('MM', m)
    .replace('DD', d)
    .replace('dd', d)
}
// 比较两个日期大小，返回 -1 0 1
function dateCompare (date1, date2) {
  if (date1.year === date2.year) {
    if (date1.day && date2.day) {
      if (date1.month === date2.month) {
        return date1.day > date2.day ? 1 : (date1.day === date2.day ? 0 : -1)
      } else {
        return date1.month > date2.month ? 1 : -1
      }
    } else {
      return date1.month > date2.month ? 1 : (date1.month === date2.month ? 0 : -1)
    }
  } else {
    return date1.year > date2.year ? 1 : -1
  }
}

export default {
  name: 'm-date-picker-calendar',
  components: { MButton },
  props: {
    value: { type: String, default: '' },
    formater: { type: String, default: 'yyyy-mm-dd' },
    noToday: Boolean, // 不能选今天
    forward: Boolean, // 向前看，只能选今天及以后
    backward: Boolean, // 向后看
    start: String, // 可选范围开始日期
    end: String, // 可选范围结束日期
    conf: { type: Object, default: () => {} }
  },
  data () {
    let { value, conf } = this
    let dateObj
    let year
    let month
    let day
    let langConf = {
      week: ['日', '一', '二', '三', '四', '五', '六'],
      month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }
    if (value) dateObj = new Date(value)
    else dateObj = new Date()
    if (conf) {
      langConf = Object.assign(langConf, conf)
    }
    year = dateObj.getFullYear()
    month = dateObj.getMonth()
    day = dateObj.getDate()
    return {
      langConf,
      dayPanelIsShow: false,
      monthPanelIsShow: false,
      year,
      month,
      day
    }
  },
  mounted () {
    this.choiceDay(this.day)
  },
  computed: {
    //  日期二维数组（3*4），渲染用
    monthArr () {
      let {month} = this.langConf
      let res = []
      for (let i = 0; i <= 3; i++) {
        let temp = []
        for (let j = 1; j <= 3; j++) {
          let id = i * 3 + j - 1
          temp.push({id, name: month[id]})
        }
        res.push(temp)
      }
      return res
    },
    // 当前日期
    curr () {
      let {value, noToday} = this
      let dateObj
      let year = '0000'
      let month = '00'
      let day = '00'
      if (value) {
        dateObj = new Date(value)
      } else if (!noToday) {
        dateObj = new Date()
      } else {
        return {year, month, day}
      }
      year = dateObj.getFullYear()
      month = dateObj.getMonth()
      day = dateObj.getDate()
      return {year, month, day}
    },
    // 返回当前月的天数数组
    monthDays () {
      let {year, month} = this
      let dayNum
      month++
      // 判断一个月有几天
      if (month === 2) {
        if (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)) {
          dayNum = 29
        } else {
          dayNum = 28
        }
      } else {
        if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
          dayNum = 31
        } else {
          dayNum = 30
        }
      }
      // 生成对应星期的日期数组
      let firstDay = new Date(year, month - 1, 1).getDay()
      let dayArr = new Array(6).fill(0).map(function () {
        return new Array(7).fill('')
      })
      let row = 0
      let col = firstDay
      for (let d = 1; d <= dayNum; d++) {
        dayArr[row][col] = d
        if (col < 6) {
          col++
        } else {
          col = 0
          row++
        }
      }

      return dayArr
    },
    today () {
      let dateObj = new Date()
      let year = dateObj.getFullYear()
      let month = dateObj.getMonth()
      let day = dateObj.getDate()
      return {year, month, day}
    }
  },
  methods: {
    // 判断日期是否合法 dateObj格式{year,month,day}
    dateIsValid (dateObj) {
      let {today, forward, backward, noToday} = this
      if (forward && dateCompare(today, dateObj) > 0) {
        return false
      }
      if (backward && dateCompare(today, dateObj) < 0) {
        return false
      }
      if (noToday && dateObj.day && dateCompare(today, dateObj) === 0) {
        return false
      }
      return true
    },
    // 年份+月份选择
    startChoiceMonth () {
      this.dayPanelIsShow = false
      this.monthPanelIsShow = true
    },
    prevYear () {
      let {year, forward, today} = this
      if (forward && today.year >= year) {
        return false
      }
      this.year--
    },
    nextYear () {
      let {year, backward, today} = this
      if (backward && today.year <= year) {
        return false
      }
      this.year++
    },
    choiceMonth (m) {
      let {year} = this
      if (this.dateIsValid({year, month: m})) {
        this.month = m
        this.dayPanelIsShow = true
        this.monthPanelIsShow = false
      }
    },
    // 样式
    classMonth (m) {
      let {month, year, curr} = this
      return {
        'z-on': m === month && curr.year === year,
        'z-existed': true,
        'z-invalid': !this.dateIsValid({year, month: m})
      }
    },
    classDay (d) {
      let {month, year, curr} = this
      return {
        'z-on': curr.day === d && curr.month === month && curr.year === year,
        'z-existed': d !== '',
        'z-invalid': !this.dateIsValid({year, month, day: d})
      }
    },
    prevMonth () {
      let {year, month} = this
      if (this.dateIsValid({year, month: month - 1})) {
        if (month > 1) {
          this.month--
        } else {
          this.year--
          this.month = 11
        }
      }
    },
    nextMonth () {
      let {year, month} = this
      if (this.dateIsValid({year, month: month + 1})) {
        if (month < 11) {
          this.month++
        } else {
          this.year++
          this.month = 0
        }
      }
    },
    choiceDay (d) {
      let {year, month, formater} = this
      if (d && this.dateIsValid({year, month, day: d})) {
        this.day = d
        this.$emit('change', dateFormat(year, month, d, formater))
      }
    }
  }
}
</script>

<style lang="less">
.m-date-picker-calendar {
  display: block;
  max-width: 350px;
  min-width: 250px;
  position: relative;
  margin: 0;
  padding: 0;
  /* min-height: 265px; */
  font-size: 14px;
  color: #666;
  tr{border: none;}
}
.m-datepicker-panel{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}
.m-datepicker-panel .m-datepicker-month {
  display: flex;
  padding-bottom: 4px;
  height: 35px;
  line-height: 35px;
  text-align: center; }
.m-datepicker-panel .m-datepicker-month a {
  display: block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 18px;
  color: #999;}
.m-datepicker-panel .m-datepicker-month a:hover {
    background-color: #F5F6F7; }
.m-datepicker-panel .m-datepicker-month span {
  flex: 1;
  display: block;
  height: 35px;
  line-height: 35px;
  border-radius: 18px;}
.m-datepicker-panel .m-datepicker-month span.m-datepicker-btn:hover {
  background-color: #F5F6F7;
  cursor: pointer; }
.m-datepicker-panel .m-datepicker-tb,
.m-datepicker-panel .m-datepicker-tb2 {
  width: 100%;
  border-collapse: collapse;
  text-align: center; }
.m-datepicker-panel .m-datepicker-tb thead,
.m-datepicker-panel .m-datepicker-tb2 thead {
  height: 35px;
  color: #aaa;
  line-height: 35px;}
.m-datepicker-panel .m-datepicker-tb thead tr,
.m-datepicker-panel .m-datepicker-tb2 thead tr {
  border: none; }
.m-datepicker-panel .m-datepicker-tb thead tr th,
.m-datepicker-panel .m-datepicker-tb2 thead tr th {
  padding: 0;
  text-align: center;
  width: 35px;
  font-size: 12px;
  border: none;
  font-weight: normal; }
/* .m-datepicker-panel .m-datepicker-tb tbody tr,
.m-datepicker-panel .m-datepicker-tb2 tbody tr {} */
.m-datepicker-panel .m-datepicker-tb tbody tr td,
.m-datepicker-panel .m-datepicker-tb2 tbody tr td {
  height: 32px;
  padding: 0;
  text-align: center;}
.m-datepicker-panel .m-datepicker-tb tbody tr td span{
  display: inline-block;
  width: 32px;
  text-align: center;
}
.m-datepicker-panel .m-datepicker-tb tbody tr td.z-existed,
.m-datepicker-panel .m-datepicker-tb2 tbody tr td.z-existed {
  cursor: pointer; padding: 0;}
.m-datepicker-panel .m-datepicker-tb tbody tr td.z-existed span,
.m-datepicker-panel .m-datepicker-tb2 tbody tr td.z-existed span {
  
  height: 32px;
  margin: 0;
  line-height: 32px;
  border-radius: 16px;}
.m-datepicker-panel .m-datepicker-tb tbody tr td.z-existed:hover span,
.m-datepicker-panel .m-datepicker-tb2 tbody tr td.z-existed:hover span {
  background-color: #F5F6F7;
  color: @primary-color; }
.m-datepicker-panel .m-datepicker-tb tbody tr td.z-existed.z-on span,
.m-datepicker-panel .m-datepicker-tb2 tbody tr td.z-existed.z-on span {
  color: #FFF;
  background-color: @primary-color; }
.m-datepicker-panel .m-datepicker-tb tbody tr td.z-existed.z-invalid,
.m-datepicker-panel .m-datepicker-tb2 tbody tr td.z-existed.z-invalid {
  cursor: default; }
.m-datepicker-panel .m-datepicker-tb tbody tr td.z-existed.z-invalid span,
.m-datepicker-panel .m-datepicker-tb2 tbody tr td.z-existed.z-invalid span {
  color: #ccc; }
.m-datepicker-panel .m-datepicker-tb tbody tr td.z-existed.z-invalid:hover,
.m-datepicker-panel .m-datepicker-tb2 tbody tr td.z-existed.z-invalid:hover {
  background-color: transparent; }
/* .m-datepicker-panel .m-datepicker-tb2 tbody tr {} */
.m-datepicker-panel .m-datepicker-tb2 tbody tr td {
  height: 32px;
  /* padding: 4px 10px; */
  font-size: 13px; }
.m-datepicker-panel .m-datepicker-tb2 tbody tr td.z-existed {
  cursor: pointer; }
.m-datepicker-panel .m-datepicker-tb2 tbody tr td.z-existed span {
  display: block;
  height: 32px;
  line-height: 32px; }

.clear-btn {
  position: absolute;
  top: 22px;
  right: 0;
  font-size: 18px;
  color: #aaa;
  cursor: pointer;
  opacity: 0.3;
  transition: opacity .15s;
}

.date-picker:hover .clear-btn {
  opacity: 1;
}
</style>
