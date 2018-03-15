<template>
 <el-container>
  <el-header>
      <headers></headers>
  </el-header>
  <el-container style="position:relative">
    <el-aside width="200px">
    <el-row class="tac">
  <el-col :span="24">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1" style="width:200px;">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>淘商大厅</span>
        </template>
        <el-menu-item-group>
          <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect" background-color="rgb(100, 110, 119)"
      text-color="#fff">
                            <el-menu-item index="1-1"><i class="el-icon-message"></i>发布任务</el-menu-item>
                            <el-menu-item index="1-2"><i class="el-icon-menu"></i>发布小任务</el-menu-item>
                            <el-menu-item index="1-3"><i class="el-icon-setting"></i>任务进度查看</el-menu-item>
                            <el-menu-item index="1-4"><i class="el-icon-setting"></i>收货管理页面</el-menu-item>
                        </el-menu>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2" style="width:200px;">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>财务大厅</span>
        </template>
        <el-menu-item-group>
          <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect" background-color="rgb(100, 110, 119)"
      text-color="#fff">
                            <el-menu-item index="2-1"><i class="el-icon-menu"></i>充值</el-menu-item>
                            <el-menu-item index="2-2"><i class="el-icon-setting"></i>充值明细</el-menu-item>
                            <el-menu-item index="2-3"><i class="el-icon-setting"></i>账单明细</el-menu-item>
                            <el-menu-item index="2-4"><i class="el-icon-setting"></i>申请提现</el-menu-item>
                        </el-menu>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3" style="width:200px;">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>账户信息</span>
        </template>
        <el-menu-item-group>
          <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect" background-color="rgb(100, 110, 119)"
      text-color="#fff">
                            <el-menu-item index="3-1"><i class="el-icon-menu"></i>店铺信息管理</el-menu-item>
                            <el-menu-item index="3-2"><i class="el-icon-setting"></i>修改密码</el-menu-item>
                            <el-menu-item index="3-3"><i class="el-icon-setting"></i>修改交易密码</el-menu-item>
                            <el-menu-item index="3-4"><i class="el-icon-setting"></i>平台使用教程</el-menu-item>
                        </el-menu>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
    </el-aside>
    <el-main style="width:100%;height:100%;">
      <router-view></router-view>
    </el-main>
  </el-container>
  <el-footer>
        <footers></footers>
      </el-footer>
</el-container>
</template>
<script>
import Headers from "@/components/public/Headers";
import Footers from "@/components/public/Footers";
export default {
  name: "app",
  components: {
    Headers,
    Footers
  },
  data() {
    return {
      searchCriteria: "",
      breadcrumbItems: ["大厅"]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      switch (key) {
        case "1-1":
          this.$router.push("/index/Hall");
          break;
        case "1-2":
          this.$router.push("/index/small/ReleaseTraffic");
          break;
        case "1-3":
          this.$router.push("/index/taskSchedule/TaskSchedule");
          break;
        case "1-4":
          this.$router.push("/index/receiptsManagement/ReceiptsManagement");
          break;
        case "2-1":
          this.$router.push("/index/finance/Recharge");
          break;
        case "2-2":
          this.$router.push("/index/finance/RechargeDetail");
          break;
        case "2-3":
          this.$router.push("/index/finance/BillDetail");
          break;
        case "2-4":
          this.$router.push("/index/finance/Application");
          break;
        case "3-1":
          this.$router.push("/index/AddNewAddress");
          break;
        case "3-2":
          this.$router.push("/index/accountInformation/ChangePassword");
          break;
        case "3-3":
          this.$router.push("/index/accountInformation/changePaymentPassword");
          break;
      }
    }
  }
};
</script>
 <style>
.el-header,
.el-footer {
  background-color: #303133;
  color: #fff;
  text-align: center;
  line-height: 60px;
  width: 100%;
  position: fixed;
  z-index: 3;
}
.el-footer{
  bottom: 0;
  position: fixed;
}
.el-aside {
  background-color: #606266;
  color: #fff;
  line-height: 200px;
  height: 100%;
  position: fixed;
  top: 60px;
}

.el-main {
  color: #333;
  margin-left: 200px;
  position: relative;
  min-height: 800px;
  padding: 10px;
  top: 60px;
  bottom: 80px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>


