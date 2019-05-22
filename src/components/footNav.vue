<template>
<div class="footer_nav">
  <section @click = "gotoAddress('/organ')" class="footer_nav_item">
    <img :src="'/' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="报名">
    <span>报名</span>
  </section>
   <section @click = "gotoAddress('/learning')" class="footer_nav_item">
    <img :src="'/learning' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="学习">
    <span>学习</span>
  </section>
  <section @click = "gotoAddress({path: '/home'})" class="footer_nav_item" style="padding: 0;">
    <div class="home-img">
      <img src="../images/home.png" alt="">
    </div>
  </section>
  <section @click = "gotoAddress('/findList')" class="footer_nav_item">
    <img :src="'/findList' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="发现">
    <span>发现</span>
  </section>
  <section @click = "gotoAddress('/personFile')" class="footer_nav_item">
    <img :src="'/personFile' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="我的">
    <span>我的</span>
  </section>

    </div>
</template>

<script>

export default {

  data () {
    return {
      tabBarImgArr:[   //图片切换
        {normal: require('../images/main11.jpg'), selected: require('../images/main1.jpg')},
        {normal: require('../images/main22.jpg'), selected: require('../images/main2.jpg')},
        {normal: require('../images/main33.jpg'), selected: require('../images/main3.jpg')},
        {normal: require('../images/main44.jpg'), selected: require('../images/main4.jpg')}
      ]
    }
  },
  methods:{
    gotoAddress(path){
        this.$router.replace(path)
        console.log(path);
      }
  }
}
</script>

<style>
	 .footer_nav{
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    background: url(../images/footer_navBg.png) no-repeat center;
    background-size: 100% 100%;
    height: 2.6rem;
   }
   .footer_nav_item{
    -ms-flex: 1;
    flex: 1;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    align-items: center;
    padding-top: .7rem;
   }
  .footer_nav_item img{
    width: 1rem;
    height: 1rem;
    margin-top: .1rem;
    fill: #ccc;
  }
  .footer_nav_item span{
    font-size: .45rem;
    color: #656565;
  }
  .footer_nav_item .home-img{
   background: #5ebf83;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 5px solid #fff;
  }
  .footer_nav_item .home-img img{
    display: block;
    margin: 0 auto;
    padding-top: .5rem;
  }
  .footer_nav_item .home-img span{
    color: #fff;
  }
</style>
