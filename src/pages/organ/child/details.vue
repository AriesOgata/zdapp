<template>
  <div id="organ_details">
    <div class="details_header">
      <x-header :left-options="{backText: ''}"  style="background-color:#f5f5f5;">
        <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
        机构详情
       <a slot="right" @click="showShare()"> <img src="../../../images/send.png" alt="xxx" class="send-img"></a>
      </x-header>
    </div>
    <div class="details_box">
      <div class="details_banner">
        <img :src="imgurl+organ.license_photo" alt="">
      </div>
      <div class="details_title_box">
        <p class="details_title">
          <span class=" ellipsis">{{organ.name}}<img src="../../../images/course_icon.png" alt="" class="details_title_icon"></span>
          <a href="tel:400-999-6389">
          <img src="../../../images/tel.jpg" alt="" class="details_phone">
          </a>
        </p>
        <p class="details_certification">
          <img src="../../../images/icon1.jpg" alt="" class="details_img_iconR"><span>身份认证</span>
          <img src="../../../images/icon2.jpg" alt="" class="details_img_iconR"><span>授权认证</span>
          <img src="../../../images/icon3.jpg" alt="" class="details_img_iconR"><span>营业执照认证</span>
        </p>
      </div>
      <div class="details_address_box" @click="toBdmap()">
        <group>
        <cell :title="address" :value="distance" class="details_address">
          <img slot="icon" width="12" style="display:block;margin-right:5px;" src="../../../images/add_icon.png">
        </cell>
      </group>
      </div>
    </div>
    <div class="details_evaluation">
      <div class="details_evaluation_box_title clear" v-if="blogslist.length">
        <div class="details_evaluation_box_title_lf">
          <flexbox orient="vertical" :gutter="0">
            <flexbox-item>
              <div > <rater v-model="rank" disabled :font-size="20"></rater>{{rank}}.0</div>
            </flexbox-item>
            <flexbox-item>
              <p style="text-align: left;">
                <span>服务</span><i>{{rank1}}.0</i>
                <span>教学</span><i>{{rank2}}.0</i>
                <span>环境</span><i>{{rank3}}.0</i>
                <span>收费</span><i>{{rank4}}.0</i>
              </p>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="details_evaluation_box_title_rg">
          <cell :value="commentCount" class="details_address" is-link></cell>
        </div>
      </div>
      <div class="details_evaluation_box_title clear"  v-else>
        <div class="details_evaluation_box_title_lf">
          <flexbox orient="vertical" :gutter="0">
            <flexbox-item>
              <div > <rater value="0" disabled :font-size="20"></rater>0</div>
            </flexbox-item>
            <flexbox-item>
              <p style="text-align: left;">
                <span>服务</span><i>0</i>
                <span>教学</span><i>0</i>
                <span>环境</span><i>0</i>
                <span>收费</span><i>0</i>
              </p>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="details_evaluation_box_title_rg">
          <cell value="全部评价(0)" class="details_address" is-link ></cell>
        </div>
      </div>

      <div class="details_evaluation_list clear" v-for="item in blogslist" :key="item.id">
        <div class="details_evaluation_list_left">
          <img src="../../../images/icon1.png" alt="">
        </div>
        <div class="details_evaluation_list_rg">
          <flexbox orient="vertical" :gutter="0">
            <flexbox-item><div class="details_evaluation_list_user">{{item.user_nickname}}</div></flexbox-item>
            <flexbox-item>
              <div class="details_evaluation_list_star"><rater v-model="item.userStar" disabled :font-size="20"></rater>
              </div>
            </flexbox-item>
             <flexbox-item>
              <div class="details_evaluation_list_txt">{{item.content}}</div>
             </flexbox-item>
            <flexbox-item>
              <div class="details_evaluation_list_other">
                <span>所选课程：{{item.title}}</span>
               <!--  <span>学费：650元</span>
                <span>拿本：2个月</span> -->
                <span class="loving"> <x-icon type="ios-heart" size="20" class="loving_icon" style="fill:#fb8e52;"></x-icon>{{item.praise_count}}</span>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>

    <div class="ex-next" @click="toStepTwo()">立即报名</div>
    <div class="pop-mask" :class="[isShare?'':'pop-hidd']" @click="showShare()"></div>
    <div class="pop-container" :class="[isShare?'':'pop-hid']">
      <flexbox class="flex-box">
      <flexbox-item><div class="flex-demo"><img src="../../../images/wechat.png" alt=""><p>微信</p></div></flexbox-item>
      <flexbox-item><div class="flex-demo"><img src="../../../images/pyq.png" alt=""><p>朋友圈</p></div></flexbox-item>
      <flexbox-item><div class="flex-demo"><img src="../../../images/qq.png" alt=""><p>QQ</p></div></flexbox-item>

    </flexbox>
    <div class="cancel" @click="showShare()">取 消</div>
    </div>
  </div>
