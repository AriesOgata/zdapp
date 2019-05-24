<!-- 订单-->
<template>
<div id='order'>
    <div class="header">
      <x-header :left-options="{backText: ''}"  style="background-color:#fff;">
        <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
        我的订单
      </x-header>
    </div>
  <tab>
    <tab-item v-for="(item,index) in types" :selected="item.id===1" @on-item-click="tab(index)">{{item.title}}</tab-item>
  </tab>
    <div class="order_box" v-for="(item,index) in types"  v-show="index==num">
        <div class="order_list clear">
            <div class="order_txt clear">
                <div class="order_txt_left">
                    <p>安培教育</p>
                    <span>制冷空调安装作业</span>
                </div>
                <div class="order_txt_price">
                    <span>¥650.0元</span>
                </div>
            </div>
            <div class="order_btn ">
                <span class="order_btn_style order_btn_show">{{item.title}}</span>
                <span class="order_btn_style order_btn_color">删除订单</span>
            </div>
        </div>
        <div class="order_list clear">
            <div class="order_txt clear">
                <div class="order_txt_left">
                    <p>安培教育</p>
                    <span>电工初级( 复审 )</span>
                </div>
                <div class="order_txt_price">
                    <span>¥350.0元</span>
                </div>
            </div>
            <div class="order_btn ">
                <span class="order_btn_style order_btn_show">已支付</span>
                <span class="order_btn_style order_btn_color">删除订单</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { XHeader,Tab,TabItem} from 'vux'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    XHeader,Tab,TabItem
},
data() {
//这里存放数据
return {
     borderColor: {
        borderColor: '#333'
      },
  types:[{id:1,title:'未支付'},{id:2,title:'已支付'},],
  num:1,
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
  tab(index){
    this.num=index
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
    .order_txt{
        padding: .5rem .8rem;
    }
    .order_txt_left{
        float: left;
    }
    .order_txt_left p{
        color: #000;
        font-size: .7rem;
    }
    .order_txt_left span,
    .order_txt_price span{
        font-size: .6rem;
        color: #737373;
    }
    .order_txt_price{
        float: right;
    }
    .order_list{
        background: #fff;
        margin-bottom: .5rem;
        padding: .5rem 0;
    }
    .order_btn {
        float: right;
        width: 100%;
        border-top: 1px solid #ebebeb;
        padding-right: .5rem;
        padding-top: .5rem;
    }
    .order_btn_style{
        float: right;
        font-size: .6rem;
        color: #666;
        padding: 0 .7rem;
        margin-left: .5rem;
        border-radius: 1.5rem;
        height: 1.2rem;
        line-height: 1.2rem;
    }
    .order_btn_color{
        border:1px solid #a0a0a0;
    }
    .order_btn_show{
        background: #5ebf83;
        color: #fff;
    }
</style>
