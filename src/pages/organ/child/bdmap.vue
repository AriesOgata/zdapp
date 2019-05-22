<!--  -->
<template>
<div id="bdmap" class="bdmap">
 <div id="allmap"></div>
<div class="close-map" @click="mapShow()">✖</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BMap from 'BMap'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
mapShow(){
    this.$router.back(-1);
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

      let lng = this.$route.query.longitude;
      let lat = this.$route.query.latitude;
      let point = new BMap.Point(lng, lat);
      let gc = new BMap.Geocoder();
      var map = new BMap.Map("allmap");    // 创建Map实例
      map.centerAndZoom(new BMap.Point(lng, lat), 18);  // 初始化地图,设置中心点坐标和地图级别
      var marker = new BMap.Marker(new BMap.Point(lng, lat));
      map.addOverlay(marker);


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
.bdmap{
    width: 100%;
    height: 100%;
    position: absolute;
}
#allmap{
    width: 100%;
    height: 100%;
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