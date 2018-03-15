<template>
  <div class="rechargeDetail">
      <el-row>
			<el-col :span="24" class="test">
				<h1>充值明细</h1>
			</el-col>
		</el-row>
		<el-row>
			<el-table
			:data="tableData"
			stripe
			style="width: 100%">
				<el-table-column
				prop="rechargeDate"
				label="充值日期">
				</el-table-column>
				<el-table-column
				prop="style"
				label="类型">
				</el-table-column>
				<el-table-column
				prop="amountSubmission"
				label="提交金额">
				</el-table-column>
				<el-table-column
				prop="successSubmission"
				label="成功金额">
				</el-table-column>
				<el-table-column
				prop="transactionNumber"
				label="交易编号">
				</el-table-column>
				<el-table-column
				prop="state"
				label="状态">
				</el-table-column>
				<el-table-column
				prop="issuanceDate"
				label="发放日期">
				</el-table-column>
				<el-table-column
				prop="remarks"
				label="备注">
				</el-table-column>
			</el-table>
		</el-row>
		<el-row style="left:50%;position:fixed;bottom:80px;transform:translate(-20%,0)">
      		<paging></paging>
    	</el-row>
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
import Paging from "@/components/public/Paging";
export default {
  components: {
    Paging
  },
  data() {
    return {
      tableData: [
        {
          rechargeDate: "2016-05-02 12:12:12",
          style: "支付宝",
          amountSubmission: "500.00",
          successSubmission: "500.00",
          transactionNumber: "00000000000000000000000000000000",
          state: "成功",
          issuanceDate: "2016-05-02 12:12:12",
          remarks: "这是备注"
        }
      ]
    };
  }
};
</script>

