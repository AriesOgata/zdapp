<template>
  <div>
    <!--搜索框-->
    <div id="searchbox">
      <img src="../../assets/images/topbg.png" class="bgimg">
      <div class="con_search">
        <div class="searchtext">
            <input type="text" placeholder="请输入机构名称" class="header_search_input" @keyup.enter="jgSearch" v-model="keyword">
            <img src="../../images/sy_icon.png" alt="" class="header_search_sy">
        </div>
        <div class="quxiao" @click="toback">取消</div>
      </div>
      <!-- <div id="search_kinds">
        <div  v-for="item in wpList"
            :class="{actives : actives == item.name}" 
            @click="selected(item.name)" >{{item.name}}
        </div>
      </div> -->

  </div>
   <!--搜索框 E-->
   <!--历史搜索 S-->
<div id="search_con">
  <div class="serach_history">
    <p class="searchtit">历史搜索</p>
    <div style="border:1px solid #fff;min-height: 3.4rem;height:2.2rem;overflow:hidden" id="searcha">
      <div>专工考证</div>
      <div>专业制冷工考证</div>
      <div>专业制冷证</div>
      <div>专业制冷工考证</div>
      <div>专工考证</div>
      <div>专业制冷工考证</div>
      <div>专业制冷证</div>
      <div>专业制冷工考证</div>
    </div>
    <p style="text-align: center"><x-icon type="ios-arrow-down" size="24" id="x-t"></x-icon></p>
  </div>
  <!--历史搜索 E-->
  <!--搜索发现 S-->
  <div class="serach_history">
    <p class="searchtit">搜索发现</p>
    <div class="search_find">
      <div>专工考证</div>
      <div>专业制冷工考证</div>
      <div>专业制冷证</div>
      <div>专业制冷工考证</div>
    </div>
  </div>
</div>
  <!--搜索发现 E-->
</div>
</template>
<script>
import {jglist} from 'src/service/api'
import { getStore, setStore } from 'src/config/mUtils'
export default {
  components: {
   
  },
  data () {
    return {
      results: [],
      value: '',
      keyword:'',//机构搜索
      wpList: [
        {
          name: '全部'
        },
        {
          name: '机构'
        },
        {
          name: '工种'
        }
      ],
      actives:'全部'
    }
  },
  mounted(){
    this.keyword = this.$route.query.keyword;
  },
  methods: {
   // 机构筛选
  jgSearch(res){
    console.log(res);
    let newCitySearch = res.target.value;
    console.log(newCitySearch)
    this.$router.push({path:'/organ',query:{keyword:newCitySearch}})
  },
  selected:function(name){
      this.actives=name;
  },
  toback(){
      this.$router.go(-1);
     },
  },
  watch:{
    keyword(){
      console.log(this.keyword)
    }
  }

}

</script>
<style type="text/css">
/*搜索框*/
.bgimg{position: absolute;width: 100%;height: 3rem;top:0;left:0;}
.con_search{line-height: 1.2rem}
.quxiao{vertical-align:top;color:#333;font-size:0.6rem;display: inline-block;margin-left:0.3rem;line-height: 1.4rem}
.searchtext{width:80%;background:#f2f2f2;display: inline-block;
  margin-left:0.5rem;overflow:hidden;
  border-radius:0.6rem;height: 1.2rem;line-height: 1.2rem}

.header_search_input{background-color: #f2f2f2;height:1.2rem;width:84%;position: relative;top:-0.13rem;margin-left:0.8rem;}
.header_search_sy{width:0.46rem;}
#searchbox{padding-top:0.8rem;height:4rem;position: relative;overflow:hidden;color: #888; }
#searchbox>div{position: relative;z-index:56;}
  #searchbox .weui-search-bar{background: transparent;font-size:0.66rem;}
  #searchbox .weui-search-bar__cancel-btn{color:#333;padding-top:0.1rem;}
  #searchbox form{padding:0.1rem 0;border-radius:0.8rem;}
  #searchbox .weui-search-bar:before,#searchbox .weui-search-bar:after{border:none;}
  .actives{color:#333 !important;border-bottom:2px solid #333;}
  #searchbox .weui-search-bar__label {
    padding-top:0.15rem !important;
  }
  #search_con{border-radius:0.3rem;position: relative;top:-1.02rem;background: #FFF;overflow:hidden;}
  #searchbox .vux-search-fixed{position: relative !important;background: transparent !important;}
  #search_kinds{display: flex;justify-content: space-around;margin-top:0.6rem;}
    #search_kinds>div{font-size:0.62rem;padding-bottom:0.2rem;}
   .serach_history{
      padding:0.4rem;
      background: #FFF;
      color: #888;
    }
  .searchtit{font-size:0.67rem;color:#333;font-weight:bold;margin-bottom:0.5rem;margin-top:0.4rem;}
  .serach_history>div{padding:0 0.2rem}
  .serach_history>div>div{font-size:0.62rem;display: inline-block;background:#f1f0f0;padding:0.15rem 0.3rem;border-radius:0.2rem;margin-bottom:0.3rem;}

</style>