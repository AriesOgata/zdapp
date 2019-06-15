<template>
  <div id="personFild">
    <div class="person_head">
      <img src="../../images/person_bg.png" alt="" class="person_head_bg">
      <div class="person_login">
        <p v-if="username" class="login_a">
          <img src="../../images/user_img.png" alt="">
          <span>{{username}}</span>
        </p>
        <router-link to="/login" class="login_a" v-else>
          <img src="../../images/user_img.png" alt="">
          <span>立即登录</span>
        </router-link>

      </div>
    </div>
    <div class="person_box person_icon_box">
      <flexbox :gutter="0">
        <flexbox-item>
          <div class="person_listIcon" @click="empty('我的机构')">
            <div class="person_list_img">
              <img src="../../images/person_icon1.png" alt="">
            </div>
            <span>我的机构</span>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="person_listIcon" @click="empty('我的课程')">
            <div class="person_list_img">
              <img src="../../images/person_icon2.png" alt="">
            </div>
            <span>我的课程</span>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="person_listIcon" @click="empty('我的试题')">
            <div class="person_list_img">
              <img src="../../images/person_icon3.png" alt="">
            </div>
            <span>我的试题</span>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="person_listIcon" @click="checkUpdate">
            <div class="person_list_img">
              <img src="../../images/person_icon4.png" alt="">
            </div>
            <span>我的版本</span>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="person_box" style="margin-top: -.5rem;">
      <group>
        <cell title="我的订单" is-link style="font-size: .6rem;" link="/order">
          <img slot="icon" width="16" style="display:block;margin-right:10px;" src="../../images/person_icon11.png">
        </cell>
        <cell title="我的收藏" is-link style="font-size: .6rem;" @click.native="empty('我的收藏')">
          <img slot="icon" width="16" style="display:block;margin-right:10px;" src="../../images/person_icon22.png">
        </cell>
        <cell title="我的点赞" is-link style="font-size: .6rem;" @click.native="empty('我的点赞')">
          <img slot="icon" width="16" style="display:block;margin-right:10px;" src="../../images/person_icon33.png">
        </cell>
        <cell title="我的评论" is-link style="font-size: .6rem;" @click.native="empty('我的评论')">
          <img slot="icon" width="16" style="display:block;margin-right:10px;" src="../../images/person_icon44.png">
        </cell>
      </group>
    </div>
    <div class="person_box" style="margin-top: -.5rem;">
      <group>
        <cell title="我的设置" style="font-size: .6rem;">
          <img slot="icon" width="16" style="display:block;margin-right:10px;" src="../../images/person_icon55.png">
        </cell>
      </group>
    </div>
    <div v-show="username" class="login_exit" @click="loginout">退出账号</div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import footNav from 'src/components/footNav'
  import {Flexbox, FlexboxItem, Group, Cell,} from 'vux'
  import {loginCheck, logout,getVersion} from 'src/service/api';
  import {setStore, getStore, removeStore} from 'src/config/mUtils'
  import '../../lib/mui/js/mui.min'

  export default {
    data() {
      return {
        username: "",
        wgtVer:null,
        checkUrl:'http://demo.dcloud.net.cn/test/update/check.php',
        wgtUrl:'http://zdapp.808w.com/upload/version/H500784D1.wgt'
      }
    },
    components: {
      Flexbox,
      FlexboxItem,
      Group,
      Cell,
      footNav
    },
    methods: {
      empty(name) {
        console.log(111)
        this.$router.push({path: '/empty', query: {name: name}})
      },
      gotoAddress(path) {
        this.$router.push(path)
      },
      //退出登录
      loginout() {
        logout({}).then(res => {
          removeStore("user");

          this.$vux.toast.show({
            text: '退出成功',
            type: 'text',
            position: 'middle'
          }),
            setTimeout(() => {
              this.$router.push("/home");
            }, 1000);
        });
      },
      login() {
        loginCheck({}).then(res => {
          console.log(res)
          return
        })
      },
      plusReady(){
        plus.runtime.getProperty(plus.runtime.appid,function(inf){
          this.wgtVer=inf.version;
          console.log("当前应用版本："+this.wgtVer);
        });
      },
      checkUpdate(){
        if(window.plus){
          var that=this
          plus.runtime.getProperty(plus.runtime.appid,function(inf){
            that.wgtVer=inf.version;
            console.log("当前应用版本："+that.wgtVer);
          });
          plus.nativeUI.showWaiting("检测更新...");
          var xhr=new XMLHttpRequest();
          xhr.onreadystatechange=function () {
            switch(xhr.readyState){
              case 4:
                plus.nativeUI.closeWaiting();
                if(xhr.status==200){
                  console.log("检测更新成功："+xhr.responseText);
                  var newVer=xhr.responseText;
                  console.log(that.wgtVer);
                  if(that.wgtVer&&newVer&&(that.wgtVer!=newVer)){
                    that.downWgt();
                  }else{
                    plus.nativeUI.alert("无新版本可更新！");
                  }
                }else{
                  console.log("检测更新失败！");
                  plus.nativeUI.alert("检测更新失败！");
                }
                break;
              default:
                break;
            }
          }
          xhr.open('GET',this.checkUrl);
          xhr.send();
        }else{
          console.log("pc无法执行plus命令");
        }

      },
      downWgt(){
        var that=this
        plus.nativeUI.showWaiting("下载wgt文件...");
        plus.downloader.createDownload( this.wgtUrl, {filename:"_doc/update/"}, function(d,status){
          if ( status == 200 ) {
            console.log("下载wgt成功："+d.filename);
            that.installWgt(d.filename); // 安装wgt包
          } else {
            console.log("下载wgt失败！");
            plus.nativeUI.alert("下载wgt失败！");
          }
          plus.nativeUI.closeWaiting();
        }).start();
      },
      installWgt(path){
    plus.nativeUI.showWaiting("安装wgt文件...");
    plus.runtime.install(path,{},function(){
      plus.nativeUI.closeWaiting();
      console.log("安装wgt文件成功！");
      plus.nativeUI.alert("应用资源更新完成！",function(){
        plus.runtime.restart();
      });
    },function(e){
      plus.nativeUI.closeWaiting();
      console.log("安装wgt文件失败["+e.code+"]："+e.message);
      plus.nativeUI.alert("安装wgt文件失败["+e.code+"]："+e.message);
    });
  }
  },
    mounted() {
      this.username = getStore("user");
      console.log(this.username)
      // this.check_updata();
      console.log(getStore('eletoken'));
      // if(window.plus){
      //   this.plusReady();
      // }else{
      //   document.addEventListener('plusready',this.plusReady,false);
      // }
    },
  }
</script>
<style>
  .person_head {
    width: 100%;
    height: 7rem;
    position: relative;
  }

  .person_head_bg {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 7rem;
  }

  .person_login {
    position: absolute;
    width: 100%;
    z-index: 99;
    text-align: center;
    padding-top: 1.5rem;
  }

  .person_login img {
    width: 3rem;
    display: block;
    margin: 0 auto;
  }

  .login_a span {
    font-size: .6rem;
    color: #fff;
  }

  .person_box {
    background: #fff;
  }

  .person_icon_box {
    padding: .6rem;
  }

  .person_listIcon {
    text-align: center;
  }

  .person_list_img {
    width: 1.2rem;
    height: 1.8rem;
    line-height: 2rem;
    margin: 0 auto;
  }

  .person_list_img img {
    width: 100%;
    vertical-align: middle;
  }

  .person_listIcon span {
    font-size: .6rem;
    color: #4e4e4e;
  }

  .login_exit {
    background: #ff4b4b;
    width: 5rem;
    color: #fff;
    font-size: .6rem;
    margin: 1rem auto;
    text-align: center;
    height: 1.5rem;
    line-height: 1.5rem;
    border-radius: .2rem;
  }
</style>
