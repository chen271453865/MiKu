<template>
  <div class="application">
      <el-row>
			<el-col :span="24" class="test">
				<h1>申请提现</h1>
			</el-col>
		</el-row>
        <p class="lineHeight">
             <span>当前余额：</span><strong class="primaryColoy">12000.00</strong>(元)<small style="margin-left:20px;">本次体现48小时到账</small>
        </p>
        <!-- <el-row class="mgTop" :gutter="40">
            <el-col :span="20" class="lineHeight">
                <span>当前余额：</span><strong class="primaryColoy">12000.00</strong>(元)<small style="margin-left:20px;">本次体现48小时到账</small>
             </el-col>
        </el-row> -->
        <el-row class="mgTop" :gutter="40">
            <el-form ref="form" :model="form" label-width="160px">
                <el-col :span="10">
                    <el-form-item label="提现金额">
                        <el-input v-model="form.amountCash" type="number"></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="10">
                    <el-form-item label="提现账户:">
                        <el-input v-model="form.presentAccount"></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="10">
                    <el-form-item label="户主:">
                        <el-input v-model="form.user"></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="10">
                    <el-form-item label="支付密码">
                        <el-input v-model="form.payPassword"></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="10">
                    <el-form-item label="银行卡或支付宝账号">
                        <el-input v-model="form.card"></el-input>
                    </el-form-item>
                </el-col>
            </el-form>
        </el-row>
        <el-row style="text-align:center;"><el-button type="primary" @click="onSubmit">信息确认无误，申请提现</el-button></el-row>
        <el-row>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="bankCash"
                    label="提现银行/支付宝">
                </el-table-column>
                <el-table-column
                    prop="householder"
                    label="户主">
                </el-table-column>
                <el-table-column
                    prop="cardNumber"
                    label="卡号">
                </el-table-column>
                <el-table-column
                    prop="bankPrice"
                    label="提现金额">
                </el-table-column>
                <el-table-column
                    prop="bankTime"
                    label="提现时间">
                </el-table-column>
                <el-table-column
                    prop="releaseTime"
                    label="发放时间">
                </el-table-column>
                <el-table-column
                    prop="state"
                    label="状态">
                </el-table-column>
            </el-table>
        </el-row>
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
.mgTop{
    margin-top: 10px;
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
import Paging from "@/components/public/Paging";
  export default {
    components: {
        Paging
    },
    data() {
      return {
        form: {
          amountCash: '',
          presentAccount: '',
          user: '',
          payPassword: '',
          card: '',
        },
        // 表格数据
        tableData: [{
            bankCash: '工商银行',
            householder: '陈亮',
            cardNumber: '13435663920',
            bankPrice:'1000',
            bankTime:'2012-12-12',
            releaseTime:'2012-12-12',
            state:'审核中'
          }]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
