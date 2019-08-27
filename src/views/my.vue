<template>
  <div class="my">
    <Header :title="title"></Header>
    <div class="myinfo">
      <div class="myimg">
        <img src="../assets/img/default.jpg" alt />
        <div class="my-right">
          <p>{{infolist.username}}</p>
          <p>{{infolist.mobile==""?'暂无绑定手机号':infolist.mobile}}</p>
        </div>
      </div>
      <span class="iconfont icon-fanhui myinfo-right"></span>
    </div>
    <div class="infodata">
      <div class="infodata-left">
        <p>
          <span style="color:#ff9900">{{parseInt(infolist.balance).toFixed(2)}}</span>元
        </p>
        <p>我的余额</p>
      </div>
      <div class="infodata-left">
        <p>
          <span style="color:#ff5f3e">{{infolist.gift_amount}}</span>个
        </p>
        <p>我的优惠</p>
      </div>
      <div class="infodata-left">
        <p>
          <span style="color:#6ac20b">{{infolist.point}}</span>分
        </p>
        <p>我的积分</p>
      </div>
    </div>
    <div class="profile-1reTe">
      <div class="item">
        <div class="item-left">
          <span class="iconfont icon-dingdan"></span>
          <div>我的订单</div>
        </div>
        <span class="iconfont icon-fanhui item-right"></span>
      </div>
      <div class="item">
        <div class="item-left">
          <span class="iconfont icon-gouwu" style="color:#fc7b53"></span>
          <div>积分商城</div>
        </div>
        <span class="iconfont icon-fanhui item-right"></span>
      </div>
      <div class="item">
        <div class="item-left">
          <span class="iconfont icon-huangguan" style="color:#ffc636"></span>
          <div>饿了吗会员卡</div>
        </div>
        <span class="iconfont icon-fanhui item-right"></span>
      </div>
    </div>
    <div class="servicecentre">
      <div class="item">
        <div class="item-left">
          <span class="iconfont icon-gouwu" style="color:#fc7b53"></span>
          <div>服务中心</div>
        </div>
        <span class="iconfont icon-fanhui item-right"></span>
      </div>
      <div class="item">
        <div class="item-left">
          <span class="iconfont icon-changyonglogo40" style="color:#9ed5ff"></span>
          <div>下载饿了吗app</div>
        </div>
        <span class="iconfont icon-fanhui item-right"></span>
      </div>
    </div>
    <Footbar></Footbar>
  </div>
</template>
<script>
import Header from "../components/header";
import Footbar from "../components/footbar";
import { user } from "../require/api";
export default {
  name: "my",
  components: {
    Header,
    Footbar
  },
  props:{
    user_id:Object
  },
  created() {
    this.init();
  },
  data() {
    return {
      title: "我的",
      infolist:{}
    };
  },
  methods: {
    init() {
        user({
           user_id:this.user_id 
        }).then(res=>{
            console.log(res)
            this.infolist=res
            // console.log(infolist)
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.my {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  .myinfo {
    width: 100%;
    // height: 2.4rem /* 180/75 */;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.226667rem /* 92/75 */;
    padding: 0.426667rem /* 32/75 */ 0.4rem /* 30/75 */;
    box-sizing: border-box;
    background-color: #3190e8;
    .myimg {
      display: flex;
      justify-content: flex-start;
      img {
        width: 1.573333rem /* 118/75 */;
        height: 1.573333rem /* 118/75 */;
        border-radius: 50%;
      }
      .my-right {
        margin-left: 0.24rem /* 18/75 */;
        p {
          margin: 0;
          width: 100%;
          font-size: 0.48rem /* 36/75 */;
          color: #fff;
        }
      }
    }
    .myinfo-right {
      font-size: 0.373333rem /* 28/75 */;
      color: #fff;
    }
  }
  .infodata {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    .infodata-left {
      width: 33.3%;
      height: 2.293333rem /* 172/75 */;
      border-left: 1px solid #f1f1f1;
      p:nth-child(1) {
        margin: 0;
        text-align: center;
        padding: 0.533333rem /* 40/75 */ 0 0.266667rem /* 20/75 */;
        box-sizing: border-box;
        font-size: 0.346667rem /* 26/75 */;
        box-sizing: border-box;
        span {
          font-size: 0.746667rem /* 56/75 */;
        }
      }
      p:nth-child(2) {
        margin: 0;
        text-align: center;
        padding: 0 0 0.266667rem /* 20/75 */;
        box-sizing: border-box;
      }
    }
  }
  .profile-1reTe {
    margin-top: 0.24rem /* 18/75 */;
    background-color: #fff;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.146667rem /* 86/75 */;
      padding-left: 0.226667rem /* 17/75 */;
      padding-right: 0.213333rem /* 16/75 */;
      border-bottom: 1px solid #f1f1f1;
      .item-left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 0.426667rem /* 32/75 */;
        span {
          margin-right: 0.213333rem /* 16/75 */;
        }
      }
      .item-right {
        font-size: 0.266667rem /* 20/75 */;
        color: #bbbbbb;
      }
    }
  }
  .servicecentre {
    background-color: #fff;
    margin-top: 0.24rem /* 18/75 */;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.146667rem /* 86/75 */;
      padding-left: 0.226667rem /* 17/75 */;
      padding-right: 0.213333rem /* 16/75 */;
      border-bottom: 1px solid #f1f1f1;
      .item-left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 0.426667rem /* 32/75 */;
        span {
          margin-right: 0.213333rem /* 16/75 */;
        }
      }
      .item-right {
        font-size: 0.266667rem /* 20/75 */;
        color: #bbbbbb;
      }
    }
  }
}
</style>