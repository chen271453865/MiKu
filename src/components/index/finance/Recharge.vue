<template>
	<div class="recharge">
		<el-row>
			<el-col :span="24" class="test">
			<h1>账户充值</h1>
			</el-col>
		</el-row>
		<el-row>
			<p class="lineHeight"><span>账户余额:</span><strong class="primaryColoy">12000.00</strong>(元)</p>
			<el-col :span="1">
				<div class="wrap">
					<div class="circle1">
						<span>01</span>
					</div>
				</div>
			</el-col>
			<el-col :span="10" class="lineHeight2">
				通过支付宝向账号：13435663920【陈亮】 充值 (使用手机支付宝免交易费，每天限额20万)
			</el-col>
			<el-col :span="6" class="lineHeight2">
				 <el-button type="primary" @click="zhifubao">跳转到支付宝</el-button>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="1">
				<div class="wrap">
					<div class="circle1">
						<span>02</span>
					</div>
				</div>
			</el-col>
			<el-col :span="10">
				<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
					<el-form-item label="支付宝账号" style="margin-bottom:0;margin-top:20px;">
						<el-input v-model="formInline.userNumber" ref="userNumber" placeholder="支付宝账号"></el-input>
					</el-form-item>
					<el-form-item label="订单号" style="margin-bottom:0;margin-top:20px;">
						<el-input v-model="formInline.orderNum" ref="orderNum" type="number"  placeholder="订单号"></el-input>
					</el-form-item>
					<p class="bgSize">
						<img src="../../../assets/imgs/orderNum.png" alt="">
					</p>
				</el-form>
			</el-col>
			<el-col :span="6" class="lineHeight2">
				 <el-button type="primary" @click="onSubmit">提交</el-button>
			</el-col>
		</el-row>
	</div>
</template>
<style>
.wrap {
    position: relative;
    width: 80px;
    height: 80px;
    float: left;
}
.wrap .circle1 {
    position: absolute;
    transform: scale(0.6,0.6) !important;
    border-radius: 50%;
    transform: rotate(0deg);
    transform-origin: 0% 50%;
}
.circle1 {
    width: 100%;
    height: 100%;
    transform: scale(0.6,0.6);
    border: 4px solid #409EFF;
    text-align: center;
    line-height: 80px;
}
.circle1 span {
    display: block;
    font-weight: bold;
    font-size: 24px;
    color: #409EFF;
}
.test {
  line-height: 40px;
  height: 40px;
  border-bottom: 2px solid rgb(100, 110, 119);
}
.lineHeight{
	line-height: 40px;
	height: 40px;
	color: #908e8e;
	font-size: 16px;
}
.lineHeight2{
	line-height: 80px;
	height: 80px;
	color: #908e8e;
	font-size: 16px;
}
.primaryColoy{
	color: #409EFF;
}
.bgSize{
	width: 100%;
	background-size: contain;
	-webkit-background-size:contain;
}
.bgSize img{
	width:100%;
	height: 100%;
	margin-top: 20px;
}
</style>
<script>
	export default{
		data() {
			return {
				formInline: {
				userNumber: '',
				orderNum: ''
				}
			}
    	},
		methods:{
			zhifubao(){
				window.location.href = 'https://www.alipay.com'
			},
			onSubmit() {
				console.log( this.$refs.userNumber.value+"===="+this.$refs.orderNum.value );
			}
		}
	}
</script>

