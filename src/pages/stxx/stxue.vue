<template>
<div class="stxue">
  <div class="test-header">
    <img src="../../images/back.png" alt="返回" class="back-img" @click="back">
    <p class="set-img">成绩单</p>
    <div class="header-btn">
      全真模拟考试
    </div>
  </div>
  <div class="cen">
    <div class="cen1">
      <img src="../../images/user_img.png" alt="">
      <p class="c1">一点通学员</p>
      <p class="c2">你可以登录学员中心更新个人资料哦</p>
    </div>
    <ul>
      <li>
        <p>考试科目</p>
        <p>资格证考试</p>
      </li>
      <li>
        <p>考试题库</p>
        <p>出租车</p>
      </li>
      <li>
        <p>考试标准</p>
        <p>85题，45分钟</p>
      </li>
      <li>
        <p>合格标准</p>
        <p>80分及格</p>
      </li>
      <li>
        <p>出题规则</p>
        <p>交警局出题规则</p>
      </li>
    </ul>
    <p class="c3">答题不可修改，累计错题分数达到不及格标准时，系统自动提醒交卷，考试不通过。</p>
    <div class="q-btn">
      <p>全真模拟考试</p>
      <p>优先考未做题</p>
    </div>
    <div class="b-btn">
      <div>
        <p>闭卷考试</p>
        <p>完全模拟真实考试环境，考试全程无讲解</p>
      </div>
      <my_switch v-model="value1"></my_switch>
    </div>
  </div>
</div>
</template>

<script>
  import my_switch from '../../components/switch'
    export default {
        name: "stxue",
      components:{
        my_switch
      },
      data() {
        return {
          value1: false //组件的初始状态
        }
      },
      methods: {
        back() {
          this.$router.go(-1)
        },
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
  .cen1{
    width: 100%;
    height: 6.2rem;
    background-color: white;
    text-align: center;
    img{
      width: 20%;
      height: 3rem;
      margin-top: 0.5rem;
    }
    .c1{
      font-size: 0.8rem;
      font-weight: bolder;
    }
    .c2{
      font-size: 0.6rem;
      color: #CCCCCC;
      margin-top: 0.3rem;
    }
  }
  ul{
    width: 90%;
    height: 7rem;
    margin: 0 auto;
    border-radius: 0.5rem;
    background-color: rgb(248,249,249);
    padding: 0rem 1.5rem;
    overflow: hidden;
    li{
      display: flex;
      justify-content: space-between;
      margin-top: .5rem;
      color: #CCCCCC;
      font-size: 0.6rem;
      p:nth-child(2){
        color: #3c3c3c;
      }
    }
  }
  .c3{
    color: #CCCCCC;
    font-size: 0.7rem;
    margin: 0.5rem 1rem;
    text-align: center;
  }
  .q-btn{
    width: 90%;
    margin: 0 auto;
    height: 5rem;
    p{
      width: 100%;
      height: 2rem;
      border-radius: 1rem;
      background-color: rgb(20,187,126);
      text-align: center;
      color: white;
      line-height: 2rem;
      font-size: 0.7rem;
      margin-top: 0.5rem;
    }
  }
  .b-btn{
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    div{
      p{
        color: #3c3c3c;
      }
      p:nth-child(2){
        font-size: 0.5rem;
        color: #CCCCCC;
      }
    }
  }
</style>
