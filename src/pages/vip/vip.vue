<template>
  <div class="vip">
    <div class="header">
      <x-header :left-options="{backText: ''}" style="background-color:white;">
        <a class="goBack" v-on:click="back"></a>
        vip课程
      </x-header>
    </div>
    <div class="cen">
      <div class="cen1">
        <img src="../../images/01/zys.png" alt="">
        <img src="../../images/01/zys1.png" alt="">
      </div>
      <div class="cen2">
        <div class="cen2-1">
          <img src="../../images/01/01.png" alt="">
          <p>速成课程</p>
        </div>
        <div class="cen01">
          <img src="../../images/01/1.png" alt="">
          <div>
            <p>精简500题</p>
            <p>只做500题，考过无压力</p>
          </div>
          <img src="../../images/01/11.png" alt="" class="cen2-2">
        </div>
      </div>
      <div class="cen2">
        <div class="cen2-1">
          <img src="../../images/01/02.png" alt="">
          <p>秒懂技巧</p>
        </div>
        <div class="cen02">
          <img src="../../images/01/2.png" alt="">
          <div>
            <p>语音技巧</p>
            <p>1300题仅需106个技巧</p>
          </div>
        </div>
        <div class="cen02 cen02-1">
          <img src="../../images/01/3.png" alt="">
          <div>
            <p>视频讲解</p>
            <p>像刷抖音一样刷题</p>
          </div>
        </div>
      </div>
      <div class="cen2 cen3">
        <div class="cen2-1">
          <img src="../../images/01/03.png" alt="">
          <p>增值特权</p>
        </div>
        <div class="cen03">
          <img src="../../images/01/4.png" alt="">
          <img src="../../images/01/8.png" alt="">
          <p>专家课程</p>
        </div>
        <div class="cen03 cen03-1">
          <img src="../../images/01/5.png" alt="">
          <img src="../../images/01/9.png" alt="">
          <p>三天特训</p>
        </div>
        <div class="cen03 cen03-1">
          <img src="../../images/01/6.png" alt="">
          <img src="../../images/01/10.png" alt="">
          <p>去除广告</p>
        </div>
      </div>
      <div class="cen2">
        <div class="cen2-1">
          <img src="../../images/01/04.png" alt="">
          <p>安心保障</p>
        </div>
        <div class="cen01">
          <img src="../../images/01/7.png" alt="">
          <div>
            <p>考试无忧，安心保障服务</p>
            <p>考试不过，赔付100元</p>
          </div>
        </div>
      </div>
      <div class="cen4">
        <img src="../../images/01/12.png" alt="">
        <div>
          <img src="../../images/01/13.png"  alt="">
          <div>
            <p>$.JoAn</p>
            <p>本来工作和考试的时间冲突，没时间看题目，抱着侥幸的心态买了VIP课程，没想到VIP的三天特训真的有效。</p>
          </div>
        </div>
        <div>
          <img src="../../images/01/14.png"  alt="">
          <div>
            <p>喵桑</p>
            <p>本来工作和考试的时间冲突，没时间看题目，抱着侥幸的心态买了VIP课程，没想到VIP的三天特训真的有效。</p>
          </div>
        </div>
      </div>
      <div class="cen5">
        <p>常见问题汇总</p>
        <div>
          <p>1.VIP的有效期有多久</p>
          <p>单词支付vip开通时长为6个月，有效期从购买开通之日算起</p>
        </div>
        <div>
          <p>1.VIP的有效期有多久</p>
          <p>单词支付vip开通时长为6个月，有效期从购买开通之日算起</p>
        </div>
        <div>
          <p>1.VIP的有效期有多久</p>
          <p>单词支付vip开通时长为6个月，有效期从购买开通之日算起</p>
        </div>
        <div>
          <p>1.VIP的有效期有多久</p>
          <p>单词支付vip开通时长为6个月，有效期从购买开通之日算起</p>
        </div>
        <div>
          <p>1.VIP的有效期有多久</p>
          <p>单词支付vip开通时长为6个月，有效期从购买开通之日算起</p>
          <a href="#">激活VIP课程</a>
        </div>
      </div>
    </div>
    <div class="foo">
      <img src="../../images/01/15.png" alt="">
    </div>
  </div>
</template>

<script>
  import {XHeader, Tab, TabItem, Popup, XSwitch, Cell, Group, XButton} from 'vux'

  export default {
    name: "vip",
    components: {
      XHeader, Tab, TabItem, Popup, XSwitch, Cell, Group, XButton
    },
    methods: {
      back() {
        this.$router.go(-1);//返回上一层
      },
    }
  }
  document.addEventListener('plusready', function() {
    var webview = plus.webview.currentWebview();
    plus.key.addEventListener('backbutton', function() {
      webview.canBack(function(e) {
        if(e.canBack) {
          webview.back();
        } else {
          webview.close(); //hide,quit
//plus.runtime.quit();
        }
      })
    });
  });

