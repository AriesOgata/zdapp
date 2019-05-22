<!--  -->
<template>
<div id="register" class="register-container">
    <x-header :left-options="{backText: ''}"  style="background-color:#fff;">
    <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
    </x-header>
    <div class="container">
        <div class="logo-container"><img src="../../images/logo.jpg" alt="logo" class="img-logo"></div>
        
        <div class="form">
            <div class="form-item">
                <img src="../../images/sign1.png" alt="sign" class="img-sign">
                <input type="text" placeholder="请输入手机号" class="form-inpt" v-model="mobile">
            </div>
            <div class="form-item">
                <img src="../../images/sign2.png" alt="sign" class="img-sign">
                <input type="text" placeholder="请输入验证码" class="form-inpt" v-model="code">
                <div v-if="yzmShow" class="yzm-btn" @click="yzm">获取验证码</div>
                <div v-else class="yzm-count">{{countdown}}s</div>
            </div>
            <div class="form-item">
                <img src="../../images/sign3.png" alt="sign" class="img-sign">
                <input type="password" placeholder="请设置密码" class="form-inpt"  v-model="password">
            </div>
            <div class="form-item">
                <img src="../../images/sign4.png" alt="sign" class="img-sign">
                <input type="password" placeholder="再次输入密码" class="form-inpt"  v-model="password2">
            </div>
        </div>
         <div class="login-btn" @click="toLogin">在线登录</div>
         <div class="khxy" @click="agreement()"><input type="radio" checked="checked">同意客户协议</div>
         <div class="register-btn" @click="register">注册</div>
    </div>
    <div class="agree" :class="[agreeShow?'agree-hid':'']">
			<div class="close-map" @click="agreement()">✖</div>
			<p class="agree-text">
				这是客户协议
				</p>
				
		</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { XHeader } from 'vux'
import { register, yzmGet } from 'src/service/api'
import {setStore,getStore} from 'src/config/mUtils'

export default {
//import引入的组件需要注入到对象中才能使用
components: {XHeader},
data() {
//这里存放数据
return {
    borderColor: {
            borderColor: '#333'
    },
    yzmShow:true,
    countdown:'',
    mobile:'',
    code:'',
    mobile:'',
    password:'',
    password2:'',
    agreeShow:true,
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    back(){
        this.$router.go(-1);//返回上一层
    },
    toLogin(){
        this.$router.push('/login');
    },
    agreement(){
			this.agreeShow = !this.agreeShow
    },
    yzm(){
        let mobile = this.mobile;
        if(mobile == ''){
            this.$vux.toast.show({
                text: '请输入手机号',
                type:'text',
                position: 'middle'
            })
            return
        }
        console.log(mobile);
        yzmGet({mobile:mobile,type:'register'}).then(res=>{
            console.log(res);
            if(res.code == 1){
                this.setTime();
            }else if(res.code == 0){
                this.$vux.toast.show({
                    text: res.msg,
                    type:'text',
                    position: 'middle'
                })
            }
        });
    },
    setTime(){
        this.yzmShow = false;
        this.countdown = 60;
        let auth_timer = setInterval(()=>{
            this.countdown --;
            if(this.countdown <= 0 ){
                this.yzmShow = true;
                clearInterval(auth_timer);
            }
        },1000)
    },
    register(){
        let password = this.password;
        let password2 = this.password2;
        let mobile = this.mobile;
        let code = this.code;
        if(password != password2){
            this.$vux.toast.show({
                text: "两次输入密码不一致",
                type:'text',
                position: 'middle'
            })
            return
        }
        if(password.length<6){
            this.$vux.toast.show({
                text: "密码长度不能小于6位",
                type:'text',
                position: 'middle'
            })
            return
        }
        register({username:mobile,code:code,password:password}).then(res=>{
            console.log(res);
            if(res.code == 1){
                this.$vux.toast.show({
                    text: "注册成功",
                    type:'text',
                    position: 'middle'
                })
                setStore("user",this.mobile);
                setTimeout(()=>{
                    this.$router.push("/personFile");
                },1000)
            }else {
                this.$vux.toast.show({
                text: res.msg,
                type:'text',
                position: 'middle'
                })
            }
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.register-container{
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
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
.container{
    padding: 1rem 1.5rem 0;
}
.logo-container{
    width: 100%;
    text-align: center;
}
.img-logo{
    width: 2rem;
    height: 2rem;
}
.form{
    padding-top: .8rem;
}
.form-item{
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: .5rem;
}
.img-sign{
    width: 1.2rem;
    height: 1.2rem;
    float: left;
    vertical-align: middle;
    padding-top: .3rem;
}
.form-inpt{
    font-size: .7rem;
    padding: .5rem 0 .3rem .8rem;
    width: 50%;
}
.yzm-btn{
    float: right;
    background: #5ebf83;
    color: #fff;
    font-size: .6rem;
    height: 1.5rem;
    padding: .3rem .2rem;
    margin-top: .3rem;
    border-radius: 5px;
}
.yzm-count{
    float: right;
    background: #fff;
    color: #666;
    font-size: .6rem;
    height: 1.5rem;
    padding: .3rem .2rem;
    margin-top: .3rem;
    border-radius: 5px;    
}
.login-btn{
    font-size: .7rem;
    float: right;
    padding-top: .5rem;
}
.khxy{
    clear: both;
    font-size: .7rem;
    padding-top: .5rem;
}
.register-btn{
    width: 100%;
    background: #5ebf83;
    height: 1.5rem;
    text-align: center;
    color: #fff;
    font-size: .7rem;
    line-height: 1.5rem;
    margin-top: 1.5rem;
    border-radius: 10px;
    letter-spacing: .2rem;
}
.agree{
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background: #fff;
	overflow-y: auto;
	z-index: 999;
}
.agree-hid{
	display: none;
}
.agree-text{
	text-align: center;
	font-size: .8rem;
	padding-top: 1rem;
}
.close-map{
  position: fixed;
  top: .5rem;
  left: .5rem;
  z-index: 999;
  background: #fff;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  color: #5ebf83;
}
</style>