<template>
  <el-container>
    <el-header style=" height:100px">
      <img src="../../assets/img/1.gif" style="width: 200px; height: 100px; margin: 0;">
      <span style="font-size: 50px; color: #58606e; position: relative; top:-20px;">农 易--农 业 线 上 交 易 管 理 系 统</span>
      <div class="line" style="float: right; position: relative; top: 16px;" >
        <el-row class="demo-avatar demo-basic" >
        <el-col :span="12">
        <div class="demo-basic--circle" >
          <div class="block"><el-avatar :size="55" :src="circleUrl" ></el-avatar></div>
        </div>
        </el-col>
        </el-row> 
        <router-link to="/Login">
          <el-link href="E:\VUE\hero\src\components\views\Login.vue" target="_blank" style="position: relative; margin-right:20px;">登录 / 注册</el-link>
        </router-link>
      </div> 
    </el-header>
    <el-container>
      <el-aside width="200px">
      <el-col>
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#58606e"
      text-color="#fff"
      active-text-color="#f2aebc">
      <router-link to="/"> 
        <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">主页</span>
        </el-menu-item>
      </router-link> 
      <router-link to="/Users">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">用户信息</span>
      </el-menu-item>
      </router-link>
      <el-submenu index="3">
        <template slot="title">
        <i class="el-icon-document"></i>
        <span>订单管理</span>
        </template>
        <el-menu-item-group title="收购记录">
          <el-menu-item index="3-1">进货清单</el-menu-item>
          <el-menu-item index="3-2">已购记录</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="卖出记录">
          <el-menu-item index="3-3">我的订单</el-menu-item>
          <router-link to="/homepage"> 
            <el-menu-item index="3-4">现有库存</el-menu-item>
          </router-link> 
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
      </el-menu>
      </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view> 
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'layout',
    data() {
      return {
        isCollapse: false,
        activeIndex: '1',
        activeIndex2: '1',
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      }
      },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
</script>

<style>
  .el-container{
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0;
    bottom: 0;
  }
  .el-header{
    background-color: #acbdd4;
    position:relative;
    height:100px;
    padding: 0;
    z-index: 1000;
  }
  
  .el-aside {
    background-color: #58606e;
    color: #333; 
    /* text-align: center; */
    line-height: 100px;
    margin-top: 100px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }
  a{
    text-decoration: none;
  }
</style>