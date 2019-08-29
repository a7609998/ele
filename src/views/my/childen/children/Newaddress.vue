<template>
  <div class="newadress">
    <Header :title="title"></Header>
    <div class="content">
      <div class="item">
        <input type="text" placeholder="请输入姓名" v-model="name" />
      </div>
      <div class="item" @click="seachadress">
        <input type="text" placeholder="小区/写字楼/学校等" disabled="disabled" v-model="adress" />
      </div>
      <div class="item">
        <input type="text" placeholder="请填写详细送餐地址" v-model="addadress" />
      </div>
      <div class="item">
        <input type="text" placeholder="请填写能够联系到您的手机号" v-model="mobile" />
      </div>
      <div class="item">
        <input type="text" placeholder="备用联系电话（选填）" />
      </div>
    </div>
    <div class="button" @click="addnewadress">
      <div class="btn">新增地址</div>
    </div>
  </div>
</template>
<script>
import Header from "../../../../components/header";
import { newaddresses } from "../../../../require/api";
import { Toast } from 'mint-ui';
export default {
  name: "newadress",
  components: {
    Header
  },
  mounted() {
    this.user_id = this.$route.query.user_id;
    this.adress = this.$route.query.name;
  },
  data() {
    return {
      title: "新增地址",
      user_id: "",
      name: "",
      adress: "",
      addadress: "",
      mobile: ""
    };
  },
  methods: {
    seachadress() {
      this.$router.push({
        path: "/addDetail",
        query: { user_id: this.user_id }
      });
    },
    addnewadress() {
      newaddresses({
        address: this.addadress,
        address_detail: this.adress,
        geohash: "31.22299,121.36025",
        name: this.name,
        phone: this.mobile,
        phone_bk: "",
        poi_type: 0,
        sex: 1,
        tag: "公司",
        tag_type: 4
      }).then(res => {
        console.log(res);
        if (res.status == 1) {
          this.$router.push({
            path: "/address",
            query: { user_id: this.user_id }
          });
          (this.name = ""),
            (this.adress = ""),
            (this.addadress = ""),
            (this.mobile = "");
        } else {
          Toast({
            message: res.message,
            iconClass: "iconfont icon-gantanhao"
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.newadress {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f2f2f2;
  .content {
    margin-top: 1.466667rem /* 110/75 */;
    background-color: #fff;
    width: 100%;
    height: 6.293333rem /* 472/75 */;
    padding: 0 0.146667rem /* 11/75 */;
    box-sizing: border-box;
    .item {
      width: 100%;
      height: 0.933333rem /* 70/75 */;
      //   overflow: hidden;
      margin-top: 0.24rem /* 18/75 */;
      input {
        width: 99%;
        height: 100%;
        background-color: #f2f2f2;
        border: 1px solid #dddddd;
        border-radius: 0.066667rem /* 5/75 */;
        outline: none;
        padding-left: 0.24rem /* 18/75 */;
        box-sizing: border-box;
      }
    }
  }
  .button {
    padding: 0 0.146667rem /* 11/75 */;
    box-sizing: border-box;
    .btn {
      width: 100%;
      height: 0.986667rem /* 74/75 */;
      line-height: 0.986667rem /* 74/75 */;
      background-color: #4cd964;
      font-size: 0.4rem /* 30/75 */;
      text-align: center;
      color: #fff;
    }
  }
}
</style>