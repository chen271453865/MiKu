<template>
	<div class="container">
        <el-row>
            <el-col :span="24" class="test">
                <h1>填写地址</h1>
            </el-col>
        </el-row>
        <el-form ref="f" :model="f" label-width="80px">
            <el-row  :gutter="20" class="mgTop">
                <el-col :span="7">
                    <el-form-item label="地址选择">
                    <el-select :span="24" size="500" v-model="f.p" placeholder="请选择" @change="selpro">
                        <el-option
                        v-for="(v,i) in pro"
                        :key="v.id"
                        :label="v.name"
                        :value="i">
                        </el-option>
                    </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-select v-model="f.c" size="500" placeholder="请选择" @change="selcity">
                        <el-option
                        v-for="(v,i) in city"
                        :key="v.id"
                        :label="v.name"
                        :value="i">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="7">
                    <el-select v-model="f.cc" size="500" placeholder="请选择" @change="result" v-show="county.length>0" >
                        <el-option
                        v-for="(v,i) in county"
                        :key="v.id"
                        :label="v.name"
                        :value="i">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-form-item label="发货姓名">
                <el-col :span="6">
                    <el-input v-model="f.name" placeholder="发货姓名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="发货电话">
                 <el-col :span="6">
                    <el-input v-model="f.phone" placeholder="发货电话"></el-input>
                 </el-col>
            </el-form-item>
            <el-row class="mgTop">
                <el-form-item label="详细地址" style="margin-bottom:10px;">
                    <el-col :span="6">
                        <el-input type="textarea" v-model="f.desc" placeholder="详细地址"></el-input>
                    </el-col> 
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="">
                    <el-col :span="6" style="text-align:center;">
                        <p><el-checkbox v-model="checked">选择默认</el-checkbox></p>
                        <el-button type="primary">添加新地址</el-button>
                    </el-col> 
                </el-form-item>
            </el-row>
        </el-form>
        <el-row>
            <el-col :span="24" class="test">
                <h1>默认地址</h1>
            </el-col>
        </el-row>
        <el-row class="mgTop">
            <default-address></default-address>
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
.mgTop {
  margin-top: 10px;
}
</style>

<script>
import Paging from "@/components/public/Paging";
import data from "../../assets/js/data";
import DefaultAddress from '@/components/index/DefaultAddress'
export default {
    components:{
        DefaultAddress,
         Paging,
    },
	data:function(){
		return {
            checked: true, //选择默认
           data:data,
           pro:"",
           city:"",
           county:"",
           f:{
	           p:0,
	           c:0,
	           cc:0,
       		}
		}
	},
	created:function(){
		this.pro=this.data;
		this.city=this.pro[0]['child'];
		this.county=this.city[0]['child'];
		this.result();
	},
	methods:{
		selpro:function(){
			this.city=this.pro[this.f.p]['child'];
			this.county=this.city[0]['child'];
			this.f.c=0;
			this.f.cc=0;
			this.result();
		},
		selcity:function(){
			this.county=this.city[this.f.c]['child']?this.city[this.f.c]['child']:[];
			this.f.cc=0;
			this.result();
		},
		result:function(){
			var re={
				pro:{id:this.pro[this.f.p].id,name:this.pro[this.f.p].name},
				city:{id:this.city[this.f.c].id,name:this.city[this.f.c].name},
			};
			if(this.county.length>0){
             re.county={id:this.county[this.f.cc].id,name:this.county[this.f.cc].name};
			}else{
				re.county={id:"",name:""};
			}
            this.$emit("select",re);
        },
    }
    
}	
</script>