<template>
<div>
  <div id="header">
    <div id="search">
      <span class="location">狗狗站&nbsp;|&nbsp;<span @click="showMask">{{Province}}</span></span>
      <input type="search" placeholder="请输入搜索商品"><span class="icon"></span>
      <span class="talk"  @click="checkLogin"></span>
    </div>
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item index="/goods">首页</el-menu-item>
        <el-menu-item index="/cloth">服饰城</el-menu-item>
        <el-menu-item index="/cloth">狗狗主粮</el-menu-item>
        <el-menu-item index="/cloth">医疗保健</el-menu-item>
    </el-menu>
  </div>
  <div ref="contentWrap" class="main">
    <div id="content">
      <div id="discount">
      <ul>
        <li><a href="javascript:;"><span>11.1-11.8<br/>全场八折</span></a></li>
        <li><a href="javascript:;"><span>11.9-11.11<br/>一折起狂欢</span></a></li>
        <li><a href="javascript:;"><span>11.11-11.18<br/>享全年八折</span></a></li>
      </ul>
    </div>
      <div id="banner">
      <el-carousel indicator-position="inside">
        <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
      </el-carousel>
    </div>
      <div id="main_img"><a href="javascript:;"><img src="../../assets/main.jpg" alt=""></a></div>
      <div id="hotType">
      <ul id="list">
        <li><a href="javascript:;"><img src="../../assets/f1.jpg" alt=""></a></li>
        <li><a href="javascript:;"><img src="../../assets/f2.jpg" alt=""></a></li>
        <li><a href="javascript:;"><img src="../../assets/f3.jpg" alt=""></a></li>
        <li><a href="javascript:;"><img src="../../assets/f4.jpg" alt=""></a></li>
        <li><a href="javascript:;"><img src="../../assets/f5.jpg" alt=""></a></li>
        <li><a href="javascript:;"><img src="../../assets/f6.jpg" alt=""></a></li>
        <li><a href="javascript:;"><img src="../../assets/f7.jpg" alt=""></a></li>
        <li><a href="javascript:;"><img src="../../assets/f8.jpg" alt=""></a></li>
      </ul>
    </div>
      <div id="imgWrap">
      <a href="javascript:;"><img src="../../assets/shengqian.jpg" alt=""></a>
      <a href="javascript:;"><img src="../../assets/discount.jpg" alt=""></a>
    </div>
      <div id="crazyBuy">
      <div id="notice">
        <span class="notice"></span>
        <span>距本场结束:</span><count-down :startTime="startTime" :dayTxt="'天'"  :endTime="startTime" :secondsTxt="'秒'"></count-down>
        <span class="notice"></span>
      </div>
      <div class="listWrap" ref="listWrap">
        <ul class="list">
          <li v-for="good in goods"><img :src="good.img"><span>{{good.name}}</span><p>省￥{{good.price}}</p></li>
        </ul>
      </div>
      <img src="../../assets/img1.jpg" alt="">
      <div id="importGoods">
        <a href=""><img src="../../assets/import.jpg" alt=""></a>
        <a href=""><img src="../../assets/food.jpg" alt=""></a>
        <a href=""><img src="../../assets/snack.jpg" alt=""></a>
        <a href=""><img src="../../assets/healthy.jpg" alt=""></a>
        <a href=""><img src="../../assets/life.jpg" alt=""></a>
        <img src="../../assets/sorry.jpg" alt="">
        <img src="../../assets/dapai.jpg" alt="">
      </div>
      <div class="famous">
        <div class="divimg">
          <a href="javascript:;"><img src="../../assets/dapai1.jpg" alt=""></a>
          <a href="javascript:;"><img src="../../assets/dapai2.jpg" alt=""></a>
        </div>
        <div class="divimg">
          <a href="javascript:;"><img src="../../assets/dapai3.jpg" alt=""></a>
          <a href="javascript:;"><img src="../../assets/dapai4.jpg" alt=""></a>
        </div>
        <div class="divimg">
          <a href="javascript:;"><img src="../../assets/dapai3.jpg" alt=""></a>
          <a href="javascript:;"><img src="../../assets/dapai4.jpg" alt=""></a>
        </div>
        <div class="divimg">
          <a href="javascript:;"><img src="../../assets/dapai10.jpg" alt=""></a>
        </div>
        <div class="divimg">
          <a href="javascript:;"><img src="../../assets/dapai9.jpg" alt=""></a>
          <a href="javascript:;"><img src="../../assets/dapai11.jpg" alt=""></a>
        </div>
      </div>
      <div class="famous">
        <div class="divimg">
          <a href="javascript:;"><img src="../../assets/dapai5.jpg" alt=""></a>
          <a href="javascript:;"><img src="../../assets/dapai6.jpg" alt=""></a>
        </div>
        <div class="divimg">
          <a href="javascript:;"><img src="../../assets/dapai6.jpg" alt=""></a>
          <a href="javascript:;"><img src="../../assets/dapai7.jpg" alt=""></a>
        </div>
        <div class="divimg">
          <a href="javascript:;"><img src="../../assets/dapai8.jpg" alt=""></a>
          <a href="javascript:;"><img src="../../assets/dapai12.jpg" alt=""></a>
        </div>
        <div class="divimg">
          <a href="javascript:;"><img src="../../assets/dapai14.jpg" alt=""></a>
        </div>
        <div class="divimg">
          <a href="javascript:;"><img src="../../assets/dapai9.jpg" alt=""></a>
          <a href="javascript:;"><img src="../../assets/dapai11.jpg" alt=""></a>
        </div>
      </div>
      <img src="../../assets/special.jpg" alt="">
      <div id="fish">
        <ul>
          <li><a href="javascript:;"><img src="../../assets/fish1.jpg" alt=""></a></li>
          <li><a href="javascript:;"><img src="../../assets/fish1.jpg" alt=""></a></li>
          <li><a href="javascript:;"><img src="../../assets/fish3.jpg" alt=""></a></li>
          <li><a href="javascript:;"><img src="../../assets/fish4.jpg" alt=""></a></li>
          <li><a href="javascript:;"><img src="../../assets/fish5.jpg" alt=""></a></li>
          <li><a href="javascript:;"><img src="../../assets/fish2.jpg" alt=""></a></li>
        </ul>
        <img src="../../assets/echong.jpg" alt="">
      </div>
    </div>
      <div class="videoBox">
      <video
        src="http://player.epetbar.com/1dd374ad065140699de0ab399057e981/13e66b24c35c49599ac6b793153e1baf-5287d2089db37e62345123a1be272f8b.mp4"
        width="100%" height="100%" controls poster="https://img2.epetbar.com/nowater/2017-10/31/21/e63f9f0b8b3019d71c9abd94609b48b9.jpg"></video>
    </div>
      <div id="blank"><img src="../../assets/blank.jpg" alt=""></div>
      <div class="ft">
        <span>触屏版</span>
        <span>手机客户端</span>
        <span>关于我们</span>
        <span>联系我们</span>
        <p>© wap.epet.com 版权：重庆易宠科技有限公司</p>
      </div>
    </div>
  </div>
  <div id="footer">
    <div id="dog">
      <span></span>
    </div>
    <div class="footNav">
      <ul>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
      </ul>
    </div>
  </div>
  <div id="mask" v-show="isShow">
    <header>
      <div class="title">
        <h2>选择收货地址</h2>
        <span @click="closeMask()">×</span>
      </div>
    </header>
    <div class="content">
      <div class="select">
        <div class="area" @click="provinceSelected()">{{Province?Province:info[province-1].name}}</div>
        <div class="area" @click="citySelected()" :class="City?'':'active'">{{City?City:'请选择'}}</div>
        <div class="area" @click="areaSelected()" :class="Area?'':'active'" v-show="City">{{Area?Area:'请选择'}}</div>
      </div>
      <div id="city" ref="maskWrap">
        <ul>
          <li v-for="(v,key) in info" @click="chooseProvince(v.id,v.name,key)"  class="active" v-show="showProvince">{{v.name}}</li>
          <li v-for="(v,key) in showCityList" @click="chooseCity(v.id,v.name,key)" class="active" v-show="showCity">{{v.name}}</li>
          <li v-for="(v,key) in showAreaList" @click="chooseArea(v.id,v.name,key)" class="active" v-show="showArea">{{v.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import CountDown from 'vue2-countdown'
  import axios from 'axios'

  export default {
    data() {
      return {
        activeName: 'first',
        input: '',
        scrollY:'',
        startTime:new Date('2017-11-13,10:46:18').getTime(),
        username:'',
        goods:[],
        discount:'',
        info:[],
        isShow:false,
        showProvince:true,
        showCity:false,
        showArea:false,
        showCityList:false,
        showAreaList:false,
        province: 5,
        city: 3,
        area: 57,
        Area: false,
        Province: '北京',
        City: false,
        selected:false,
      };
    },
  created(){
        axios.get('/api/goods')
          .then(response=>{
              const result = response.data
              if(result.code===0)
              {
                  this.goods=result.data
                /* console.log(this.goods)*/
              }
          })
  },
  mounted(){
    axios.get('/api/city')
      .then(response=>{
        const result = response.data
        if(result.code===0){
          this.info = result.data
        }
      })
      setTimeout(()=>{
        new BScroll(this.$refs.contentWrap,{
          click: true
        })
        new BScroll(this.$refs.listWrap, {
          click: true,
          scrollX: true,
          scrollY: false
        })
      },3000)
    },
    methods: {
      handleClick(tab, event) {

      },
      checkLogin(){
        if(!this.username||!localStorage.name){
          this.$router.push({path:'/failed'})
          setTimeout(()=>{
             this.$router.push({path:'/login'})
            window.location.reload()
          },2000)
        }else{
          this.$router.push({path:'/goods'})
        }
      },
      showMask(){
        this.isShow=true
        this.showProvince=true
        this.City = false
        this.Area = false
        this.$nextTick(function () {
          new BScroll(this.$refs.maskWrap,{
              click:true
          })
        })
      },
      closeMask(){
        this.isShow=false
      },
      _filter(arr,name,code) {
        let result = [];
        for(let i=0;i<arr.length;i++) {
          if(code == arr[i].id){
            result = arr[i][name];
          }
        }
        return result;
      },
      chooseProvince(code,input,index){
        this.province = code;
        this.Province = input;
        this.showProvince=false;
        this.showCity=true;
        this.showArea = false;
        this.showCityList = this._filter(this.info,'city',this.province)

        this.info.map( a => a.selected = false )
        this.info[index].selected = true;
/*        console.log( this.showCityList)*/
      },
      provinceSelected(){
          this.showCityList = false;
         this.showArea = false;

         this.City = false
         this.Area = false

         this.showCity = true
         this.showArea = false
         this.showProvince=false
      },
      chooseCity(code, input, index){
        this.city = code;
        this.City = input;
        this.showProvince=false;
        this.showCity=false;
        this.showArea = true;
        this.showAreaList = this._filter(this.showCityList,'area',this.city);

        this.showCityList.map( a => a.selected = false );
        this.showCityList[index].selected = true;
      },
      citySelected(){
        this.showProvince=false;
        this.showCity=true;
        this.showArea = false;
      },
      chooseArea(code, input, index){
        this.area = code;
        this.Area = input;

        this.showAreaList.map( a => a.selected = false );
        this.showAreaList[index].selected = true;

        this.isShow=false
      },
      areaSelected(){
        this.showProvince=false;
        this.showCity=false;
        this.showArea = true;
      }
    },
    components: {
      CountDown
    }
  };
</script>

<style lang="stylus" rel="stylesheet">
@import "../../css/goods.styl"

</style>
