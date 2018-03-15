<template>
  <el-table
    :data="tableData4"
    style="width: 100%"
    max-height="500">
    
    <el-table-column
      fixed
      prop="deliverName"
      label="发货人姓名">
     <template slot-scope="scope">
          <el-radio class="radio" v-model="radio" :label="scope.row.deliverName"></el-radio>
    </template>
      
    </el-table-column>
    <el-table-column
      prop="deliverArea"
      label="所在区域">
    </el-table-column>
    <el-table-column
      prop="deliverDetailAdress"
      label="详细地址">
    </el-table-column>
    <el-table-column
      prop="deliverPhone"
      label="发货人手机">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
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

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        radio: 'scope.row.deliverName',
        tableData4: [{
          deliverName: '色彩缤纷的哦',
          deliverArea: '广东省广州市天河区',
          deliverDetailAdress: '珠村文华大街九巷一号',
          deliverPhone: '13435663920',
        },{
          deliverName: '色彩缤纷的哦s',
          deliverArea: '广东省广州市天河区s',
          deliverDetailAdress: '珠村文华大街九巷一号s',
          deliverPhone: '13435663920s',
        }]
      }
    }
  }
</script>