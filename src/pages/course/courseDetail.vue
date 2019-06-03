<template>
<div id="courseDetail">
	 <div class="details_header">
      <x-header :left-options="{backText: ''}"  style="background-color:#f5f5f5;">
        <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
        课程详情
      </x-header>
    </div>
	<div class="footer_nav">
      <section @click = "" class="footer_nav_item">
        <img src="../../images/couer_icon3.png" alt="">
        <span>咨询客服</span>
      </section>
       <section @click = "call" class="footer_nav_item">
        <img src="../../images/couer_icon1.png" alt="">
        <span>电话咨询</span>
      </section>
      <section @click = "toOrgan" class="footer_nav_item">
        <p class="buy-btn">立即购买</p>
      </section>

    </div>
	<video width="335" height="200" controls id="video-play" class="video-play" ref="video">
		<source type="video/mp4">
		您的浏览器不支持Video标签。
	</video>

	<div class="video-column">

		<div class="dianz"><img src="../../images/couer_icon2.png" class="dianz-img"><span>1234</span></div>
		<div class="share"><img src="../../images/send.png" class="share-img"><span>分享</span></div>
		<div class="clearfix"></div>
	</div>
	<div class="video-title">
		{{infoList.title}}
	</div>
	<tab :line-width="1" active-color='#5ebf83' custom-bar-width="50px" >
        <tab-item selected @on-item-click="onItemClick">目录</tab-item>
        <tab-item @on-item-click="onItemClick">介绍</tab-item>
        <tab-item  @on-item-click="onItemClick">推荐</tab-item>
  	</tab>
  	<div class="tab-container">
  		<div v-if="showIndex == 0">
  			<ul class="lesson-list">
				<li class="lesson-li">第一节 {{infokList.title}}</li>
			</ul>
  		</div>
  		<div v-else-if="showIndex == 1" class="course-intro">
			制冷与空调设备安装维修作业--陈老师
  		</div>
  		<div v-else class="course-list">


  		</div>
  	</div>
</div>
</template>

<script>
import { XHeader, Tab, TabItem, Popup, XSwitch, Cell, Group, XButton,TransferDom  } from 'vux'
import {Info} from 'src/service/api'
export default {
  	name: 'course',
	components: {
		XHeader,
		Tab,
		TabItem,
	    Popup,
	    XSwitch,
	    Cell,
	    Group,
	    XButton
	},
	data(){
		return{
			types:[{id:1,title:'电工作业'},{id:2,title:'制冷与空调作业'},{id:3,title:'高处作业'},{id:4,title:'焊接热切割'},{id:5,title:'电工'}],
			showIndex:0,
			borderColor: {
	        	borderColor: '#333'
	      },
      infoList:[],
      infokList:[]
		}
	},
  mounted(){
    Info({id:this.$route.query.id}).then(res=>{
      this.infoList=res.data.course
      this.infokList=res.data.courseLesson[0]
      this.$refs.video.src = res.data.courseLesson[0].media_uri
      console.log(this.infoList,this.infokList);
    })
  },
	methods:{
		onItemClick(index){
			console.log(index);
			this.showIndex = index;
		},
		back(){
        	this.$router.go(-1);//返回上一层
		},
		call(){
			window.location.href="tel:400-999-6389"
		},
		toOrgan(){
			this.$router.push("/organ");
		}
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
	.course-intro{
		font-size: .6rem;
	}
	.clearfix{
		clear: both;
	}
	.video-play{
		display: block;
		width: 100%;
		height: 9rem;
	}
	.video-column{
		width: 100%;
		padding: 0.2rem 0;
	}
	.video-column span{
		font-size: 0.5rem;
		color:#888;
	}
	.dianz-img,.share-img{
		width: 1rem;
		height: 1rem;
		vertical-align: middle;
		padding-right: .1rem;
	}
	.dianz{
		height: 1.5rem;
		float: left;
		padding-left: 1rem;
	}
	.share{
		height: 1.5rem;
		float: right;
		padding-right: 1rem;
	}
	.video-title{
		background: #fff;
		font-size: 0.7rem;
		width: 100%;
		line-height: 2rem;
		padding-left: .3rem;
		border-bottom: 1px solid #f2f2f2;
	}
	.tab-container{
		border-top: 1px solid #f2f2f2;
    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    padding: .5rem;

	}
	.lesson-list{
		background: #fff;
		width: 100%;
		padding: 0 .5rem;
		padding-bottom: 2.7rem;
	}
	.lesson-li{
		font-size: 0.6rem;
		padding-left:.2rem;
		line-height: 1.9rem;
		border-bottom: 1px solid #f2f2f2;
	}
	.course-list{
		background: #fff;
	}
	.course-like{
		font-size: .7rem;
    	padding-left: 1rem;
    	padding-top: .3rem;
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
		background: #fff;
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
		/*width: 1rem;*/
		height: 1rem;
		margin-top: .1rem;
		fill: #ccc;
	}
	.footer_nav_item span{
		font-size: .45rem;
		color: #656565;
	}
	.buy-btn{
		background: #5ebf83;
		color: #fff;
		font-size: .7rem;
		width: 100%;
    	height: 100%;
    	line-height: 2rem;
	}
</style>
