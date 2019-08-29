<template>
  <div class="addDetail">
    <Header :title="title"></Header>
    <div class="content">
      <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="keyword" />
      <div class="btn" @click="sure">确认</div>
    </div>
    <div class="info">为了满足商家的送餐要求，建议您从列表中选择地址</div>
    <div
      class="addDetail-item"
      v-for="(item,index) of listinfo "
      :key="index"
      @click="getadree(item)"
    >
      <p style="margin-bottom: .106667rem /* 8/75 */;">{{item.name}}</p>
      <p>{{item.address}}</p>
    </div>
  </div>
</template>
<script>
import Header from "../../../../components/header";
import { pois } from "../../../../require/api";
export default {
  name: "addDetail",
  components: {
    Header
  },
  mounted() {
    this.user_id = this.$route.query.user_id;
  },
  data() {
    return {
      title: "搜索地址",
      keyword: "",
      listinfo: [],
      user_id: ""
    };
  },
  methods: {
    sure() {
      pois({
        offset: 0,
        limit: 20,
        keyword: this.keyword,
        longitude: 117.199371,
        latitude: 39.085098
      }).then(res => {
        // console.log(res);
        this.listinfo = res;
        // console.log(this.listinfo)
      });
    },
    getadree(item) {
      console.log(item.name, item.address);
      this.$router.push({
        path: "/newaddress",
        query: { name: item.name, user_id: this.user_id }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.addDetail {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f2f2f2;
  .content {
    width: 100%;
    height: 1.733333rem /* 130/75 */;
    background-color: #fff;
    padding: 0.156rem /* 11.7/75 */;
    box-sizing: border-box;
    margin-top: 1.226667rem /* 92/75 */;
    display: flex;
    justify-content: flex-start;
    input {
      width: 7.36rem /* 552/75 */;
      height: 1.066667rem /* 80/75 */;
      border: 1px solid #ddd;
      border-radius: 0.066667rem /* 5/75 */;
      background: #f2f2f2;
      outline: none;
      margin-right: 0.24rem /* 18/75 */;
      padding: 0.24rem /* 18/75 */;
      box-sizing: border-box;
    }
    .btn {
      width: 1.866667rem /* 140/75 */;
      height: 1.066667rem /* 80/75 */;
      background-color: #3199e8;
      font-size: 0.426667rem /* 32/75 */;
      color: #fff;
      line-height: 1.066667rem /* 80/75 */;
      text-align: center;
      border-radius: 0.066667rem /* 5/75 */;
    }
  }
  .info {
    width: 100%;
    height: 0.8rem /* 60/75 */;
    line-height: 0.8rem /* 60/75 */;
    text-align: center;
    background-color: #fff6e4;
    color: #ff883f;
    font-size: 0.373333rem /* 28/75 */;
  }
  .addDetail-item {
    width: 100%;
    height: 1.706667rem /* 128/75 */;
    border-bottom: 1px solid #ccc;
    padding: 0.24rem /* 18/75 */;
    box-sizing: border-box;
    font-size: 0.4rem /* 30/75 */;
    p {
      margin: 0;
      color: #969696;
    }
  }
}
</style>