<template>
  <div id="home">
    <div class="banner">
      <img src="../../images/banner.jpg" alt="" class="banner_img">
      <div class="header_box clear">
        <div class="header_address" @click="chooCity()">
           <section class="header_address_a ellipsis">
            <img src="../../images/add_icon.png" alt="" class="header_address_icon">
            {{LocationCity}}
         </section>
        </div>
        <div class="header_search" @click="toSearch">
          <img src="../../images/sear_icon.png" alt="" class="header_search_icon">
          <input type="text" placeholder="请输入机构名称">
          <img src="../../images/sy_icon.png" alt="" class="header_search_sy">
        </div>
        <div class="header_login">
           <router-link to="/personFile" class="header_login_a">
            <img src="../../images/user.png" alt="" class="header_login_user">
         </router-link>
        </div>
      </div>
    </div>
    <div class="module_block">
      <div class="module_block_list">
         <router-link to="/organ" class="module_block_a">
            <img src="../../images/icon1.png" alt="">
            <p>11111</p>
         </router-link>
         <router-link to="/learning" class="module_block_a">
            <img src="../../images/icon2.png" alt="">
            <p>课程学习</p>
         </router-link>
         <router-link to="/findList" class="module_block_a">
            <img src="../../images/icon3.png" alt="">
            <p>发现问题</p>
         </router-link>
         <router-link to="/qlearning" class="module_block_a">
            <img src="../../images/icon4.png" alt="">
            <p>试题学习</p>
         </router-link>
         <router-link :to="{ path: '/organDetail', query: {companyId:2569}}" class="module_block_a">
            <img src="../../images/icon5.png" alt="">
            <p>机构介绍</p>
         </router-link>
         <router-link to="/personFile" class="module_block_a">
            <img src="../../images/icon6.png" alt="">
            <p>个人中心</p>
         </router-link>
         <router-link to="/certificate" class="module_block_a">
            <img src="../../images/icon7.png" alt="">
            <p>证书查询</p>
         </router-link>
         <router-link to="/vip" class="module_block_a">
            <img src="../../images/icon8.png" alt="">
            <p>VIP专区</p>
         </router-link>
      </div>
    </div>
    <div class="module_block hot_module" >
      <div class="hot_title">
        <h2>
          热门中心
        </h2>
        <router-link :to="{ path: '/newsList' , query: {id:196}}" class="more_link">全部></router-link>
      </div>
      <div class="module_block_list hot_module_list" style="padding-bottom: 0;">
        <router-link to="/organ" class="hot_module_a">
            <p>报名</p>
           <img src="../../images/bao1.png" alt="">
        </router-link>
        <router-link :to="{ path: '/organDetail', query: {companyId:2569}}" class="hot_module_a">
            <p>机构介绍</p>
           <img src="../../images/bao2.png" alt="">
        </router-link>
         <router-link :to="{ path: '/newsList' , query: {id:196}}" class="hot_module_a" style="border-right: none;">
            <p>重点资讯</p>
           <img src="../../images/bao3.png" alt="">
        </router-link>
      </div>
    </div>
      <div class="module_block home-last">
      <tab :line-width="1" active-color='#5ebf83' custom-bar-width="50px" >
        <tab-item selected @on-item-click="onClick('news')">推荐</tab-item>
        <tab-item @on-item-click="onClick('course')">课程精选</tab-item>
        <tab-item  @on-item-click="onClick('video')">免费试听</tab-item>
      </tab>
      <div class="news_box" v-if="active_tab=='news'">
        <div class="news_list"  v-for="item in newslist">
          <div class="news_title">
            <router-link :to="{ path: '/newsList'}">
            <h3 >{{item.name}}</h3>
            <span>全部></span>
            </router-link>
          </div>
          <ul>
            <li class="news_list_li" v-for="row in item.children">
              <router-link :to="{ path: '/newsDetails'}">
                <p class="ellipsis">
                  {{row.name}}
                </p>
                <div class="news_imfor_box">
                  <span class="news_imfor_txt">众盾安全</span>
                  <span class="news_time">2019.1.11</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="course_box" v-if="active_tab=='course'">
        <div class="news_title" @click="toCourseList">
          <h3>课程列表</h3>
          <span>全部></span>
        </div>
        <div class="course_list">
          <ul>
            <li class="course_li" @click="toCourse">
              <section >
                <img src="../../images/banner.png" alt="" class="course_img">
              </section>
              <div class="course_txt">
                <p class="course_txt_title">
                  <span class="ellipsis">制冷与空调安装维修</span>
                  <i></i>
                </p>
                <p class="course_price">￥850</p>
                <div class="course_class">
                  <span>制冷空调(初训)</span>
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
            <li class="course_li" @click="toCourse">
              <section >
                <img src="../../images/banner.png" alt="" class="course_img">
              </section>
              <div class="course_txt">
                <p class="course_txt_title">
                  <span class="ellipsis">制冷与空调安装维修</span>
                  <i></i>
                </p>
                <p class="course_price">￥850</p>
                <div class="course_class">
                  <span>制冷空调(初训)</span>
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
      </div>
       <div class="video_box" v-if="active_tab=='video'">
         <div class="news_title" @click="toCourseList">
            <h3>课程列表</h3>
            <span>全部></span>
          </div>
          <div class="video_list">
            <router-link to="/courseList" class="video_list_a">
              <img src="../../images/leson1.jpg" alt="">
              <p class="ellipsis">电气作业(初训)</p>
            </router-link>
             <router-link to="/courseList" class="video_list_a">
              <img src="../../images/leson2.jpg" alt="">
              <p class="ellipsis">高压电工作业</p>
            </router-link>
             <router-link to="/courseList" class="video_list_a">
              <img src="../../images/leson3.jpg" alt="">
              <p class="ellipsis">制冷工作业</p>
            </router-link>
            <router-link to="/courseList" class="video_list_a">
              <img src="../../images/leson4.jpg" alt="">
              <p class="ellipsis">继电保护作业</p>
            </router-link>
          </div>
      </div>
    </div>
     <foot-nav></foot-nav>
    <div class="city-choo" :class="cityPickerShow?'':'city-hid'">
      <city-picker @closeMsg="close" @cityMsg="formPicker" :msgCity="LocationCity"></city-picker>
    </div>
  </div>
