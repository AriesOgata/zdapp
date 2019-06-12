<template>
    <div class="basics">
      <div class="test-header">
        <img src="../../images/back.png" alt="返回" class="back-img" @click="back">
        <div class="header-btn">
          学习考试
        </div>
      </div>
      <div class="cen1">
        <grid cols="3">
          <grid-item label="真题演练" :link="{ path: '/'}">
            <img class="cen1-i" slot="icon" src="../../images/t4.png">
          </grid-item>
          <grid-item label="模拟考试" :link="{ path: '/moni',query:{basicid:this.id}}">
            <img class="cen1-i" slot="icon" src="../../images/t2.png">
          </grid-item>
          <grid-item label="综合考试" :link="{ path: '/'}">
            <img class="cen1-i" slot="icon" src="../../images/t3.png">
          </grid-item>
        </grid>
      </div>
    </div>
</template>

<script>
  import {basics} from 'src/service/api'
  import {Grid,GridItem} from 'vux'
    export default {
        name: "basics",
      data(){
        return{
          basicsList:[],
          id:this.$route.query.basicid
        }

      },
      components:{
        Grid,GridItem
      },
      methods: {
        back() {
          this.$router.go(-1)
        },
      },
      mounted(){
        basics().then(res=>{
            this.basicsList=res.data
          console.log(this.basicsList);
        })
      }
    }
</script>

<style scoped>
  .basics{
    background-color: white;
  }
  .test-header{
    width: 100%;
    height: 1.8rem;
    padding: .3rem .5rem;
    background-color: white;
    border-bottom: 1px solid #ccc;
  }
  .back-img{
    float: left;
    height: 1rem;
    width: 1rem;
  }
  .set-img{
    float: right;
    font-size: 0.7rem;
    height: 1.1rem;
    line-height: 1.1rem;
  }
  .header-btn{
    margin: 0 auto;
    height: 1.1rem;
    width: 6.1rem;
    border-radius: 5px;
    font-size: 0.7rem;
    text-align: center;
    line-height: 1.1rem;
  }

</style>
