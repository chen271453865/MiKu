<template>
<div class="hall">
 <el-row>
  <el-col :span="24" class="test">
    <h1>发布淘宝任务</h1>
  </el-col>
</el-row>
 <el-row class="mgTop">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-row>
<el-col :span="8">
        <el-form-item label="商品URL">
          <el-input class="urlInput" clearable v-model="formInline.shopurl" ref="shopurl" placeholder="商品URL"></el-input>
        </el-form-item>
      </el-col>
      
       <el-col :span="5">
        <el-form-item label="关键字">
          <el-input clearable v-model="formInline.keyword" ref="keyword" placeholder="关键字"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4">
      <el-form-item label="订单量">
        <el-input clearable v-model="formInline.orderNum" ref="orderNum" placeholder="订单量" type="number"></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="5">
        <el-form-item label="放单日期">
              <el-date-picker
                v-model="formInline.date"
                type="date"
                ref="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1" >
              </el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="checkMoney">查询价格</el-button>
        <!-- <el-button type="primary" @click="$store.tesst()">查询价格</el-button> -->
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <p>
          <el-form-item label="任务类型">
				<el-radio-group v-model="radio" @change="changeHandler">
					<el-radio class="radio" label="1">手机端</el-radio>
					<el-radio class="radio" label="2">电脑端</el-radio> 
				</el-radio-group>
          </el-form-item>
        </p>
          <p>
            <el-form-item label="订单备注">
            <el-input v-model="formInline.remark" ref="remark" placeholder="订单备注" style="width:450px;"></el-input>
          </el-form-item>
        </p>
        <p>
          <el-form-item label="常用地址">
            <el-select v-model="value" placeholder="请选择" style="width:320px;">
            <el-option
              v-for="item in addressSelect"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </el-form-item>
          <el-button type="primary" icon="el-icon-circle-plus" @click="addNewAddress">新增地址</el-button>
        </p>
      </el-col>
      <el-col :span="8">
        <p class="lineHeight"><el-checkbox v-model="checked" @change="diversionService">开启导流服务</el-checkbox></p>
        <p class="lineHeight">
          关键字搜索导流 0.9元/单 (10个APP搜索优质流量)
        </p>
        <p class="lineHeight">
          <el-col :span="12">稳定单品/关键词转化率</el-col>
          <el-col :span="12">流量单量变化同步</el-col>
        </p>
          <p class="lineHeight">
          <el-col :span="12">优质搜索流量/提高热度</el-col>
          <el-col :span="12">安全护航</el-col>
        </p>
      </el-col>
      <el-col :span="8">
        <p class="lineHeight" >
          <el-col :span="6" class="textRight xsmall">商品总额</el-col>
          <el-col :span="6" class="primaryColor"><strong>{{shopSum}}</strong>（元）</el-col>
          <el-col :span="6" class="textRight xsmall">任务手续费：</el-col>
          <el-col :span="6" class="primaryColor"><strong>{{missionMee}}</strong>（元）</el-col>
        </p>
          <p class="lineHeight">
          <el-col :span="6" class="textRight xsmall">快递费：</el-col>
          <el-col :span="6" class="primaryColor"><strong>{{expressFee}}</strong>（元）</el-col>
          <el-col :span="6" class="textRight xsmall">导流费：</el-col>
          <el-col :span="6" class="primaryColor"><strong>{{guideFee}}</strong>（元）</el-col>
        </p>
          <p class="lineHeight">
          <el-col :span="6" class="textRight xsmall">商品关注费：</el-col>
          <el-col :span="6" class="primaryColor"><strong>{{commodityFee}}</strong>（元）</el-col>
          <el-col :span="6" class="textRight xsmall">店铺收藏费：</el-col>
          <el-col :span="6" class="primaryColor"><strong>{{shopCollectionFee}}</strong>（元）</el-col>
        </p>
          <p class="lineHeight">
          <el-col :span="6" class="textRight xsmall">商家余额：</el-col>
          <el-col :span="6" class="primaryColor balance"><strong>{{balance}}</strong>（元）</el-col>
          <el-col :span="6" class="textRight xsmall">总计：</el-col>
          <el-col :span="6" class="primaryColor balance"><strong>{{sum}}</strong>（元）</el-col>
        </p>
      </el-col>
    </el-row>
    <el-row style="text-align:center;"><el-button type="primary" @click="onSubmit">提交订单</el-button></el-row>
    </el-form>
  </el-col>
