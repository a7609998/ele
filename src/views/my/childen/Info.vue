<template>
  <div class="info">
    <Header :title="title"></Header>
    <div class="user-header">
      <input
        type="file"
        name="image"
        accept="image/*"
        @change="onchangeImgFun"
        class="header-upload-btn user-header-com"
      />
      <h2>头像</h2>
      <div class="user-header-righr">
        <img alt :src="imgStr" class="user-header-img user-header-com" @change="onchangeImgFun" />
        <span class="iconfont icon-fanhui goback"></span>
      </div>
    </div>
    <div class="infouser" @click="updauser">
      <div class="infouser-left">用户名</div>
      <div class="infouser-right">
        <div class="mobile">{{infolist.username}}</div>
        <span class="iconfont icon-fanhui goback"></span>
      </div>
    </div>
    <div class="infouser" @click="adress">
      <div class="infouser-left">收货地址</div>
      <div class="infouser-right">
        <!-- <div class="mobile">17666166385</div> -->
        <span class="iconfont icon-fanhui goback"></span>
      </div>
    </div>
    <div class="BindonAccount">账号绑定</div>
    <div class="infouser">
      <div class="infouser-left">手机</div>
      <div class="infouser-right">
        <!-- <div class="mobile">17666166385</div> -->
        <span class="iconfont icon-fanhui goback"></span>
      </div>
    </div>
    <div class="BindonAccount">账号绑定</div>
    <div class="infouser" @click="updatapwd">
      <div class="infouser-left">安全设置</div>
      <div class="infouser-right">
        <div class="mobile">修改</div>
        <span class="iconfont icon-fanhui goback"></span>
      </div>
    </div>
    <div class="logout">
      <div class="btn">退出登录</div>
    </div>
  </div>
</template>
<script>
import Header from "../../../components/header";
import { user } from "../../../require/api";
import imgs from "../../../assets/img/default.jpg";
export default {
  name: "info",
  props: {
    user_id: Object
  },
  components: {
    Header
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      title: "账户信息",
      imgStr: imgs,
      infolist: {}
    };
  },
  methods: {
    init() {
      user({
        user_id: this.user_id
      }).then(res => {
        console.log(res);
        this.infolist = res;
        // console.log(this.$route.query.username)
        if (this.$route.query.username != null) {
          this.infolist.username = this.$route.query.username;
          //   console.log(this.infolist.username);
        }
        // console.log(infolist)
      });
    },
    // 头像上传
    onchangeImgFun(e) {
      var file = e.target.files[0];
      console.log(file);
      // 获取图片的大小，做大小限制有用
      let imgSize = file.size;
      console.log(imgSize);
      var _this = this; // this指向问题，所以在外面先定义
      // 比如上传头像限制5M大小，这里获取的大小单位是b
      if (imgSize <= 50 * 1024) {
        // 合格
        _this.errorStr = "";
        console.log("大小合适");
        // 开始渲染选择的图片
        // 本地路径方法 1
        this.imgStr = window.URL.createObjectURL(e.target.files[0]);
        // console.log(window.URL.createObjectURL(e.target.files[0])) // 获取当前文件的信息
      }
    },
    // 修改用户名
    updauser() {
      this.$router.push({ path: "/setusername" });
    },
    // 修改收货地址
    adress(){
       this.$router.push({ path:'/address' ,query:{user_id:this.infolist.user_id}});
    },
    updatapwd(){
      this.$router.push({ path:'/forget',query:{user_id:this.infolist.user_id}});
    }
  }
};
</script>
<style lang="scss" scoped>
.info {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f2f2f2;
  h2 {
    font-size: 0.4rem /* 30/75 */;
  }
  .goback {
    font-size: 0.533333rem /* 40/75 */;
    color: #d8d8d8;
  }
  .user-header-righr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #dddddd;
    padding: 0 0.4rem /* 30/75 */ 0 0.4rem /* 30/75 */;
    box-sizing: border-box;
    margin-top: 1.466667rem /* 110/75 */;
    height: 1.92rem /* 144/75 */;
  }
  .user-header-com {
    width: 1.28rem /* 96/75 */;
    height: 1.28rem /* 96/75 */;
    border-radius: 50%;
    margin-right: 0.24rem /* 18/75 */;
  }
  .header-upload-btn {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0.986667rem /* 74/75 */;
    top: 0.08rem /* 6/75 */;
    opacity: 0;
    /* 通过定位把input放在img标签上面，通过不透明度隐藏 */
  }
  .tip {
    font-size: 14px;
    color: #666;
  }
  /* error是用于错误提示 */
  .error {
    font-size: 12px;
    color: tomato;
    margin-left: 10px;
  }
  .infouser {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.28rem /* 96/75 */;
    background-color: #fff;
    border-bottom: 1px solid #dddddd;
    padding: 0 0.4rem /* 30/75 */ 0 0.4rem /* 30/75 */;
    box-sizing: border-box;
    .infouser-left {
      font-size: 0.373333rem /* 28/75 */;
    }
    .infouser-right {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .mobile {
        margin-right: 0.24rem /* 18/75 */;
      }
    }
  }
  .BindonAccount {
    width: 100%;
    height: 0.96rem /* 72/75 */;
    line-height: 0.96rem /* 72/75 */;
    padding: 0 0.4rem /* 30/75 */ 0 0.4rem /* 30/75 */;
    box-sizing: border-box;
    border-bottom: 1px solid #dddddd;
  }
  .logout {
    height: 1.866667rem /* 140/75 */;
    padding: 0.4rem /* 30/75 */ 0.4rem /* 30/75 */ 0 0.4rem /* 30/75 */;
    box-sizing: border-box;
    .btn {
      width: 100%;
      height: 0.933333rem /* 70/75 */;
      background-color: #d8584a;
      line-height: 0.933333rem /* 70/75 */;
      text-align: center;
      color: #fff;
      font-size: 0.4rem /* 30/75 */;
      border-radius: 5px;
    }
  }
}
</style>