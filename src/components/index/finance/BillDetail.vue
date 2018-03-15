<template>
  <div class="billDetail">
        <el-row>
			<el-col :span="24" class="test">
				<h1>账单明细</h1>
			</el-col>
		</el-row>
        <el-row class="mgTop">
            <el-form :inline="true" class="demo-form-inline">
                <el-col :span="8">
                    <el-form-item label="选择日期">
                            <el-date-picker
                            v-model="billDetailTime"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder= "结束日期">
                            </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="业务类型">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in businessType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">搜索</el-button>
                    <el-button type="primary">导出</el-button>
                </el-col>
            </el-form> 
        </el-row>
        <el-row>
            <bill-detail-table></bill-detail-table>
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
</style>
<script>
import BillDetailTable from '@/components/index/finance/BillDetailTable'
  export default {
    components:{
        BillDetailTable
    },
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        businessType: [{
          value: '选项1',
          label: '充值'
        },{
          value: '选项2',
          label: '体现'
        },
        {
          value: '选项3',
          label: '扣款'
        },
        {
          value: '选项4',
          label: '任务'
        },
         {
          value: '选项5',
          label: '小任务'
        }],
        value: '',
        billDetailTime: '',
      };
    }
  };
</script>

