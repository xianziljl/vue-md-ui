<template>
  <div id="app">
    <!-- <div style="display:;">
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
      <m-button icon round size="small"><m-icon>delete</m-icon></m-button>
      <m-button icon round><m-icon>delete</m-icon></m-button>
      <m-button icon round size="large"><m-icon>delete</m-icon></m-button>
      <m-button icon round type="primary"><m-icon>delete</m-icon></m-button>
      <m-button icon round flat type="primary"><m-icon>delete</m-icon></m-button>
      <m-button icon round outline type="denger"><m-icon>delete</m-icon></m-button>
      <m-button icon type="primary"><m-icon>delete</m-icon></m-button>
    </div> -->
    <!-- <div style="display:;">
      <m-input v-model="input" type="number" label="数字输入"></m-input><br>
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
        :rules="rules"
        @click:suffix-icon="showPwd = !showPwd"
      ></m-input><br>
    </div> -->
    <!-- <div>
      <m-tabs v-model="tab">
        <m-tab value="1">艺术家</m-tab>
        <m-tab value="2">专辑</m-tab>
        <m-tab value="3">播放列表</m-tab>
      </m-tabs>
      <m-tab-items keep-alive v-model="tab">
        <m-tab-item value="1">艺术家<br>测试</m-tab-item>
        <m-tab-item value="2">专辑</m-tab-item>
        <m-tab-item value="3">播放列表</m-tab-item>
      </m-tab-items>
    </div> -->
    <!-- <div>
      <m-avatar title="jobs" src="https://avatar-static.segmentfault.com/926/875/926875938-55a5d4a536394_huge256"></m-avatar>
      <m-avatar square src="https://avatar-static.segmentfault.com/926/875/926875938-55a5d4a536394_huge256"></m-avatar>
      <m-avatar size="80">U</m-avatar>
      <m-avatar size="60" style="background: cornflowerblue;color: #fff;">张</m-avatar>
    </div>
    <div>
      <m-input v-model="input" outline label="毕业院校" prefix-icon="school" style="margin: 10px 0;"></m-input>
      <br>
      <m-checkbox>同意用户协议</m-checkbox>
      <m-checkbox v-model="checkbox" value="agree">同意用户协议</m-checkbox>
      <m-checkbox v-model="checkbox" disabled>禁用</m-checkbox> -->
    <!-- <div>
      <div>
        <m-checkbox v-model="checkbox">北京</m-checkbox>
        <m-checkbox checked>上海</m-checkbox>
        <m-checkbox disabled>广州</m-checkbox>
        <m-checkbox disabled checked>深圳</m-checkbox>
        <m-button flat type="primary" @click="checkbox=!checkbox">Change Checkbox</m-button>
      </div>
      <m-checkbox-group v-model="checkboxgroup" style="margin-top: 10px;">
        <m-checkbox value="beijing">北京</m-checkbox>
        <m-checkbox value="shanghai">上海</m-checkbox>
        <m-checkbox value="shenzhen">深圳</m-checkbox>
        <m-checkbox value="guangzhou">广州</m-checkbox>
        <span>{{checkboxgroup}}</span>
        <m-button flat type="primary" @click="checkboxgroup=['beijing', 'shenzhen']">Change Checkbox Group</m-button>
      </m-checkbox-group>
      <div style="margin-top: 10px;">
        <m-radio>北京</m-radio>
        <m-radio checked>上海</m-radio>
        <m-radio disabled>广州</m-radio>
        <m-radio disabled checked>深圳</m-radio>
      </div>
      <m-radio-group v-model="radioGroup" style="margin: 10px 0;">
        <m-radio value="beijing">北京</m-radio>
        <m-radio value="shanghai">上海</m-radio>
        <m-radio value="shenzhen">深圳</m-radio>
        <m-radio value="guangzhou">广州</m-radio>
        <span>{{radioGroup}}</span>
        <m-button flat type="primary" @click="radioGroup='guangzhou'">change</m-button>
      </m-radio-group>
    </div> -->
    <!-- <div>
      <m-tag>你好</m-tag>
      <m-tag close>你好</m-tag>
      <m-tag close outline>你好</m-tag>
      <m-tag close>
        <m-avatar src="http://p.qlogo.cn/bizmail/spSKakq33Wove0qqTlhmDIzxSolbBee8KMnCadZgzLjMQvyjzCJuFA/100">Z</m-avatar>
        周杰伦
      </m-tag>
      <m-tag close small>
        <m-avatar src="http://p.qlogo.cn/bizmail/spSKakq33Wove0qqTlhmDIzxSolbBee8KMnCadZgzLjMQvyjzCJuFA/100">Z</m-avatar>
        周杰伦
      </m-tag>
      <m-tag small close style="color: #fff;background: orange;">你好</m-tag>
      <m-tag close small outline>你好</m-tag>
    </div> -->
    <!-- <m-card>dafal</m-card> -->
    <!-- <m-checkbox :disabled="disabled">Checkbox</m-checkbox>
    <m-radio :disabled="disabled">Radio</m-radio>
    <m-switcher :disabled="disabled"></m-switcher>
    <m-button @click="disabled = !disabled" flat type="primary">disabled</m-button> a-->
    <m-menu style="margin-right: 50px;">
      <m-menu-item icon="photo">播放幻灯片</m-menu-item>
      <m-menu-item icon="cloud_download">下载<span style="margin-left: 10px;font-size: 12px;color: #aaa;">Shift + D</span></m-menu-item>
      <m-menu-item @click="onClick" disabled icon="crop_rotate">旋转</m-menu-item>
      <div style="height: 1px;background: #ddd;margin: 10px 0;"></div>
      <m-menu-item @click="onClick" icon="people">添加到影集</m-menu-item>
      <m-menu-item icon="beach_access">归档</m-menu-item>
    </m-menu>
    <m-menu>
      <m-button flat slot="activator">更多</m-button>
      <m-menu-item>播放幻灯片</m-menu-item>
      <m-menu-item>下载<span style="margin-left: 10px;font-size: 12px;color: #aaa;">Shift + D</span></m-menu-item>
      <m-menu-item>旋转</m-menu-item>
      <m-menu-item>添加到影集</m-menu-item>
      <m-menu-item>归档</m-menu-item>
    </m-menu>
    <m-menu style="margin-right: 200px;">
      <m-menu-item icon="people">添加到影集</m-menu-item>
      <m-menu-item icon="beach_access">归档2</m-menu-item>
      <m-menu-item icon="delete" style="color:red;">删除</m-menu-item>
    </m-menu>
    <m-menu>
      <m-button flat slot="activator">更多</m-button>
      <m-menu-item>播放幻灯片sdfasdfasd</m-menu-item>
      <m-menu-item>下载</m-menu-item>
    </m-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      ruleTest: '',
      showPwd: false,
      tab: '2',
      tab1: '1',
      checkbox: true,
      radio: false,
      checkboxgroup: [],
      radioGroup: '',
      switcher: false,
      disabled: false,
      rules: [
        val => val.length >= 6 || '密码长度最少六位',
        val => val.length <= 10 || '密码长度最大十位'
      ]
    }
  },
  methods: {
    onClick () {
      console.log('onclick')
    }
  }
}
</script>

<style lang="less">
body{margin: 0;padding: 30px;font-size: 14px;}
// .m-button{margin: 5px;}
.m-input{margin: 0 5px;width: 300px;}
.m-avatar{margin: 10px;}
.m-checkbox, .m-radio{margin-right: 10px;}
.m-tag{margin: 3px;}
</style>