</template>

<script>
import BMap from 'BMap'
import { XHeader,Flexbox, FlexboxItem,Group,CellBox,Cell,XButton, Rater,Toast} from 'vux'
import {organDetails,blogs, star,loginCheck} from 'src/service/api'
import { getStore, setStore } from 'src/config/mUtils'

export default {
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
    Rater,
    CellBox,
    XButton,
    Toast
  },
  data () {
    return {
      username:'',
      data:5,
      address:"",
      distance:"",
      organ:[],
      limit:20,
      page:1,
      cat_id:'',
      blogslist:'',
      commentCount:'',
      rank:'',
      rank1:'',
      rank2:'',
      rank3:'',
      rank4:'',
      companyId:'',
      cat_type:'company',
      borderColor: {
        borderColor: '#333'
      },
      isShare:false,
      imgurl:'http://zdapp.808w.com'
    }
  },
  methods:{
   back(){
        this.$router.go(-1);//返回上一层
    },
    showShare(){
      this.isShare = !this.isShare;
    },
    toStepTwo(){
      let name = this.organ.name;
      let id = this.organ.id;
      console.log(this.username);
      loginCheck({username:this.username}).then(res=>{
        let data=res.data;
          console.log(res);
          if(res.code == 0){
            this.$vux.toast.show({
              text: '请先登录',
              type:'text',
              position: 'middle'
            })
            setTimeout(()=>{
              this.$router.push({path:'/login'});
            },2000)
          }else if(res.code == 1){
            this.$router.push({path:'/step2',query:{name:name,id:id}});
          }

      });

        // if(this.username==null){
        //   this.$vux.toast.show({
        //     text: '请先登录',
        //     type:'text',
        //     position: 'middle'
        //   })
        //   setTimeout(()=>{
        //     this.$router.push({path:'/login'});
        //   },2000)
        // }else{
        //   this.$router.push({path:'/step2',query:{name:name,id:id}});
        // }
    },
    toBdmap(){
      this.$router.push({path:'/bdmap',query:{longitude:this.organ.longitude,latitude:this.organ.latitude}});
    },
    rad(d){
      return d*Math.PI/180.0;//经纬度转换成三角函数中度分表形式
    },
    toConment(){
      this.$router.push({ path: '/conment', query: { companyId: this.companyId }})
    },
    //计算距离
    getDistance(lat1,lng1,lat2,lng2){
      let radLat1 = this.rad(lat1);
      let radLng1 = this.rad(lng1);
      let radLat2 = this.rad(lat2);
      let radLng2 = this.rad(lng2);
      let a = radLat1 - radLat2;
      let b = radLng1- radLng2;
      let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
      s = s*6378.137 ;// EARTH_RADIUS;
      s = Math.round(s * 10000) / 10000; //输出为公里
      s=s.toFixed(2);//四舍五入，取几位小数
      return s;
    },
  },
  computed:{

  },
  mounted(){
    this.username = getStore("user");
    this.companyId = this.$route.query.companyId;
    organDetails({companyId:this.$route.query.companyId}).then(res => {
      let _this = this;
      //console.log(res);
      this.organ = res.data;
      let lng = this.organ.longitude;
      let lat = this.organ.latitude;
      let point = new BMap.Point(lng, lat);
      let gc = new BMap.Geocoder();
      let latitude = getStore("latitude");
      let longitude = getStore("longitude");

      gc.getLocation(point, function(rs){
        //或者其他信息
        //console.log(rs.address);
        _this.address = rs.address;
        _this.distance = _this.getDistance(lat,lng,latitude,longitude) + 'km';
      });
    });
    star({companyId:this.$route.query.companyId}).then(res=>{
      //console.log(res)
      this.star = res.data[0];
      this.commentCount = "全部评价("+res.data[0].count_comment+")";
      this.rank1 = Math.round(parseFloat(res.data[0].rank1)/20);
      this.rank2 = Math.round(parseFloat(res.data[0].rank2)/20);
      this.rank3 = Math.round(parseFloat(res.data[0].rank3)/20);
      this.rank4 = Math.round(parseFloat(res.data[0].rank4)/20);
      this.rank = Math.round((this.rank1+this.rank2+this.rank3+this.rank4)/4);
    });
    blogs({limit:this.limit,page:this.page,cat_type:this.cat_type,cat_id:this.$route.query.companyId}).then(res=>{
      //console.log(res);
      this.blogslist =res.data;
      for(let key in this.blogslist){
        let rank1 = this.blogslist[key].rank1;
        let rank2 = this.blogslist[key].rank2;
        let rank3 = this.blogslist[key].rank3;
        let rank4 = this.blogslist[key].rank4;

        this.blogslist[key].userStar = Math.round((rank1+rank2+rank3+rank4)/80);
      }
      console.log(this.blogslist);
    });

  }
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
.send-img{
  height: 1rem;
}
.details_banner img{
  display: block;
  width: 100%;
  height: 8rem;
}
.details_title_box{
  width: 100%;
  background: #fff;
  font-size: .5rem;
  text-align: left;
  padding:.5rem;

}
.details_title{
  padding-bottom: .5rem;
  font-size: .7rem;
  border-bottom: 1px solid #f5f5f5;
}
.details_title span{
  display: inline-block;
  width: 70%;
}
.details_certification{
  padding-top: .5rem;
}
.details_img_iconR{
  height: .8rem;
  vertical-align: middle;
}
.details_certification span{
  display: inline-block;
  padding-right: .4rem;
}
.details_title img{
  height: .5rem;
  padding-left: .3rem;
}
.details_title .details_phone{
  float: right;
  height: .8rem;
}
.details_address_box{
  background: #fff;
  margin-top: -.5rem;
}
.details_address{
  text-align: left;
  font-size: .6rem;
  color: #666;
}
.details_address_btn{
  position: fixed;
  width: 100%;
  bottom: 0;
  background:#5ebf83;
  color: #fff;
}
.details_evaluation{
  background: #fff;
  margin-top: .5rem;
  margin-bottom: 2rem;
}
.details_evaluation_list{
  padding:.3rem;
}
.details_evaluation_img img{
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
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
.details_evaluation_list_user{
  color: #999;
  font-size: .5rem;
  line-height: .8rem;
      padding-left: .1rem;
}
.details_evaluation_list_star{
   margin-top: -.4rem;
}
.details_evaluation_list_txt{
  font-size: .7rem;
  width: 9.5rem;
  color: #5f5d5d;
}
.details_evaluation_list_other span{
  color: #999;
  font-size: .6rem;
  padding-right: .5rem;
}
.loving{
  float: right;
  padding-top: 10px;
  padding-right: 10px;
}
.loving_icon{
  fill: #999;
  vertical-align: middle;
  padding-right: 5px;
}
.details_evaluation_title{
  width: 100%;
}
.details_evaluation_box_title{
  padding: .5rem 0;
  padding-left: .5rem;
  border-bottom: 1px solid #f5f5f5;
}
.details_evaluation_box_title_lf{
   float: left;
    font-size: .5rem;
    width: 9rem;
    color: #999;
    line-height: 1rem;
}
.details_evaluation_box_title_lf i{
  padding-right: 5px;
  color: #fb8e52;
}
.details_evaluation_box_title_rg{
  float: right;
  font-size: .6rem;
  color: #999;
}
.ex-next{height:2rem;background: #5ebf83;color:#FFF;line-height:2rem; position: fixed;
    bottom:0;font-size:0.64rem;
    width:100%;text-align:center;}
.bdMap{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: auto;
  z-index: 999;
}
.bdMap-hid{
  display: none;
}
.close-map{
  position: fixed;
  top: .5rem;
  left: .5rem;
  z-index: 999;
  background: #fff;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  color: #5ebf83;
}
.pop-mask{
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .4;
  position: fixed;
  top: 0;
  transition: .3s;
}
.pop-container{
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  transform: translateY(0);
  opacity: 1;
  transition: .3s;
}
.flex-box{
  padding-top: 1rem;
}
.flex-demo {
  text-align: center;
  font-size: .6rem;
  background-clip: padding-box;
}
.flex-demo img{
  width: 1.5rem;
  height: 1.4rem;
}
.cancel{
  width: 100%;
  border-top: 1px solid #ccc;
  text-align: center;
  font-size: .7rem;
  margin-top: 1.5rem;
  padding: .5rem 0;

}
.pop-hid{
  transform: translateY(100%);
}
.pop-hidd{
  display: none;
}
</style>
