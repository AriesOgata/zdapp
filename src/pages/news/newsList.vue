<template>
  <div id="newsList" style="background: #fff;">
    <div class="header">
      <x-header :left-options="{backText: ''}"  style="background-color:#fff;">
        <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
        新闻列表
      </x-header>
    </div>
    <div class="news_box">
      <ul>
        <li class="news_li" v-for="item in list">
          <router-link :to="{ path: '/newsDetails', query: {id:item.id,cid:item.category_id}}">
            <flexbox>
              <flexbox-item :span="4">
                <img src="../../images/banner.png" alt="" class="news_img">
                <!-- <img src="{{list.thumbnail}}" alt="" class="news_img"> -->
              </flexbox-item>
              <flexbox-item :span="8">
                <div class="news_li_title">{{item.post_title}}</div>
                <div class="news_li_icon">
                  <i><img src="../../images/news_icon1.jpg" alt="" class="news_li_iconImg"></i><span>{{item.post_hits}}</span>
                  <i><img src="../../images/news_icon2.jpg" alt="" class="news_li_iconImg"></i><span>{{item.post_like}}</span>
                  <i><img src="../../images/news_icon3.jpg" alt="" class="news_li_iconImg"></i><span>2</span>
                </div>
              </flexbox-item>
            </flexbox>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { XHeader,Flexbox, FlexboxItem,} from 'vux'
import {newsList} from 'src/service/api'
export default {
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
  },
  data () {
    return {
      list:[],
       borderColor: {
        borderColor: '#333'
      },
    }
  },
  methods:{
   back(){
        this.$router.go(-1);//返回上一层
    },
  },
   mounted(){
    newsList({id:this.$route.query.id}).then(res => {
      this.list = res.data;
      console.log(this.list);
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
.news_li{
  padding:.5rem;
  border-bottom: 1px solid #e5e5e5;
}
.news_img{
  display: block;
  width: 100%;
  height: 3rem;
}
.news_li_title{
  max-height: 2rem;
  line-height: 1rem;
  font-size: .7rem;
  color: #1a1a1a;
  overflow: hidden;
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
  padding-right: .8rem;
}
</style>
