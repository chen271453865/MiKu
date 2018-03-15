<template>
    <div class="smallTask">
       <el-row>
  <el-col :span="24" class="test">
    <h1>发布淘宝任务</h1>
  </el-col>
</el-row>
        <el-tabs @tab-click="handleClick" v-model="activeName">
          <el-tab-pane v-bind:label="smallTaskTab.text" :key="smallTaskTab.id"  v-bind:name="smallTaskTab.index" v-for="(smallTaskTab,index) in smallTaskTabs"></el-tab-pane>
        </el-tabs>
        <router-view></router-view>
    </div>
</template>
<style>
.test {
  line-height: 40px;
  height: 40px;
  border-bottom: 2px solid rgb(100, 110, 119);
}
</style>
<script>
   export default {
    data() {
      return {
        activeName: '0',
         smallTaskTabs: [
          { text: '发布流量',index:'0'},
          { text: '发布商品关注',index:'1'},
          { text: '发布店铺收藏',index:'2'},
          { text: '手机秒杀店铺提醒',index:'3'},
        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
        console.log(tab);
         switch (tab.index) {
        case "0":
          this.$router.push("/index/small/ReleaseTraffic"); //发布流量
          break;
        case "1":
         this.$router.push("/index/small/ReleaseGoods"); //发布产品关注
          // this.breadcrumbItems  = ['收取任务']
          break;
           case "2":
         this.$router.push("/index/small/ReleaseStoreCollection"); //发布店铺收藏
          // this.breadcrumbItems  = ['收取任务']
          break;
           case "3":
         this.$router.push("/index/small/ReleaseSecondKill"); //发布手机秒杀
          // this.breadcrumbItems  = ['收取任务']
          break;
      }
      }
    }
  };
</script>