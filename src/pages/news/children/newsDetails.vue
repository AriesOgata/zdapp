<template>
  <div id="newsList" style="background: #fff;">
    <div class="header">
      <x-header :left-options="{backText: ''}"  style="background-color:#fff;">
        <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
        新闻详情
      </x-header>
    </div>
    <div class="news_box">
      <div class="news_details_title">
        {{listText.post_title}}
      </div>
      <div class="news_details_time">
        <!-- <p>
          <span>作者：admin</span>
          <span>来源：互联网</span>
        </p> -->
        <span class="news_details_time">{{listText.published_time | formatDate}}</span>
      </div>

      <div class="news_details_text" v-html="post_content">
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader,Flexbox, FlexboxItem} from 'vux'
import {newsDetails} from 'src/service/api'
import {formatDate} from 'src/assets/js/time'

export default {
  components: {
    XHeader,
    Flexbox, 
    FlexboxItem
  },
  data () {
    return {
      listText:[],
      post_content:'',
      borderColor: {
        borderColor: '#333'
      },
    }
  },
  filters: {
    formatDate(time) {
        var date = new Date(time * 1000);
        return formatDate(date, 'yyyy年MM月dd日');
    },
  },
  methods:{
    back(){
        this.$router.go(-1);//返回上一层
    },
  },
  computed:{
  },
  mounted(){
    newsDetails({id:this.$route.query.id}).then(res => {
      this.time=res.time;
      this.listText = res.data.article;
      this.post_content = res.data.article.post_content.replace(/&lt;/g, "<").
                    replace(/&quot;/g,'"').
                    replace(/&gt;/g, ">");
      console.log(this.listText);

    });
    //console.log(this.rmessage);
  }
}
</script>

<style scoped>
*{
  font-size: 14px;
}
body, html{
  background: #fff;
}
strong, b {
  font-weight: bold;
  font-size: 16px;
  line-height: 1rem;
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
.news_box{
  padding:.5rem .7rem;
}
.news_details_title{
  width: 100%;
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: .1rem;
  line-height: 1.5rem;
}
.news_details_text{
  line-height: 1rem;
}
.news_details_time{
  color: #b2b2b2;
  padding: .5rem 0;
}
.news_details_time img{
  width: 100%;
}
</style>