<template>
  <div class="viewDetails">
    <el-row>
        <el-col :span="24" class="test">
            <h1>发布淘宝任务</h1>
        </el-col>
    </el-row>
	<el-row>
		<small class="lineHeight">订单号如在后台未找到，订单在未支付处。刷客正在支付中订单中。如次日未找到，联系对接运营经理。</small>
	</el-row>
	<el-row :gutter="20">
		<el-col :span="3" class="lineHeight"><span>订单编号：</span><strong class="primaryColoy">00000000001</strong></el-col>
		<el-col :span="3" class="lineHeight"><span>商品金额：</span><strong class="primaryColoy">200.00</strong>(元)</el-col>
		<el-col :span="3" class="lineHeight"><span>手续费：</span><strong class="primaryColoy">10.00</strong>（元）</el-col>
		<el-col :span="3" class="lineHeight"><span>快递费：</span><strong class="primaryColoy">4.00</strong>（元）</el-col>
		<el-col :span="3" class="lineHeight"><span>商品关注费：</span><strong class="primaryColoy">0.50</strong>（元）</el-col>
		<el-col :span="3" class="lineHeight"><span>店铺关注费：</span><strong class="primaryColoy">0.50</strong>（元）</el-col>
		<el-col :span="3" class="lineHeight"><span>岛流费：</span><strong class="primaryColoy">1.00</strong>（元）</el-col>
		<el-col :span="3" class="lineHeight"><span>总计：</span><strong class="primaryColoy">1000.00</strong>（元）</el-col>
	</el-row>
	<el-row class="mgTop">
		<el-col :span="24" class="test">
            <h1>详细数据</h1>
			<view-detail-table></view-detail-table>
        </el-col>
	</el-row>
  </div>
</template>
<style>
.test {
  line-height: 40px;
  height: 40px;
  border-bottom: 2px solid rgb(100, 110, 119);
}
.lineHeight{
	line-height: 40px;
	height: 40px;
	color: #908e8e;
	font-size: 14px;
}
.primaryColoy{
	color: #409EFF;
}
</style>
<script>
	import ViewDetailTable from '@/components/index/taskSchedule/ViewDetailTable'
	export default{
		components:{
			ViewDetailTable
		}
	}
</script>

