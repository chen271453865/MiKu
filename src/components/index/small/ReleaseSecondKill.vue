<template>
  <div class="secondKills">
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
				<el-form-item label="活动开始时间" class="mgBottom">
          
<template slot-scope="scope">
           <el-date-picker
      v-model="value1"
      style="width:326px"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
    </template>

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
    <second-kill></second-kill>
  </div>
</template>
<script>
import SecondKill from '@/components/index/small/SecondKill'
export default {
	name: "secondKills",
		components: {
		SecondKill,
		},
	data() {
		return {
		labelPosition: "right",
		formLabelAlign: {
			shopUrl: "",
			activityTime: "",
			num: ""
    },
    pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
		};
	},
	methods:{
		onSubmit(){
			console.log("sssss");
		}
	}
};
</script>
