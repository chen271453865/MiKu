<template>
	<div class="codeNum">
			<el-table
			:data="codeNum"
			style="width: 100%"
			:row-class-name="tableRowClassName">
			<el-table-column
			prop="taskId"
			label="任务编号">
			</el-table-column>
			<el-table-column
			prop="shopUrl"
			:show-overflow-tooltip=true
			label="商品URL">
			</el-table-column>
			<el-table-column
			prop="activeTime"
			label="活动开始时间">
			</el-table-column>
			<el-table-column
			prop="num"
			label="数量">
			</el-table-column>
			<el-table-column
			prop="releaseTime"
			label="发布时间">
			</el-table-column>
			<el-table-column
			prop="taskState"
			label="任务状态">
			</el-table-column>
		</el-table>
	</div>
</template>
<style>
  .el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        codeNum: [{
			taskId: 'LL2017051016410225851',
			shopUrl: 'https://item.jd.com/1241800497.html',
			activeTime: '2012-12-12',
			num:'1',
			releaseTime:'2017-12-30',
			taskState:'执行中',
        }]
      }
    }
  }
</script>

