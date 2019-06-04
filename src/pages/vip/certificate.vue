<template>
    <div class="certi">
      <div class="header">
        <x-header :left-options="{backText: ''}" style="background-color:white;">
          <a class="goBack" v-on:click="back"></a>
          证书查询
        </x-header>
      </div>
      <div class="center">
        <p>个人操作证免费查询</p>
        <p>一键登录，30秒可查询证书真假</p>
        <div class="cx">
            <select class="mui-btn mui-btn-block">
              <option value="item-1">选择证件类型</option>
              <option value="item-2">电工作业</option>
              <option value="item-3">高处作业</option>
              <option value="item-4">焊接与热切割作业</option>
              <option value="item-5">危险化学品安全作业</option>
              <option value="item-6">危险化学品经营</option>
              <option value="item-7">危险化学品生产</option>
              <option value="item-8">一般企业管理员</option>
              <option value="item-9">制冷与空调作业</option>
              <option value="item-10">注册安全评价师</option>
              <option value="item-11">安全评价师</option>
            </select>
            <input type="text" class="inp" placeholder="请输入证件编号">
            <p>立即查询</p>
        </div>
      </div>
      <div class="foot">
        <div>
          <p>三大优势</p>
          <div>
            <img src="../../images/cha1.png" alt="">
            <p>数据全面</p>
            <p>数据评估全面真实</p>
          </div>
          <div>
            <img src="../../images/cha2.png" alt="">
            <p>诊断精准</p>
            <p>智能风控精准诊断</p>
          </div>
          <div>
            <img src="../../images/cha3.png" alt="">
            <p>隐私安全</p>
            <p>隐私数据超强加密</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {XHeader, Tab, TabItem, Popup, XSwitch, Cell, Group, XButton} from 'vux'
    export default {
        name: "certificate",
      components: {
        XHeader, Tab, TabItem, Popup, XSwitch, Cell, Group, XButton
      },
      methods: {
        back() {
          this.$router.go(-1);//返回上一层
        },
      }
    }
</script>

<style scoped>
  .header >>> .vux-header .vux-header-left .left-arrow:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid black;
    border-width: 1px 0 0 1px;
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
    top: 8px;
    left: 7px;
  }
  .center{
    padding: 2rem 1rem;
    background: url("../../images/cx-bg.jpg");
    background-size: cover;
    position: relative;
    height: 12rem;
  }
  .center>p:nth-child(1){
    text-align: center;
    color: white;
    font-size: 0.9rem;
  }
  .center>p:nth-child(2){
    text-align: center;
    color: white;
    font-size: 0.7rem;
    margin-top: 0.4rem;
    font-weight: 500;
  }
  .cx{
    width: 86%;
    height: 9rem;
    background-color: white;
    border-radius: 0.2rem;
    padding: 0 0.5rem;
    position: absolute;
    left: 7%;
    bottom: -3.2rem;
    border:1px solid rgb(114,221,173);
  }
  .mui-btn{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    font-size: 0.7rem;
    float: left;
  }
  input{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    font-size: 0.7rem;
    float: left;
  }
  .center>div p{
    width: 100%;
    height: 1.7rem;
    line-height: 1.7rem;
    font-size: 0.7rem;
    padding:0rem 0.5rem;
    float: left;
    background-color: rgb(90,191,130);
    text-align: center;
    color: white;
    border-radius: 0.3rem;
    margin-top: 0.7rem;
  }
  .foot{
    width: 100%;
    padding: 1rem;
    background-color: white;
    height: 15rem;
    overflow: hidden;
  }
  .foot>div{
    border-top: 1px solid #ccc;
    margin-top: 5.5rem;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .foot>div>p{
    position: absolute;
    top: -0.5rem;
    width: 30%;
    font-size: 0.7rem;
    text-align: center;
    background-color: white;
    color: rgb(130,229,163);
    left: 35%;
    font-weight: 600;
  }
  .foot>div div{
    text-align: center;
    margin-top: 2rem;
  }
  .foot>div div p{
    font-size: 0.6rem;
  }
  .foot>div div p:nth-child(3){
    font-size: 0.5rem;
    color: #ccc;
    margin-top: 0.3rem;
  }
</style>
