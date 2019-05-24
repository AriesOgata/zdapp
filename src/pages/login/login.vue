<template>
  <div class="loginContainer">
    <x-header :left-options="{backText: ''}"  style="background-color:#fff;">
    <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
      <router-link to="/register" slot="right"><span class="register_btn">注册</span></router-link>
    </x-header>
    <div class="form_box">
       <div class="logo_icon">
        <img src="../../images/logo.jpg" alt="">
      </div>
      <div class="form_login">
         <section class="input_container">
          <input type="text" placeholder="请输入手机号" name="username" maxlength="11" class="phone"  v-model="ruleForm.username">
        </section>
        <section class="input_container">
          <input  :type="this.registration_data.pwdType" placeholder="请输入密码" class="pwd" name="password" v-model="ruleForm.password">
          <img :src="this.registration_data.src" @click="changeType()" class="pwd_img">
        </section>
        <div class="login_btn" @click="login('ruleForm')">登录</div>
      </div>
      <div class="clear ">
        <span class="find_pwd login_bStyle" @click="findPwd">找回密码</span>
        <span class="dx_login login_bStyle" style="display:none;">短信快速登录</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { XHeader,Flexbox, FlexboxItem,} from 'vux'
  import {loginForm,loginCheck} from 'src/service/api';
  import {setStore,getStore} from 'src/config/mUtils'

  export default {
    components:{
      XHeader,
    },
    data(){
      return {
        borderColor: {
          borderColor: '#333'
        },
        ruleForm: {
          username: '', //用户名
          password: '' //密码
        },
        registration_data:{
          pwdType:"password",
          src:require("../../images/login_kan1.png")
        }   
      }
    },
    methods:{
      back(){
            this.$router.go(-1);//返回上一层
      },
      findPwd(){
        this.$router.push('/findPwd')
      },
      changeType(){
        this.registration_data.pwdType = this.registration_data.pwdType==='password'?'text':'password';
        this.registration_data.src=this.registration_data.src==require("../../images/login_kan1.png")?require("../../images/login_kan2.png"):require("../../images/login_kan1.png");
      },
       //登录
      login(formName) {
        //保存的账号
        let name=this.ruleForm.username;
        //保存的密码
        let pass=this.ruleForm.password;
        if(name==''||name==null){
          alert("请输入正确的手机号");
          return
          }
        else if(pass==''||pass==null) {
          alert("请输入正确的密码");
          return
        }
        
        loginForm({username:name,password:pass}).then(res=>{
          let data=res.data;
          console.log(res);
          if(res.code == 0){
            this.$vux.toast.show({
            text: res.msg,
            type:'text',
            position: 'middle'
          })
          }else if(res.code == 1){
            this.$vux.toast.show({
              text: '登录成功',
              type:'text',
              position: 'middle'
            })
            setStore("user",name)
            setTimeout(()=>{
              this.$router.push("/personFile");
            },1000)
          }
       }); 
      }
    } 
  }

</script>

<style scoped>
body,html{
  background: #fff;
  width: 100%;
  height: 100%;
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
.register_btn{
  color: #5ebf83;
  fill:#5ebf83;
  font-size: .7rem;
}  
.form_box{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
   padding:0 1.5rem;
}
.logo_icon{
  width: 100%;
  padding: .8rem 0;
}
.logo_icon img{
  width: 2rem;
  display: block;
  margin:0 auto;
}
.form_login{
  width: 100%;
}
.input_container{
  position: relative;
  border-bottom: 1px solid #e6e6e6;
  line-height: 2rem;
}
.input_container input{
  font-size: .8rem;
  width: 100%;
}
.pwd_img{
    position: absolute;
    right: 0;
    top: 40%;
    width: 1rem;
}
.login_btn{
  margin: 1rem 0;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    background: #5ebf83;
    color: #fff;
    text-align: center;
    font-size: .6rem;
    border-radius: .2rem;
    letter-spacing: .2rem;
}
.login_bStyle{
  color: #333;
  font-size: .6rem;
}
.find_pwd{
  float: right;
}
.dx_login{
  float: left;
}

</style>
