<!--  -->
<template>
<div id="notFound">
     <div class="details_header">
        <x-header style="background-color:#84ccc9;">
        <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
        {{title}}
        <!-- <a slot="right"><img src="../images/home.png" alt="home" style="height: 1rem;"></a> -->
        </x-header>
    </div>
    <div class="msg_box">
        <img src="../images/msg2.jpg" alt="">
        <span class="msg_box_txt">暂无记录</span>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { XHeader} from 'vux'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
     XHeader
},
data() {
//这里存放数据
    return {
        title:'',
        borderColor: {
                borderColor: '#333'
        },
    };
},
//监听属性 类似于data概念
computed: {
    
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    back(){
                this.$router.go(-1);//返回上一层
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.title=this.$route.query.name;
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
#notFound{
    background: #fff;
    width:100%;
    height: 100%;
    position: absolute;
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
.msg_box{
    width: 100%;
    padding-top: 5rem;
    text-align: center;
}
.msg_box img{
    width: 8rem;
    display: block;
    margin:0 auto;
}
.msg_box_txt{
    font-size: .6rem;
    color: #666;
}
</style>