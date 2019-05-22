<template>
  <div id="vip">
    <div class="header">
      <x-header :left-options="{backText: ''}"  style="background-color:#fff;border-bottom: 1px solid rgb(233,233,233)">
        试题学习
      </x-header>
    </div>
    <ul class="center">
      <li>
        <img src="../../images/icon1.png" alt="">
        <p>武汉必考</p>
      </li>
      <li>
        <img src="../../images/icon2.png" alt="">
        <p>章节练习</p>
      </li>
      <li>
        <img src="../../images/icon3.png" alt="">
        <p>易错题</p>
      </li>
      <li>
        <img src="../../images/icon4.png" alt="">
        <p>争议题</p>
      </li>
    </ul>
    <ul class="bottom">
      <li>
        <div>
          <div><p>1</p></div>
          电工作业
        </div>
        <p>60</p>
      </li>
      <li>
        <div>
          <div><p>2</p></div>
          高处作业
        </div>
        <p>10</p>
      </li>
      <li>
        <div>
          <div><p>3</p></div>
          焊接与热切割作业
        </div>
        <p>65</p>
      </li>
      <li>
        <div>
          <div><p>4</p></div>
          危险化学品安全作业
        </div>
        <p>62</p>
      </li>
      <li>
        <div>
          <div><p>5</p></div>
          危险化学品经营
        </div>
        <p>129</p>
      </li>
      <li>
        <div>
          <div><p>6</p></div>
          危险化学品生产
        </div>
        <p>71</p>
      </li>
      <li>
        <div>
          <div><p>7</p></div>
          一般企业
        </div>
        <p>31</p>
      </li>
      <li>
        <div>
          <div><p>8</p></div>
          制冷与空调作业
        </div>
        <p>145</p>
      </li>
    </ul>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import { Tab, TabItem, Popup, XSwitch, Cell, Group, XButton,TransferDom ,XHeader } from 'vux'
  import footNav from 'src/components/footNav'
  export default {
    name: "vip",
    components:{
      footNav,
      Tab, TabItem, Popup, XSwitch, Cell, Group, XButton,TransferDom ,XHeader
    }
  }
</script>

<style scoped>
  .vux-header .vux-header-left .left-arrow:before{
    border:1px solid black;
  }
  .center{
    width: 100% ;
    height: 4rem;
    background-color: white;
    margin-bottom: 0.5rem;
  }
  .center li{
    width: 25%;
    float: left;
    text-align: center;
  }
  .center li img{
    width: 50%;
    height: 2rem;
    margin-top: 0.5rem;
  }
  .center li p{
    font-size: 0.5rem;
  }
  .bottom{
    background-color: white;
  }
  .bottom li{
    height: 2rem;
    border-bottom: 1px solid rgb(233,233,233);
    line-height: 2rem;
    font-size: 0.6rem;
    padding-left:0.8rem ;
    padding-right:0.8rem ;
    display: flex;
    justify-content: space-between;
  }
  .bottom li>p{
    font-size: 0.5rem;
    color: #ccc;
  }
  .bottom li div div{
    float: left;
    width: 1.1rem;
    height: 1.1rem;
    background-color: rgb(94,191,131);
    border-radius: 50%;
    text-align: center;
    line-height: 1.1rem;
    margin-top: 0.4rem;
    margin-right:0.2rem ;
  }
  .bottom li div div p{
    width: 1rem;
    height: 1rem;
    background-color: rgb(94,191,131);
    border-radius: 50%;
    text-align: center;
    line-height: 1rem;
    color: white;
    border:1px solid white;
    margin: 0.06rem auto;
  }
</style>
