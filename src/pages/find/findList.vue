<template>
    <div id="findlist">
      <div class="header_box header_find clear ">
        <div class="header_address" @click="chooCity()">
           <section class="header_address_a ellipsis">
            <img src="../../images/add_icon.png" alt="" class="header_address_icon">
            {{LocationCity}}
         </section>
        </div>
        <div class="header_txt">
          众盾安全
        </div>
        <div class="header_login">
           <router-link to="/personFile" class="header_login_a">
            <img src="../../images/user.png" alt="" class="header_login_user">
         </router-link>
        </div>
      </div>
      <div class="module_block">
      <div class="module_block_list">
         <div class="module_block_a">
            <img src="../../images/find_icon1.jpg" alt="">
            <p>电工</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/find_icon2.jpg" alt="">
            <p>焊工</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/find_icon3.jpg" alt="">
            <p>制冷空调</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/find_icon4.jpg" alt="">
            <p>高处作业</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/find_icon5.jpg" alt="">
            <p>危险品</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/find_icon6.jpg" alt="">
            <p>一般企业</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/find_icon7.jpg" alt="">
            <p>危化品生产</p>
         </div>
         <div class="module_block_a">
            <img src="../../images/find_icon8.jpg" alt="">
            <p>同城</p>
         </div>
      </div>
    </div>
    <div class="find_list_box">
      <div class="find_tit">
        <img src="../../images/teacher_icon1.png" alt="">
        <span>每日推荐</span>
      </div>
      <div class="find_lit_li details_evaluation_list clear">
        <router-link to="/findDetails">
          <div class="details_evaluation_list_left">
            <img src="../../images/icon1.png" alt="">
          </div>
          <div class="details_evaluation_list_rg">
            <flexbox orient="vertical" :gutter="0">
              <flexbox-item >
                <div class="find_user_name">小马同志</div>
                <span class="find_user_i">电工</span>
              </flexbox-item>
              <flexbox-item>
                <div class="find_user_time">
                  三小时
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="find_comments_txt">教的好，拿证快，老师负责。</div>
                <div class="find_comments_img">
                  <img src="../../images/banner.jpg" alt="">
                  <img src="../../images/banner.jpg" alt="" >
                  <img src="../../images/banner.jpg" alt="" >
                  <img src="../../images/banner.jpg" alt="">
                  <img src="../../images/banner.jpg" alt="" >
                  <img src="../../images/banner.jpg" alt="" >
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="news_li_icon">
                  <i><img src="../../images/news_icon1.jpg" alt="" class="news_li_iconImg"></i><span>100</span>
                  <i><img src="../../images/news_icon2.jpg" alt="" class="news_li_iconImg"></i><span>20</span>
                  <i><img src="../../images/news_icon3.jpg" alt="" class="news_li_iconImg"></i><span>2</span>
                </div>
              </flexbox-item>
            </flexbox> 
          </div>
        </router-link>
      </div>
      <div class="find_lit_li details_evaluation_list clear">
        <router-link to="/findDetails">
          <div class="details_evaluation_list_left">
            <img src="../../images/icon1.png" alt="">
          </div>
          <div class="details_evaluation_list_rg">
            <flexbox orient="vertical" :gutter="0">
              <flexbox-item >
                <div class="find_user_name">小马同志</div>
                <span class="find_user_i">电工</span>
              </flexbox-item>
              <flexbox-item>
                <div class="find_user_time">
                  三小时
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="find_comments_txt">教的好，拿证快，老师负责。</div>
                <div class="find_comments_img">
                 
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="news_li_icon">
                  <i><img src="../../images/news_icon1.jpg" alt="" class="news_li_iconImg"></i><span>100</span>
                  <i><img src="../../images/news_icon2.jpg" alt="" class="news_li_iconImg"></i><span>20</span>
                  <i><img src="../../images/news_icon3.jpg" alt="" class="news_li_iconImg"></i><span>2</span>
                </div>
              </flexbox-item>
            </flexbox> 
          </div>
        </router-link>
      </div>
    </div>
    <!-- 发帖icon -->
    <div class="find_send_icon">
      <router-link to="/posting">
        <img src="../../images/find.png" alt="">
      </router-link>
    </div>
     <foot-nav></foot-nav>
     <div class="city-choo" :class="cityPickerShow?'':'city-hid'">
      <city-picker @closeMsg="close" @cityMsg="formPicker" :msgCity="LocationCity"></city-picker>
    </div>
  </div>   
</template>

