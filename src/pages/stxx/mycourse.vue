<template>
  <div id="courseList">
    <div class="header">
      <x-header :left-options="{backText: ''}"  style="background-color:#fff;">
        <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
        课程列表
      </x-header>
    </div>


    <ul class="bg">
      <router-link class="course_li" v-for="item in myCourseList" tag="li" :to="{ path: '/courseDetail', query: {id:item.id}}">
        <section >
          <img :src="imgurl+item.small_picture" alt="" class="course_img">
        </section>
        <div class="course_txt">
          <p class="course_txt_title">
            <span class="ellipsis">{{item.title}}</span>
            <i></i>
          </p>
          <div class="course_class">
            <span>{{item.title}}</span>
          </div>
          <div class="course_box_btn">
            <router-link :to="{ path: '/courseDetail', query: {id:item.id}}"   class="course_btn">
              播放
            </router-link>
          </div>
        </div>
      </router-link>
    </ul>


  </div>
</template>

<script>
  import {courseList,myCourse} from 'src/service/api'
  import { Tab, TabItem, Popup, XSwitch, Cell, Group, XButton,TransferDom ,XHeader, } from 'vux'

  export default {
    name: 'mycourse',
    components: {
      Tab,
      TabItem,
      Popup,
      XSwitch,
      Cell,
      Group,
      XButton,
      XHeader,
    },
    data(){
      return{
        num:1,
        newslist:[],
        myCourseList:[],
        borderColor: {
          borderColor: '#333'
        },
        id:[],
        ids:[1,2,3,191,197,199],
        imgurl:'http://zdapp.808w.com'
      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
      toDetail(){
        this.$router.push("/courseDetail");
      },
      tab(index){
        this.num=index
      }
    },
    mounted(){
      myCourse().then(res=>{
        this.myCourseList=res.data;
        console.log(this.myCourseList);
      })
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
  .ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .test-header{
    width: 100%;
    height: 1.8rem;
    padding: .3rem .5rem;
    background-color: rgb(245, 245, 245);
    border-bottom: 1px solid #ccc;
  }
  .back-img{
    float: left;
    height: 1rem;
    width: 1rem;
  }
  .set-img{
    float: right;
    height: 1rem;
    width: 1rem;
  }
  .header-btn{
    margin: 0 auto;
    font-size: .8rem;
    text-align: center;
  }
  .in-b{
    font-size: .6rem;
    float: left;
    width: 4rem;
    text-align: center;
    line-height: 1.1rem;
  }
  .bg-choo{
    background: #000;
    color: #fff;
  }
  .course_list{
    background: #fff;
  }
  /*.bg{*/
    /*background-color: white;*/
  /*}*/
  .course_li{
    display: -ms-flexbox;
    display: flex;
    border-bottom: .025rem solid #f1f1f1;
    padding: .7rem .8rem;
    background-color: white;
    margin-top: 0.5rem;
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