</template>

<script>
import footNav from 'src/components/footNav'
import { Tab, TabItem} from 'vux'
import {showlist} from 'src/service/api'
import {formatDate} from 'src/assets/js/time'
import BMap from 'BMap'
import cityPicker from 'src/components/cityPicker'
import {setStore,getStore} from 'src/config/mUtils'

document.addEventListener('plusready', function(a) {
  var first = null;
  plus.key.addEventListener('backbutton', function() {
//首次按键，提示‘再按一次退出应用’
    if (!first) {
      first = new Date().getTime();
      console.log('再按一次退出应用');//用自定义toast提示最好
      setTimeout(function() {
        first = null;
      }, 1000);
    } else {
      if (new Date().getTime() - first < 1000) {
        plus.runtime.quit();
      }
    }
  }, false);
});

export default {
  components: {
    Tab,
    TabItem,
    cityPicker,
    footNav
  },
  data () {
    return {
      active_tab: 'news',
      newslist:[],
      LocationCity:"定位中",
      cityPickerShow:false,
    }
  },
  filters: {
     formatDate(time) {
        var date = new Date(time * 1000);
        return formatDate(date, 'yyyy-MM-dd');
      }
  },
  methods:{
    onClick(state){
        this.active_tab = state;
      },
    toCourse(){
      this.$router.push("/courseDetail");
    },
    toCourseList(){
      this.$router.push("/courseList");
    },
    toSearch(){
      this.$router.push("/search");
    },
    gotoAddress(path){
        this.$router.push(path)
    },
    getLocation(){
      let _this = this;
      const geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function getinfo(position){
          let city = position.address.city;
          _this.LocationCity = city;

          //console.log(city);
      }, function(e) {
          _this.LocationCity = "定位失败"
          //console.log('fail');
      }, {provider: 'baidu'});
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
  mounted(){
    showlist().then(res => {
      this.newslist = res.data;
      console.log(this.newslist);
    });
    let LocationCity = getStore("LocationCity");
    if(!LocationCity){
      this.getLocation();
    }else{
      this.LocationCity = LocationCity;
    }

  },
}
</script>

<style scoped>
  body{
    background: #f4f4f4;
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
  .banner{
    position: relative;
    width: 100%;
    height: 8rem;
  }
  .banner_img{
    position: absolute;
    top:0;
    width: 100%;
    height: 8rem;
  }
  .header_login_user{
  height: .9rem;
  vertical-align: middle;
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
  .header_search img{
    vertical-align: middle;
  }
  .header_search input{
    width: 6rem;
    text-align: center;
  }
  .header_search .header_search_icon{
    width: .6rem;
  }
  .header_search .header_search_sy{
    height: .6rem;
  }
  .header_address_a{
    color: #808080;
    font-size: .6rem;
  }
  .header_search {
   float: left;
    font-size: .7rem;
    width: 8.8rem;
    height: 1.2rem;
    line-height: 1.2rem;
    background: #fff;
    border-radius: 1rem;
    position: relative;
    margin: 0 .5rem;
    text-align: center;
  }
  .header_login{
    float: left;
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
    padding-bottom: .8rem;
     border-bottom: 1px solid #e9e9e9;

   }
   .module_block_a{
    width: 25%;
    padding-top: .8rem;
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
  .hot_title{
    padding: 10px 1rem;
    border-bottom: 1px solid #e9e9e9;
    border-top: 1px solid #e9e9e9;
    line-height: 1rem;
    text-align: left;
  }
  .hot_title h2{
    display: inline-block;
    font-size: .6rem;
    border-left: 3px solid #5ebf83;
    padding-left: 5px;
    color: #343434;
  }
   .hot_module_a{
    width: 33.33%;
    padding: .3rem 0;
    border-right: 1px solid #e9e9e9;
   }
   .hot_module_a img{
      display: block;
      width: 4rem;
     /* height: 4rem;*/
      margin: 0 auto;
   }
   .hot_module_a p{
    font-size: .6rem;
    color: #343434;
    line-height: 2rem;
    text-align: center;
   }
   .more_link{
    float: right;
    color: #656565;
    font-size: .5rem;
   }
   .news_list,
   .course_box,
   .video_box{
    padding-top: .5rem;
   }
   .news_title{
    width: 100%;
    padding: 0 1rem;
    line-height: 1rem;
    text-align: left;
   }
   .news_title h3{
    display: inline-block;
    font-size: .6rem;
    padding:0 5px;
    color: #fff;
    background: #5ebf83;
    border-radius: 4px;
   }
   .news_title span{
    float: right;
    color: #656565;
    font-size: .5rem;
   }
   .news_list_li{
    padding: 10px 1rem;
    border-bottom: 1px solid #e6e6e6;
   }
   .news_list_li p{
    width: 100%;
    color: #343434;
    font-size: .6rem;
    line-height: 1rem;
    text-align: left;;
   }
   .news_imfor_box{
    margin-top: .5rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: .5rem;
    color: #333;
   }
   .news_imfor_txt{
    color: #666;
   }
   .news_time{
    color: #666;
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
    width: 100%;
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
    bottom: .1rem;
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
  .video_list{
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: .5rem;
  }
  .video_list_a{
    width: 50%;
  }
  .video_list_a img{
    display: block;
    width: 7rem;
    height: 4rem;
    margin: 0 auto;
  }
  .video_list_a p{
    font-size: .6rem;
    padding: .5rem 0;
    color: #333;
    text-align: center;
  }
   .home-last{
    margin-bottom: 3rem;
    border-top: 1px solid #e9e9e9;
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
