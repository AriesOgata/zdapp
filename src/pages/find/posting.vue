
<template>
  <div style="background:#FFF ">
    <div id="bmhead">
      <x-header :left-options="{backText:''}"><b>信息发布</b><a slot="right" class="fubu" style="color:#5ebf83;font-size: 0.62rem">发布</a>
      </x-header>
    </div>
 	<div class="posting">
 		<div class="postingcontent">
	      		<textarea placeholder="说点什么吧..." style="font-size:0.6rem;min-height:5rem;padding:0.6rem;width:100%"></textarea>
   		</div>
   		 <div class="insertimg">
   		 	<img src="../../assets/images/addimg3.png">
   		 </div>
 	</div>
 	<!--分组-->
 	<div class="fenzu">
 		<p>选择分组</p>
 		<ul>
 			<li :class="{active:active == item.name}"  @click="selected(item.name)" v-for="item in wpList" > {{item.name}}</li>
 		</ul>
 	</div>
  </div>
 </div>
</template>
<script type="text/javascript">
  import {XHeader,XInput,Group,XTextarea} from 'vux'
  export default {
    data(){
      return {
         wpList: [
            {
              name: '电工作业'
            },
            {
              name: '焊工作业'
            },
            {
              name: '制冷空调'
            },
            {
              name: '高空作业'
            },
            {
              name: '危化品作业'
            }
          ],
          active:'焊工作业'

      }
    },
  components: {
     XHeader,XInput,Group,XTextarea
    },
  methods: {
       selected:function(name){
        console.log(name);
        this.active = name;
          
      },
  }
}
</script>
<style type="text/css" scoped>
/*报名投不样式*/
#bmhead .vux-header{
background: #FFF;
border-bottom:1px solid #eaeaea;
}
#bmhead .vux-header-title{
  color:#222;
}
#bmhead .vux-header .vux-header-left .left-arrow:before{
  border-color:#333;
}
/*评论 area*/
/deep/.postingcontent .weui-cells{margin-top:0;}
/deep/.postingcontent .weui-cells:after{border:none;}
.posting{background:#FFF;}
.insertimg{border-bottom:1px solid #eaeaea;}
.insertimg>img{max-width:5.2rem;margin-bottom:0.4rem;margin-left:0.6rem;}

/*分组*/
.fenzu{padding:0.6rem;}
.fenzu>p{font-size:0.7rem;margin-bottom:0.6rem;color:#000;}
.fenzu>ul>li{
	font-size:0.56rem;display:inline-block;border:1px solid #CCC;border-radius:0.6rem;padding:0.2rem 0.4rem;margin-bottom:0.6rem;margin-right:0.4rem;color:#666;
}
.active{
	background:#5ebf83 !important;color:#FFF !important;border-color:#5ebf83 !important;
}
</style>