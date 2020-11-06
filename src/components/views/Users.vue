<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb
      separator="/"
      style="padding-left: 8px; padding-bottom: 10px; font-size: 15px"
    >
      <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 用户列表 -->
    <el-card class="box-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="等级" label-width="80px">
          <el-select v-model="formInline.grades" placeholder="请选择">
            <el-option
              v-for="item in grades"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{
                item.value
              }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" label-width="80px" >
          <el-input
            v-model="formInline.user"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="80px">
          <el-input
            v-model="formInline.email"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio v-model="formInline.radio" label="1">备选项</el-radio>
          <el-radio v-model="formInline.radio" label="2">备选项</el-radio>
          <el-radio v-model="formInline.radio" label="3">备选项</el-radio>
        </el-form-item>
      </el-form-item>
        <el-form-item label="昵称" label-width="80px" >
          <el-input clearable=""
            v-model="formInline.NiChengName"
            placeholder="请输入昵称"
          ></el-input>
        </el-form-item >
        <el-form-item  style="margin-left:28px;">
        <el-button icon="el-icon-refresh">重置</el-button>
        <el-button type="primary" icon="el-icon-search">查询</el-button>
        <el-button type="success" icon="el-icon-plus">添加</el-button>
        <el-button type="warning"icon="el-icon-download">导出</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格区域 -->
      <el-table
    :data="userList"
    border
    style="width: 100%; height:400px">
    <el-table-column
    type="Index" :Index="IndexMethod"
      prop="id"
      label="序号"
      width="60">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名"
      width="110">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="110">
    </el-table-column>
    <el-table-column
    sortable
      prop="department"
      label="所属部门"
      width="150">
    </el-table-column>
    <el-table-column
    sortable
      prop="birth"
      label="生日"
      width="180">
    </el-table-column>
     <el-table-column
      prop="email"
      label="邮箱"
      width="180">
    </el-table-column>
       <el-table-column
      prop="telephone"
      label="电话"
      width="150">
    </el-table-column>
       <el-table-column
      prop="status"
      label="是否禁用"
      width="100">
    </el-table-column>
     <el-table-column
      label="操作">
      <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
      <el-button type="danger"  size="mini" icon="el-icon-delete"></el-button>
      <el-button type="warning"  size="mini"icon="el-icon-s-tools"></el-button>
    </el-table-column>
  </el-table>
  <el-pagination style="padding-top:15px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40">
    </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      formInline: {
        user: "",
        email: "",
        city: "",
        radio: "1",
        NiChengName: "",
      },
      // 用户列表
      // userList:[],
      //部门集合
      // depList:[],
      currentPage4:'4',
      grades: [
        {
          value: "One",
          label: "一级",
        },
        {
          value: "Two",
          label: "二级",
        },
        {
          value: "Three",
          label: "三级",
        },
        {
          value: "Four",
          label: "四级",
        },
        {
          value: "Five",
          label: "五级",
        },
        {
          value: "Top",
          label: "至尊",
        },
      ],
      userList: [{
          date: '2016-05-02',
          name: '王晓霞',
          telephone: '15834662386'
        }, {
          date: '2016-05-04',
          name: '赵小四',
          telephone: '15834349886'
        }, {
          date: '2016-05-01',
          name: '花小娇',
          telephone: '15963293586'
        }, {
          date: '2016-05-03',
          name: '路小虎',
          telephone: '15834692566'
        }]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
     IndexMethod(Index) {
      index += 1;
      return index;
    },
    },
};
</script>
<style scoped>


</style>