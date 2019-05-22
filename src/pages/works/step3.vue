<template>
  <div>
  	<div id="step3">
    	<x-header :left-options="{backText: ''}" style="background: #f5f5f5;"><b>支付订单</b></x-header>
    	<div class="ex-topimg"><img src="../../assets/images/jf.png"></div>
    </div>
    <!--支付时间价格 S-->
    <div id="ex-order-info">
    <!-- 	<p>支付剩余时间{{minute}}:{{second}}</p> -->
    	<p class="priceinfo1">￥{{money.money}}</p>
    	<p class="priceinfo2">{{this.$route.query.jgname}} -{{this.$route.query.order_sn}} </p>
    </div>
    <!--支付时间价格 E-->

    <!--支付码兑换 E-->
   <div id="ex-chose-pay">
    <checklist  :options="commonList" v-model="radioValue" :max="1" @on-change="change"></checklist>
  </div>
  <div class="ex-next" @click="tijiao">
	 确认支付
  </div>
 </div>
</template>
<script type="text/javascript">
	import {XHeader,Group, Cell,Checklist} from 'vux'
	import {pay} from 'src/service/api'
	export default {
		data () {
			return {
			commonList: [ '微信', '支付宝'],
			radioValue: ['微信'],
			price:'',
			order_sn:'',
			minutes: 15,
        	seconds: 0,
        money:'',
			}
		},
		components: {
			XHeader,Group, Cell,Checklist
		},

    created(){
      this.money = JSON.parse(localStorage.getItem('hou'));
      console.log(this.money.money);
      this.order_sn = this.$route.query.order_sn;
      console.log(this.order_sn);

    },
    mounted(){
      console.log(11111111);
      this.add()
    },
		methods: {
			change (val, label) {
				console.log(label);
				this.payType = label;
			},

			// queren(){//h5
			// 	//console.log(this.order_sn)
			// 	pay({orderSN:this.order_sn}).then(res=>{
			// 	console.log(res);
			// 	if(res.code == 1){
			// 		this.$vux.toast.show({
			// 			text: '支付成功',
			// 			type:'text',
			// 			position: 'middle'
			// 		})
			// 	}
			// 	setTimeout(()=>{
			// 		window.location.href= res.data;
			// 	},1000)
			// 	});
			// },
			tijiao(){
				let _this = this;
				if(this.payType == "支付宝"){
					pay({orderSN:this.order_sn}) .then((res) => {
            console.log(res)
            this.html = res
            var form= res;

            const div = document.createElement('div')
            div.innerHTML = form//此处form就是后台返回接收到的数据
            document.body.appendChild(div)
            document.forms[0].submit()

          })
				}else if(this.payType == "微信"){
					this.$vux.toast.show({
						text: '暂未开通微信支付',
						type:'text',
						position: 'middle'
					})
				}

			},
			num: function (n) {
				return n < 10 ? '0' + n : '' + n
			},
			add: function () {
				var _this = this
				var time = setInterval(function () {
				if (_this.seconds === 0 && _this.minutes !== 0) {
					_this.seconds = 59
					_this.minutes -= 1
				} else if (_this.minutes === 0 && _this.seconds === 0) {
					_this.seconds = 0
					clearInterval(time)
				} else {
					_this.seconds -= 1
				}
				}, 1000)
			}
		},
		watch:{
			second(val) {
				this.num(val);
			},
			minute(val){
				this.num(val);
			}
		},
		computed: {
			second: function () {
				return this.num(this.seconds)
			},
			minute: function () {
				return this.num(this.minutes)
			}
		}
  	}

</script>
<style type="text/css">
#bmhead .vux-header{
background: #FFF
}
#bmhead .vux-header-title{
	color:#222;
}
#bmhead .vux-header .vux-header-left .left-arrow:before{
	border-color:#333;
}
.ex-topimg img{max-width:100%;}
/*订单信息*/
#ex-order-info{
	background: #FFF;
	padding:0.4rem 0;
}
#ex-order-info>p{text-align:center;}
/*#ex-order-info>p:nth-of-type(1){
	font-size:0.5rem;color:#888;
}*/
.priceinfo1{
	font-size: 0.95rem;color:#000;
	line-height:1.9rem;
}
.priceinfo2{
	font-size:0.45rem;
	color: #999
}
/*支付码*/
#ex-zfm .weui-cell_access{padding:0.4rem 0.4rem;}
#ex-chose-pay{margin-top:0.4rem;}

.ex-next{height:2rem;background: #5ebf83;color:#FFF;line-height:2rem; position: fixed;
		bottom:0;font-size:0.66rem;
		width:100%;text-align:center;}
</style>
