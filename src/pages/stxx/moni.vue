<template>
  <div class="basics">
    <div class="test-header">
      <img src="../../images/back.png" alt="返回" class="back-img" @click="back">
      <div class="header-btn">
        模拟考试
      </div>
    </div>
    <div class="cen">
      <ul>
        <li>
          1、 点击考试名称按钮进入答题界面，考试开始计时。
        </li>
        <li>
          2、 在随机考试过程中，您可以通过顶部的考试时间来掌握自己的做题时间。
        </li>
        <li>
          3、 提交试卷后，可以通过“查看答案和解析”功能进行总结学习。
        </li>
        <li>
          4、 系统自动记录模拟考试的考试记录，学员考试结束后可以进入“答题记录”功能进行查看。
        </li>
      </ul>
    </div>
    <div class="cen1">
      <grid cols="2">
        <grid-item v-for="item in basicsList" :label="item.exam" :link="{ path: '/selectquestions',query:{basicid:id,examid:item.examid}}">
          <img class="cen1-i" slot="icon" src="../../images/item.jpg">
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
  import {basics} from 'src/service/api'
  import {Grid,GridItem} from 'vux'
  export default {
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
      basics({basicid:this.$route.query.basicid}).then(res=>{
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
  .cen{
    width: 90%;
    background-color: rgb(217,237,247);
    border-radius: 0.5rem;
    margin: 0.5rem 5%;
    border: 1px solid #bce8f1;
  }
  .cen ul{
    overflow: hidden;
  }
  .cen ul li{
    font-size: 0.5rem;
    margin: 0.3rem;
    color: #31708f;
  }
</style>
