<template>
  <div class="login">
    <Header :title='title'></Header>
    <div class="from">
      <div class="fromfirst"></div>
      <input
        type="text"
        class="from-first"
        placeholder-class="pl"
        placeholder="账号"
        v-model="username"
      />
      <div class="from-two">
        <input type="text" placeholder-class="pl" placeholder="密码" v-model="password" />
      </div>
      <div class="from-tress">
        <input type="text" placeholder-class="pl" placeholder="验证码" v-model="captcha_code" />
        <div class="from-tress-right">
          <img :src="imgurl" />
          <p @click="getCaptchaCode">换一张</p>
        </div>
      </div>
    </div>
    <div class="denglu">
      <p style>温馨提示：未注册过的账号，登录时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
      <div @click="getlogin">登录</div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header"
import { captchas, login } from "../require/api";
import { Toast } from 'mint-ui';
export default {
  name: "login",
  components:{
    Header
  },
  data() {
    return {
      imgurl: "",
      captcha_code: "",
      password: "",
      username: "",
      title:'密码登录',
      user_id:''
    };
  },
  mounted() {
    this.getCaptchaCode();
  },
  methods: {
    // 获取验证码
    getCaptchaCode() {
      captchas().then(res => {
        console.log(res);
        this.imgurl = res.code;
      });
    },
    // 登录
    getlogin() {
      login({
        captcha_code: this.captcha_code,
        password: this.password,
        username: this.username
      }).then(res => {
        console.log(res);
        if (res.status == 0) {
          Toast({
            message: res.message,
            iconClass: "iconfont icon-gantanhao"
          });
        } else {
           localStorage.setItem('id',res.user_id)
          Toast({
            message: "登录成功",
            iconClass: "iconfont icon-chenggong"
          })
          setTimeout(()=>{
            //  this.$router.push({ path:'/my',query  })
             this.$router.push({ path:'/my' ,query:{user_id:res.user_id}});
          },800);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
  .from {
    margin-top: 1.973333rem /* 148/75 */;
    input {
      width: 100%;
      height: 1.28rem /* 96/75 */;
      padding-left: 0.533333rem /* 40/75 */;
      border: none;
    }
    .pl {
      font-size: 0.533333rem /* 40/75 */;
      color: #666;
    }
    .from-first {
      border: 1px solid #f1f1f1;
    }
    .from-two {
      border: 1px solid #f1f1f1;
    }
    .from-tress {
      border: 1px solid #f1f1f1;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      // padding-right: .533333rem /* 40/75 */;
      input {
        width: 4.986667rem /* 374/75 */;
      }
      .from-tress-right {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          margin-right: 0.533333rem /* 40/75 */;
          width: 2.186667rem /* 164/75 */;
          height: 0.933333rem /* 70/75 */;
        }
        div {
          font-size: 0.373333rem /* 28/75 */;
          p {
            padding: 0;
            margin: 0;
          }
        }
      }
    }
  }
  .denglu {
    padding: 0 0.6rem /* 45/75 */;
    box-sizing: border-box;
    p {
      color: red;
    }
    div {
      width: 100%;
      height: 1.173333rem /* 88/75 */;
      background-color: #4cd964;
      color: #fff;
      line-height: 1.173333rem /* 88/75 */;
      text-align: center;
      font-size: 0.426667rem /* 32/75 */;
    }
  }
}
</style>