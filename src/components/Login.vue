<template>
<div class="loginMain">

 <div class="note" style="note">
    <el-row>
      <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple-dark mat300">
			<el-row>
				<el-col :span="18" :offset="6"><div class="grid-content bg-purple-dark login_bg"></div></el-col>
			</el-row>
          <el-form :model="ruleForm" :rules="loginRules" ref="ruleForm" label-width="90px" class="demo-ruleForm">
			<el-row>
				<el-col :span="21" :offset="1">
					<el-form-item label="用户名" prop="userName">
						<el-input v-model="ruleForm.userName" ref="userName" placeholder="请输入用户名"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input type="password" v-model="ruleForm.password" :span="2" ref="password" placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" size="medium" @click="onSubmit">前往登陆</el-button>
					</el-form-item>
				</el-col>
			</el-row>
			<el-form-item>
				<el-button type="text" @click="toRegister">未有账号&nbsp;--&nbsp;前往注册</el-button>
			</el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>


</div>
 
</template>


<script>
import axios from 'axios';
export default {
  data() {
    return {
		ruleForm: {
			userName: "",
			password: "",
		},
		loginRules: {
			userName: [
				{ required: true, message: '请输入用户名', trigger: 'blur' },
				{ min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
			],
			password: [
				{ required: true, message: '请输入密码', trigger: 'blur' },
				{ min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
			]
		}
	}
	
  },
  methods: {
    onSubmit() {
	let self = this;
    axios.post('http://127.0.0.1:3003/news', {
    'userName': this.$refs.userName.value,
	  'password': this.$refs.password.value
  })
  .then(function (response) {
   console.log("数据成功返回，但是无法跳转到主页面，好奇怪")
   self.$router.push({ path: '/index/Hall' });
  })
  .catch(function (error) {
    console.log(error);
  });


	},
	toRegister(){
    /* alert("跳往到注册页面"); */
    this.$router.push({ path: '/register' });
    alert("跳往到注册页面");
	}
  }
};
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
.loginMain{
  background: url("../assets/imgs/login_bg.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
}
.mat300 {
  position: fixed;
  width: 475.750px;
  z-index: 200;
  text-align: center;
  padding: 20px 0px 20px 0;
  top: 50%;
  transform: translate(0,-70%);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 7px;
}
.login_bg{
background: url("../assets/imgs/slogan.png");
	width: 217px;
    height: 55px;
	position: relative;
	margin-bottom: 20px;
}
</style>
