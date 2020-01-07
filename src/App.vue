<template>
  <div id="app">
    <m-tree :data="treeData">
      <!-- <div slot="item" slot-scope="{ item, open, toggle }" @click="toggle()">{{open}}/{{item.name}}</div> -->
    </m-tree>
    <m-button @click="transitionExpand = !transitionExpand">transitionExpand</m-button>
    <m-transition-expand>
      <ul v-if="transitionExpand">
        <li v-for="item in 10" :key="item">xxxxxxxxxxxxxxxxxxxxx</li>
      </ul>
    </m-transition-expand>
    <div>

    <m-checkbox readonly checked></m-checkbox>
    <m-radio readonly></m-radio>
    </div>
    <span style="position:relative">
      <span @click="pop=true">nihao</span>
      <m-popover v-model="pop">
        <div style="width: 200px;padding: 30px;">asdfa</div>
      </m-popover>
    </span>

    <div v-if="!disabled">
      <m-button v-tooltip="'hello'" @click="disabled=!disabled">tooltip</m-button>
    </div>
    <m-pagination :total="100" :size="10"></m-pagination>

      <m-radio-group v-model="radioGroup" style="margin: 10px 0;">
        <m-radio value="beijing">北京</m-radio>
        <m-radio value="shanghai">上海</m-radio>
        <m-radio value="shenzhen">深圳</m-radio>
        <m-radio value="guangzhou">广州</m-radio>
        <span>{{radioGroup}}</span>
        <m-button flat type="primary" @click="radioGroup='guangzhou'">change</m-button>
      </m-radio-group>
    <!-- <router-view></router-view> -->
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
      <form autocomplete="off">
        <m-input v-model="input" type="number" label="数字输入"></m-input><br>
        <m-input v-model="input" disabled label="户籍所在地"></m-input><br>
        <m-input v-model="input" single-line label="户籍所在地"></m-input><br>
        <m-input v-model="input" prefix="https://" label="链接地址" hint-on-demand hint="请真实填写"></m-input><br>
        <m-input v-model="input" suffix="@gmail.com" label="电子邮箱" hint="拉升阶段了放假啊是亮点附件拉萨大家发拉升阶段了放假啊是亮点附件拉萨大家发"></m-input><br>
        <m-input v-model="input" disabled outline label="户籍所在地"></m-input><br>
        <m-input v-model="input" outline prefix="$" label="金额" maxlength="10"></m-input>
        <m-input v-model="input" outline prefix="$" label="金额" hint="测试" counter="10" clearable></m-input><br>
        <m-input v-model="input" outline prefix-icon="my_location" label="金额" hint="测试" counter="10" clearable></m-input><br>
        <m-input
          v-model="input"
          autocomplete="new-password"
          outline
          hint-on-demand
          :type="showPwd ? 'text' : 'password'"
          :suffix-icon="showPwd ? 'visibility_off' : 'visibility'"
          clearable
          label="密码"
          hint="六位以上字符，包含数字、字母、特殊符号"
          counter="10"
          :rules="rules"
          @click:suffix-icon="showPwd = !showPwd"
        ></m-input><br>
      </form>
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
    </div>
    <div>
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
      <m-checkbox v-model="checkbox" disabled>禁用</m-checkbox>
    </div>
    <div>
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
    </div>
    <div>
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
    </div>
    <m-checkbox :disabled="disabled">Checkbox</m-checkbox>
    <m-radio :disabled="disabled">Radio</m-radio>
    <m-switcher :disabled="disabled"></m-switcher>
    <m-button @click="disabled = !disabled" flat type="primary">disabled</m-button> -->
    <!-- <m-menu>
      <m-button slot="activator" icon round flat>
        <m-icon>edit</m-icon>
      </m-button>
      <m-menu-item @click="onClick" icon="photo">播放幻灯片</m-menu-item>
      <m-menu-item @click="onClick" icon="cloud_download">下载<span style="margin-left: 10px;font-size: 12px;color: #aaa;">Shift + D</span></m-menu-item>
      <m-menu-item @click="onClick" disabled icon="crop_rotate">旋转</m-menu-item>
      <m-divider height="16"></m-divider>
      <m-menu-item @click="onClick" icon="people">添加到影集</m-menu-item>
      <m-menu-item icon="beach_access">归档</m-menu-item>
    </m-menu>
    <m-switcher v-model="loading" style="float:right"></m-switcher>
    <div style="height: 3000px;"></div> -->
    <!-- <m-button outline :loading="loading" type="primary" @click="modalShow=!modalShow">Show Modal</m-button>
    <m-modal
      v-if="modalShow"
      title="Use Google's location service?"
      max-width="260px"
      mask-click
      :confirm-loading="modalConfirmLoading"
      confirm-type="primary"
      confirm-text="AGREE"
      cancel-text="DISAGREE"
      @cancel="modalShow=false"
      @confirm="onModalConfirm">Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    </m-modal>
    {{select}}

    <m-tree></m-tree>-->
  <div>
    <span style="display:inline-block;width: 500px;"></span>
    <m-select outline v-model="select" single-line label="选择框" @change="onChange" size="small">
      <m-select-option :value="-1">
        <m-icon size="18" slot="prefix" style="margin-right: 10px;">favorite</m-icon>
        这是一段很长的文本，这是一段很长的文本
        <span slot="suffix">asdfas</span>
      </m-select-option>
      <m-select-option v-for="(item) in nameArr" :value="item.key" :key="item.key">{{item.name}}</m-select-option>
    </m-select>
  </div>
  <m-input humble></m-input>
  <m-button :loading="loading" @click="loading=!loading">Loading</m-button>
  </div>
</template>

<script>
import treeData from './tree-data.json'

export default {
  data () {
    return {
      treeData,
      transitionExpand: false,
      input: '',
      ruleTest: '',
      showPwd: false,
      tab: '2',
      tab1: '1',
      checkbox: true,
      radio: false,
      checkboxgroup: [],
      radioGroup: 'beijing',
      switcher: false,
      select: 'industry',
      disabled: false,
      nameArr: [
        { key: 'industry', name: '行业' },
        { key: 'expansion', name: '新建/扩容' },
        { key: 'province', name: '省份' }
      ],
      nameMap: {
        industry: '行业',
        expansion: '新建/扩容',
        province: '省份',
        product: '产品线'
      },
      rules: [
        val => val.length >= 6 || '密码长度最少六位',
        val => val.length <= 10 || '密码长度最大十位'
      ],
      modalShow: false,
      modalConfirmLoading: false,
      loading: false,
      pop: false
    }
  },
  methods: {
    onClick () {
      console.log('onclick')
    },
    onModalConfirm () {
      this.modalConfirmLoading = true
      setTimeout(() => {
        this.modalShow = this.modalConfirmLoading = false
      }, 2000)
    },
    onChange (v) {
      console.log('change', v)
    }
  }
}
</script>

<style lang="less">
// body{margin: 0;font-size: 14px;}
// .m-button{margin: 5px;}
div{box-sizing: border-box;}
.m-input{margin: 0 5px;width: 300px;}
.m-avatar{margin: 10px;}
.m-checkbox, .m-radio{margin-right: 10px;}
.m-tag{margin: 3px;}
</style>