</el-row>
<!-- <div><order-details tests = 'fuck'></order-details></div> -->
<div><tables :tableData4="tableDatas"></tables></div>
<router-view></router-view>
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
.urlInput {
  width: 450px;
}
.primaryColor {
  color: #409eff;
}
.textRight {
  text-align: right;
}
.lineHeight {
  line-height: 42px;
  height: 42px;
}
.xsmall {
  font-size: 13px;
}
.balance {
  color: #ff2929;
}
</style>
<script>
import Tables from "@/components/index/Tables";
import axios from 'axios';
export default {
  name: "hall",
  components: {
    Tables,
  },
  data() {
    return {
    tableDatas:[],
	  shopSum: 0, //商品总额
	  missionMee:0,  //任务手续费
	  expressFee:0, //快递费
	  guideFee:0.5, //导流费：
	  commodityFee:0, //商品关注费：
	  shopCollectionFee:0, //店铺收藏费：
	  balance:0, //商家余额：
	  sum:0, //总计
    radio: "1", //任务类型
    checked: true, //选择导流服务
    addressSelect: [
      {
        value: "选项1",
        label: "广东省广州市天河区珠村文化打击就像一号"
      },
      {
        value: "选项2",
        label: "广东省广州市天河区珠村文化打击就像一号"
      },
      {
        value: "选项3",
        label: "广东省广州市天河区珠村文化打击就像一号"
      }
    ],
    value: "",
    pickerOptions1: {
      disabledDate(time) {
        return time.getTime() < Date.now() - 8.64e7;
      },
      shortcuts: [
        {
          text: "今天",
          onClick(picker) {
            picker.$emit("pick", new Date());
          }
        }
      ]
    },
    formInline: {
      remark: "", //订单备注
      shopurl: "", //商品地址
      keyword: "", //关键字
      orderNum: "", //订单数量
      date: "",
    }
	};
  },
  created(){
    var _this = this;
     axios.get(" http://localhost:3003/MKplaceOrder")
        .then(function(response) {
        _this.tableDatas = response.data[0].data ;
        })
        .catch(function(error) {
          console.log(error);
        });
         axios.get("http://localhost:3003/MKcheckPrice")
        .then(function(response) {
        console.log(response.data[0].data[0]);
			_this.shopSum = response.data[0].data[0].shopSum;
			_this.missionMee = response.data[0].data[0].missionMee;
			_this.expressFee = response.data[0].data[0].expressFee;
			_this.commodityFee = response.data[0].data[0].commodityFee;
			_this.shopCollectionFee = response.data[0].data[0].shopCollectionFee;
			_this.balance = response.data[0].data[0].balance;
			_this.sum = _this.shopSum+_this.missionMee+_this.expressFee
			+_this.commodityFee+_this.shopCollectionFee+ _this.guideFee;
        })
        .catch(function(error) {
          console.log(error);
        });
  },
  methods: {
	//   是否开启导流服务
	  diversionService(){
		  var _this = this;
		 if( _this.checked ==true ){
		 _this.guideFee = 0.50
			}else{
				_this.guideFee = 0.00
			}
	  },
	//   查询价格
    checkMoney() {
    //   var self = this;
    //   self.$store.tesst();
		var _this = this;
	  if( _this.checked ==true ){
		 _this.guideFee = 0.50
	  }else{
		 _this.guideFee = 0.00
	  }
      axios.get("http://localhost:3003/MKcheckPrice")
        .then(function(response) {
        console.log(response.data[0].data[0]);
			_this.shopSum = response.data[0].data[0].shopSum;
			_this.missionMee = response.data[0].data[0].missionMee;
			_this.expressFee = response.data[0].data[0].expressFee;
			_this.commodityFee = response.data[0].data[0].commodityFee;
			_this.shopCollectionFee = response.data[0].data[0].shopCollectionFee;
			_this.balance = response.data[0].data[0].balance;
			_this.sum = _this.shopSum+_this.missionMee+_this.expressFee
			+_this.commodityFee+_this.shopCollectionFee+ _this.guideFee;
        })
        .catch(function(error) {
          console.log(error);
        });
    //  this.$store.commit('mutationName')
	},
	changeHandler( value ){
		// console.log('改变之后的值是:' + value)
		var _this = this;
		if(value == 1){
			_this.radio = "1";
		}else{
			_this.radio = "2";
		}
	},
	// 提交按钮
    onSubmit() {
      var _this = this;
      // console.log( _this.formInline )
      // console.log( _this.radio );
      // console.log( _this.value );

    //  axios.get(" http://localhost:3003/MKplaceOrder")
    //     .then(function(response) {
    //     _this.tableDatas = response.data[0].data;
    //     localStorage.setItem('tablesData',JSON.stringify(response.data[0].data));
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });

    axios.post('http://localhost:3003/MKplaceOrder', {
    "SerialNumber": "2",
          "radio": "2",
          "shopName": "凯宾新款2017年保湿中国男士护肤4件套 洗面奶爽肤水补水霜面膜",
          "keyword": "凯宾",
          "orderNum": "10",
          "shopSum": "10",
          "missionMee": "10",
          "expressFee": "8",
          "commodityFee": "0.5",
          "shopCollectionFee": "0.5",
          "balance": "1000",
          "sum": "39"
  })
  .then(function (response) {
      _this.tableDatas = response.data[0].data;
      localStorage.setItem('tablesData',JSON.stringify(response.data[0].data));
  })
  .catch(function (error) {
    console.log(error);
  });

    },
    addNewAddress() {
	  // console.log("跳转到新增地址页面");
      this.$router.push({ path: "/index/AddNewAddress" });
    }
  }
};
</script>

