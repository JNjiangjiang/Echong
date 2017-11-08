<template>
<div>
  <div id="header">
    <div class="title">
      <span><router-link to="/goods">&lt;</router-link></span>
      <span>服饰城</span>
      <span></span>
    </div>
  </div>
  <div class="content" ref="contentWrap">
    <div id="content">
      <div id="banner">
        <el-carousel indicator-position="inside">
          <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
        </el-carousel>
      </div>
      <div id="posttage">
        <ul>
          <li v-for="img in list"><img v-lazy="img.src"><a href="javasript:;">{{img.name}}</a></li>
<!--          <li><img v-lazt="list[2]" alt=""><a href="javasript:;">卫衣</a></li>
          <li><img v-lazt="list[3]" alt=""><a href="javasript:;">四角装</a></li>
          <li><img v-lazt="list[4]" alt=""><a href="javasript:;">马甲</a></li>
          <li><img :v-lazt="list[5]" alt=""><a href="javasript:;">家居服</a></li>
          <li><img :v-lazt="list[6]" alt=""><a href="javasript:;">毛衣</a></li>
          <li><img :v-lazt="list[7]" alt=""><a href="javasript:;">精美配饰</a></li>
          <li><img :v-lazt="list[8]" alt=""><a href="javasript:;">更多</a></li>-->
        </ul>
      </div>
      <div id="posttage_down">
        <div><img src="../../assets/dpwn1.jpg" alt=""></div>
        <div><img src="../../assets/down2.jpg" alt=""></div>
      </div>
      <div class="cab">
        <p>
          <span></span>
          <span>时尚大牌</span>
          <span></span>
        </p>
        <p>尖货品质&nbsp;深度折扣</p>
      </div>
      <div id="swiper">
        <div><img src="../../assets/s1.jpg" alt=""><p>始于2007年，坚持为本土爱犬打造时尚优质 的宠物服饰。凭借优秀的款式，优良的工，实惠的价格，成为超过150,000爱犬家庭的优先选择。</p></div>
        <div><img src="../../assets/s2.jpg" alt=""><p>Touchdog拥有强大设计团队，以设计风格时尚和潮流著称。强调美观及舒适性，把日式卡通及涂鸦融入产品，把宠物打造为一个时尚、潮流、可爱的宝贝。</p></div>
      </div>
      <div class="cab">
        <p>
          <span></span>
          <span>流行风格</span>
          <span></span>
        </p>
        <p>好货不贵&nbsp;做有腔调的狂</p>
      </div>
      <div class="goods">
        <div class="change"><p>萌宠COS变装pa</p></div>
        <div class="list">
          <ul>
            <li><img src="../../assets/l1.jpg" alt=""><p>2017年新款 优派 卡通小鸡棉衣 蓝色M号</p><span>¥38.80</span><span>¥38.80</span></li>
            <li><img src="../../assets/l2.jpg" alt=""><p>日本派地奥 犬用金太郎变身装 S号胸围27-35cm</p><span>¥98.00</span><span>¥98.00</span></li>
            <li><img src="../../assets/l3.jpg" alt=""><p>2017年新款 绵羊变身装 16号 胸围45cm*背长</p><span>¥50.00</span><span>¥50.00</span></li>
            <li><img src="../../assets/l4.png" alt=""><p>2017年新款 绒域坊 海盗款宠物变身装 XL号</p><span>¥50.00</span><span>¥50.00</span></li>
            <li><img src="../../assets/l5.jpg" alt=""><p>2017年新款 宠趣 超萌卡通插肩袖卫衣 宝蓝烟斗狮XS号</p><span>¥50.00</span><span>¥50.00</span></li>
            <li><img src="../../assets/l6.jpg" alt=""><p>日本派地奥 犬用金太郎变身装 S号胸围27-35cm*脖围27cm</p><span>¥98.00</span><span>¥98.00</span></li>
            <li><img src="../../assets/l7.jpg" alt=""><p>日本派地奥 犬用金太郎变身装 S号胸围27-35cm*脖围27cm</p><span>¥98.00</span><span>¥98.00</span></li>
            <li><img src="../../assets/l8.png" alt=""><p>日本派地奥 犬用金太郎变身装 S号胸围27-35cm*脖围27cm</p><span>¥98.00</span><span>¥98.00</span></li>
          </ul>
        </div>
      </div>
      <div class="goods">
        <div class="change"><p>谁还不是小公举</p></div>
        <div class="list">
          <ul>
            <li><img src="../../assets/g1.jpg" alt=""><p>2017年新款 优派 卡通小鸡棉衣 蓝色M号</p><span>¥38.80</span><span>¥38.80</span></li>
            <li><img src="../../assets/g2.jpg" alt=""><p>日本派地奥 犬用金太郎变身装 S号胸围27-35cm</p><span>¥98.00</span><span>¥98.00</span></li>
            <li><img src="../../assets/g3.jpg" alt=""><p>2017年新款 加厚绵羊变身装 胸围45cm</p><span>¥50.00</span><span>¥50.00</span></li>
            <li><img src="../../assets/g4.jpg" alt=""><p>2017年新款 绒域坊 海盗款宠物变身装 XL号</p><span>¥50.00</span><span>¥50.00</span></li>
            <li><img src="../../assets/g5.png" alt=""><p>2017年新款 宠趣 超萌卡通插肩袖卫衣 宝蓝烟斗狮XS号</p><span>¥50.00</span><span>¥50.00</span></li>
            <li><img src="../../assets/g6.jpg" alt=""><p>日本派地奥 犬用金太郎变身装 S号胸围27-35cm*脖围27cm</p><span>¥98.00</span><span>¥98.00</span></li>
            <li><img src="../../assets/g7.jpg" alt=""><p>日本派地奥 犬用金太郎变身装 S号胸围27-35cm*脖围27cm</p><span>¥98.00</span><span>¥98.00</span></li>
            <li><img src="../../assets/g8.jpg" alt=""><p>日本派地奥 犬用金太郎变身装 S号胸围27-35cm*脖围27cm</p><span>¥98.00</span><span>¥98.00</span></li>
          </ul>
        </div>
      </div>
      <div class="cab">
        <p>
          <span></span>
          <span>热门品类</span>
          <span></span>
        </p>
        <p>高颜值好物</p>
      </div>
      <div id="footer"></div>
    </div>
  </div>
 </div>
