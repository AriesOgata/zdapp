<template>
  <div id="ex-step1">
    <div>
      <!--上部分 S-->
      <div id="topbg" style="margin-bottom: -.5rem;">
        <div>
          <img src="../../assets/images/topbg.png" alt="" class="spet1_img">
          <span class="logo_txt">
            <!-- 众盾安全 -->
            <img src="../../images/zdaq.png" alt="" class="logo_img">
          </span>
        </div>

      </div>
      <div style="background:#fff;">
        <div id="choosecity"  @click="chooCity()">
          <div>
            <group><cell title="选择考试城市" :value="LocationCity" is-link style="border-top:none;"></cell></group>
          </div>
        </div>
      </div>
      <!--上部分 E-->
      <!--学习阶段 S-->
      <div id="jieduan">
        <p class="ex-choose-city">报名状态</p>
        <div>
             <x-button  mini plain style="border-radius:99px;margin-right:0.4rem;padding-left:0.6rem" v-for="item in wpList" :key="item.name"
              :class="{active : active == item.name}"
              @click.native="selected(item.name)">
            {{item.name}}
          </x-button >
        </div>
      </div>
      <!--学习阶段 E-->
      <!-- 选择工种 S -->
      <div id="ex-gongzhong">
        <p class="ex-choose-city ">选择工种</p>
        <ul class="ex-gongzhong-ul">
          <li v-for="item1 in gzlists" class="ex-gongzhong-li">
            <div  :class="{exactive : exactive == item1.id}"
              @click="gzselected(item1.id)" >
              <img :src='item1.icon'>
              <p class="ellipsis">{{item1.name}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 选择工种 E -->
    </div>
    <div class="ex-next" >
      <!-- 下一步 -->
      <span style="float: left;width: 50%;background: #f0f0f0;color: #5ebf83;" @click="toHome">跳过</span>
     <span style="float: right;width: 50%;background: #5ebf83;" @click="nextStep()">下一步</span>
    </div>
		<div class="city-choo" :class="cityPickerShow?'':'city-hid'">
      <city-picker @closeMsg="close" @cityMsg="formPicker" :msgCity="LocationCity"></city-picker>
    </div>
    <!-- <div class="fanhui" @click="toHome">跳过</div> -->
  </div>
</template>
<script type="text/javascript">
  //
import BMap from 'BMap'
import {showlist} from 'src/service/api'
import {ChinaAddressV4Data,XAddress,TransferDom, Popup, Group, Cell, XButton, XSwitch,Value2nameFilter as value2name } from 'vux'
import { getStore, setStore } from 'src/config/mUtils'
import cityPicker from 'src/components/cityPicker'
  export default{
     directives: {
        TransferDom
      },
    data() {
        return {
          exactive:'',
					LocationCity:"定位中",
          cityPickerShow:false,
          title:'',
          value_0_1: [],
          value: [],
          addressData: ChinaAddressV4Data,
          showAddress: false,
          show13: false,
          gzid:'',
          wpList: [
            {
              name: '初训'
            },
            {
              name: '复审'
            }
          ],
          active:'初训',
          gzlists:[]
        }
      },
    components: {
      XAddress,
        Popup,
        Group,
        Cell,
        XSwitch,
        XAddress,
				XButton,
				cityPicker
      },
    created(){
      // var isopened =getStore("isopened");
      // if(isopened){
      //   this.$router.replace({path:'/home'});
      // }else{
      //     setStore("isopened",true);
      // }
    },
    methods:{
      selected:function(name){//有证无证
        console.log(name);
        this.active = name;
      },
      gzselected:function(name){//工种选择
          this.exactive = name;
          this.gzid=name;
      },
      choosegz:function(children){
        if(children){
          this.show13=true
          }
      },
      onShadowChange (ids, names) {
        //   console.log(ids, names)
      },
			getLocation(){
				let _this = this;
				const geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function getinfo(position){
						let city = position.address.city;
						_this.LocationCity = city;
						setStore("LocationCity",city);
						setStore("latitude",position.latitude);
						setStore("longitude",position.longitude);
						console.log(position);
				}, function(e) {
						_this.LocationCity = "定位失败"
						//console.log('fail');
				}, {provider: 'baidu'});
			},
      chooCity(){
        this.cityPickerShow = !this.cityPickerShow
      },
      close(res){
        if(res == 'close'){
          this.chooCity();
        }
      },
      toHome(){
        this.$router.push("/home");
      },
      formPicker(res){
        this.LocationCity = res;
      },
      nextStep(){
        let latitude = getStore("latitude");
        let longitude = getStore("longitude");
        if(longitude == '' || latitude == ''){
          this.$vux.toast.show({
            text: '请选择考试城市',
            type:'text',
            position: 'middle'
          })
        }else if(this.exactive == ''){
          this.$vux.toast.show({
            text: '请选择工种',
            type:'text',
            position: 'middle'
          })
        }else{
          setStore("active",this.active);
          setStore("exactive",this.exactive);
          this.$router.replace({path:'/organ',query:{id:this.gzid}});

        }
      },
    },
    mounted(){
      showlist().then(res=>{
        this.gzlists =res.data;
        console.log(this.gzlists);
        //alert(this.gzlist)
			});
			let LocationCity = getStore("LocationCity");
			if(!LocationCity){
				this.getLocation();
			}else{
				this.LocationCity = LocationCity;
			}
		}
  }
