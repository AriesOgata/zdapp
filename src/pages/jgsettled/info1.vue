@@ -1,105 +0,0 @@
<template>
  <div>
    <div id="bmhead">
      <x-header :left-options="{backText: ''}"><b>申请入驻</b></x-header>
    </div>
    <!--基本信息 S--> 
    <div id="ex-sub">
      <p class="jgtit">基本信息</p>

      <group>
        <div class="reda">*</div>
        <x-input title="机构名称" name="username" placeholder="请输入机构名称" is-type="china-name"></x-input>
      </group>
      <group>
       <div class="reda">*</div>
        <x-input title="联系电话" name="" placeholder="请输入联系电话码" keyboard="number"></x-input>
      </group>
      <group>
       <div class="reda">*</div>
        <x-input title="营业执照号码" name="username" placeholder="请输入营业执照号码" is-type="china-name"></x-input>
      </group>
      <group>
      <div class="reda">*</div>
        <x-input title="真实地址" name="" placeholder="请输入真实地址" keyboard="number"  ></x-input>
      </group>


    <div style="background:#FFF;padding-bottom:2rem">
      <p class="jgtit" style="margin-top:0.32rem;">证件上传</p>
      <div class="zjsc">
        <span>营业执照副本</span>
        <div> 
          <div></div>
           <a href="##">点击上传</a>
        </div>
      </div>
      <div class="zjsc">
        <span>机构图片</span>
        <div>
          <img src="../../assets/images/addimg.png">
        </div>
      </div>
      <p class="warminfo"><span class="red">*</span>上传图片注意清晰，不超过2M</p>
    </div>
  </div>
    <!--基本信息 E-->    
  <div class="ex-next" @click="toInfo()">
   下一步
  </div>
 </div>
</template>
<script type="text/javascript">
  import {XHeader,XInput,Group } from 'vux'
  export default {
  components: {
     XHeader,XInput,Group
    },
  methods: {
     toInfo(){
       console.log(111)
       this.$router.push("/info2");
     }
  }
}
</script>
<style  scoped>
/*报名投不样式*/
.reda{color:red;position: absolute;margin-top:0.6rem;margin-left:0.2rem;font-size:0.64rem;}
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
#ex-sub1{font-size:0.66rem;margin-top:1.6rem;color:#FFF}
#ex-sub .weui-cell__hd>label{
  width:4.3rem !important;
  text-align:left !important;
  font-size:0.64rem;
  color:#000;
}
#ex-sub{margin-top:0.5rem;}
/deep/#ex-sub .weui-cells{margin-top:0 !important;overflow:hidden;}
#ex-sub input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{ 
color:#CCC; 
font-size:0.6rem; 
}
/deep/ #ex-sub  .weui-cells:after{border-bottom:none;}
#ex-sub .vux-x-input{padding-top:0.6rem;padding-bottom:0.4rem;font-size:0.64rem;padding-left:0.6rem;}
.jgtit{color:#666;font-size:0.64rem;padding:0 0.6rem;line-height:1.8rem}

/*证件上传*/
.zjsc{overflow:hidden;font-size:0.64rem;padding:0.6rem;}
.zjsc>span{display: block;float:left;width:30%;}
.zjsc>div{float: right;width:70%;position: relative;top:-0.23rem;}
.zjsc>div>div{width:67%;height:1.3rem;background: #FFF;border:1px solid #dadada;display: inline-block;border-radius:0.2rem;height: 1.4rem}
.zjsc>div>a{display: inline-block;width:3.2rem;font-size:0.6rem;background:#5ebf83;color:#FFF;line-height: 1.4rem;text-align:center;border-radius:0.2rem;vertical-align:top;}
.zjsc>div>img{width:4rem;}

.warminfo{font-size:0.6rem;color:#999;padding:0.4rem 0.5rem;}
.red{color:red;}
/*底部按钮*/
.ex-next{height:2rem;background: #5ebf83;color:#FFF;line-height:2rem; position: fixed;
    bottom:0;font-size:0.66rem;
    width:100%;text-align:center;}
</style>