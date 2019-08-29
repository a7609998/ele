<template>
  <div class="adress">
    <Header :title="title"></Header>
    <div class="content">
      <div class="adress-item" v-for="item in adresslist" :key="item.id">
        <div>
          <p>{{item.address}}</p>
          <p>{{item.phone}}</p>
        </div>
        <div>
            <div class="del" @click="del(item.id)">删除</div>
        </div>
      </div>
      <div class="bottom">
          <div class="btn" @click="add">新增收货地址</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Header from "../../../../components/header";
import { addresses } from "../../../../require/api";
import { Toast } from 'mint-ui';
export default {
  name: "adress",
  components: {
    Header
  },
  mounted(){
      this.init()
      // console.log(this.$route.query.user_id)
      if(this.$route.query.user_id!=''){
        this.user_id = this.$route.query.user_id;
      }
  },
  data() {
    return {
      title: "编辑地址",
      adresslist:[],
      user_id:''
    };
  },
  methods:{
      init(){
          addresses().then(res=>{
              console.log(res)
            this.adresslist=res
          })
      },
      add(){
          var id=localStorage.getItem('id')
       this.$router.push({ path:'/newaddress' ,query:{user_id:id}})  
      },
      del(id){
        axios.delete(`v1/users/${this.user_id}/addresses/${id}`).then(res=>{
          console.log(res)
          if(res.data.status==1){
            Toast({
            message: "删除成功",
            iconClass: "iconfont icon-chenggong"
          })
          this.init()
          }else{
            Toast({
            message: res.message,
            iconClass: "iconfont icon-gantanhao"
          })
          }
        })
      }
  }
};
</script>
<style lang="scss" scoped>
.adress {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f2f2f2;
  .content {
    width: 100%;
    height: 100%;
    margin-top: 1.466667rem /* 110/75 */;
    .adress-item {
      width: 100%;
      height: 1.626667rem /* 122/75 */;
      background-color: #fff8c3;
      padding: 0.24rem /* 18/75 */;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: .4rem /* 30/75 */;
      p {
        margin: 0;
        width: 100%;
        height: 0.533333rem /* 40/75 */;
        font-size: 0.186667rem /* 14/75 */;
      }
      .del{
          color: red;
      }
    }
    .bottom{
        width: 100%;
        height: 1.12rem /* 84/75 */;
        margin-top: .24rem /* 18/75 */;
        padding: 0 .4rem /* 30/75 */;
        box-sizing: border-box;
        .btn{
            width: 100%;
            height: 100%;
            background-color: #3190e8;
            color:#fff;
            line-height: 1.12rem /* 84/75 */;
            text-align: center;
            font-size: .4rem /* 30/75 */;
        }
    }
  }
}
</style>