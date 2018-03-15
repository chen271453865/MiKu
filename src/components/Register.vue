<template>
<div class="regMain">

  <div class="note" style="note">
    <el-row>
      <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple-dark mat300">
			<el-row>
				<el-col :span="18" :offset="6"><div class="grid-content bg-purple-dark login_bg"></div></el-col>
			</el-row>
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="90px" class="demo-ruleForm">
				<el-row>
					<el-col :span="22" :offset="1">
						<el-form-item label="手机号" prop="phone">
							<el-input v-model.number="ruleForm2.phone" ref="regPhone"></el-input>
						</el-form-item>
						<el-form-item label="密码" prop="pass">
							<el-input type="password" v-model="ruleForm2.pass" auto-complete="off" ref="regPass"></el-input>
						</el-form-item>
						<el-form-item label="确认密码" prop="checkPass">
							<el-input type="password" v-model="ruleForm2.checkPass" ref="checkPass" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item class="mgt0">
							<el-button type="primary" size="medium" @click="onSubmit()">注册</el-button>
						</el-form-item>
					</el-col>
				</el-row>
				<el-form-item>
					<el-button type="text" @click="toLogin">未有账号&nbsp;--&nbsp;前往登陆</el-button>
				</el-form-item>
          	</el-form>
        </div>
      </el-col>
    </el-row>
  </div>

</div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("号码不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        phone: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [
          { validator: checkPhone, trigger: "blur" },
          { required: false, message: "请输入手机号", trigger: "blur" },
          { pattern: /^1[34578]\d{9}$/, message: "目前只支持中国大陆的手机号码" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      axios.post("http://127.0.0.1:3003/user", {
          userName: this.$refs.regPhone.value,
          password: this.$refs.regPass.value
        })
        .then(function(response) {
          console.log(response.status);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    toLogin() {
      alert("跳转不到登陆页面")
      this.$router.push({ path: '/' });
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.regMain {
  background: url("../assets/imgs/login_bg.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
}
.mat300 {
  position: fixed;
  width: 475.75px;
  z-index: 200;
  text-align: center;
  padding: 20px 0px 20px 0;
  top: 50%;
  transform: translate(0, -70%);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 7px;
}
.login_bg {
  background: url("../assets/imgs/slogan.png");
  width: 217px;
  height: 55px;
  position: relative;
  margin-bottom: 20px;
}
</style>