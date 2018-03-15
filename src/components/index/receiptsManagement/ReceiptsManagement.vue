<template>
	<div class="receiptsManagement">
		<el-row>
			<el-col :span="24" class="test">
			<h1>订单收货管理</h1>
			</el-col>
		</el-row>
		<el-row>
			<p class="lineHeight">
				注：订单收货管理会将您当天所放的任务全部汇总于一起，方便您管理收货评价。
			</p>
		</el-row>
		<el-row>
			<p class="lineHeight primaryColoy">数据统计</p>
			<el-col :span="12" class="lineHeight"><span>未收订单数量：</span><strong class="primaryColoy">6</strong></el-col>
			<el-col :span="12" class="lineHeight"><span>未收货货款金额：</span><strong class="primaryColoy">787.00</strong>（元）</el-col>
		</el-row>
		<p class="lineHeight"><span class="primaryColoy">懒人模式：</span>一键提交刷客收货，刷客自由评价。注：提交后，刷客自由发挥评价内容以及收货。如不喜欢，可自行管理。此为懒人模式。</p>
		<el-row style="margin-top:10px;">
			<el-date-picker
			v-model="receiptsManagementTime"
			type="daterange"
			range-separator="至"
			start-placeholder="开始日期"
			end-placeholder="结束日期">
			</el-date-picker>
			<el-button type="primary" style="margin-left:20px;">懒人模式</el-button>
		</el-row>
		<el-row>
			<receipts-management-table></receipts-management-table>
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
import ReceiptsManagementTable from '@/components/index/receiptsManagement/ReceiptsManagementTable'
  export default {
	components:{
		ReceiptsManagementTable,
	},
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        receiptsManagementTime: '',
      };
    }
  };
</script>

