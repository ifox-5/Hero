<template>
  <div id="home">
    <!-- <router-view></router-view> -->
    <!--搜索框-->
    <el-row style="position: relative; margin-top: 100px">
      <el-col :span="5" class="grid">
        <el-input
          v-model="input"
          placeholder="请输入内容"
          size="mini"
        ></el-input>
      </el-col>
      <el-col :span="1" class="grid">
        <el-button type="success" icon="el-icon-search" size="mini"
          >搜索</el-button
        >
      </el-col>
    </el-row>
    <el-row style="margin-top: 16px; margin-bottom: 10px">
      <!--新增按钮-->
      <el-col :span="1" class="grid" style="margin-right: 36px">
        <el-button
          type="success"
          icon="el-icon-circle-plus-outline"
          size="mini"
          round
          >新增</el-button
        >
      </el-col>
      <!--全删按钮-->
      <el-col :span="1" class="grid">
        <el-button type="danger" icon="el-icon-delete" size="mini" round
          >全删</el-button
        >
      </el-col>
    </el-row>
    <!--表格数据及操作-->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      stripe
      ref="multipleTable"
      tooltip-effect="dark"
    >
      <!--勾选框-->
      <el-table-column type="selection" width="55"> </el-table-column>
      <!--索引-->
      <el-table-column type="index" :index="indexMethod" label="序号">
      </el-table-column>
      <el-table-column prop="type" label="品类" width="160"> </el-table-column>
      <el-table-column prop="name" label="商品名称" width="160">
      </el-table-column>
      <el-table-column prop="address" label="存储仓"> </el-table-column>
      <el-table-column prop="inventory" label="库存" width="80">
      </el-table-column>
      <el-table-column label="编辑" width="100">
        <template>
          <el-button type="primary" icon="el-icon-edit" size="mini"
            >编辑</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="删除" width="100">
        <template>
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!--分页条-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 25, 30, 50]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="200"
      style="position:relative; top:50px"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "homepage",
  data() {
    return {
      //表格数据
      tableData: [
        {
          type: "食品",
          name: "珍珠米",
          address: "",
          inventory: "3000kg",
        },
        {
          type: "纺织",
          name: "蚕丝",
          address: "",
          inventory: "200kg",
        },
        {
          type: "种子",
          name: "芝麻",
          address: "",
          inventory: "500kg",
        },
        {
          type: "植株",
          name: "月季",
          address: "",
          inventory: "600株",
        },
      ],
      //查询输入框数据
      input: "",
    };
  },
  methods: {
    indexMethod(index) {
      index += 1;
      return index;
    },
  },
};
</script>
<style>
#app {
  font-family: Helvetica, sans-serif;
}
#home {
  text-align: center;
  position: relative;
}
.el-table {
  font-size: 16px;
  position: relative;
  line-height: 80px;
}
</style>