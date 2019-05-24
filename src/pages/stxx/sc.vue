<template>
  <div id="sc">
      <div class="hecen">
        <x-header :left-options="{backText: ''}"  style="background-color:rgba(0,0,0,0);">
          <a class="goBack"  v-on:click="back"></a>
          课程收藏
        </x-header>
        <div class="content">
            <div class="con1">
              <div>
                <p>2</p>
                <p>累计收藏</p>
              </div>
            </div>
        </div>
      </div>

    <div class="course_list">
      <ul>
        <li class="course_li" @click="toDetail">
          <section >
            <img src="../../images/banner.png" alt="" class="course_img">
          </section>
          <div class="course_txt">
            <p class="course_txt_title">
              <span class="ellipsis">低压电工</span>
              <i></i>
            </p>
            <p class="course_price">￥850</p>
            <div class="course_class">
              <span>电工作业</span>
            </div>
            <div class="course_box_btn">
              <router-link :to="{path: '/', query: {}}"  class="course_btn">
                试听
              </router-link>
              <router-link :to="{path: '/', query: {}}"  class="course_btn">
                购买
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="but">
      清空我的收藏
    </div>
  </div>
</template>

<script>
  import { XHeader, Tab, TabItem, Popup, XSwitch, Cell, Group, XButton,TransferDom  } from 'vux'
    export default {
        name: "sc",
      components:{
        XHeader,
        Tab,
        TabItem,
        Popup,
        XSwitch,
        Cell,
        Group,
        XButton
      },
      methods:{
        back(){
          this.$router.go(-1);//返回上一层
        },
        toDetail(){
          this.$router.push("/courseDetail");
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
  .course_list{
    background: #fff;
  }
  .course_li{
    display: -ms-flexbox;
    display: flex;
    border-bottom: .025rem solid #f1f1f1;
    padding: .7rem .8rem;
  }
  .course_img{
    width: 5rem;
    height: 3rem;
    display: block;
    margin-right: .5rem;
  }
  .course_txt{
    width: 60%;
    position: relative;
    text-align:left;
  }
  .course_txt_title{
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-size: .5rem;
    color: #333;
  }
  .course_txt_title i{
    float:right;
    width: 3rem;
    background: url(../../images/course_icon.png) no-repeat;
    background-size: 100% 100%;
  }
  .course_txt_title span{
    font-size: .6rem;
    font-weight: bold;
    display: block;
    width: 70%;
    text-align: left;
  }
  .course_price{
    font-size: .6rem;
    line-height: 1.5rem;

  }
  .course_class{
    font-size: .6rem;
    color: #656565;
  }
  .course_box_btn{
    position: absolute;
    right: 0;
    bottom: 1.1rem;
  }
  .course_btn{
    font-size: .5rem;
    color: #5ebf83;
    border: 1px solid #5ebf83;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-left: .2rem;
    padding: .1rem .3rem;
  }
</style>
