<template>
  <div id="ct">
    <div class="hecen">
      <x-header :left-options="{backText: ''}"  style="background-color:rgba(0,0,0,0);">
        <a class="goBack"  v-on:click="back"></a>
        错题本
      </x-header>
      <div class="content">
        <div class="con1">
          <div>
            <p>2</p>
            <p>我的错题</p>
          </div>
        </div>
        <div class="con2">
          <div>
            <p>今日错题</p>
          </div>
          <div>
            <p>全部错题</p>
          </div>
        </div>
      </div>
    </div>
    <div class="lb">
      <div class="gg">
        <img src="../../images/ct.png" alt="">
      </div>
      <ul>
        <li>
          <p>职业道德与服务规范</p>
          <p>1 <span>></span></p>
        </li>
        <li>
          <p>汽车使用与常见故障处理</p>
          <p>1 <span>></span></p>
        </li>
      </ul>
      <div class="kg">
        <p>答对后自动删除移除错题</p>
        <my_switch v-model="value1"></my_switch>
      </div>
    </div>
    <div class="but">
      清空我的错题
    </div>
  </div>
</template>

<script>
  import { XHeader, Tab, TabItem, Popup, XSwitch, Cell, Group, XButton,TransferDom  } from 'vux'
  import my_switch from '../../components/switch'
  export default {
    name: "ct",
    components:{
      XHeader,
      Tab,
      TabItem,
      Popup,
      XSwitch,
      Cell,
      Group,
      XButton,
      my_switch
    },
    data() {
      return {
        value1: false //组件的初始状态
      }
    },
    methods:{
      back(){
        this.$router.go(-1);//返回上一层
      },
    }
  }
</script>

<style scoped>
  .hecen{
    height: 13rem;
    width: 100%;
    background: url("../../images/bg1.png");
    background-size:100% ;
  }
  .hecen >>> .vux-header .vux-header-title{
    color: white;
  }
  .hecen >>> .vux-header .vux-header-left .left-arrow:before{
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid white;
    border-width: 1px 0 0 1px;
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
    top: 8px;
    left: 7px;
  }
  .content .con1{
    width: 40%;
    height: 6rem;
    border-radius: 50%;
    background-color: rgb(24,202,212);
    margin: 1rem auto;
    overflow: hidden;
  }
  .content .con1>div{
    width: 80%;
    height: 5rem;
    border-radius: 50%;
    background-color: white;
    text-align: center;
    margin: 0.5rem auto;
    overflow: hidden;
  }
  .content .con1>div p{
    color: rgb(36,196,104);
  }
  .content .con1>div p:nth-child(1){
    font-weight: bolder;
    font-size: 1.5rem;
    margin-top: 0.8rem;
  }
  .content .con1>div p:nth-child(2){
    font-size: 0.7rem;
  }
  .content .con2{
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
  }
  .content .con2 div{
    width: 30%;
    height: 1.5rem;
    background-color: white;
    color: rgb(36,196,104);
    border-radius: 1rem;
    font-size: 0.7rem;
    text-align: center;
    line-height: 1.5rem;
  }
  .lb .gg{
    width: 100%;
    height: 3.5rem;
    background-color: white;
    margin-bottom: 0.5rem;
  }
  .lb .gg img{
    width: 95%;
    height: 3.4rem;
    margin: 0 2.5%;
  }
  .lb ul li{
    border-bottom:1px solid rgb(233,233,233);
    display: flex;
    justify-content: space-between;
    padding: 0 0.7rem;
    font-size: 0.6rem;
    height: 1.5rem;
    line-height: 1.5rem;
    background-color: white;
  }
  .lb ul li p:nth-child(2){
    color: rgb(36,196,104);
  }
  .lb ul li p span{
    color: #ccc;
  }
  .but{
    position: fixed;
    z-index: 999;
    bottom:0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1.5rem;
    background-color:rgb(36,196,104);
    color: white;
    line-height: 1.5rem;
    text-align: center;
    font-size: 0.7rem;
  }
  .lb .kg{
    width: 100%;
    height: 2rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0.5rem;
    margin-top: 0.5rem;
    border-bottom: 1px solid rgb(233,233,233);
  }
  .lb .kg p{
    font-size: 0.7rem;
    line-height: 1.4rem;
  }
</style>
