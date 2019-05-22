<template>
    <div id="notFound">
        <div class="details_header">
          <x-header style="background-color:#84ccc9;">
            <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
           <!-- <a slot="right"><img src="../images/home.png" alt="home" style="height: 1rem;"></a> -->
          </x-header>
        </div>
        <div class="msg_box">
            <img src="../images/msg2.jpg" alt="">
            <span class="msg_box_txt">页面正在建设中，请返回！</span>
        </div>
    </div>   
</template>

<script>
    import { XHeader} from 'vux'
    export default {
        components:{
             XHeader
         },
    	data(){
            return{
                borderColor: {
                borderColor: '#333'
              },
            }
        },
        mounted(){

        },
        computed: {
        },
        methods: {
             back(){
                this.$router.go(-1);//返回上一层
            },
        },

    }

</script>
<style scoped>
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
