<template>
  <div class="header">
    <div class="title">
      <div class="title-left">
        <img src="../assets/login/goback.png" alt @click="back()" />
      </div>
      <div class="title-content">{{title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  methods: {
    back() {
      if (this.title == "编辑地址") {
        this.$router.push({ path: "/info" });
        return;
      }
      if (this.title == "账户信息") {
        this.$router.push({ path: "/my" });
        return;
      }
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3190e8;
  font-size: 0.533333rem /* 40/75 */;
  height: 1.226667rem /* 92/75 */;
  color: #fff;
  text-align: center;
  font-weight: bold;
  position: fixed;
  .title-left {
    width: 0.373333rem /* 28/75 */;
    height: 0.666667rem /* 50/75 */;
    margin-left: 0.32rem /* 24/75 */;
    position: absolute;
    top: 0.266667rem /* 20/75 */;
    left: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>