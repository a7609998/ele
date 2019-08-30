<template>
  <div class="forget">
    <Header :title="title"></Header>
    <div class="content">
      <div class="item">
        <input type="text" placeholder="账号" v-model="username" />
      </div>
      <div class="item">
        <input type="text" placeholder="旧密码" v-model="oldpassWord" />
      </div>
      <div class="item">
        <input type="text" placeholder="请输入新密码" v-model="newpassword" />
      </div>
      <div class="item">
        <input type="text" placeholder="请确认密码" v-model="confirmpassword" />
      </div>
      <div class="item-code">
        <input type="text" placeholder="验证码" v-model="captcha_code" />
        <img :src="imgurl" alt @click="init" />
        <p style="color:red" @click="init">看不清</p>
      </div>
    </div>
    <div class="button">
      <div class="btn" @click="updata">确认修改</div>
    </div>
  </div>
</template>
<script>
import Header from "../../../../components/header";
import { captchas, changepassword } from "../../../../require/api";
import { Toast } from "mint-ui";
export default {
  name: "forget",
  components: {
    Header
  },
  mounted() {
    this.init();
    if (this.$route.query.user_id != "") {
      this.user_id = this.$route.query.user_id;
    }
  },
  data() {
    return {
      title: "密码修改",
      imgurl: null,
      captcha_code: null,
      confirmpassword: null,
      newpassword: null,
      oldpassWord: null,
      username: null,
      user_id: null
    };
  },
  methods: {
    init() {
      captchas().then(res => {
        console.log(res);
        if (res.status == 1) {
          this.imgurl = res.code;
        }
      });
    },
    updata() {
      if (
        this.captcha_code != null &&
        this.confirmpassword != null &&
        // this.this.newpassword != null &&
        this.oldpassWord != null &&
        this.username != null
      ) {
        if (this.confirmpassword == this.newpassword) {
          changepassword({
            captcha_code: this.captcha_code,
            confirmpassword: this.confirmpassword,
            newpassword: this.newpassword,
            oldpassWord: this.oldpassWord,
            username: this.username
          }).then(res => {
            console.log(res);
            if (res.status == 1) {
              Toast({
                message: res.success,
                iconClass: "iconfont icon-chenggong",
                duration: 500
              });
              this.captcha_code = null;
              this.confirmpassword = null;
              // this.this.newpassword = null;
              this.oldpassWord = null;
              this.username = null;
              setTimeout(() => {
                //  this.$router.push({ path:'/my',query  })
                this.$router.push({
                  path: "/info",
                  query: { user_id: this.user_id }
                });
              }, 800);
            } else {
              Toast({
                message: res.message,
                iconClass: "iconfont icon-gantanhao"
              });
            }
          });
        } else {
          Toast({
            message: "2次输入的密码不一样",
            iconClass: "iconfont icon-gantanhao"
          });
        }
      } else {
        Toast({
          message: "不能为空",
          iconClass: "iconfont icon-gantanhao"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.forget {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f2f2f2;
  .content {
    background-color: #fff;
    width: 100%;
    margin-top: 1.466667rem /* 110/75 */;
    .item {
      width: 100%;
      height: 1.333333rem /* 100/75 */;
      padding: 0.4rem /* 30/75 */ 0.48rem /* 36/75 */;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      input {
        border: none;
        outline: none;
        height: 0.533333rem /* 40/75 */;
      }
    }
    .item-code {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 1.36rem /* 102/75 */;
      padding: 0 0.48rem /* 36/75 */;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      img {
        width: 2.186667rem /* 164/75 */;
        height: 0.933333rem /* 70/75 */;
        margin-left: 0.8rem /* 60/75 */;
      }
      p {
        width: 1.04rem /* 78/75 */;
        height: 0.506667rem /* 38/75 */;
        margin: 0;
        margin-left: 0.24rem /* 18/75 */;
      }
      input {
        border: none;
        outline: none;
        height: 0.586667rem /* 44/75 */;
      }
    }
  }
  .button {
    width: 100%;
    height: 2.453333rem /* 184/75 */;
    padding: 0.613333rem /* 46/75 */ 0.32rem /* 24/75 */;
    box-sizing: border-box;
    .btn {
      width: 100%;
      height: 1.173333rem /* 88/75 */;
      line-height: 1.173333rem /* 88/75 */;
      text-align: center;
      background-color: #4cd964;
      border-radius: 0.133333rem /* 10/75 */;
      font-size: 0.426667rem /* 32/75 */;
      color: #fff;
    }
  }
}
</style>