</script>

<style scoped>
  .vip{
    background-color: white;
  }
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

  .cen1 {
    width: 100%;
    height: 16rem;
  }

  .cen1 img {
    width: 100%;
    float: left;
  }

  .cen1 img:nth-child(1) {
    height: 75%;
  }

  .cen1 img:nth-child(2) {
    height: 25%;
  }
  .cen2{
    width: 100%;
    padding: 0.5rem 1rem;
    height: 7rem;
  }
  .cen2-1{
    width: 100%;
    height: 2rem;
    overflow: hidden;
  }
  .cen2-1 img{
    float: left;
    width: 2rem;
    height: 1.5rem;
  }
  .cen2-1 p{
    float: left;
    font-size: 0.8rem;
    line-height: 1.5rem;
    color: rgb(129,105,55);
    font-weight: bolder;
  }
  .cen2 .cen01{
    width: 100%;
    height: 4rem;
    border:1px solid rgb(228,219,201);
    border-radius: 0.3rem;
    position: relative;
    background-color: rgb(255,248,229);
    padding: 0.6rem 1rem;
  }
  .cen2 .cen01>img{
    float: left;
    width: 15%;
    height: 2.4rem;
  }
  .cen2 .cen01>div{
    float: left;
    overflow: hidden;
    margin-left: 0.5rem;
  }
  .cen2 .cen01>div p{
    font-size: 0.6rem;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }
  .cen2 .cen01>div p:nth-child(2){
    color: rgb(129,105,55);
    font-size: 0.4rem;
  }
  .cen2 .cen01 .cen2-2{
    position: absolute;
    right: 0.5rem;
    top: 0;
    width: 9%;
    height: 2rem;
  }
  .cen02{
    width: 47.5%;
    height: 4rem;
    border:1px solid rgb(228,219,201);
    border-radius: 0.3rem;
    background-color: rgb(255,248,229);
    float: left;
    overflow: hidden;
  }
  .cen02-1{
    margin-left: 3%;
  }
  .cen02 img{
    float: left;
    width: 18%;
    height: 1.5rem;
    margin-top: 1.2rem;
    margin-left: 0.2rem;
  }
  .cen02 div{
    float: left;
  }
  .cen02>div p{
    font-size: 0.6rem;
    margin-top: 1rem;
    margin-left: 0.2rem;
  }
  .cen02>div p:nth-child(2){
    font-size: 0.4rem;
    margin-top: 0.3rem;
  }
   .cen02>div p:nth-child(2){
    color: rgb(129,105,55);
  }
  .cen03{
    width: 32%;
    height: 4rem;
    border:1px solid rgb(228,219,201);
    border-radius: 0.3rem;
    background-color: rgb(255,248,229);
    float: left;
    position: relative;
    text-align: center;
  }
  .cen03-1{
    margin-left: 2%;
  }
  .cen03 img:nth-child(1){
    width: 40%;
    height: 2rem;
    margin-top: 0.4rem;
  }
  .cen03 img:nth-child(2){
    width: 100%;
    height: 1rem;
    position: relative;
    bottom: -0.2rem;
    left: 0;
  }
  .cen03 p{
    position: absolute;
    left: 0.9rem;
    bottom: -1.2rem;
    font-size: 0.6rem;
  }
  .cen3{
    height: 9rem;
  }
  .cen4{
    width: 100%;
    margin-top: 1rem;
    padding: 0.6rem 1rem;
  }
  .cen4>img{
    width: 100%;
  }
  .cen4>div{
    border-bottom: 1px solid #ccc;
    height: 4rem;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  .cen4>div img{
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    border:1px solid rgb(244,255,251)
  }
  .cen4>div p{
    font-size: 0.5rem;
    margin-left: 0.3rem;
  }
  .cen4>div p:nth-child(1){
    color:rgb(171,171,171);
  }

  .cen5{
    width: 100%;
    padding: 0.6rem 1rem;
  }
  .cen5>p{
    text-align: center;
    color:rgb(147,116,47) ;
    font-size: 0.8rem;
    margin: 0.8rem;
  }
  .cen5 div{
    width: 100%;
    height: 4rem;
    border-radius: 0.3rem;
    border:1px solid rgb(228,219,201);
    margin-bottom: 0.8rem;
    padding: 0.5rem 1rem;
    position: relative;
  }
  .cen5 div p:nth-child(1){
    font-size: 0.7rem;
    font-weight: 500;
  }
  .cen5 div p:nth-child(2){
    font-size:0.5rem ;
    margin-top: 0.3rem;
  }
  .cen5 div a{
    position: absolute;
    right: 0;
    bottom: -1rem;
    border-bottom: 2px solid rgb(228,219,201);
    font-size: 0.5rem;
    color:rgb(147,116,47) ;
  }
  .foo{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 2.5rem;
    width: 100%;
  }
  .foo img{
    width: 100%;
    height: 100%;
  }
</style>
