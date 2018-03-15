
  <!-- <div class="changePaymentPassword">
      这是修改支付密码
  </div> -->
<template>
  <div class="changePaymentPassword">
      <el-row>
        <el-col :span="24" class="test">
          <h1>修改交易密码</h1>
        </el-col>
      </el-row>
      <el-row class="mgTop" style="width:50%;">
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户" prop="user">
					<el-col :span="12">
						<span>13435663920</span>
					</el-col>
				</el-form-item><el-form-item label="旧密码" prop="oldpass">
					<el-col :span="12">
						<el-input type="password" v-model="ruleForm2.oldpass" auto-complete="off"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="新密码" prop="newpass">
					<el-col :span="12">
						<el-input type="password" v-model="ruleForm2.newpass" auto-complete="off"></el-input>
					</el-col>
				</el-form-item>
		
				<el-form-item label="确认密码" prop="checkPass">
					<el-col :span="12">
						<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item>
					<el-col :span="12" style="text-align:center;">
						<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
						<el-button @click="resetForm('ruleForm2')">重置</el-button>
					</el-col>
				</el-form-item>
		</el-form>
      </el-row>
      
  </div>
</template>
<style>
.test {
  line-height: 40px;
  height: 40px;
  border-bottom: 2px solid rgb(100, 110, 119);
}
.mgTop {
  margin-top: 10px;
}
</style>

<script>
export default {
  data() {
	  var validateOldPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入旧密码"));
      } else {
        // if (this.ruleForm2.checkPass !== "") {
        //   this.$refs.ruleForm2.validateField("checkPass");
		// }
		alert("sssss");
        callback();
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
      } else if (value !== this.ruleForm2.newpass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
		oldpass:"",
        newpass: "",
        checkPass: "",
      },
      rules2: {
        newpass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        oldpass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

