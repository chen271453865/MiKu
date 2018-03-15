<template>
  <div class="viewDetailTable">
    <el-table
    :data="viewDetailTable"
    stripe
    style="width: 100%">
        <el-table-column
        prop="product"
        :show-overflow-tooltip=true
        label="产品">
        </el-table-column>
        <el-table-column
        prop="orderNum"
        label="订单号">
        </el-table-column>
        <el-table-column
        prop="courierCompany"
        label="快递公司">
        </el-table-column>
        <el-table-column
        prop="courierId"
        label="快递单号">
        </el-table-column>
         <el-table-column
        prop="receiver"
        label="收货信息">
        </el-table-column>
         <el-table-column
        prop="keyword"
        label="关键字">
        </el-table-column>
         <el-table-column
        prop="num"
        label="购买量">
        </el-table-column>
         <el-table-column
        prop="shopPrice"
        label="商品金额">
        </el-table-column>
         <el-table-column
        prop="sum"
        label="商品总金额">
        </el-table-column>
         <el-table-column
        prop="freight"
        label="运费">
        </el-table-column>
        <el-table-column
        prop="commodityAttention"
        label="商品关注">
        </el-table-column>
        <el-table-column
        prop="shopAttention"
        label="店铺关注">
        </el-table-column>
        <el-table-column
        prop="time"
        label="放单时间">
        </el-table-column>
        <el-table-column
        prop="remark"
        label="订单备注">
        </el-table-column>
    </el-table>
    <el-row style="text-align:center;" class="mgTop">
        <el-button type="primary">导出数据</el-button>
    </el-row>
  </div>
</template>
<style>
.mgTop {
  margin-top: 10px;
}
</style>

<script>
  export default {
    data() {
      return {
        viewDetailTable: [{
          product: '南极人睡裤服装南极人睡裤服装南极人睡裤服装南极人睡裤服装南极人睡裤服装南极人睡裤服装',
          orderNum: '0000000001',
          courierCompany: '',
          courierId:'',
          receiver:'',
          keyword:'南极人',
          num:'1',
          shopPrice:'200',
          sum:'200',
          freight:'',
          commodityAttention:'关注',
          shopAttention:'关注',
          time:'2012-12-12',
          remark:'订单备注'
        }]
      }
    }
  }
</script>
