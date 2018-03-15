<template>
    <div class="taskSearch">
        <el-row :gutter="20" style="background:#ffffff">
            <el-col :span="12">
                 <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="任务编号搜索"  class="pdTop">
                            <el-input v-model="formInline.user" placeholder="任务编号搜索"></el-input>
                        </el-form-item>
                    <el-form-item class="pdTop">
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="12" class="pdTop" style="text-align:right;">
                    <el-button type="primary">发布任务</el-button>
                    <el-button type="primary" @click="refresh" v-loading.fullscreen.lock="fullscreenLoading">刷新任务</el-button>
            </el-col>
        </el-row>
        <div class="list">
            <el-row :gutter="20" style="margin-top:10px;background:#ffffff;">
                <el-popover
                    ref="shoper"
                    placement="bottom"
                    title="掌柜：1343566****"
                    width="200"
                    trigger="hover"
                    transition="fade-in-linear"
                    content="好评：100%">
                </el-popover>
                <el-col :span="24">任务编号：<small class="primaryColor lineHeight">000000000001</small></el-col>
                <el-col :span="2" class="textCenter">
                    <div class="imgContain"><img :src="myurl"></div>
                </el-col>
                <el-col :span="4" class="imgLineHeight">
                    <el-button v-popover:shoper style="border:0">掌柜：<span class="primaryColor">1343566****</span></el-button>
                </el-col>
                <el-col :span="5" class="imgLineHeight">收货时长： <span class="primaryColor">1343566****</span></el-col>
                <el-col :span="5" class="imgLineHeight">任务金额：<span class="primaryColor">98.82（元）</span></el-col>
                <el-col :span="4" class="imgLineHeight">悬赏米币：<span class="primaryColor">98.82（个）</span></el-col>
                <el-col :span="4" class="imgLineHeight" style="text-align:right;">
                    <el-button type="primary">抢任务</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
    
</template>
<script>
import luan from '../../assets/imgs/MiKu.png'
export default {
  data() {
    return {
    myurl: luan ,
    fullscreenLoading: false,
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  methods: {
    refresh(){
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style>
.textCenter{
    text-align: center;
}
.pdTop{
    padding-top: 22px;
}
.primaryColor{
    color:#409EFF;
}
.lineHeight{
    line-height: 30px;
}
.imgLineHeight{
    height: 70px;
    line-height: 70px;
}
.imgContain{
    width: 50px;
    height: 50px;
    background-size: contain;
    padding: 10px;
}
.imgContain img{
    width: 100%;
    height: 100%;
}
</style>
