<template>
  <div class="city">
    <Header :title="title"></Header>
    <div class="content">
      <input type="text" placeholder="输入学校、商务楼、地址" v-model="keyword" >
      <div class="btn" @click="getadd">提交</div>
    </div>
    <div class="item" v-for="(item,k) in add" :key="k">
      <p>{{item.name}}</p>
      <p>{{item.address}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { poit } from "../require/api";
import Header from '../components/headertwo'
import { Toast } from 'mint-ui';
export default {
  name: "home",
  components:{
    Header
  },
  mounted() {
    this.id=this.$route.params.id
  },
  data() {
    return {
      add:[],
      title:'天津',
      keyword:null,
      id:null
    };
  },
  methods: {
    getadd() {
      if(this.keyword==null){
        Toast({
            message:"请输入要搜索地方",
            iconClass: "iconfont icon-gantanhao"
          });
        return
      }
      poit({
        type: 'search',
        city_id: this.id,
        keyword: this.keyword
      }).then(res => {
        console.log(res)
        this.add=res
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.city {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  background-color: #f2f2f2;
  .content{
    width: 100%;
    height: 2.613333rem /* 196/75 */;
    background-color: #fff;
    margin-top: 1.466667rem /* 110/75 */;
    padding: .506667rem /* 38/75 */;
    box-sizing: border-box;
    input{
      width: 100%;
      height: .853333rem /* 64/75 */;
      border: 1px solid #e4e4e4;
      background-color: #f2f2f2;
      padding-left: .293333rem /* 22/75 */;
      box-sizing: border-box;
    }
    .btn{
      width: 100%;
      height: .853333rem /* 64/75 */;
      background-color: #3190e8;
      font-size: .4rem /* 30/75 */;
      color: #fff;
      text-align: center;
      line-height: .853333rem /* 64/75 */;
      margin-top: .266667rem /* 20/75 */;
    }
  }
  .item{
   height: 1.973333rem /* 148/75 */; 
   background-color: #fff;
   margin-top: .293333rem /* 22/75 */;
   padding: .4rem /* 30/75 */ 0 0;
   font-size: .306667rem /* 23/75 */;
   p{
     margin: 0;
     margin: 0 .48rem /* 36/75 */ .24rem /* 18/75 */;
     font-size: .4rem /* 30/75 */;
   }
   p:nth-child(2){
     font-size: .32rem /* 24/75 */;
     color: #999;
   }
  }
}
</style>
