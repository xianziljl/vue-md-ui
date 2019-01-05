<template>
  <div id="app">
    <div style="display:none;">
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
    <div>
      <m-input label="姓名"></m-input><br>
      <m-input box label="姓名"></m-input><br>
      <m-input outline label="户籍所在地"></m-input>
    </div>
    <!-- <m-icon size="20">delete</m-icon> -->
  </div>
</template>

<style lang="less">
body{margin: 0;padding: 30px;font-size: 14px;}
.m-button{margin: 5px;vertical-align: middle;}
.m-input{margin: 5px;width: 300px;}
</style>
