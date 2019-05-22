<template>
    <div id="teacherAll">
      <div class="details_header">
        <x-header :left-options="{backText: ''}"  style="background-color:#f5f5f5;">
          名师介绍
        </x-header>
      </div>
      <div class="teacher_item">
        <div class="teacher_list clear">
          <router-link to="/teacherDetails">
            <img src="../../images/teacher1.png" alt="" class="teacher_list_people">
            <div class='des'>
              <p class='mz'>金丹</p>
              <p class='star'>5分<rater v-model="data" :font-size="15" disabled></rater></p>
              <p class='lesson'>生产安全讲师</p>
            </div>
            <div class='shouc'><img src='../../images/teacher_icon1.png'></div>
          </router-link>
        </div>
        <div class="teacher_list clear">
          <router-link to="/teacherDetails">
            <img src="../../images/teacher2.png" alt="" class="teacher_list_people">
            <div class='des'>
              <p class='mz'>陈盛祺</p>
              <p class='star'>5分<rater v-model="data" :font-size="15" disabled></rater></p>
              <p class='lesson'>生产安全讲师</p>
            </div>
            <div class='shouc'><img src='../../images/teacher_icon2.png'></div>
          </router-link>
        </div>
        <div class="teacher_list clear">
          <router-link to="/teacherDetails">
            <img src="../../images/teacher3.png" alt="" class="teacher_list_people">
            <div class='des'>
              <p class='mz'>李超</p>
              <p class='star'>5分<rater v-model="data" :font-size="15" disabled></rater></p>
              <p class='lesson'>生产安全讲师</p>
            </div>
            <div class='shouc'><img src='../../images/teacher_icon1.png'></div>
          </router-link>
        </div>
        <div class="teacher_list clear">
          <router-link to="/teacherDetails">
            <img src="../../images/teacher4.png" alt="" class="teacher_list_people">
            <div class='des'>
              <p class='mz'>赵毅</p>
              <p class='star'>5分<rater v-model="data" :font-size="15" disabled></rater></p>
              <p class='lesson'>生产安全讲师</p>
            </div>
            <div class='shouc'><img src='../../images/teacher_icon1.png'></div>
          </router-link>
        </div>
      </div>
      <foot-nav></foot-nav>
    </div>
</template>

<script>
  import footNav from 'src/components/footNav'
  import { XHeader, Tab, TabItem, Popup, XSwitch, Cell, Group, XButton,TransferDom,Rater  } from 'vux'
    export default {
        name: "teacherAll",
      components: {
        footNav,
        XHeader, Tab, TabItem, Popup, XSwitch, Cell, Group, XButton,TransferDom,Rater
      },
      data(){
        return{
          data:5,
        }
      }
    }
</script>

<style scoped>
  .teacher_item{
    position: absolute;
    background:#fff;
    width:100%;
    height:100%;
    padding: 0 .8rem;
  }
  .teacher_list{
    border-bottom: 1px solid #e9e9e9;
    padding: .7rem 0;
  }
  .teacher_list_people{
    float: left;
    height: 3rem;
    width: 3rem;
    border-radius: .3rem;
    margin-right: .7rem;
  }
  .img{
    width: 3rem;
    height: 3rem;
    float: left;
    border-radius:.2rem;
  }

  .des{
    float: left;
    width: 8rem;
    color: #404040;
  }

  .mz{
    font-size: .8rem;
  }

  .star{
    font-size: .5rem;
    color: #999999;
    padding:.3rem 0;
  }
  .star img{
    width: 1rem;
    height: 1.5rem;
  }
  .lesson{
    font-size: .6rem;
    color: #999999;
  }
  .shouc{
    float: right;
    width: 1rem;
  }
  .shouc img{
    width: 1rem;
  }
</style>
