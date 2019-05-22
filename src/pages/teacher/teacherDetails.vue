<template>
    <div id="teacher_details">
        <div class="details_header">
          <x-header :left-options="{backText: ''}"  style="background-color:#f5f5f5;">
            <a slot="overwrite-left" class="goBack" :style="borderColor" v-on:click="back"></a>
            老师详情
           <a slot="right">  <x-icon slot="overwrite-left" type="ios-star-outline" size="20" style="fill:#333;position:relative;top:-2px;left:-3px;"></x-icon></a>
          </x-header>
        </div>
        <div class="teacher_details_box ">
          <div class="clear">
            <img src="../../images/teacher1.png" alt="" class="teacher_list_people">
            <div class='des'>
              <p class='mz'>金丹</p>
              <p class='lesson'>安培教育讲师</p>
              <p class='lesson'>高级经济师</p>
              <p class='lesson'>安全生产评估师</p>
            </div>
          </div>
          <div class="teacher_txt">
            经验丰富，实战、实用、实效 情景案例，角色体会、反馈反思 模拟演练，深入浅出、启发领悟 授人以渔，论述精辟，结合紧密 通俗易懂，风趣幽默，语言简练，深入浅出，互动教学。具有很强的感染力和哲学穿透力，触动每个人的心灵。培训内容具有实战性、可操作性；语言生动，富有亲和力；善于把握从理念到理论、从技术到实战的系统性统一。 推崇“务实与严谨、激情与幽默”的授课风格，讲课条理清晰，感染力、逻辑性强，丝丝入扣，注重课程的互动性与体验性，善于把握学员的培训需要，风格新颖、生动，内容丰富、实用、深入浅出，具有很强的亲和力、吸引力和感染力。
          </div>
        </div>
        <div class="teacher_course">
          <div class="course_list">
            <ul>
              <li class="course_li">
                <router-link to="/courseDetail">
                  <section class="course_img_box">
                    <img src="../../images/banner.png" alt="" class="course_img">
                  </section>
                  <div class="course_txt">
                    <p class="course_txt_title">
                      <span class="ellipsis">制冷与空调安装维修</span>
                      <i><img src="../../images/course_icon.png" alt=""></i>
                    </p>
                    <p class="course_price">￥850</p>
                    <div class="course_class">
                      <span>制冷空调(初训)</span>
                    </div>
                    <div class="course_box_btn">
                      <router-link :to="{path: '/', query: {}}"  class="course_btn">
                        试听
                      </router-link>
                      <router-link :to="{path: '/', query: {}}"  class="course_btn">
                        购买
                      </router-link>
                    </div>
                  </div>
                </router-link>
              </li>
              <li class="course_li">
                <router-link to="/courseDetail">
                  <section class="course_img_box">
                    <img src="../../images/banner.png" alt="" class="course_img">
                  </section>
                  <div class="course_txt">
                    <p class="course_txt_title">
                      <span class="ellipsis">制冷与空调安装维修</span>
                      <i><img src="../../images/course_icon.png" alt=""></i>
                    </p>
                    <p class="course_price">￥850</p>
                    <div class="course_class">
                      <span>制冷空调(初训)</span>
                    </div>
                    <div class="course_box_btn">
                      <router-link :to="{path: '/', query: {}}"  class="course_btn">
                        试听
                      </router-link>
                      <router-link :to="{path: '/', query: {}}"  class="course_btn">
                        购买
                      </router-link>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
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
.teacher_details_box{
  background: #fff;
  padding: .9rem .8rem;
}
.teacher_list_people{
  float: left;
  width: 5rem;
  margin-right: 1rem;
  height: 5rem;
}
.des{
  float: left;
  width: 5rem;
}
.mz{
  font-size: .8rem;
  height: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: .3rem;
}
.lesson{
  font-size: .6rem;
  color: #808080;
  height: 1rem;
  line-height: 1rem;
}
.teacher_txt{
  font-size: .6rem;
  color: #1a1a1a;
  text-indent: 1rem;
  padding-top: .7rem;
  line-height: 1rem;
}
.teacher_course{
  background: #fff;

}
 .course_li{
    display: -ms-flexbox;
    display: flex;
    border-bottom: .025rem solid #f1f1f1;
    padding: .7rem .8rem;
   }
   .course_img_box{
    float: left;
   }
   .course_img{
    width: 5rem;
    height: 3rem;
    display: block;
    margin-right: .5rem;
   }
   .course_txt{
    width: 100%;
    position: relative;
    text-align:left;
    padding-left: 6rem;
   }
   .course_txt_title{
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-size: .5rem;
    color: #333;
   }
   .course_txt_title i{
    float:left;
    width: 3rem;
   }
   .course_txt_title i img{
    height: .6rem;
   }
   .course_txt_title span{
   font-size: .6rem;
    font-weight: bold;
    display: block;
    width: 70%;
    text-align: left;
   }
   .course_price{
    font-size: .6rem;
    line-height: 1.5rem;
    color: #666;
   }
   .course_class{
     font-size: .6rem;
    color: #656565;
   }
   .course_box_btn{
    position: absolute;
    right: 0;
    bottom: .1rem;
   }
  .course_btn{
    font-size: .5rem;
    color: #5ebf83;
    border: 1px solid #5ebf83;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-left: .2rem;
    padding: .1rem .3rem;
  }
</style>
