<template>
  <div class="part">
    <div id="bmhead">
      <x-header :left-options="{backText: ''}"><b>信息确认</b></x-header>
    </div>
     <!--机构信息 S-->
     <div>
    	<p class="titp">机构信息信息</p>
    	<div class="center"> 
    		<p>机构名称:<span class="center-info">安培教育</span></p>
    		<p>联系电话:<span class="center-info">13155255445</span></p>
    		<p>营业执照号码:<span class="center-info">452145635478523</span></p>
    		<p>真实地址:<span class="center-info">白云边大厦十一楼</span></p>
    		<p>营业执照副本</p>
    		<div class="infoimg2">
	    		<div>
					<img src="../../assets/images/z.png">
				</div>
			</div>
			<p>机构图片</p>
    		<div class="infoimg2">	
    			<div>
    				<img src="../../assets/images/z.png">
    				<img src="../../assets/images/z.png">
    				<img src="../../assets/images/z.png">
    			</div>
    		</div>
    		
		</div>
		<div class="sureinfo">
				<div class="red successinfo">*</div>
				<div class="suremessage"><span class="red">请确认以上证面信息是否准确无误,</span>		如证面信息有误，请及时纠正或修改
			</div>
    	</div>

    	<!--确认信息-->
    	  <div class="ex-next" @click="toInfo()">
		   确认提交
		  </div>
    </div>
   <!--机构信息 E-->
    <!--负责人信息 S--> 
    <div  class="pad">
    	<p class="titp">负责人信息</p>
    	<div class="center">
    		<p>姓名:<span class="center-info">韦小宝</span></p>
    		<p>职务:<span class="center-info">总经理</span></p>
    		<p>电话:<span class="center-info">1313336666</span></p>
    		<p>身份证号码:<span class="center-info">45454544444455</span></p>
    	</div>
    	<div class="infoimg">
    		<div>
				<img src="../../assets/images/z.png">
				<img src="../../assets/images/f.png">
			</div>
		</div>
		<div class="sureinfo">
			<div class="red successinfo">*</div>
			<div class="suremessage"><span class="red">请确认以上证面信息是否准确无误,</span>如证面信息有误，请及时纠正或修改</div>
		</div>
    </div>
   <!--负责人信息 E--> 
 </div>
</template>
<script type="text/javascript">
  import {XHeader} from 'vux'
  export default {
  components: {
     XHeader
   },
  methods: {
     toInfo(){
      this.$vux.toast.show({
			text: '提交成功！',
			type:'text',
			position: 'middle'
		})
     }
  },
  data () {
    return {
      
    }
  }
}
</script>
<style type="text/css" scoped>
/*报名投不样式*/
body{color:#FFF;}
#bmhead .vux-header{
background: #FFF;
}
#bmhead .vux-header-title{
  color:#222;
}
#bmhead .vux-header .vux-header-left .left-arrow:before{
  border-color:#333;
}
/*报名信息*/
.part{background: #FFF}
.titp{color:#5ebf83;font-size:0.78rem;text-align:center;background:#f7f7f7;line-height:1.8rem;border-top:1px solid #eaeaea;border-bottom:1px solid #eaeaea;}
.center{
	width:90%;margin:0.8rem auto;background:#f7f7f7;padding:0.6rem 0.6rem;
}
.center>p{font-size:0.64rem;font-weight: bold;color:#333;line-height:1.6rem;}
.center-info{font-size:0.66rem;color:#333;margin-left: 0.8rem}
.infoimg{width:90%;margin:0 auto;}
.infoimg>div{overflow: hidden;
}
.infoimg>div>img{width:6.6rem;}
.infoimg>div>img:nth-of-type(odd){
	float: left
}
.infoimg>div>img:nth-of-type(even){
	float: right
}
.red{color:red;}
.successinfo{float: left;width:0.6rem}
.suremessage{float: left;width:90%;}
.sureinfo{font-size:0.64rem;width:90%;margin:0.8rem auto;overflow:hidden;line-height: 1.2rem;color:#333;}

/*机构信息*/
.infoimg2{

}
.infoimg2>div{
	overflow: hidden
}
.infoimg2>div>img{margin-bottom:0.6rem;}
.infoimg2>div>img:nth-of-type(odd){
	float: left;width:6rem;
}
.infoimg2>div>img:nth-of-type(even){
	float: right;width:6rem;
}
.pad{margin-bottom:2.4rem;}
/*底部按钮*/
.ex-next{height:2rem;background: #5ebf83;color:#FFF;line-height:2rem; position: fixed;
    bottom:0;font-size:0.66rem;
    width:100%;text-align:center;}
</style>