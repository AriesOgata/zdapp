<template>
    <div id="findDetails">
      <div class="details_header">
      <x-header :left-options="{backText: ''}"  style="background-color:#fff;">
        <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
        机构详情
       <a slot="right"><x-icon type="ios-star-outline" size="20"></x-icon></a>
      </x-header>
    </div>
    <div class="findDetails_box">
      <div class="findDetails_user clear"> 
        <div class="findDetails_user_img">
          <img src="../../images/user_img.png" alt="">
        </div>
        <div class="findDetails_user_name">
          <p>安培教育_电工作业_金果老师</p>
          <span>2019.01.10</span>
        </div>
        <span class="findDetails_user_em">电工</span>
      </div>
      <div class="findDetails_title">
        电工作业如何报名到学习拿证？
      </div>
      <div class="findDetails_txt">
        <p>
          特种作业操作证是从事特殊工种作业人员必须熟悉相应特殊工种作业的安全知识及防范各种意外事故的技能。要求从业人员必须持卡（IC卡）上岗，即由国家安全生产监督管理局颁发《中华人民共和国特种作业操作证》方可上岗，此证书全国通用。特种作业操作证复审是每3年复审1次。

《特种作业人员安全技术培训考核管理规定》第四十条生产经营单位使用未取得特种作业操作证的特种作业人员上岗作业的，责令停产停业整顿，可以并处2万元以下的罚款。情节严重的，依照刑法有关规定追究刑事责任。
        </p>
        <p>
          电工操作证介绍，电工操作证，也称电工上岗证（IC卡），即特种作业人员操作证（电工），从事电气设备安装、维修等工作必须持有的证件，是经过国家安全生产相关培训和注册的证明。发证机构----安全生产监督管理局，上岗必备证书，没证书不予工作，证书带磁卡，全国通用。电工作业指对电气设备进行运行、维护、安装、检修、改造、施工、调试等作业(不含电力系统进网作业)。
        </p>
      </div>
      <div class="findDetails_zan">
        <span>3人点赞</span>
        <img src="../../images/user_img.png" alt="">
        <img src="../../images/user_img.png" alt="">
        <img src="../../images/user_img.png" alt="">
      </div>
    </div>
    <div class="findDetails_ping">
      <div class="findDetails_ping_title">
        <span class="findDetails_ping_h">评论区</span>
        <span class="findDetails_ping_num">2条</span>
      </div>
      <div class="find_lit_li details_evaluation_list clear">
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
            </flexbox-item>
            <flexbox-item>
              <div class="news_li_icon">
                <i><img src="../../images/news_icon2.jpg" alt="" class="news_li_iconImg"></i><span>20</span>
                <i><img src="../../images/news_icon3.jpg" alt="" class="news_li_iconImg"></i><span>2</span>
              </div>
            </flexbox-item>
          </flexbox> 
        </div>
      </div>
      <div class="find_lit_li details_evaluation_list clear">
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
            </flexbox-item>
            <flexbox-item>
              <div class="news_li_icon">
                <i><img src="../../images/news_icon2.jpg" alt="" class="news_li_iconImg"></i><span>20</span>
                <i><img src="../../images/news_icon3.jpg" alt="" class="news_li_iconImg"></i><span>2</span>
              </div>
            </flexbox-item>
          </flexbox> 
        </div>
      </div>
      <div class="findDetails_ping_txt">
        <input type="text" placeholder="说点什么吧~">
         <img src="../../images/news_icon2.jpg" alt=""><span>10</span>
         <img src="../../images/send.png" alt=""><span>5</span>
      </div>
    </div>
  </div>   
</template>

<script>
    import { XHeader,Flexbox, FlexboxItem,} from 'vux'
    export default {
        components:{
             XHeader,
             Flexbox, 
             FlexboxItem,
         },
    	data(){
            return{
                borderColor: {
                borderColor: '#333'
              },
            }
        },
        mounted(){

        },
        computed: {
        },
        methods: {
          back(){
              this.$router.go(-1);//返回上一层
          },
          gotoAddress(path){
            this.$router.push(path)
          }
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
.details_header{
  border-bottom: 1px solid #e9e9e9;
}
.findDetails_user{
  padding-bottom: .3rem;
}
.findDetails_box{
  background: #fff;
  padding: .3rem .5rem;
  margin-bottom: .5rem;
}
.findDetails_user_img{
  float: left;
  width: 1.5rem;
  margin-right: .5rem;
}
.findDetails_user_img img{
  width: 100%;
}
.findDetails_user_name{
  float: left;
  width: 10rem;
}
.findDetails_user_name p{
  font-size: .7rem;
  color: #333;
}
.findDetails_user_name span{
  display: block;
  font-size: .5rem;
  color: #666;
}
.findDetails_user_em{
  float: right;
  font-size: .3rem;
  padding: 0 .2rem;
  border:1px solid #5ebf83;
  border-top-right-radius: .3rem;
  border-bottom-left-radius: .3rem;
  color: #5ebf83;
}
.findDetails_title{
  font-size: .8rem;
  color: #333;
  padding-bottom: .7rem;
  font-weight: bold;
}
.findDetails_txt{
  font-size: .6rem;
  text-indent: 1rem;
  line-height: 1rem;
}
.findDetails_zan{
  margin-top: .7rem;
  border-top: 1px solid #e9e9e9;
}
.findDetails_zan span{
  color: #999;
  font-size: .5rem;
  display: inline-block;
}
.findDetails_zan img{
  width: 1rem;
  height: 1rem;
  vertical-align: middle;
}
.findDetails_ping{
  background: #fff;
  padding:0 .5rem;
}
.findDetails_ping_title{
  border-bottom: 1px solid #e9e9e9;
  line-height: 1.5rem;
}
.findDetails_ping_h{
  color: #343434;
  font-size: .6rem;
  font-weight: bold;
}
.findDetails_ping_num{
  float: right;
  font-size: .5rem;
  color: #999;
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
    padding:.5rem 0;
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
  }
  .news_li_icon{
    float: right;
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
  .findDetails_ping_txt{
    padding: .5rem 0;
  }
  .findDetails_ping_txt input{
    background: #e9e9e9;
    width: 10rem;
    line-height: 1rem;
    height: 1.5rem;
    padding-left: .3rem;
  }
  .findDetails_ping_txt img{
    width: 1rem;
    vertical-align: middle;
  }
  .findDetails_ping_txt span{
    font-size: .6rem;
    color: #666;
    padding-left: .5rem;
  }
</style>
