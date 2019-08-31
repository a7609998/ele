<template>
  <div class="home">
    <div class="header">
      <div class="header-left">ele</div>
      <div class="icon">
        <span class="iconfont icon-wode"></span>
      </div>
    </div>
    <div class="poin">
      <div class="currencity">当前城市</div>
      <div class="forbid">定位不准时，请在城市列表中选择</div>
    </div>
    <div class="city" @click="jump">
      <div class="city-left">{{cityname.name}}</div>
      <div class="city-right">
        <span class="iconfont icon-fanhui"></span>
      </div>
    </div>
    <div class="hot">
      <div class="hotcity">热门城市</div>
      <ul class="hotlist">
        <router-link
          tag="li"
          :to="'/city/' + item.id"
          v-for="item  in hotcity"
          :key="item.id"
        >{{item.name}}</router-link>
      </ul>
    </div>
    <keep-alive>
      <div class="hot" v-for="(value, key, index) in sortgroupcity" :key="key">
        <div class="hotcity">
          {{key}}
          （按字母排序）
        </div>
        <ul class="hotlist">
          <router-link
            tag="li"
            v-for="item in value"
            :to="'/city/' + item.id"
            :key="item.id"
          >{{item.name}}</router-link>
        </ul>
      </div>
    </keep-alive>
    <div id="allmap"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { cities } from "../require/api";
export default {
  name: "home",
  mounted() {
    this.init();
  },
  data() {
    return {
      cityname: {},
      ong: 116.40387397,
      hotcity: [],
      lat: 39.91488908,
      zoom: 15,
      groupcity: {}
    };
  },
  methods: {
    init() {
      cities({ type: "group" }).then(res => {
        console.log(res);
        this.groupcity = res;
      });
      cities({ type: "hot" }).then(res => {
        // console.log(res);
        this.hotcity = res;
      });
      setTimeout(() => {
        this.getinfo();
      }, 0);
    },
    getinfo() {
      this.ee = "55";
      var that = this;
      let map = new BMap.Map("allmap");
      let point = new BMap.Point(this.ong, this.lat);
      map.centerAndZoom(point, 15);
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(r => {
        if (r.point) {
          this.ong = r.longitude;
          this.lat = r.latitude;
          var point = new BMap.Point(this.ong, this.lat); //用当前定位的经纬度查找省市区街道等信息
          var gc = new BMap.Geocoder();
          gc.getLocation(point, function(rs) {
            var addComp = rs.addressComponents;
            var num = rs.address.indexOf("市", 0);
            var city = rs.address.slice(0, num );
            Object.keys(that.groupcity).forEach(function(key) {
               that.groupcity[key].forEach(ele=>{
                if(city==ele.name){
                  console.log(ele)
                  that.cityname=ele
                }
              });
            });
          });
        }
      });
    },
    jump() {
      this.$router.push({ path: "/city/"+this.cityname.id });
    }
  },
  computed: {
    //将获取的数据按照A-Z字母开头排序
    sortgroupcity() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupcity[
            String.fromCharCode(i)
          ];
        }
      }
      return sortobj;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  background-color: #f2f2f2;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .header {
    width: 100%;
    height: 1.226667rem /* 92/75 */;
    background-color: #3190e8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left {
      font-size: 0.533333rem /* 40/75 */;
      color: #fff;
      margin-left: 0.293333rem /* 22/75 */;
    }
    .icon {
      font-size: 0.64rem /* 48/75 */;
      color: #fff;
      margin-right: 0.293333rem /* 22/75 */;
    }
  }
  .poin {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.146667rem /* 86/75 */;
    padding: 0 0.293333rem /* 22/75 */;
    box-sizing: border-box;
    background-color: #fff;
    margin-top: 0.32rem /* 24/75 */;
    border-bottom: 1px solid #ddd;
    .currencity {
      font-size: 0.333333rem /* 25/75 */;
    }
    .forbid {
      font-size: 0.32rem /* 24/75 */;
      color: #9f9f9f;
    }
  }
  .city {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.146667rem /* 86/75 */;
    padding: 0 0.293333rem /* 22/75 */;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .city-left {
      font-size: 0.453333rem /* 34/75 */;
      color: #3190e8;
    }
    .city-right {
      color: #999;
      font-weight: 700;
    }
  }
  .hot {
    .hotcity {
      height: 0.96rem /* 72/75 */;
      font-size: 0.32rem /* 24/75 */;
      color: #666;
      line-height: 0.96rem /* 72/75 */;
      padding-left: 0.293333rem /* 22/75 */;
      box-sizing: border-box;
      background-color: #fff;
      margin-top: 0.266667rem /* 20/75 */;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }
    .hotlist {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      background-color: #fff;
      li {
        width: 24.7%;
        height: 1.093333rem /* 82/75 */;
        line-height: 1.093333rem /* 82/75 */;
        text-align: center;
        border: 1px solid #ddd;
        border-left: none;
        border-top: none;
        color: #3190e8;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      li:nth-child(4n) {
        border-right: none;
      }
    }
  }
}
</style>
