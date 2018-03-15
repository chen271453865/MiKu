<template>
  <div class="releaseStoreCollection">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-row :gutter="20">
        <el-col :span="6"><br>
			<el-form-item label="商品URL" class="mgBottom">
				<el-input v-model="formLabelAlign.shopUrl" placeholder="关注商品URL"></el-input>
			</el-form-item>
        </el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="6">
				<el-form-item label="店铺名称" class="mgBottom">
					<el-input v-model="formLabelAlign.shopName" placeholder="店铺名称"></el-input>
				</el-form-item>
			</el-col>
		</el-row>
        <el-row :gutter="20">
			<el-col :span="6">
				<el-form-item label="数量" class="mgBottom">
					<el-input v-model="formLabelAlign.num" type="number" placeholder="数量"></el-input>
				</el-form-item>
			</el-col>
      	</el-row>
		<el-row :gutter="20">
			<el-col :span="6" style="text-align:center;">
				<el-form-item>
					<el-button type="primary" @click="onSubmit">发布任务</el-button>
				</el-form-item>
			</el-col>
		</el-row>
    </el-form>
<store-collection></store-collection>
  </div>
</template>
<style>
.mgBottom{
	margin-bottom: 20px;
}
</style>
<script>
import StoreCollection from '@/components/index/small/StoreCollection'
export default {
	name: "releaseStoreCollection",
		components: {
		StoreCollection,
		},
	data() {
		return {
		labelPosition: "right",
		formLabelAlign: {
			shopUrl: "",
			shopName: "",
			num: ""
		}
		};
	},
	methods:{
		onSubmit(){
			console.log("sssss");
		}
	}
};
</script>
