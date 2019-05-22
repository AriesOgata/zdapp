<template>
  <div>
    <div id="bmhead">
      <x-header :left-options="{backText: ''}"><b>申请入驻</b></x-header>
    </div>
    <!--基本信息 S--> 
    <div id="ex-sub">
      <p class="jgtit">负责人信息</p>
      <group>
          <div class="reda">*</div>
        <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
      </group>
      <group>
          <div class="reda">*</div>
        <x-input title="职务" name="" placeholder="职务" ></x-input>
      </group>
      <group>
          <div class="reda">*</div>
        <x-input title="电话" name="username" placeholder="请输入电话号码"  keyboard="number" ></x-input>
      </group>
    <div style="background:#FFF;padding-bottom:2rem">
      <p class="jgtit" style="margin-top:0.32rem;">身份证号码</p>
      <div class="sfzhm">
        <div>
          <p>上传身份证正面</p>
          <img src="../../assets/images/addimg2.png">
        </div>
        <div>
          <p>上传身份证背面</p>
          <img src="../../assets/images/addimg2.png">
        </div>
      </div>
      <p class="warminfo"><span class="red">*</span>上传图片注意清晰，不超过2M</p>
    </div>
  </div>
  <!--基本信息 E-->   

  <div class="ex-next1">
   <div @click="toInfo()">返回上层</div>
   <div @click="tosubmit()">确定提交</div>
  </div>
 </div>
</template>
<script type="text/javascript">
  import {XHeader,XInput,Group,  XButton, TransferDomDirective as TransferDom} from 'vux'
  export default {
 directives: {
    TransferDom
  },
  components: {
     XHeader,XInput,Group, XButton
   },
  methods: {
     toInfo(){
       this.$router.push("/info1");
     },
     tosubmit(){
       this.$router.push("/info3");
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
/deep/ #ex-sub .weui-cells{font-size:0.66rem;margin-top:0;}
#ex-sub .weui-cell__hd>label{
  width:4.3rem !important;
  text-align:left !important;
  font-size:0.64rem;
  color:#000;
}
#ex-sub{margin-top:0.5rem;}
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
.sfzhm{display: flex;padding:0.2rem 0.6rem ;justify-content: space-around;}
.sfzhm>div>p{font-size:0.64rem;text-align:center;}
.sfzhm>div>img{width:100%;display: block;margin-top:0.6rem;}
.sfzhm>div{width:38%;}

/*底部按钮*/
.ex-next1{position: fixed;bottom:0;width:100%;}
.ex-next1>div{ display: inline-block;width:49%;font-size:0.66rem;height: 2rem;line-height:2rem;text-align:center;}
.ex-next1>div:nth-of-type(1){
  background:#eaeaea
}
.ex-next1>div:nth-of-type(2){
  background:#5ebf83;color:#FFF;
}
</style>