<template>
    <div class="taskschedule">
        <el-row>
            <el-col :span="24" class="test">
                <h1>发布淘宝任务</h1>
            </el-col>
        </el-row>
        <el-row class="mgTop">
                <el-form ref="form" label-width="80px">
                    <el-col :span="8">
                        <el-form-item label="日期">
                            <el-date-picker
                            v-model="value6"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="任务状态">
                            <el-select v-model="value4" clearable placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-button type="primary" @click="seach">搜索</el-button>
                        <el-button type="primary" @click="exportFile">导出</el-button>
                    </el-col>
                </el-form>
        </el-row>
        <el-row class="mgTop">
          <task-schedule-table></task-schedule-table>
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
import TaskScheduleTable from '@/components/index/taskSchedule/TaskScheduleTable'
  export default {
    components:{
      TaskScheduleTable
    },
    data() {
      return {
          options: [{
          value: '选项1',
          label: '等待付款'
        }, {
          value: '选项2',
          label: '放单中'
        }, {
          value: '选项3',
          label: '放款完毕'
        }],
        value4: '',
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
        value6: '',
      };
    },
    methods:{
        seach(){
            alert("点击搜索按钮")
        },
        exportFile(){
            alert("点击导出按钮")
        }
    }
  };
</script>
