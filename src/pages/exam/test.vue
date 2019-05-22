<!--  -->
<template>
<div id ="test">
    <div class="test-header">
        <img src="../../images/back.png" alt="返回" class="back-img" @click="back">
        <img src="../../images/setting.png" alt="设置" class="set-img">
        <div class="header-btn">
            <div class ="in-b" :class="[headerBtn == 'dt'?'bg-choo':'']" @click="modelChoo('dt')">答题模式</div>
            <div class ="in-b" :class="[headerBtn == 'bt'?'bg-choo':'']" @click="modelChoo('bt')">背题模式</div>
        </div>
    </div>
    <div class="test-container">
        <p class="test-title"><span class="test-tag">单选</span>3.铁磁材料在磁化过程中，当外加磁场H不断增加，而测得的磁场强度几乎不变的性质称为（ ）。</p>
        <ul class="test-opt">
            <li class="opt-li"><i class="opt-li-i">A</i>磁铁啊</li>
            <li class="opt-li"><i class="opt-li-i">B</i>磁铁</li>
            <li class="opt-li"><i class="opt-li-i">C</i>高到磁性</li>
            <li class="opt-li"><i class="opt-li-i">D</i>磁饱和性</li>
        </ul>
    </div>
    <div class="test-footer">
        <div class="footer-shouc"><img src="../../images/shouc.jpg" alt="shouc" class="shouc-img"><i class="shouc-txt">收藏</i></div>
        <div class="footer-menu" @click="itemMenu()"><img src="../../images/menu.jpg" alt="menu" class="shouc-img"><i class="menu-num">3/1334</i></div>
        <div class="footer-ce">
            <img src="../../images/correct.jpg" alt="correct" class="shouc-img"><i class="correct-num">0</i>
            <img src="../../images/error.jpg" alt="error" class="shouc-img"><i class="error-num">0</i>
        </div>
    </div>
    <div class="menu-mask" :class="[menuShow?'mask-hid':'']" @click="itemMenu()"></div>
    <div class="menu-container" :class="[menuShow?'mask-hid':'']">
        <div class="menu-top">
            <div class="footer-shouc"><img src="../../images/shouc.jpg" alt="shouc" class="shouc-img"><i class="shouc-txt">收藏</i></div>
            <div class="footer-menu" @click="itemMenu()"><img src="../../images/menu.jpg" alt="menu" class="shouc-img"><i class="menu-num">3/1334</i></div>
            <div class="footer-ce">
                <img src="../../images/correct.jpg" alt="correct" class="shouc-img"><i class="correct-num">0</i>
                <img src="../../images/error.jpg" alt="error" class="shouc-img"><i class="error-num">0</i>
            </div>
        </div>
        <p class="menu-tittle">电工初级</p>
        <div class="tittle-container">
            <flexbox wrap="wrap" :gutter="0">
                <flexbox-item :span="1/7" ><div class="flex-demo">1</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">2</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">3</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">4</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">5</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">6</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">7</div></flexbox-item>
                <flexbox-item :span="1/7"><div class="flex-demo">8</div></flexbox-item>

            </flexbox>
        </div>

    </div>
</div>
</template>

<script>

import { Flexbox, FlexboxItem } from 'vux'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Flexbox,
    FlexboxItem
},
data() {
//这里存放数据
return {
    borderColor: {
            borderColor: '#333'
        },
    headerBtn:'dt',
    menuShow:true,
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    back(){
        this.$router.go(-1)
    },
    modelChoo(e){
        this.headerBtn = e
    },
    itemMenu(){
        this.menuShow = !this.menuShow;
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

<style scoped>

.test-header{
    width: 100%;
    height: 1.8rem;
    padding: .3rem .5rem;
    background-color: rgb(245, 245, 245);
    border-bottom: 1px solid #ccc;
}
.back-img{
    float: left;
    height: 1rem;
    width: 1rem;
}
.set-img{
    float: right;
    height: 1rem;
    width: 1rem;
}
.header-btn{
    margin: 0 auto;
    height: 1.1rem;
    width: 8.1rem;
    border: 1px solid #000;
    border-radius: 5px;
}
.in-b{
    font-size: .6rem;
    float: left;
    width: 4rem;
    text-align: center;
    line-height: 1.1rem;
}
.bg-choo{
    background: #000;
    color: #fff;
}
.test-container{
    background: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
}
.test-title{
    font-size: .8rem;
    padding: .5rem;
    line-height: 1.2rem;
    letter-spacing: 1px;
}
.test-tag{
    display: inline-block;
    background: #5ebf83;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    color: #fff;
    font-size: .4rem;
    line-height: .8rem;
    padding: 0 .2rem;
    margin-right: .3rem;
}
.test-opt{
    height: 100%;
    background: #fff;
    padding-left: .3rem;
}
.opt-li{
    font-size: .7rem;
    height: 2rem;
    padding-top: .5rem;
}
.opt-li-i{
    display: inline-block;
    height: 1rem;
    width: 1rem;
    text-align: center;
    line-height: 1rem;
    box-shadow: 2px 3px 10px #ccc;
    border-radius: 50%;
    margin-right: .5rem;
}
.test-footer{
    height: 2rem;
    background: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #ccc;
    font-size: .6rem;
    padding: .5rem;
}
.shouc-img{
    width: .8rem;
    height: .8rem;
    vertical-align: bottom;
    padding-right: .2rem;
}
.footer-shouc{
    float: left;
    height: .8rem;
}
.shouc-txt{
    line-height: .8rem;
}
.footer-ce{
    float: right;
}
.correct-num{
    color: #26c27b;
}
.error-num{
    color: #fb6e52;
}
.footer-menu{
    float: right;
    padding-left: 1.5rem;
}
.menu-mask{
    height: 100%;
    width: 100%;
    position: fixed;
    background: #000;
    opacity: .3;
    top: 0;
    left: 0;
}
.menu-container{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70%;
    background: #fff;
}
.menu-top{
    height: 2rem;
    background: #fff;
    width: 100%;
    position: absolute;
    top: 0;
    border-top: 1px solid #ccc;
    font-size: .6rem;
    padding: .5rem;
}
.menu-tittle{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    background: #f5f5f5;
    font-size: .7rem;
    padding-top: 2rem;
    padding-left: .4rem;
}
.flex-demo {
    text-align: center;
    color: #888;
    font-size: .8rem;
    border: 1px solid #888;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    margin: .2rem 0;
}
.tittle-container{
    width: 100%;
    padding-top: 2rem;
}
.mask-hid{
    display: none;
}
</style>
