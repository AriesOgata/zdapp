<template>
  	<div id="city_picker">
        <div class="header clear">
            <img src="../images/close.png" class="img-close" @click="closeBtn()"/>
            <p class="header-title">选择地址</p>
        </div>
        <div class="city_input_box">
            <div class="city_input_style">
                <i class="city_input_icon"><img src="../images/sear_icon.png" alt=""></i>
                <input type="text" name="address_detail" placeholder="请输入地址" required="required" class="city_input" id="suggestId" v-model="address_detail">
            </div>
            <!-- <div id="search_list" v-show="isShow">
                <ul>
                    <li v-for="item in searchList" @click="transCity(item.name,item.longitude,item.latitude)" >
                        {{item.name}}
                    </li>
                </ul>
            </div> -->
        </div>
        <div class="city_positioning" @click="getLocation()">
            当前定位城市：{{LocationCity}}  
            <p class="relocation">重新定位</p>
        </div>
        <section class="city_name_box">
            <ul>
                <li v-for="(value, key, index) in sortgroupcity" :key="key">
                    <h4 :id="key">{{key}}
                        <span v-if="index == 0">（按首字母排序）</span>
                    </h4>
                    <ul class="clear">
                        <li v-for="item in value" :key="item.id" class="ellipsis city_name_li" @click="transCity(item.name,item.longitude,item.latitude)">{{item.name}}</li>
                    </ul>
                </li>
            </ul>
        </section>
        <aside class="letter-aside">
          <ul>
            <li v-for="(value, key, index) in sortgroupcity" @click="custormAnchor(key)"
  :key="index">
                {{key}}
            </li>
          </ul>
        </aside>
    </div>
</template>

<script>
import BMap from 'BMap'
import data from 'src/config/cityCenter.json'
import {setStore,getStore} from 'src/config/mUtils'
export default {
    components:{
    },
    data(){
        return{
            LocationCity: '',   //当前城市
            guessCityid: '', //当前城市id
            groupcity: {},   //所有城市列表
            address_detail: null, //详细地址
            userlocation: {lng: "", lat: ""},
            keyWord:'',//城市搜索
            searchList:'',
            isShow:false,
            closeCommand:false,
        }
    },
    props:['msgCity'],
    mounted(){
       this.groupcity = data,
       this.LocationCity = getStore("LocationCity");
        this.$nextTick(function () {
            var th = this
            //建立一个自动完成的对象
            var map = {lng: getStore("longitude"), lat: getStore("latitude")}
            var ac = new BMap.Autocomplete({
                "input": "suggestId" ,
                "location": map
            })
            var myValue
            //鼠标点击下拉列表后的事件
            ac.addEventListener("onconfirm", function (e) {   
                console.log("onconfirm");
                var _value = e.item.value;
                myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
                this.address_detail = myValue

                var local = new BMap.LocalSearch(map, {
                    onSearchComplete: ()=>{
                        //获取第一个智能搜索的结果
                        th.userlocation = local.getResults();   
                        console.log(th.userlocation) 
                        setStore("latitude",th.userlocation.Ar[0].point.lat);
                        setStore("longitude",th.userlocation.Ar[0].point.lng);
                        }
                });
                    th.closeCommand = !th.closeCommand;
                    //console.log(th.closeCommand)
                local.search(myValue);
            });
        })
        
    },
    computed:{
        //将获取的数据按照A-Z字母开头排序
        sortgroupcity(){
            let sortobj = {};
            for (let i = 65; i <= 90; i++) {
                if (this.groupcity[String.fromCharCode(i)]) {
                    sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
                }
            }
            //console.log(sortobj)
            return sortobj
        }
    },
    methods:{
        //点击图标关闭
        closeBtn(){
            let city = getStore("LocationCity");
            this.$emit("closeMsg", "close");
            this.$emit("cityMsg",city); 
        },
        getLocation(){
            let _this = this;
            const geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function getinfo(position){
                let city = position.address.city;
                _this.LocationCity = city;
                _this.address_detail = city;
                setStore("LocationCity",city);
                setStore("latitude",position.latitude);
                setStore("longitude",position.longitude);
                _this.setMap = true;
                //console.log(city);
            }, function(e) {
                _this.LocationCity = "定位失败"
                //console.log('fail');
            }, {provider: 'baidu'});
        },
        transCity(city,longitude,latitude){
            setStore("LocationCity",city);
            setStore("latitude",latitude);
            setStore("longitude",longitude);
            this.LocationCity = city;
            // this.closeBtn();
            // this.keyWord='';
            this.address_detail = city;
            this.setMap = false;
        },
        custormAnchor(index) { //锚点滚动到固定位置     
             let anchorElement = document.getElementById(index);
             console.log(anchorElement); 
             if(anchorElement) { 
                anchorElement.scrollIntoView();
                //alert(index);

            }               
        },  
        // 城市筛选
        citySearch(newCitySearch){
            let arr=[];
            let res=[];
            for(let i = 65; i <= 90; i++){
                arr=this.groupcity[String.fromCharCode(i)];
                // console.log(arr);
                for(let key in arr){
                    //console.log(arr[key].pinyin)
                   if((arr[key].pinyin).indexOf(newCitySearch) == 0||(arr[key].name).indexOf(newCitySearch)==0){
                        // console.log(arr[key].name)
                        res.push(arr[key]);   
                   }
                }     
            }
            //console.log(res);
            this.searchList=res;
            this.isShow = !this.isShow;
            if(newCitySearch==''){
                this.isShow = this.isShow;
            }
        }
    },
    watch:{
        address_detail(){
            //console.log(this.address_detail);
        },
        closeCommand(){
            this.closeBtn();

        }
    }
     
}

</script>
<style scoped>
#search_list{
    background: rgb(255, 255, 255);
    position: relative;
    z-index: 998;
    line-height: 1.3rem;
    font-size: .6rem;
    padding-left: .5rem;
}
#city_picker{
    background: #fff;
    overflow-y:scroll; 
}
.header{
    width: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 999;
    padding: .3rem .2rem .7rem;
}
.img-close{
    width: 1rem;
    height: 1rem;
    float: left;
}
.header-title{
    color: #5ebf83;
    font-size: .8rem;
    text-align: center;
}
.city_input_box{
    padding:.3rem .5rem;
    padding-top:2rem; 
    font-size: .7rem;
    width: 100%;
    position: relative;
}
.city_input_style{
    display: block;
    width: 100%;
    position: relative;
}
.city_submit{
   position: absolute;
   right: 0;
}
.city_input_icon img{
   width: .7rem;
    vertical-align: middle;
    position: absolute;
    top: 0.45rem;
    left: .2rem;
}
.city_input{
    width: 100%;
    background: none;
    padding-left: 1.5rem;
    height: 1.5rem;
    background: #f5f5f5;
}
.city_name_box h4{
    background: #f1f1f1;
    font-size: .5rem;
    padding: .5rem;
  }
  .city_name_li{
    padding: .5rem;
     font-size: .7rem;
  }
  .letter-aside{
    position: fixed;
    right: 0;
    top: 5rem;
    width: 2rem;
    text-align: center;
    line-height: 1rem;
    font-size: .5rem;

  }
  .city_positioning{
    font-size: .6rem;
    padding:.5rem .3rem;
  }
  .relocation{
      float:right;
      padding-right: 2rem;
  }

</style>

