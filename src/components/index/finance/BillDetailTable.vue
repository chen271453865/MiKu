<template>
  <div class="billDetailTable">
    <el-table
    :data="billDetailTable"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" class="demo-table-expand">
          <el-form-item label="任务单号">
            <span>{{ props.row.taskCode }}</span>
          </el-form-item>
          <el-form-item label="操作类型">
            <span>{{ props.row.operationType }}</span>
          </el-form-item>
          <el-form-item label="详细原因">
            <span>{{ props.row.reason }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      prop="billTableTime">
    </el-table-column>
    <el-table-column
      label="业务类型"
      prop="BusinessType">
    </el-table-column>
    <el-table-column
      label="所花金额"
      prop="price">
    </el-table-column>
    <el-table-column
      label="当前余额"
      prop="balance">
    </el-table-column>
  </el-table>
   <el-row style="left:50%;position:fixed;bottom:80px;transform:translate(-20%,0)">
        <paging></paging>
    </el-row>
  </div>
</template>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
</style>
<script>
import Paging from "@/components/public/Paging";
export default {
    components:{
      Paging
    },
    data() {
        return {
        billDetailTable: [
            {
            billTableTime: "2012-12-12",
            BusinessType: "任务",
            price: "100.00",
            balance: "1200.00",
            taskCode: "00000000001",
            operationType: "扣减",
            reason:
                "会员发布任务扣取金额：177.00元；其中商品总金额：169.00元，手续费：5.00元，快递费：2.00元，导流费：0.50元，商品关注费：0.25元，店铺关注费：0.25元"
            },
            {
            billTableTime: "2012-12-12",
            BusinessType: "任务",
            price: "100.00",
            balance: "1200.00",
            taskCode: "00000000001",
            operationType: "扣减",
            reason:
                "会员发布任务扣取金额：177.00元；其中商品总金额：169.00元，手续费：5.00元，快递费：2.00元，导流费：0.50元，商品关注费：0.25元，店铺关注费：0.25元"
            }
        ]
        };
    }
};
</script>
