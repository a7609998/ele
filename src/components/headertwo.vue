<template>
  <div class="header">
    <div class="header-left">
      <img src="../assets/login/goback.png" />
    </div>
    <div class="header-content">{{title}}</div>
    <div class="header-right">切换城市</div>
  </div>
</template>
<script>
export default {
    props:{
        title:String
    }
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 1.2rem /* 90/75 */;
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #3190e8;
  .header-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.48rem /* 36/75 */;
    color: #fff;
    font-weight: 700;
  }
  .header-left {
    position: absolute;
    top: 0;
    left: 0.266667rem /* 20/75 */;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-right {
    width: 1.52rem /* 114/75 */;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0.266667rem /* 20/75 */;
    height: 100%;
    font-size: 0.373333rem /* 28/75 */;
    color: #fff;
  }
}
</style>