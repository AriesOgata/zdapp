<template>
  <div id="organ">
    <div class="header_box clear">
        <div class="header_address" @click="chooCity()">
           <section class="header_address_a ellipsis">
            <img src="../../images/add_icon.png" alt="" class="header_address_icon">
            {{LocationCity}}
         </section>
        </div>
        <div class="header_search" @click="toSearch">
          <img src="../../images/sear_icon.png" alt="" class="header_search_icon">
          <input type="text" placeholder="请输入机构名称" v-model="keyword">
          <img src="../../images/sy_icon.png" alt="" class="header_search_sy">
        </div>
        <div class="header_login">
           <router-link to="/personFile" class="header_login_a">
            <img src="../../images/user.png" alt="" class="header_login_user">
         </router-link>
        </div>
    </div>
    <div class="organ_species">
       <tab :line-width="3" custom-bar-width="10px" active-color="#5ebf83" bar-active-color="5ebf83">
        <tab-item selected @on-item-click="onClick('organ')" class="organ_species_tit">培训机构</tab-item>
        <tab-item @on-item-click="onClick('teacher')" class="organ_species_tit">培训老师</tab-item>
        <tab-item @on-item-click="onClick('sqrz')" class="organ_species_tit">申请入驻</tab-item>
      </tab>
    </div>
    <div v-if="active_tab=='organ'" class="organ_item">
      <div :class="navBarFixed == true ? 'navBarWrap' :'organ_choose_title'">
        <flexbox :gutter="0">
        <flexbox-item><div class="organ_choose_t" :class="[type =='default' ? 'organ_choo_color' : '']" @click="updates('default')">综合</div></flexbox-item>
        <flexbox-item><div class="organ_choose_t" :class="[type =='map' ? 'organ_choo_color' : '']" @click="updates('map')">距离</div></flexbox-item>
        <flexbox-item><div class="organ_choose_t" :class="[type =='price' ? 'organ_choo_color' : '']" @click="updates('price')">价格</div></flexbox-item>
        <flexbox-item><div class="organ_choose_t" :class="[type =='comment' ? 'organ_choo_color' : '']"  @click="updates('comment')">评价</div></flexbox-item>
         <flexbox-item><div class="organ_choose_t organ_choose_icon">筛选<img src="../../images/choose_icon.jpg" alt=""></div></flexbox-item>
      </flexbox>
      </div>
      <div class="origan_box" v-if="empty">
        <empty :msg="msgcode0"></empty>
      </div>
      <div class="origan_box" style="margin-bottom:3rem" v-else>
        <div class="origan_list" v-for="items in jgdata">
          <router-link :to="{ path: '/organDetail', query: {companyId:items.id}}">
            <flexbox>
              <flexbox-item :span="4"><div class="origan_list_imgBox">
                <img :src="imgurl+items.license_photo" alt="" class="origan_img">
              </div>
              </flexbox-item>
              <flexbox-item>
                <div class="origan_txt">
                    <flexbox>
                      <flexbox-item class="ellipsis"><span class="origan_txt_title">{{items.name}}</span></flexbox-item>
                      <flexbox-item :span="3"><img src="../../images/course_icon.png" alt="" class="origan_txt_title_img"></flexbox-item>
                    </flexbox>
                    <p class="origan_evaluation">
                     <rater v-model="data" :font-size="15" disabled></rater>
                        {{items.count_comment}}条
                      </p>
                    <div class="origan_class">
                      <flexbox>
                        <flexbox-item :span="9"><div class="origan_buy">{{items.min_price==null?'暂无价格':'￥'+items.min_price}}</div></flexbox-item>
                       <!--  <flexbox-item><div class="origan_curse ellipsis"><span>电工</span><span>焊工</span></div></flexbox-item> -->
                        <flexbox-item :span="3"><div class="origan_km">{{GetDistance(items.latitude,items.longitude)}}km</div></flexbox-item>
                      </flexbox>
                    </div>
                  </div>
              </flexbox-item>
            </flexbox>
        </router-link>
        </div>
      </div>
    </div>
    <div v-if="active_tab=='teacher'" class="teacher_item">
      <div class="teacher_list clear">
        <router-link to="/teacherDetails">
          <img src="../../images/teacher1.png" alt="" class="teacher_list_people">
          <div class='des'>
            <p class='mz'>金丹</p>
            <p class='star'>5分<rater v-model="data" :font-size="15" disabled></rater></p>
            <p class='lesson'>生产安全讲师</p>
          </div>
          <div class='shouc'><img src='../../images/teacher_icon1.png'></div>
        </router-link>
      </div>
      <div class="teacher_list clear">
        <router-link to="/teacherDetails">
          <img src="../../images/teacher2.png" alt="" class="teacher_list_people">
          <div class='des'>
            <p class='mz'>陈盛祺</p>
            <p class='star'>5分<rater v-model="data" :font-size="15" disabled></rater></p>
            <p class='lesson'>生产安全讲师</p>
          </div>
          <div class='shouc'><img src='../../images/teacher_icon2.png'></div>
        </router-link>
      </div>
      <div class="teacher_list clear">
        <router-link to="/teacherDetails">
          <img src="../../images/teacher3.png" alt="" class="teacher_list_people">
          <div class='des'>
            <p class='mz'>李超</p>
            <p class='star'>5分<rater v-model="data" :font-size="15" disabled></rater></p>
            <p class='lesson'>生产安全讲师</p>
          </div>
          <div class='shouc'><img src='../../images/teacher_icon1.png'></div>
        </router-link>
      </div>
      <div class="teacher_list clear">
        <router-link to="/teacherDetails">
          <img src="../../images/teacher4.png" alt="" class="teacher_list_people">
          <div class='des'>
            <p class='mz'>赵毅</p>
            <p class='star'>5分<rater v-model="data" :font-size="15" disabled></rater></p>
            <p class='lesson'>生产安全讲师</p>
          </div>
          <div class='shouc'><img src='../../images/teacher_icon1.png'></div>
        </router-link>
      </div>
    </div>
   <foot-nav></foot-nav>
    <div class="city-choo" :class="cityPickerShow?'':'city-hid'">
      <city-picker @closeMsg="close" @cityMsg="formPicker" :msgCity="LocationCity"></city-picker>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem, Flexbox, FlexboxItem,Rater} from 'vux'
