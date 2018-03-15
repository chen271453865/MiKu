<template>
    <div class="orderDetail">
        <el-tabs @tab-click="handleClick">
          <el-tab-pane v-bind:label="todo.text" :key="todo.id" v-bind:name="todo.index" v-for="(todo,index) in todos"></el-tab-pane>
        </el-tabs>
        <!-- <button @click="test">ceshi</button> -->
        <tables></tables>
        <el-row style="left:50%;position:fixed;bottom:80px;transform:translate(-20%,0)">
            <paging></paging>
        </el-row>
    </div> 
</template>
<style>
.detalTable{
  margin-bottom: 60px;
}
</style>

<script>
import Tables from "@/components/index/Tables";
import Paging from "@/components/public/Paging";
  export default {
    name:"orderDetail",
    components:{
      Tables,
      Paging
    },
    data() {
      return {
         todos: [
      { text: '全部'},
    ]
      };
    },
    props:['tests'],
    methods: {
      // test(){
      //   console.log( this.tests )
      // },
      created(){
        alert( this.tests );
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>