</template>

<script>
  import BScroll from "better-scroll"
    export default {
      data(){
        return{
            list:[
              {src:"https://img2.epetbar.com/nowater/2016-12/23/16/419cbc0384400cb4445568672c4f7b36.jpg@!100w-c",name:"外套"},
              {src:"https://img2.epetbar.com/nowater/2017-09/20/09/8797325e1b9e1ef225d1f1a672c3c91b.jpg@!100w-c",name:"卫衣"},
              {src:"https://img2.epetbar.com/nowater/2017-09/20/10/19e855d658e0c5135043d4784b1a77be.jpg@!100w-c",name:"四角装"},
              {src:"https://img2.epetbar.com/nowater/2017-09/20/10/c8b6ab87e3edc7d79ad4c428424c1c81.jpg@!100w-c",name:"马甲"},
              {src:"https://img2.epetbar.com/nowater/2017-09/20/09/5e5aa0659b525d66d852af8ceec861b0.jpg@!100w-c",name:"家居服"},
              {src:"https://img2.epetbar.com/nowater/2017-09/19/15/0c7fc2256c2a90fda3684dff237e561b.jpg@!100w-c",name:"毛衣"},
              {src:"https://img2.epetbar.com/nowater/2017-09/19/15/0c7fc2256c2a90fda3684dff237e561b.jpg@!100w-c",name:"配饰"},
              {src:"https://img2.epetbar.com/nowater/2016-12/26/16/7a36a3a3b2ed66a888462a0ceaa702ef.png@!100w-c",name:"更多"}
            ]
        }
      },
      handleClick(tab, event) {

      },
      mounted(){
        setTimeout(()=>{
          this.srcoll = new BScroll(this.$refs.contentWrap,{
            click: true
          })
        },1000)
      }
    }
</script>

<style lang="stylus" rel="stylesheet">
  @import "../../css/cloth.styl"

</style>
