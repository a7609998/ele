<template>
  <div class="setusername">
    <Header :title="title"></Header>
    <div class="content">
      <div class="search">
        <input
          type="text"
          placeholder="输入用户名"
          placeholder-class="user"
          v-model="username"
          ref="ipt"
        />
      </div>
      <p ref="err">用户名只能修改一次（5-24字符之间）</p>
      <div class="btn" @click="updatausername">确认修改</div>
    </div>
  </div>
</template>
<script>
import Header from "../../../../components/header";
export default {
  name: "Setusername",
  components: {
    Header
  },
  data() {
    return {
      title: "修改用户名",
      username: ""
    };
  },
  methods: {
    updatausername() {
      if (
        this.username == "" ||
        this.username.length < 5 ||
        this.username.length > 24
      ) {
        this.$refs.ipt.style.border = "1px solid red";
        this.$refs.err.style.color = "red";
      } else {
        this.$refs.ipt.style.border = "1px solid #dddddd";
        this.$refs.err.style.color = "#666666";
        this.$router.push({
          path: "/info",
          query: { username: this.username }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.setusername {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f2f2f2;
  .content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f2f2f2;
    padding: 0 0.24rem /* 18/75 */;
    box-sizing: border-box;
    margin-top: 1.333333rem /* 100/75 */;
    .search {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      input {
        width: 100%;
        height: 0.986667rem /* 74/75 */;
        background-color: #f2f2f2;
        border: 1px solid #dddddd;
        outline: none;
      }
      .user {
        font-size: 0.426667rem /* 32/75 */;
      }
    }
    p {
      margin: 0;
      margin: 0.186667rem /* 14/75 */ 0 0.346667rem /* 26/75 */ 0;
      font-size: 0.32rem /* 24/75 */;
    }
    .btn {
      width: 100%;
      height: 1.226667rem /* 92/75 */;
      background-color: #3199e8;
      color: #fff;
      font-size: 0.426667rem /* 32/75 */;
      line-height: 1.226667rem /* 92/75 */;
      text-align: center;
    }
  }
}
</style>