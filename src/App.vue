<template>
  <div id="app">
    <div style="display:;">
      <m-button>Normal</m-button>
      <m-button type="primary">Primary</m-button>
      <m-button type="warning">Warning</m-button>
      <m-button type="denger">Denger</m-button>
      <m-button disabled type="primary">Primary</m-button>
      <br>
      <m-button outline>Normal</m-button>
      <m-button outline type="primary">Primary</m-button>
      <m-button outline type="warning">Warning</m-button>
      <m-button outline type="denger">Denger</m-button>
      <m-button disabled outline type="primary">Primary</m-button>
      <br>
      <m-button flat>Normal</m-button>
      <m-button flat type="primary">Primary</m-button>
      <m-button flat type="warning">Warning</m-button>
      <m-button flat type="denger">Denger</m-button>
      <m-button disabled flat type="primary">Primary</m-button>
      <br>
      <m-button round>Normal</m-button>
      <m-button round type="primary">Primary</m-button>
      <m-button round outline type="warning">Warning</m-button>
      <m-button round flat type="denger">Denger</m-button>
      <m-button round disabled outline type="primary">Primary</m-button>
      <br>
      <m-button size="small">Small</m-button>
      <m-button size="small" type="primary" outline>
        <m-icon>delete</m-icon>
        <span>图标</span>
      </m-button>
      <br>
      <m-button>
        <m-icon>delete</m-icon>
        <span>图标</span>
      </m-button>
      <m-button type="primary">图标<m-icon>delete</m-icon></m-button>
      <br>
      <m-button size="large">
        <m-icon>delete</m-icon>
        <span>Icon Large</span>
      </m-button>
      <m-button size="large" type="primary">Large</m-button>
    </div>
    <div style="display:;">
      <!-- <m-input v-model="input" type="number" label="数字输入"></m-input><br>
      <m-input v-model="input" disabled label="户籍所在地"></m-input><br>
      <m-input v-model="input" single-line label="户籍所在地"></m-input><br>
      <m-input v-model="input" prefix="https://" label="链接地址" hint-on-demand hint="请真实填写"></m-input><br>
      <m-input v-model="input" suffix="@gmail.com" label="电子邮箱" hint="拉升阶段了放假啊是亮点附件拉萨大家发拉升阶段了放假啊是亮点附件拉萨大家发"></m-input><br>
      <m-input v-model="input" disabled outline label="户籍所在地"></m-input><br>
      <m-input v-model="input" outline prefix="$" label="金额" maxlength="10"></m-input>
      <m-input v-model="input" outline prefix="$" label="金额" hint="测试" counter="10" clearable></m-input><br>
      <m-input v-model="input" outline prefix-icon="location_on" label="金额" hint="测试" counter="10" clearable></m-input><br>
      <m-input
        v-model="input"
        outline
        hint-on-demand
        :type="showPwd ? 'text' : 'password'"
        :suffix-icon="showPwd ? 'visibility_off' : 'visibility'"
        clearable
        label="密码"
        hint="六位以上字符，包含数字、字母、特殊符号"
        counter
        check-on-input
        :rules="rules"
        @click:suffix-icon="showPwd = !showPwd"
      ></m-input><br> -->
    </div>
    <div>
      <!-- <m-tabs v-model="tab">
        <m-tab value="1">全部歌曲</m-tab>
        <m-tab value="2">
          <m-icon size="18" style="margin-right: 5px;">album</m-icon>
          <span>专辑</span>
        </m-tab>
        <m-tab value="3">
          <m-icon size="20" style="margin-right: 5px;">people</m-icon>
          <span>艺术家</span>
        </m-tab>
        <m-tab value="4">播放列表</m-tab>
        <m-tab value="5">流派</m-tab>
        <m-tab value="6">文件夹</m-tab>
        <m-tab value="7">播放队列</m-tab>
        <m-tab value="8">设置</m-tab>
        <m-tab value="9">帮助</m-tab>
      </m-tabs> -->
    </div>
    <div>
      <!-- <m-avatar title="jobs" src="https://avatar-static.segmentfault.com/926/875/926875938-55a5d4a536394_huge256"></m-avatar>
      <m-avatar square src="https://avatar-static.segmentfault.com/926/875/926875938-55a5d4a536394_huge256"></m-avatar>
      <m-avatar size="80">U</m-avatar>
      <m-avatar size="60" style="background: cornflowerblue;color: #fff;">张</m-avatar> -->
    </div>
    <div>
      <m-checkbox checked></m-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      ruleTest: '',
      showPwd: false,
      tab: '1',
      checkbox: '',
      rules: [
        val => val.length >= 6 || '密码长度最少六位',
        val => val.length <= 10 || '密码长度最大十位'
      ]
    }
  }
}
</script>

<style lang="less">
body{margin: 0;padding: 30px;font-size: 14px;}
.m-button{margin: 5px;}
.m-input{margin: 0 5px;width: 300px;}
.m-avatar{margin: 10px;}
</style>
