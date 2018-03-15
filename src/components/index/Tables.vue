<template>
  <el-table
  class="borderSize"
    :data="tableData4"
    style="width: 100%"
    max-height="800">
    <el-table-column
      fixed
      prop="SerialNumber"
      label="序号">
    </el-table-column>
    <el-table-column
      prop="radio"
      label="任务类型">
    </el-table-column>
    <el-table-column
      prop="shopName"
      :show-overflow-tooltip=true
      label="商品名称">
    </el-table-column>
    <el-table-column
      prop="keyword"
      label="关键字">
    </el-table-column>
    <el-table-column
      prop="orderNum"
      label="拍下数量">
    </el-table-column>
    <el-table-column
      prop="shopSum"
      label="商品总金额">
    </el-table-column>
    <el-table-column
      prop="missionMee"
      label="下单手续费">
    </el-table-column>
    <el-table-column
      prop="expressFee"
      label="快递信息费">
    </el-table-column>
    <el-table-column
      prop="orderNotes"
      label="订单备注">
    </el-table-column>
    <el-table-column
      prop="commodityFee"
      label="商品关注费">
    </el-table-column>
    <el-table-column
      prop="shopCollectionFee"
      label="店铺关注费">
    </el-table-column>
    <el-table-column
      prop="singleTime"
      label="预计放单时间">

<template slot-scope="scope">
  <el-time-select
  v-model="value1"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</el-time-select>
</template>

    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<style>
.borderSize {
  box-sizing: border-box;
}
</style>

 <script>
 import axios from 'axios';
export default {
  props: ["tableData4"],
  required: true,
  methods: {
    deleteRow(table_index, rows) {
      rows.splice(table_index, 1);
    }
  },created(){
	  // console.log( localStorage.getItem('tablesData')+"数据" );
    var  tableData4 = window.localStorage.getItem('tablesData');
  },
  data() {
    return {
      value1: "",
      tableData5: [
        {
		    "SerialNumber": null,
        "radio": null,
        "shopName": "",
        "keyword": "",
        "orderNum": null,
        "shopSum": null,
        "missionMee": null,
        "expressFee": null,
        "commodityFee": null,
        "shopCollectionFee": null,
        "balance": null,
        "sum": null
        }
      ]
    };
  }
};
</script>
