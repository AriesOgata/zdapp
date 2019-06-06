<template>
<div class="stxue">
  <div class="test-header">
    <img src="../../images/back.png" alt="返回" class="back-img" @click="back">
    <div class="header-btn">
      我的考场
    </div>
  </div>

  <div class="cen1">
    <grid cols="2">
      <grid-item v-for="item in examList" :label="item.basic" :link="{ path: '/basics' , query: {basicid:item.basicid}}">
        <img class="cen1-i" slot="icon" :src="imgurl+item.basicthumb">
      </grid-item>
    </grid>
  </div>
</div>
</template>

<script>
  import my_switch from '../../components/switch'
  import {Grid,GridItem} from 'vux'
  import {myexam} from "src/service/api";

  export default {
        name: "stxue",
      components:{
        my_switch,
        Grid,GridItem
      },
      data() {
        return {
          value1: false, //组件的初始状态
          examList:[],
          imgurl:'http://zdapp.808w.com/exam/'
        }
      },
      methods: {
        back() {
          this.$router.go(-1)
        },

      },
      mounted(){
        myexam().then(res=>{
          this.examList=res.data
          console.log(this.examList);
        })
      }
    }
</script>

<style scoped lang="less">
  .stxue{
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
