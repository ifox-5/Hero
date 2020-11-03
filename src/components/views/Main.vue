<template>
  <el-container class="main_containter">
    <!-- 头部布局 -->
    <el-header>
      <div class="left_box">
        <img src="../../assets/img/22.gif" />
        <span> 电商后台管理系统 </span>
      </div>
      <!-- 用户登录展示的头像 -->
      <div class="right_box">
        <el-dropdown>
          <img src="../../assets/img/1.gif" />
          <!-- 下拉菜单 -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-house">系统首页</el-dropdown-item>
            <el-dropdown-item icon="el-icon-ship">交流讨论</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="isCollapse?'60px':'200px'">
        <!-- 展开收起 折叠效果 -->
        <div class="toggle_box" @click="toggleCollapse"></div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
          :isCollapse="false"
          
          :collapse-transition="false"
          :unique-opened="true"
          :router="true"
        >
          <MenuTree :menuList="this.MenuList"></MenuTree>
        </el-menu>
        <!-- </el-col>
</el-row> -->
      </el-aside>
      <el-main>
        <!-- 路由视图 -->
        <router-view> </router-view>
        <!-- Main -->
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import MenuTree from "../../components/MenuTree";
export default {
  name: "Main",
  data() {
    return {
      isCollapse: false,
      // activePath:'',
      MenuList: [
        {
          id: 1,
          parentId: 0,
          menuName: "系统管理",
          url: "",
          icon: "el-icon-setting",
          orderNum: 1,
          open: 1,
          disabled: false,
          perms: null,
          type: 0,
          children: [
            // {
            //   id: 253,
            //   parentId: 1,
            //   menuName: "欢迎页面",
            //   url: "/welcome",
            //   icon: "el-icon-star-off",
            //   orderNum: 1,
            //   open: 0,
            //   disabled: false,
            //   perms: "welcome:view",
            //   type: 0,
            //   children: [],
            // },
            {
              id: 226,
              parentId: 1,
              menuName: "用户管理",
              url: "/users",
              icon: "el-icon-user",
              orderNum: 2,
              open: 0,
              disabled: false,
              perms: "users",
              type: 0,
              children: [],
            },
            // {
            //   id: 321,
            //   parentId: 1,
            //   menuName: "附件管理",
            //   url: "/attachments",
            //   icon: "el-icon-picture-outline",
            //   orderNum: 2,
            //   open: 1,
            //   disabled: false,
            //   perms: "",
            //   type: 0,
            //   children: [],
            // },
            {
              id: 4,
              parentId: 1,
              menuName: "用户权限",
              url: "/menus",
              icon: "el-icon-help",
              orderNum: 3,
              open: 0,
              disabled: false,
              perms: null,
              type: 0,
              children: [],
            },
            // {
            //   id: 235,
            //   parentId: 1,
            //   menuName: "角色管理",
            //   url: "/roles",
            //   icon: "el-icon-postcard",
            //   orderNum: 3,
            //   open: 0,
            //   disabled: false,
            //   perms: "",
            //   type: 0,
            //   children: [],
            // },
            {
              id: 261,
              parentId: 1,
              menuName: "部门管理",
              url: "/departments",
              icon: "el-icon-s-home",
              orderNum: 3,
              open: 0,
              disabled: false,
              perms: "",
              type: 0,
              children: [],
            },
            {
              id: 319,
              parentId: 1,
              menuName: "公告管理",
              url: "/notices",
              icon: "el-icon-s-flag",
              orderNum: 4,
              open: 0,
              disabled: true,
              perms: "",
              type: 0,
              children: [],
            },
          ],
        },

        {
          id: 312,
          parentId: 0,
          menuName: "业务管理",
          url: null,
          icon: "el-icon-s-goods",
          orderNum: 2,
          open: 0,
          disabled: false,
          perms: null,
          type: 0,
          children: [
            {
              id: 229,
              parentId: 312,
              menuName: "商品管理",
              url: "",
              icon: "el-icon-date",
              orderNum: 1,
              open: 1,
              disabled: false,
              perms: "el-icon-date",
              type: 0,
              children: [
                {
                  id: 230,
                  parentId: 229,
                  menuName: "商品入库",
                  url: "/inStocks",
                  icon: "el-icon-date",
                  orderNum: 1,
                  open: 1,
                  disabled: false,
                  perms: "el-icon-date",
                  type: 0,
                  children: [],
                },
                {
                  id: 267,
                  parentId: 229,
                  menuName: "商品出库",
                  url: "/products",
                  icon: "el-icon-goods",
                  orderNum: 2,
                  open: 0,
                  disabled: false,
                  perms: "",
                  type: 0,
                  children: [],
                },
                // {
                //   id: 268,
                //   parentId: 229,
                //   menuName: "商品库存",
                //   url: "/productCategorys",
                //   icon: "el-icon-star-off",
                //   orderNum: 2,
                //   open: 0,
                //   disabled: false,
                //   perms: "",
                //   type: 0,
                //   children: [],
                // },
                // {
                //   id: 270,
                //   parentId: 229,
                //   menuName: "物资发放",
                //   url: "/outStocks",
                //   icon: "el-icon-goods",
                //   orderNum: 5,
                //   open: 1,
                //   disabled: false,
                //   perms: "",
                //   type: 0,
                //   children: [],
                // },
                
              ],
            },
              {
                  id: 316,
                  parentId: 312,
                  menuName: "商品库存",
                  url: "/stocks",
                  icon: "el-icon-tickets",
                  orderNum: 5,
                  open: 0,
                  disabled: false,
                  perms: "",
                  type: 0,
                  children: [],
                },
          ],
        },

        
            // {
            //   id: 303,
            //   parentId: 0,
            //   menuName: "健康报备",
            //   url: "",
            //   icon: "el-icon-platform-eleme",
            //   orderNum: 3,
            //   open: 0,
            //   disabled: false,
            //   perms: "",
            //   type: 0,
            //   children: [
            //     {
            //       id: 273,
            //       parentId: 303,
            //       menuName: "全国疫情",
            //       url: "/map",
            //       icon: "el-icon-s-opportunity",
            //       orderNum: 1,
            //       open: 1,
            //       disabled: false,
            //       perms: "map:view",
            //       type: 0,
            //       children: [],
            //     },
            //     {
            //       id: 304,
            //       parentId: 303,
            //       menuName: "健康打卡",
            //       url: "/health",
            //       icon: "el-icon-s-cooperation",
            //       orderNum: 1,
            //       open: 0,
            //       disabled: false,
            //       perms: "",
            //       type: 0,
            //       children: [],
            //     },
            //     {
            //       id: 305,
            //       parentId: 303,
            //       menuName: "查看情况",
            //       url: null,
            //       icon: "el-icon-c-scale-to-original",
            //       orderNum: 2,
            //       open: 1,
            //       disabled: false,
            //       perms: null,
            //       type: 0,
            //       children: [],
            //     },
            //     {
            //       id: 272,
            //       parentId: 303,
            //       menuName: "疫情辟谣",
            //       url: "/rumors",
            //       icon: "el-icon-help",
            //       orderNum: 5,
            //       open: 0,
            //       disabled: false,
            //       perms: null,
            //       type: 0,
            //       children: [],
            //     },
            //   ],
            // },
            {
              id: 396,
              parentId: 0,
              menuName: "其他管理",
              url: "",
              icon: "el-icon-s-marketing",
              orderNum: 5,
              open: 0,
              disabled: false,
              perms: "",
              type: 0,
              children: [
                {
                  id: 297,
                  parentId: 295,
                  menuName: "监控管理",
                  url: "",
                  icon: "el-icon-warning",
                  orderNum: 1,
                  open: 0,
                  disabled: false,
                  perms: "",
                  type: 0,
                  children: [
                    {
                      id: 298,
                      parentId: 297,
                      menuName: "个人博客",
                      url: "/druid",
                      icon: "el-icon-view",
                      orderNum: 1,
                      open: 0,
                      disabled: false,
                      perms: null,
                      type: 0,
                      children: [],
                    },
                  ],
                },
                {
                  id: 5,
                  // parentId: 0,
                  menuName: "日志管理",
                  url: "/logs",
                  icon: "el-icon-camera",
                  orderNum: 6,
                  open: 0,
                  disabled: false,
                  perms: null,
                  type: 0,
                  children: [
                    {
                      id: 271,
                      parentId: 5,
                      menuName: "登入日志",
                      url: "/loginLog",
                      icon: "el-icon-date",
                      orderNum: 1,
                      open: 0,
                      disabled: false,
                      perms: "login:log",
                      type: 0,
                      children: [],
                    },
                    {
                      id: 307,
                      parentId: 5,
                      menuName: "操作日志",
                      url: "/logs",
                      icon: "el-icon-edit",
                      orderNum: 1,
                      open: 1,
                      disabled: false,
                      perms: "",
                      type: 0,
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
    };
  },
  components: {
    MenuTree,
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.main_containter {
  position: absolute;
  width: 100%;
  top: 0px;
  bottom: 0px;
}
// 设置头部布局
.el-header {
  background-color: #001529;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  /* line-height: 60px; */
  // 左边logo和标题
  .left_box {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      margin: 0px 0px 10px 15px;
    }
    span {
      margin-left: 15px;
    }
  }
  .right_box {
    .el-dropdown > img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #ffffff;
      margin: 0px, 15px, 0px, 0px;
    }
  }
}
// 侧边栏
.el-aside {
  background-color: #001529;
}
.el-menu {
  border-right: none;
}
// 内容主体
.el-main {
  background-color: #e9eef3;

}

body > .el-container {
  margin-bottom: 40px;
}
/* 下拉菜单的样式 */
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
//  展开、收起样式
.toggle_box {
  background-color: aqua;
  // font-size: 15px;
  // font-weight: bold;
  // line-height: 25px;
  // color: #ffffff;
  // letter-spacing: 0.2em;
  // text-align: center;
  // cursor: pointer;
}
</style>