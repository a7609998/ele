<template>
  <div class="footbar">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" :src="ele" />
        外卖
      </mt-tab-item>
      <mt-tab-item id="搜索">
        <img slot="icon" :src="tansuo" />
        搜索
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" :src="dingdan" />
        订单
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" :src="wode" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import ele from "../assets/img/ele.png";
import tansuo from "../assets/img/tansuo.png";
import dingdan from '../assets/img/dingdian.png'
import wode from '../assets/img/wode.png'
import eledian from "../assets/img/eledian.png";
import tansuodian from "../assets/img/tansuodian.png";
import dingdandian from '../assets/img/dingdandian.png'
import wodedian from '../assets/img/wodedian.png'

export default {
  name: "footbar",
  data() {
    return {
      selected: "外卖",
      ele: eledian,
      tansuo: tansuo,
      dingdan:dingdan,
      wode:wode
    };
  },
  watch: {
    selected: function(val) {
      // console.log(val);
      // click后打印出当前mt-tab-item的id
      if (val == "外卖") {
        this.ele = eledian;
        this.tansuo = tansuo;
        this.dingdan=dingdan
        this.wode=wode
      }
      if (val == "搜索") {
        this.tansuo = tansuodian;
        this.ele = ele;
        this.dingdan=dingdan
        this.wode=wode
      }
      if (val == "订单") {
        this.dingdan=dingdandian
        this.tansuo = tansuo;
        this.ele = ele;
        this.wode=wode
      }
      if (val == "我的") {
        this.dingdan=dingdan
        this.tansuo = tansuo;
        this.ele = ele;
        this.wode=wodedian
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
