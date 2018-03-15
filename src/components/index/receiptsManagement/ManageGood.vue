<template>
    <div class="manageGood">
        <el-row>
			<el-col :span="24" class="test">
			<h1>收货管理</h1>
			</el-col>
		</el-row>
        <p class="lineHeight"><span>放单时间：</span><strong class="primaryColoy">2012-12-12</strong></p>
        <el-row>
            <el-table
            ref="multipleTable"
            :data="manageGoodtable"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                :show-overflow-tooltip=true
                label="产品">
                <template slot-scope="scope">{{ scope.row.product }}</template>
                </el-table-column>
                <el-table-column
                prop="price"
                label="价格">
                </el-table-column>
                <el-table-column
                prop="keyword"
                label="关键字"
                show-overflow-tooltip>
                </el-table-column>
                 <el-table-column
                prop="orderNum"
                label="订单号"
                show-overflow-tooltip>
                </el-table-column>
                 <el-table-column
                prop="CourierNumber"
                label="快递单号"
                show-overflow-tooltip>
                </el-table-column>
                 <el-table-column
                prop="anonymous"
                label="匿名"
                show-overflow-tooltip>
                </el-table-column>
                </el-table-column>
                 <el-table-column
                prop="commentGift"
                label="评价赠品"
                show-overflow-tooltip>
                </el-table-column>
                 <el-table-column
                prop="commentContent"
                label="评论内容"
                show-overflow-tooltip>
                 <template slot-scope="scope">
                     <el-input type="textarea"></el-input>
                 </template>
                </el-table-column>
                 <el-table-column
                prop="BaskPictures"
                label="晒单图片"
                show-overflow-tooltip>
                 <template slot-scope="scope">
                    <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="5"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button type="primary">点击上传</el-button>
                    </el-upload>
                 </template>
                </el-table-column>
                 <el-table-column
                prop="BaskState"
                label="状态"
                show-overflow-tooltip>
                </el-table-column>
                 <el-table-column
                prop="operation"
                label="操作"
                show-overflow-tooltip>
                <template slot-scope="scope">
                        <el-button type="primary" @click="commitManageGoods">提交</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-row class="mgTop"  style="text-align:center">
             <el-button type="primary" @click="open3">给选中的写评论</el-button>
        </el-row>
    </div>
</template>
<style>
.test {
  line-height: 40px;
  height: 40px;
  border-bottom: 2px solid rgb(100, 110, 119);
}
.lineHeight{
	line-height: 40px;
	height: 40px;
	color: #908e8e;
	font-size: 14px;
}
.primaryColoy{
	color: #409EFF;
}
.mgTop{
    margin-top: 10px;
}
</style>
<script>
  export default {
    data() {
      return {
        fileList: [
                // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
            ], //图片上传
        manageGoodtable: [{
          product: '南极人保暖内衣南极人保暖内衣南极人保暖内衣南极人保暖内衣南极人保暖内衣南极人保暖内衣南极人保暖内衣南极人保暖内衣',
          price: '10.000',
          keyword: '关键字',
          orderNum:'00000000001',
          CourierNumber:'0000000001',
          anonymous:'是',
          commentGift:'是',
          BaskPictures:'上传图片',
          BaskState:'完成',
          operation:'无'
        },{
          product: 's南极人保暖内衣南极人保暖内衣南极人保暖内衣南极人保暖内衣南极人保暖内衣南极人保暖内衣南极人保暖内衣南极人保暖内衣',
          price: 's10.000',
          keyword: 's关键字',
          orderNum:'s00000000001',
          CourierNumber:'s0000000001',
          anonymous:'s是',
          commentGift:'s是',
          BaskPictures:'上s传图片',
          BaskState:'s完成',
          operation:'无'
        }],
        multipleSelection: []
      }
    },

    methods: {
        // checkbox选择
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    //   图片上传
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
    //   选择评论
    open3() {
        this.$prompt('请输入评论', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        //   inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        //   inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的评论是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
    //   提交一条评论
      commitManageGoods(){
          console.log("提交当前评论");
      }

    }
  }
</script>

