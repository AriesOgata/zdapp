<template>
  <div id="learning">
    <div class="header">
      <x-header :left-options="{backText: ''}"  style="background-color:#f5f5f5;">
        <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
        众盾安全
      </x-header>
    </div>
    <div class="banner_learning">
      <swiper auto height="100px" dots-position="center">
      <swiper-item class="banner_learning_img"><img src="../../images/study_banner1.jpg" alt=""></swiper-item>
      <swiper-item class="banner_learning_img"><img src="../../images/study_banner1.jpg" alt=""></swiper-item>
    </swiper>
    </div>
    <div class="learning_box">
      <flexbox :gutter="0" wrap="wrap" class="video_box">
        <flexbox-item :span="3">
          <div class="learning_box_list" @click="toStepTwo()">
            <img src="../../images/video_icon2.jpg" alt="我的课程" class="learning_box_list_icon">
            <span>我的课程</span>
          </div>
          <div class="learning_box_list" @click="toCourse()">
            <img src="../../images/video_icon3.jpg" alt="视频学习" class="learning_box_list_icon">
            <span>视频学习</span>
          </div>
        </flexbox-item>
        <flexbox-item :span="6">
          <div class="learning_box_list" @click="toCourse()"><img src="../../images/video_icon1.png" alt=""></div>
        </flexbox-item>
        <flexbox-item :span="3">
          <div class="learning_box_list" @click="toCourse1()">
            <img src="../../images/video_icon4.jpg" alt="" class="learning_box_list_icon">
            <span>免费试听</span>
          </div>
          <div class="learning_box_list" @click="toTeacher">
            <img src="../../images/video_icon5.jpg" alt="" class="learning_box_list_icon">
            <span>名师介绍</span>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0" wrap="wrap" class="study_box">
        <flexbox-item :span="3">
          <div class="learning_box_list" @click="toTest">
            <img src="../../images/test_icon2.jpg" alt="" class="learning_box_list_icon">
            <span>模拟测试</span>
          </div>
          <div class="learning_box_list" @click="toCt">
            <img src="../../images/test_icon3.jpg" alt="" class="learning_box_list_icon">
            <span>错题本</span>
          </div>
        </flexbox-item>
        <flexbox-item :span="6">
          <div class="learning_box_list" @click="toStxue"><img src="../../images/test_icon1.jpg" alt=""></div>
        </flexbox-item>
        <flexbox-item :span="3">
          <div class="learning_box_list" @click="toMyResult">
            <img src="../../images/test_icon4.jpg" alt="" class="learning_box_list_icon">
            <span>我的成绩</span>
          </div>
          <div class="learning_box_list" @click="toSc">
            <img src="../../images/test_icon5.png" alt="" class="learning_box_list_icon">
            <span>课程收藏</span>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import { XHeader,Flexbox, FlexboxItem,Swiper,SwiperItem,Toast} from 'vux'
import footNav from 'src/components/footNav'
import {loginCheck} from 'src/service/api'
import { getStore } from 'src/config/mUtils'
export default {
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    Swiper,
    SwiperItem,
    footNav,
    Toast
  },
  data () {
    return {
       borderColor: {
        borderColor: '#333'
      },
      username:''
    }
  },
  methods:{
   back(){
        this.$router.go(-1);//返回上一层
    },
  toCourse(){
    this.$router.push("/courseList");
  },
  toCourse1(){
    this.$router.push("/courseDetail");
  },
  toTeacher(){
    this.$router.push("/teacherAll");
  },
  toTest(){
    this.$router.push("/test");
  },
  toSc(){
     this.$router.push('/sc')
  },
  toCt(){
    this.$router.push('/ct')
  },
  toMyResult(){
    this.$router.push('/myresult')
  },
  toStxue(){
    this.$router.push('/stxue')
  },
    toStepTwo(){
      loginCheck({username:this.username}).then(res=>{
        if(res.code == 0){
          this.$vux.toast.show({
            text: '请先登录',
            type:'text',
            position: 'middle'
          })
          setTimeout(()=>{
            this.$router.push({path:'/login'});
          },1000)
        }else if(res.code == 1){
          this.$router.push({path:'/mycourse'});
        }
      });
    },
  },
  mounted(){
    this.username = getStore("user");
  }
}
</script>

<style scoped>
body, html{
  background: #fff;
}
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
.banner_learning_img img{
  width: 100%;
  display: block;
}
.learning_box{
  background: #fff;
  padding:1rem .5rem;
  padding-bottom: 2rem;

}
.video_box{
  padding-top: 1rem;
 /* padding-bottom: 1rem;*/
}
.learning_box_list{
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
}
.learning_box_list img{
  width: 80%;
  display: block;
  margin:0 auto;
}
.learning_box_list .learning_box_list_icon{
  width: 50%;
}
.learning_box_list span{
  color: #020202;
  font-size: .7rem;
}
</style>