import {jglist} from 'src/service/api'
import footNav from 'src/components/footNav'
import { getStore, setStore } from 'src/config/mUtils'
import BMap from 'BMap'
import cityPicker from 'src/components/cityPicker'
import empty from 'src/components/emptycontent'
export default {
	components: {
    empty,
		Tab,
		TabItem,
    Flexbox,
    FlexboxItem,
    Rater,
    footNav,
    cityPicker
	},
	data () {
    return {
        msgcode0:'暂无数据',
        data:5,
        LocationCity:"定位中",
        active_tab: 'organ',
        jgdata:[],
        LocationCity:'',
        cityPickerShow:false,
        type:'default',
        empty:false,
        navBarFixed:false,
        keyword:'',
      imgurl:'http://zdapp.808w.com'
    }
  },
  mounted(){
     // 事件监听滚动条
    window.addEventListener('scroll', this.watchScroll);
    this.updates('default');
    this.LocationCity=getStore('LocationCity');
    this.keyword = this.$route.query.keyword?this.$route.query.keyword:'';
  },
  methods:{
    updates(da){
      setStore("type",da);
      this.type = da;
      let longitude = getStore("longitude");
      let latitude = getStore("latitude");
      let gzid=this.$route.query.id;
      let name = this.$route.query.keyword?this.$route.query.keyword:'';
      jglist({longitude:longitude,latitude:latitude,type:da,category:gzid,name:name}).then(res=>{
          this.jgdata=res.data;
          console.log(res.code);
          if(res.code==0){
            this.empty=true
          }else{
            this.empty=false
          }
          console.log(this.jgdata);
      });
    },
    toSearch(){
      this.$router.push({path:"/search",query:{keyword:this.keyword}});
    },
    onClick(state){
      if(state == 'sqrz'){
        this.$router.push("/info1");
      }
      this.active_tab = state;
    },
    gotoAddress(path){
        this.$router.push(path);
    },
    chooCity(){
      this.cityPickerShow = !this.cityPickerShow
      console.log("cityPickerShow:"+this.cityPickerShow);
    },
    close(res){
      if(res == 'close'){
        this.chooCity();
      }
    },
    formPicker(res){
      this.LocationCity = res;
      let longitude = getStore("longitude");
      let latitude = getStore("latitude");
      let da = getStore("type");
      jglist({longitude:longitude,latitude:latitude,type:da}).then(res=>{
          this.jgdata=res.data;
          if(res.code==0){
            this.empty=true
          }else{
            this.empty=false
          }
          console.log(this.jgdata);
      });
    },
    /*经纬度计算距离*/
    GetDistance( lat2,  lng2){
      let longitude=getStore("longitude");;
      let latitude=getStore("latitude");
      var radLat1 = latitude*Math.PI / 180.0;
      var radLat2 = lat2*Math.PI / 180.0;
      var a = radLat1 - radLat2;
      var  b = longitude*Math.PI / 180.0 - lng2*Math.PI / 180.0;
      var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
      Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
      s = s *6378.137 ;// EARTH_RADIUS;
      s = Math.round(s * 10000) / 10000;
      s=s.toFixed(1);//四舍五入，取几位小数
      return s;
    },
     // 滚动
    watchScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 49) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
     },
  },
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
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
.organ_choo_color{
  color: #5ebf83;
}
#organ{
  background:#fff;
  font-size: 14px;
}
.header_login_user{
  height: .9rem;
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
    background: none;
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
    background: #f2f2f2;
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
.organ_species_tit{
  font-size: .7rem;
}
.organ_choose_title{
   padding:.5rem 0;
   border-bottom:1px solid #e9e9e9;
}
.organ_choose_t{
  text-align: center;
  font-size: .6rem;
  border-right:1px solid #e9e9e9;
}
.organ_choose_icon{
  border-right:none;
}
.organ_choose_icon img{
  height: .6rem;
  vertical-align: middle;
  padding-left: .2rem;
}
.origan_list{
  padding: 0.5rem;
    border-bottom: 1px solid #e9e9e9;
}
.origan_img{
  width: 100%;
  height: 3rem;
  vertical-align: middle;
}
.origan_txt_title{
  font-size: 0.6rem;
    color: #333;
}
.origan_txt_title_img{
  height: .5rem;
  padding-left: .3rem;
}
.origan_buy{
  font-size: .7rem;
  font-weight: bold;
  color: #666;
}
.origan_curse span{
  padding-right: .1rem;
}
.origan_evaluation{
  padding:.2rem 0;
  color: #343434;
}
.origan_curse,
.origan_km{
  color: #333;
}
.teacher_item{
  position: absolute;
  background:#fff;
  width:100%;
  height:100%;
  padding: 0 .8rem;
}
.teacher_list{
  border-bottom: 1px solid #e9e9e9;
  padding: .7rem 0;
}
.teacher_list_people{
  float: left;
  height: 3rem;
  width: 3rem;
  border-radius: .3rem;
  margin-right: .7rem;
}
.img{
  width: 3rem;
  height: 3rem;
  float: left;
  border-radius:.2rem;
}

.des{
  float: left;
  width: 8rem;
  color: #404040;
}

.mz{
  font-size: .8rem;
}

.star{
  font-size: .5rem;
  color: #999999;
  padding:.3rem 0;
}
.star img{
  width: 1rem;
  height: 1.5rem;
}
.lesson{
  font-size: .6rem;
  color: #999999;
}
.shouc{
  float: right;
  width: 1rem;
}
.shouc img{
width: 1rem;
}
// 定位
.navBarWrap {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9e9e9;
  position:fixed;
  width: 100%;
  background: #fff;
  top:0;
  z-index:999;
}
</style>