<script>
import footNav from 'src/components/footNav'
import cityPicker from 'src/components/cityPicker'
import { XHeader,Flexbox, FlexboxItem,} from 'vux'
import {setStore,getStore} from 'src/config/mUtils'
export default {
  components:{
    XHeader,
    Flexbox, 
    FlexboxItem,
    footNav,
    cityPicker
  },
  data(){
    return{
      borderColor: {
        borderColor: '#333'
      },
      LocationCity:"",
      cityPickerShow:false,
    }
  },
  mounted(){
    this.LocationCity = getStore("LocationCity");
  },
  computed: {
  },
  methods: {
    back(){
        this.$router.go(-1);//返回上一层
    },
    gotoAddress(path){
      this.$router.push(path)
    },
    chooCity(){
      this.cityPickerShow = !this.cityPickerShow
    },
    close:function (res){
      if(res == 'close'){
        this.chooCity();
      }
    },
    formPicker(res){
      this.LocationCity = res;
      let longitude = getStore("longitude");
      let latitude = getStore("latitude");
      let da = getStore("type");
    },
  },
}

</script>
<style scoped>
.goBack {
  position: absolute;
  width: 12px;
  height: 12px;
  border-style: solid;
  border-color: white;
  border-width: 1px 0 0 1px;
  -webkit-transform: rotate(315deg);
  transform: rotate(315deg);
  top: 5px;
}
.header_login_user{
  height: .9rem;
  vertical-align: middle;
  }
  .header_find{
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
  }
  .header_box{
    position: relative;
    padding: .5rem;
    width: 100%;
  }
  .header_address{
    float: left;
    font-size: .7rem;
    width: 3.2rem;
    height:1.2rem;
    line-height: 1.2rem;
    padding-left: .5rem;
  }
  .header_address_icon{
    height: .6rem;
    vertical-align: middle;
  }
  .header_address_a{
    color: #808080;
    font-size: .6rem;
  }
  .header_txt {
   float: left;
    font-size: .7rem;
    width: 8.8rem;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
  }
  .header_login{
    float: right;
    width: 2rem;
    line-height: 1rem;
    text-align:center;
  }
  .header_login_a{
     font-size: .7rem;
     color: #5ebf83;
  }
  .module_block{
 /*   padding: 0 20px;*/
    background: #fff;
  }
  .module_block_list{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    margin-bottom: .5rem;
    padding-bottom: .5rem;
     border-bottom: 1px solid #e9e9e9;
  }
  .module_block_a{
    width: 25%;
    padding-top: .5rem;
   /* display: -ms-flexbox;
    display: flex;*/
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
   }
  .module_block_a img{
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
  }
  .module_block_a p{
    font-size: .5rem;
    color: #343434;
    line-height: 1rem;
  }
  .find_list_box{
    background: #fff;
    padding-bottom: 2rem;
  }
  .find_tit{
     padding:.2rem .5rem;
     border-bottom: 1px solid #e9e9e9;
  }
  .find_tit img{
    vertical-align: middle;
    height: .7rem;
  }
  .find_tit span{
    font-size: .7rem;
    color: #333;
    display: inline-block;
  }
  .find_lit_li{
    border-bottom: 1px solid #e9e9e9;
    padding:.5rem;
  }
  .details_evaluation_list_left{
  float: left;
  }
  .details_evaluation_list_left img{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  .details_evaluation_list_rg{
    padding-left: 2.5rem;
    width: 100%;
    text-align: left;
  }
  .find_user_name{
   float: left;
    width: 9rem;
    font-size: .7rem;
    padding-bottom: .1rem;
    color: #333;
  }
  .find_user_i{
    float: right;
    font-size: .3rem;
    padding: 0 .2rem;
    border:1px solid #999;
    border-top-right-radius: .3rem;
    border-bottom-left-radius: .3rem;
    color: #999;
  }
  .find_user_time{
    font-size: .5rem;
    color: #999;
    padding-bottom: .3rem;
  }
  .find_comments_txt{
    font-size: .7rem;
    padding-bottom: .3rem; 
    color: #333;
  }
  .find_comments_img{
   width: 100%
  }
  .find_comments_img img{
    width: 30%;
    height: 3rem;
  }
  .news_li_icon .news_li_iconImg{
  vertical-align: middle;
  height: .5rem;
  padding-top:.1rem; 
  }
  .news_li_icon span{
    font-size: .5rem;
    color: #808080;
    display: inline-block;
    padding-right: 2rem;
  }
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
    background: url(../../images/footer_navBg.png) no-repeat center;
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
  .find_send_icon{
    position: fixed;
    right: .3rem;
    bottom: 5rem;
  }
  .find_send_icon img{
    width: 2rem;
  }
  .city-choo{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow-y: auto;
    z-index: 999;
  }
  .city-hid{
    display: none;
  }
</style>
