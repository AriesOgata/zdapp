import BMap from 'BMap'

//关于状态码
    //BMAP_STATUS_SUCCESS 检索成功。对应数值“0”。
    //BMAP_STATUS_CITY_LIST 城市列表。对应数值“1”。
    //BMAP_STATUS_UNKNOWN_LOCATION  位置结果未知。对应数值“2”。
    //BMAP_STATUS_UNKNOWN_ROUTE 导航结果未知。对应数值“3”。
    //BMAP_STATUS_INVALID_KEY 非法密钥。对应数值“4”。
    //BMAP_STATUS_INVALID_REQUEST 非法请求。对应数值“5”。
    //BMAP_STATUS_PERMISSION_DENIED 没有权限。对应数值“6”。(自 1.1 新增)
    //BMAP_STATUS_SERVICE_UNAVAILABLE 服务不可用。对应数值“7”。(自 1.1 新增)
    //BMAP_STATUS_TIMEOUT 超时。对应数值“8”。(自 1.1 新增)



getLocation = () =>{//获取当前定位的经纬度
    var geolocation = new BMap.Geolocation();
    let localArr = [];
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point); 
        console.log("getLocation");
        console.log("lng:"+r.point.lng);
        console.log("lat:"+r.point.lat);
        localArr[0] = r.point.lng;
        localArr[1] = r.point.lat;
        console.log(localArr);
      }
      else {
        console.log('failed'+this.getStatus());
      }        
    },{enableHighAccuracy: true})
}




localCity = () =>{//获取当前城市信息
    const geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function getinfo(position){
        let city = position.address.city;             //获取城市信息
        let province = position.address.province;    //获取省份信息
        console.log(city);
    }, function(e) {
        //_this.LocationCity = "定位失败"
        console.log('fail');
    }, {provider: 'baidu'});
}




 getCity = (lng,lat) =>{//根据经纬度获取城市名  lng = 114.3162001   lat = 30.58108413
    var gc = new BMap.Geocoder();
    var pointAdd = new BMap.Point(lng, lat);
    gc.getLocation(pointAdd, function(rs){
        // 百度地图解析城市名
        console.log(rs.addressComponents.city);
        //或者其他信息
        console.log(rs);
    })
}