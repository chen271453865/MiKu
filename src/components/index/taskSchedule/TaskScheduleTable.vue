<template>
  <div class="taskScheduleTable">
    <el-table
    :data="tableData"
    style="width: 100%">
        <el-table-column
        prop="taskNumber"
        label="任务号">
        </el-table-column>
        <el-table-column
        prop="submissionTime"
        label="任务提交时间">
        </el-table-column>
        <el-table-column
        prop="platform"
        label="平台">
        </el-table-column>
        <el-table-column
        prop="sum"
        label="总费用">
        </el-table-column>
        <el-table-column
        prop="taskState"
        label="任务状态">
        </el-table-column>
        <el-table-column
        prop="payState"
        label="支付状态">
        </el-table-column>
        <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope">
        <el-button
          type="text"
          size="small"
          @click="ViewDetails">
          查看详情
        </el-button>
        <el-button
          type="text"
          size="small">
          复制
        </el-button>
      </template>
        </el-table-column>
    </el-table>
        <router-view></router-view>
    <el-row style="left:50%;position:fixed;bottom:80px;transform:translate(-20%,0)">
        <paging></paging>
    </el-row>
  </div>
</template>
<script>
import Paging from "@/components/public/Paging";
  export default {
    components:{
        Paging
    },
    data() {
      return {
        tableData: [{
          taskNumber: '00000000001',
          submissionTime: '2012-12-12',
          platform: '京东',
          sum:'200',
          taskState:'放单中',
          payState:'已支付',
          operation:''

        },
        {
          taskNumber: '00000000001',
          submissionTime: '2012-12-12',
          platform: '京东',
          sum:'200',
          taskState:'放单中',
          payState:'已支付',
          operation:''

        }]
      }
    },
    methods:{
        ViewDetails(){
            this.$router.push('/index/taskSchedule/ViewDetails' );
        }
    }
  }
</script>
