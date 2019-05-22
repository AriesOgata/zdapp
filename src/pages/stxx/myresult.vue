<template>
  <div class="myresult">
    <div class="test-header">
      <img src="../../images/backb.png" alt="返回" class="back-img" @click="back">
      <div class="header-btn">
        <div class ="in-b" :class="[headerBtn == 'dt'?'bg-choo':'']" @click="modelChoo('dt')">成绩</div>
        <div class ="in-b" :class="[headerBtn == 'bt'?'bg-choo':'']" @click="modelChoo('bt')">排行</div>
      </div>
    </div>
    <div class="hecen">
        <div class="fen">
          0
        </div>
        <ul>
          <li>
            <p>1203</p>
            <p>未做题</p>
          </li>
          <li>
            <p>1</p>
            <p>答错题</p>
          </li>
          <li>
            <p>1</p>
            <p>答对题</p>
          </li>
        </ul>
    </div>

    <div class="foot-btn">
      <div class ="fn-b" :class="[footBtn == 'dt'?'fn-bh':'']" @click="footChoo('dt')">分享到社区</div>
      <div class ="fn-b" :class="[footBtn == 'bt'?'fn-bh':'']" @click="footChoo('bt')">分享给朋友</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "myresult",
      data() {
//这里存放数据
        return {
          borderColor: {
            borderColor: '#333'
          },
          headerBtn:'dt',
          footBtn:'dt'
        };
      },
      methods: {
        back(){
          this.$router.go(-1)
        },
        modelChoo(e){
          this.headerBtn = e
        },
        footChoo(e){
          this.footBtn = e
        }
      }
    }
</script>

<style scoped lang="less">
  .hecen{
    height: 11rem;
    width: 100%;
    background: url("../../images/bg2.png");
    background-size:100% ;
    .fen{
      height: 7rem;
      width: 100%;
      text-align: center;
      line-height: 7.5rem;
      color: white;
      font-weight: 600;
      font-size: 3rem;
    }
    ul{
      display: flex;
      justify-content: space-between;
      text-align: center;
      padding: 1rem;
      li{
        font-size: 0.6rem;
        color: white;
        p:nth-child(1){
          font-size: 0.7rem;
        }
      }
    }
  }
  .test-header{
    width: 100%;
    height: 1.8rem;
    padding: .3rem .5rem;
    background-color: rgb(255,136,70);
  }
  .back-img{
    float: left;
    height: 1rem;
    width: 1rem;
  }
  .header-btn{
    margin: 0 auto;
    height: 1.1rem;
    width: 6.1rem;
    border: 1px solid white;
    border-radius: 5px;
  }
  .in-b{
    font-size: .6rem;
    float: left;
    width: 3rem;
    text-align: center;
    line-height: 1.1rem;
    color: white;
  }
  .bg-choo{
    background: white;
    color: rgb(36,196,104);
  }

  .foot-btn{
    width: 100%;
    height: 2rem;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    .fn-b{
      float: left;
      width: 50%;
      text-align: center;
      font-size: 0.8rem;
      color: rgb(36,196,104);
      line-height: 2rem;
    }
    .fn-bh{
      background: rgb(36,196,104);
      color:white;
    }
  }
</style>
