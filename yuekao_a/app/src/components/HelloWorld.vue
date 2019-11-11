<!--
 * @Author: 闫龙科
 * @Date: 2019-11-11 15:22:26
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-11 16:23:05
 * @Description: 00
 -->
<template>
  <div>
      首页
  </div>
</template>
<script>
import axios from "axios"
export default {
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{

  },
  created(){
      axios.get("/api/list").then(res=>{
        console.log(res.data.data)
      })
  },
  mounted(){

  }
}
</script>
<style scoped lang="">

</style>