</script>
<style type="text/css">
.fanhui{
  color: #fff;
  font-size: .6rem;
  position: absolute;
  top: .5rem;
  right: .5rem;
}
.logo_txt{
    position: absolute;
    z-index: 999;
    font-size: 1rem;
    font-weight: bold;
    width: 100%;
    display: block;
    width: 100%;
    left: 0;
  }
.logo_img{
  width: 5rem;
  display: block;
  margin: 0 auto;
}
  #ex-step1>div:nth-of-type(1){ display: flex;
      display: -webkit-flex;
      /* vh 相对于可视区域的高度 */
      min-height: 100vh;
      /* 设置主轴方向 */
      flex-direction: column;   }
  .ex-next{
    height:2rem;
    /* background: #5ebf83; */
    color:#FFF;line-height:2rem; position: fixed;
    bottom:0;font-size:0.64rem;
    width:100%;text-align:center;
    bottom: -.1rem;
    }
  #topbg{width:100%;height: 5rem;overflow:hidden;position: relative;}
  .spet1_img{
    width: 100%;
    height: 5rem;
    position: absolute;
    top: 0;
    left: 0;
  }
  #topbg>div{color:#ffffff;font-size:0.8rem;text-align:center;padding-top:2rem;}
  #choosecity .vux-popup-picker-value{font-size:0.66rem;}
  #jieduan{margin-top:0.3rem;background:#FFF;padding:0.4rem;}
  .ex-choose-city{font-weight:bold;font-size:0.67rem;color:#505050;}
  #ex-gongzhong{padding:0.4rem;padding-top:0.8rem;background:#FFF;}
  .exactive{border:2px solid #5ebf83 !important;}
  .ex-gongzhong-li{margin-top:0.8rem;width:23%;margin-right:2%;overflow:hidden;display: inline-block;height: 4.4rem}
  .ex-gongzhong-li:nth-of-type(4n){margin-right:0;}
  .ex-gongzhong-li>div{display: block;border:2px solid #FFF;padding-top:0.2rem;}
  .ex-gongzhong-li>div>img{width:1.5rem;height:1.5rem;display: block;margin:0 auto;}
  .ex-gongzhong-li>div>p{text-align:center;margin:0.3rem 0;color:#999;font-size:0.6rem;}
  .emptyitem{
    width:0;
    visibility: hidden;

  }

  .active{
    border:1px solid #5ebf83 !important;
    background: #5ebf83 !important;
    color:#FFF !important;
  }
	.city-choo{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow-y: auto;
    z-index: 999;
  }
  .city-hid{
    display: none;
  }

</style>
