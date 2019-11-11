<!--
 * @Author: 闫龙科
 * @Date: 2019-11-11 19:28:48
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-11 19:54:35
 * @Description: 00
 -->
<template>

  <div>
    <div>
        <button @click="addList">添加数据</button>
    </div>
    <Dialog></Dialog>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.title }}</el-tag>
            </div>
        </template>
      </el-table-column>
      <el-table-column label="作者" width="180">
        <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.auther }}</el-tag>
            </div>
        </template>
      </el-table-column>
      <el-table-column label="数量" width="180">
        <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.num }}</el-tag>
            </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from "axios"
import Dialog from "./dialog"
export default {
  props: {},
  components: {},
  data() {
    return {
         tableData: []
    }
  },
  computed: {},
  methods: {
      addList(){
          console.log("123")
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        console.log(row.id)
        axios.post("/api/del",{id:row.id}).then(res=>{
            console.log(res)
            this.getList()
        })
      },
      getList(){
        axios.get("/api/list").then(res=>{
        console.log(res.data.data)
        this.tableData=res.data.data
        
      })
      }
  },
  created() {
      this.getList()

  },
  mounted() {}
}
</script>
<style scoped lang="">
</style>