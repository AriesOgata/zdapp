<!--  -->
<template>
<div id="all">
    	<input type="text" id="suggestId" name="address_detail" placeholder="地址" v-model="address_detail" class="input_style">
    	<div id="allmap"></div>
    </div>
</template>

<script>
	import BMap from 'BMap'
   	export default {
       data(){
           return {
           		//详细地址
               address_detail: null, 
               userlocation: {lng: "", lat: ""}
           }
       },
       
       mounted(){
           this.$nextTick(function () {
                   var th = this
                   // 创建Map实例
                   var map = new BMap.Map("allmap");
                   // 初始化地图,设置中心点坐标，
                   var point = new BMap.Point(121.160724,31.173277); 
                   // 创建点坐标，汉得公司的经纬度坐标
                   map.centerAndZoom(point, 15);
                   map.enableScrollWheelZoom();
		
					//建立一个自动完成的对象
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
                        //setPlace();
                        //智能搜索
                        function myFun(res) {
                            //获取第一个智能搜索的结果
                            console.log(res)
                            th.userlocation = local.getResults().getPoi(0).point;   
                            console.log(th.userlocation)    
                        }  
                       	var local = new BMap.LocalSearch(map, {
                           	onSearchComplete: myFun
                       	});
                       	local.search(myValue);
                   	});

      
           	})
      	},
  	}

</script>
<style scoped>
#suggestId{
    width: 398px;
    height: 30px;
}
#allmap{
    width: 400px;
    height: 400px;
    border: 1px solid green;
}

</style>