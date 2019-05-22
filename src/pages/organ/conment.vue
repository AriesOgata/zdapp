<template>
  <div>
    <div id="bmhead">
      <x-header :left-options="{backText: ''}"><b>全部评论</b></x-header>
    </div>
    <!--评论分类 S--> 
    <div class="ex-parts">
      <ul class="conmentlist">
        <li @click="conmentSelect('','all')" :class="[this.selectShow == 'all'?'active':'']">全部({{star.count_comment}})</li>
        <li @click="conmentSelect('praise','high')" :class="[this.selectShow == 'high'?'active':'']">好评(3)</li>
        <li @click="conmentSelect('praise','middle')" :class="[this.selectShow == 'middle'?'active':'']">中评(0)</li>
        <li @click="conmentSelect('praise','low')" :class="[this.selectShow == 'low'?'active':'']">差评(0)</li>
        <li @click="conmentSelect('rank','rank1')" :class="[this.selectShow == 'rank1'?'active':'']">服务热情(0)</li>
        <li @click="conmentSelect('rank','rank2')" :class="[this.selectShow == 'rank2'?'active':'']">教训耐心(0)</li>
        <li @click="conmentSelect('rank','rank3')" :class="[this.selectShow == 'rank3'?'active':'']">环境优雅(0)</li>
        <li @click="conmentSelect('rank','rank4')" :class="[this.selectShow == 'rank4'?'active':'']">收费合理(0)</li>
      </ul>
    </div>
    <!--评论分类 E-->
    <!--评论列表 S--> 
    <div class="ex-parts ex-parts2">
     <ul>
       <li class="conmentli" v-for="item in blogslist" :key="item.id">
        <!--用户头像 S-->
         <div class="userscu">
           <div>
             <img src="../../images/icon1.png">
           </div>
         </div>
        <!--用户头像 E-->
         <div class="conment_div2">
          <!--内容一级 S-->
           <div class="userconment">
             <div class="userstar">
                <p>{{item.user_nickname}}</p>
                 <div class="details_evaluation_list_star">
                  <rater v-model="item.userStar" :font-size="16"></rater>
                 </div>
             </div>
             <div class="youzhi">
               <img src="../../images/youzhi.jpg">
             </div>
           </div>
          <!--内容一级 E-->
          <!--内容二级 S-->
          <div class="conment_content">
              {{item.content}}
          </div>
          <!--内容二级 E-->
          <!--内容三级 S-->
          <div class="dianzan">
               <span class="loving"> <x-icon type="ios-heart" size="20" class="loving_icon" style="fill:#fb8e52;"></x-icon>{{item.praise_count}}</span>
          </div>
          <!--内容三级 E-->
         </div>
       </li>

       
     </ul>
    </div>
    <!--评论列表 E-->      
  <div class="ex-next" @click="toPosting">
   我要点评
  </div>
 </div>
</template>
<script type="text/javascript">
  import {XHeader,XInput,Group, Rater} from 'vux'
  import {blogs,star} from 'src/service/api'
  export default {
    data(){
      return{
          data:5,
          companyId:'',
          star:'',
          limit:20,
          page:1,
          cat_id:'',
          blogslist:'',
          selectShow:'all',
      }
    },
  components: {
     XHeader,XInput,Group,Rater
    },
  methods: {
    toPosting(){
      this.$router.push("/posting");
    },
    conmentSelect(type,data){
      this.selectShow = data;
      if(type == "praise"){
        blogs({praiseType:data,limit:this.limit,page:this.page,cat_type:this.cat_type,cat_id:this.$route.query.companyId}).then(res=>{
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
      }else if(type == "rank"){
        blogs({rankType:data,limit:this.limit,page:this.page,cat_type:this.cat_type,cat_id:this.$route.query.companyId}).then(res=>{
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
      }else{
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
      
    },
    rankSelect(rankType){
      
    }
  },
  mounted(){
    this.companyId = this.$route.query.companyId;
    star({companyId:this.$route.query.companyId}).then(res=>{
      console.log(res)
      this.star = res.data[0];
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
<style type="text/css">
/*报名投不样式*/
#bmhead .vux-header{
background: #FFF;
}
#bmhead .vux-header-title{
  color:#222;
}
#bmhead .vux-header .vux-header-left .left-arrow:before{
  border-color:#333;
}
/*评论分类*/
.ex-parts{padding:0.4rem;background:#FFF;margin-bottom:0.6rem;}
.ex-parts2{padding-bottom:0.8rem;}
.conmentlist{font-size:0.66rem;margin-top:0.4rem;}
.active{background-color:#5ebf83 !important;color:#f3f3f3 !important;}
.conmentlist>li{display: inline-block;background:#ecebeb;color:#848383;padding:0.2rem 0.4rem;border-radius:0.7rem;margin-bottom:0.5rem;margin-right:0.3rem;;font-size:0.6rem;}
.active{background-color:#5ebf83;color:#FFF;}
/*评论列表*/
.conmentli{overflow: hidden;border-bottom:1px solid #efeded;margin-bottom:0.6rem;}
.userscu{float: left;width:11%;}
.userscu>div{border-radius: 50%;}
.userscu>div>img{max-width:100%;}
.conment_div2{float: right;width:86%;}
.userconment{
overflow:hidden;
height:2.2rem;
}
.userstar{
  width:4rem;
  float: left;
  font-size:0.64rem;
}
.userstar >p{
  color:#328e55;
  margin-bottom: 0.2rem
}
.youzhi{
  float: right;width:2.4rem;}
.youzhi img{max-width:100%;}
.conment_content{font-size:0.66rem;color:#000;}
.dianzan{overflow: hidden;line-height: 1rem;padding-bottom:0.5rem;}
.loving{
  float: right;
  padding-top: 10px;
  padding-right: 10px;
  font-size:0.4rem;
  color:#999;
  
}
.loving_icon{
  fill: #999;
  vertical-align: middle;
  padding-right: 5px;
}
/*底部按钮*/
.ex-next{height:2rem;background: #5ebf83;color:#FFF;line-height:2rem; position: fixed;
    bottom:0;font-size:0.66rem;
    width:100%;text-align:center;}
</style>