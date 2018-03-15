<template>
  <div class="receiptsManagementTable">
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="SerialNumber"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="date"
        label="放单日期">
      </el-table-column>
      <el-table-column
        prop="orderNum"
        label="订单/已收订单量">
      </el-table-column>
       <el-table-column
        prop="UnpaidPayment"
        label="未收货款金额">
      </el-table-column>
       <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="toManageGoods">管理收货</el-button>
        </template>
      </el-table-column>
    </el-table>
    <router-view></router-view>
    <el-row style="left:50%;position:fixed;bottom:80px;transform:translate(-20%,0)">
      <paging></paging>
    </el-row>
  </div>
</template>
 <script>
import Paging from "@/components/public/Paging";
export default {
	components:{
		Paging
    },
	data() {
		return {
		tableData: [
			{
			SerialNumber: "1",
			date: "2012-12-12",
			orderNum: "5/6",
			UnpaidPayment: "100"
			}
		]
		};
	},
	methods: {
		toManageGoods() {
		// this.$route.push('')
		this.$router.push("/index/receiptsManagement/ManageGood");
		}
	}
};
</script>
