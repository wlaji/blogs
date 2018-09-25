<template>
  <el-container class="wrap">
    <el-header height="auto">
      <template>
        <el-carousel :interval="4000" trigger="click" class="hide-mobel" :height="bannerH +'px'">
          <el-carousel-item v-for="(item,index) in bannerInfo" :key="index">
            <img class="bannerImg" :src="item.banner_image">
            <h3 style="display:none">{{item.banner_title}}</h3>
          </el-carousel-item>
        </el-carousel>
        <el-carousel :interval="4000" trigger="click" :height="bannerH +'px'" arrow="always" class="hide-pc">
          <el-carousel-item v-for="(item,index) in bannerInfo" :key="index">
            <img :src="item.banner_image" class="bannerImg" alt="">
            <h3 style="display:none">{{item.banner_title}}</h3>
          </el-carousel-item>
        </el-carousel>
      </template>
    </el-header>
    <el-main class="content">
      <Base-nav></Base-nav>
      <div id="mainPart">
        <div class="mainPart1">
          <div class="mainPart1-l" v-for="(item,index) in adInfo" :key="index">
            <div>
              <h4>{{item.ad_title}}</h4>
              <p>{{item.ad_remark}}</p>
              <template>
                <a @click="toDetail(item.ad_id)">View</a>
              </template>
              <div class="mainPart1-lImg" @click="toDetail(item.ad_id)"><img :src="items[index].img" :alt="item.alt"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider">
        <h2><i class="el-icon-goods"></i>Products</h2>
      </div>
      <div class="showImg">
        <div id="imgShow" class="showImgWrap">
          <ul class="hide-mobel">
            <li v-for="(item,index) in data">
              <div class="imgWrap">
                <div class="procImg_wrap">
                  <img class="procImg" :src="item.p_image" @mouseover="showLinkImg(index)" @mouseout="hideLinkImg(index)">
                </div>
                <transition name="linkImg">
                  <div class="linkImg_wrap" v-if="linkImg_wrap,index===linkImgIndex" @mouseover="showLinkImg(index)" @mouseout="hideLinkImg(index)">
                    <img class="linkImg" src="../../static/images/detail.svg" alt="" title="see details" @click="linkDetails(item.p_id,item.p_name)">
                    <div class="showImgContent">
                      <h4 class="showImgTitle">{{item.p_name}}</h4>
                      <el-button type="primary" @click="get(item.p_image)" size="small" style="opacity:1">Get the price similar like this product</el-button>
                    </div>
                  </div>
                </transition>
              </div>
            </li>
            <submitBtn :imgSrc="p_image" :popShow="popShow" @changPopShow="chPopShow"></submitBtn>
          </ul>
          <ul class="hide-pc">
            <li v-for="(item,index) in data">
              <div class="imgWrap">
                <div class="procImg">
                  <img :src="item.p_image" @click="linkDetails(item.p_id,item.p_name)">
                </div>
                <div class="showImgContent">
                  <h4 class="showImgTitle">{{item.p_name}}</h4>
                  <el-button type="primary" size="mini" @click="get(item.p_image)" style="width:90%;">Get the price </el-button>
                </div>
              </div>
            </li>
            <submitBtn :imgSrc="p_image" :popShow="popShow" @changPopShow="chPopShow"></submitBtn>
          </ul>
        </div>
      </div>
      <div class="divider">
        <h2><i class="el-icon-edit"></i>Blogs</h2>
      </div>
      <div class="blogs">
        <div class="blogsContent">
          <bolg :blogs="blogs" :clickBlog="clickBlog" :hotBlog="newBlog"></bolg>
        </div>
        <div class="loadMore" @click="loadMore">
          <a href="javascript:;"><img src="../../static/images/loadDown.gif" alt=""></a>
        </div>
      </div>
    </el-main>
    <el-footer height="8em">
      <Base-footer></Base-footer>
    </el-footer>
  </el-container>
</template>
<style scoped>
@media screen and (max-width:767px) {
  .bannerImg {
    width: 100%;
    height: 100%;
  }
  .el-icon-goods,
  .el-icon-edit {
    margin-right: 0.5em;
  }
  .divider {
    width: 100%;
    height: 4em;
    line-height: 4em;
    margin: 0 0 2em 0;
    background-color: #eee;
  }

  .divider h2 {
    width: 100%;
    color: #222;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
  }
  .content {
    min-height: 100vh;
  }

  .el-carousel__item {
    text-align: center;
  }

  #mainPart {
    width: 100%;
    background: url(https://res.cloudinary.com/dehxpneyp/image/upload/v1533947048/v1_1/gs-blogs/bg-image/bg-1.jpg);
    background-size: 100%, 100%;
  }

  .mainPart1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainPart1-l {
    position: relative;
    padding: 1em;
    width: 95%;
    margin: 4em;
    background: #F5F5F5;
    z-index: 10;
  }

  .mainPart1-l>div {
    box-sizing: border-box;
    width: 100%;
    height: 22em;
    border: 1px solid #cacaca;
    padding: 1.43em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 2.14em;
  }

  .mainPart1-l>div h4 {
    color: #FAA026;
    font-size: 1.5rem
  }

  .mainPart1-l>div p {
    margin: 0.7em 0 1.42em 0;
    line-height: 2em;
    height: 10em;
    overflow: hidden;
    text-align: left;
    word-break: break-all;
    font-weight: 400;
    color: #303133;
  }

  .mainPart1-l div a {
    padding: 0.5em 2.5em;
    border-radius: 1.2em;
    background-color: #3E8FBA;
    color: white;
    font-weight: 400;
  }

  .mainPart1-l:nth-child(2) {
    margin: 0 2.857em;
  }

  .mainPart1-lImg {
    z-index: 11;
    position: relative;
    position: absolute;
    top: 0;
    left: 50%;
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: -40px;
    border: 2px solid #fff;
    border-radius: 50%;
    background-color: #FAA026;
    text-align: center;
    cursor: pointer;
  }

  .mainPart1-lImg::after {
    content: "";
    width: 5.71em;
    height: 5.71em;
    border: 1px solid yellow;
    border-radius: 50%;
    position: absolute;
    margin-left: -2.857em;
    margin-top: -0.143em;
    box-sizing: border-box;
    opacity: 0;
    box-shadow: 0 0 5px 5px #eee;
  }

  .mainPart1-lImg:hover::after {
    animation: circleMove .6s ease-in;
  }

  @keyframes circleMove {
    0% {}
    20% {
      opacity: 1;
    }
    100% {
      box-shadow: 0 0 8px 8px #eee;
      transform: scale(1.4);
      opacity: 0;
    }
  }

  .mainPart1-lImg:hover {
    animation: mymove2 .6s ease-in;
    animation-fill-mode: forwards
  }

  @keyframes mymove2 {
    from {}
    to {
      background-color: #3E8FBA;
      transform: scale(0.9);
    }
  }

  .mainPart1-lImg img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3.57em;
    transform: translate(-50%, -50%);
    height: 3.57em;
    z-index: 11;
  }

  .mainPart1-l div a:hover {
    animation: mymove3 .5s;
    background-color: #FAA026;
  }

  @keyframes mymove3 {
    0% {
      transform: scale(1)
    }
    50% {
      transform: scale(0.8)
    }
    100% {
      transform: scale(1)
    }
  }

  .showImg {
    width: 100%;
  }

  .showImgWrap {
    width: 100%;
  }

  .showImgWrap ul {
    width: 100%;
    padding-right: -2%
  }

  .showImgWrap ul li {
    overflow: hidden;
    position: relative;
    display: inline-block;
    width: 48%;
    height: 17em;
    margin-bottom: 1em;
    margin-right: 2%;
    border: 1px solid #E4E7ED;
    text-align: center;
  }

  .showImgWrap ul li:nth-child(2n) {
    margin-right: 0;
  }
  .imgWrap {
    width: 100%;
    height: 100%;
  }
  .procImg {
    width: 100%;
    height: 12em;
  }
  .procImg img {
    width: 100%;
    height: 100%;
  }
  .showImgContent {
    width: 100%;
    height: 5em;
    line-height: 2.5em;
  }
  .showImgContent h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }
  .loadMore {
    width: 100%;
    margin: 0.5em auto;
    text-align: center;
    cursor: pointer;
  }
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  .bannerImg {
    width: 100%;
    height: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__container {
    height: auto;
  }
  .el-icon-goods,
  .el-icon-edit {
    margin-right: 0.5em;
  }
  .divider {
    width: 100%;
    height: 4em;
    line-height: 4em;
    background-color: #eee;
    border-bottom: 1px solid #DCDFE6;
  }

  .divider h2 {
    width:100%;
    margin: 0 auto;

    color: #222;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: left;
  }
  .content {
    min-height: 100vh;
  }

  .el-carousel__item {
    text-align: center;
  }

  #mainPart {
    width: 100%;
    background: url(https://res.cloudinary.com/dehxpneyp/image/upload/v1533947048/v1_1/gs-blogs/bg-image/bg-1.jpg);
    background-size: 100%, 100%;
  }

  .mainPart1 {
    width:100%;
    padding:4em 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mainPart1-l {
    position: relative;
    padding: 0.5em;
    width: 30%;
    background: #F5F5F5;
    z-index: 10;
  }

  .mainPart1-l>div {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #cacaca;
    padding: 2.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 2.14em;
  }

  .mainPart1-l>div h4 {
    color: #FAA026;
    font-size: 1.5rem
  }

  .mainPart1-l>div p {
    margin: 0.7em 0 1.42em 0;
    line-height: 2em;
    height: 10em;
    overflow: hidden;
    text-align: left;
    word-break: break-all;
    font-weight: 400;
    color: #303133;
  }

  .mainPart1-l div a {
    padding: 0.5em 2.5em;
    border-radius: 1.2em;
    background-color: #3E8FBA;
    color: white;
    font-weight: 400;
  }

  .mainPart1-l:nth-child(2) {
    margin: 0 2.857em;
  }

  .mainPart1-lImg {
    z-index: 11;
    position: relative;
    position: absolute;
    top: 0;
    left: 50%;
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: -40px;
    border: 2px solid #fff;
    border-radius: 50%;
    background-color: #FAA026;
    text-align: center;
    cursor: pointer;
  }

  .mainPart1-lImg::after {
    content: "";
    width: 5.71em;
    height: 5.71em;
    border: 1px solid yellow;
    border-radius: 50%;
    position: absolute;
    margin-left: -2.857em;
    margin-top: -0.143em;
    box-sizing: border-box;
    opacity: 0;
    box-shadow: 0 0 5px 5px #eee;
  }

  .mainPart1-lImg:hover::after {
    animation: circleMove .6s ease-in;
  }

  @keyframes circleMove {
    0% {}
    20% {
      opacity: 1;
    }
    100% {
      box-shadow: 0 0 8px 8px #eee;
      transform: scale(1.4);
      opacity: 0;
    }
  }

  .mainPart1-lImg:hover {
    animation: mymove2 .6s ease-in;
    animation-fill-mode: forwards
  }

  @keyframes mymove2 {
    from {}
    to {
      background-color: #3E8FBA;
      transform: scale(0.9);
    }
  }

  .mainPart1-lImg img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3.57em;
    transform: translate(-50%, -50%);
    height: 3.57em;
    z-index: 11;
  }

  .mainPart1-l div a:hover {
    animation: mymove3 .5s;
    background-color: #FAA026;
  }

  @keyframes mymove3 {
    0% {
      transform: scale(1)
    }
    50% {
      transform: scale(0.8)
    }
    100% {
      transform: scale(1)
    }
  }

  .showImg {
    width: 85.71em;
    margin: 0 auto;
    margin-top: 2em;
  }

  .showImgWrap {
    width: 100%;
    font-size: 14px;
  }

  .showImgWrap ul {
    width: 100%;
    padding-right: -1.3%
  }

  .showImgWrap ul li {
    overflow: hidden;
    position: relative;
    display: inline-block;
    width: 24%;
    height: 20em;
    margin-bottom: 1em;
    margin-right: 1.3%;
    border: 1px solid #E4E7ED;
    text-align: center;
    background-color: #eee;
  }

  .showImgWrap ul li:nth-child(4n) {
    margin-right: 0;
  }

  .showImgWrap .showImgContent {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    z-index: 10;
    padding: 0.5em;
  }

  .showImgWrap .showImgContent h4 {
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.8em;
    font-size: 1.1rem;
    font-weight: 400;
  }

  .showImgWrap .procImg {
    width: 100%;
    height: 100%;
  }

  .procImg {
    transition: all .5s;
  }

  .procImg_wrap {
    width: 100%;
    height: 20em;
    overflow: hidden;
  }

  .imgWrap:hover .procImg {
    transform: scale(1.3) !important;
  }

  .linkImg {
    width: 2.857em;
    position: absolute;
    bottom: 1.43em;
    right: 1.43em;
    opacity: 0.8;
    cursor: pointer;
    transition: all .2s linear
  }

  .linkImg-enter-active,
  .linkImg-leave-active {
    transition: all .5s;
  }

  .linkImg-enter,
  .linkImg-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }

  .linkImg_wrap {
    width: 100%;
    height: 20em;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loadMore {
    width: 85.71em;
    margin: 0.5em auto;
    text-align: center;
    cursor: pointer;
  }
}

@media screen and (min-width:1200px) {
  .bannerImg {
    width: 100%;
    height: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__container {
    height: auto;
  }
  .el-icon-goods,
  .el-icon-edit {
    margin-right: 0.5em;
  }
  .divider {
    width: 100%;
    height: 4em;
    line-height: 4em;
    background-color: #eee;
    border-bottom: 1px solid #DCDFE6;
  }

  .divider h2 {
    width: 85.71rem;
    margin: 0 auto;

    color: #222;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: left;
  }
  .content {
    min-height: 100vh;
  }

  .el-carousel__item {
    text-align: center;
  }

  #mainPart {
    width: 100%;
    background: url(https://res.cloudinary.com/dehxpneyp/image/upload/v1533947048/v1_1/gs-blogs/bg-image/bg-1.jpg);
    background-size: 100%, 100%;
  }

  .mainPart1 {
    width: 85.71em;
    margin: 0 auto;
    min-height: 35.71em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mainPart1-l {
    position: relative;
    padding: 1em;
    width: 30%;
    min-height: 25em;
    background: #F5F5F5;
    z-index: 10;
  }

  .mainPart1-l>div {
    box-sizing: border-box;
    width: 100%;
    height: 25em;
    border: 1px solid #cacaca;
    padding: 1.43em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 2.14em;
  }

  .mainPart1-l>div h4 {
    color: #FAA026;
    font-size: 1.5rem
  }

  .mainPart1-l>div p {
    margin: 0.7em 0 1.42em 0;
    line-height: 2em;
    height: 10em;
    overflow: hidden;
    text-align: left;
    word-break: break-all;
    font-weight: 400;
    color: #303133;
  }

  .mainPart1-l div a {
    padding: 0.5em 2.5em;
    border-radius: 1.2em;
    background-color: #3E8FBA;
    color: white;
    font-weight: 400;
  }

  .mainPart1-l:nth-child(2) {
    margin: 0 2.857em;
  }

  .mainPart1-lImg {
    z-index: 11;
    position: relative;
    position: absolute;
    top: 0;
    left: 50%;
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: -40px;
    border: 2px solid #fff;
    border-radius: 50%;
    background-color: #FAA026;
    text-align: center;
    cursor: pointer;
  }

  .mainPart1-lImg::after {
    content: "";
    width: 5.71em;
    height: 5.71em;
    border: 1px solid yellow;
    border-radius: 50%;
    position: absolute;
    margin-left: -2.857em;
    margin-top: -0.143em;
    box-sizing: border-box;
    opacity: 0;
    box-shadow: 0 0 5px 5px #eee;
  }

  .mainPart1-lImg:hover::after {
    animation: circleMove .6s ease-in;
  }

  @keyframes circleMove {
    0% {}
    20% {
      opacity: 1;
    }
    100% {
      box-shadow: 0 0 8px 8px #eee;
      transform: scale(1.4);
      opacity: 0;
    }
  }

  .mainPart1-lImg:hover {
    animation: mymove2 .6s ease-in;
    animation-fill-mode: forwards
  }

  @keyframes mymove2 {
    from {}
    to {
      background-color: #3E8FBA;
      transform: scale(0.9);
    }
  }

  .mainPart1-lImg img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3.57em;
    transform: translate(-50%, -50%);
    height: 3.57em;
    z-index: 11;
  }

  .mainPart1-l div a:hover {
    animation: mymove3 .5s;
    background-color: #FAA026;
  }

  @keyframes mymove3 {
    0% {
      transform: scale(1)
    }
    50% {
      transform: scale(0.8)
    }
    100% {
      transform: scale(1)
    }
  }

  .showImg {
    width: 85.71em;
    margin: 0 auto;
    margin-top: 2em;
  }

  .showImgWrap {
    width: 100%;
    font-size: 14px;
  }

  .showImgWrap ul {
    width: 100%;
    padding-right: -1.3%
  }

  .showImgWrap ul li {
    overflow: hidden;
    position: relative;
    display: inline-block;
    width: 24%;
    height: 20em;
    margin-bottom: 1em;
    margin-right: 1.3%;
    border: 1px solid #E4E7ED;
    text-align: center;
    background-color: #eee;
  }

  .showImgWrap ul li:nth-child(4n) {
    margin-right: 0;
  }

  .showImgWrap .showImgContent {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    z-index: 10;
    padding: 0.5em;
  }

  .showImgWrap .showImgContent h4 {
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.8em;
    font-size: 1.1rem;
    font-weight: 400;
  }

  .showImgWrap .procImg {
    width: 100%;
    height: 100%;
  }

  .procImg {
    transition: all .5s;
  }

  .procImg_wrap {
    width: 100%;
    height: 20em;
    overflow: hidden;
  }

  .imgWrap:hover .procImg {
    transform: scale(1.3) !important;
  }

  .linkImg {
    width: 2.857em;
    position: absolute;
    bottom: 1.43em;
    right: 1.43em;
    opacity: 0.8;
    cursor: pointer;
    transition: all .2s linear
  }

  .linkImg-enter-active,
  .linkImg-leave-active {
    transition: all .5s;
  }

  .linkImg-enter,
  .linkImg-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }

  .linkImg_wrap {
    width: 100%;
    height: 20em;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loadMore {
    width: 85.71em;
    margin: 0.5em auto;
    text-align: center;
    cursor: pointer;
  }
}

</style>
<script>
import submitBtn from '../components/submitBtn.vue'
import bolg from '../components/bolg.vue'
export default {
  components: {
    submitBtn,
    bolg
  },
  data () {
    return {
      bannerH: '',
      count: 0,
      bannerInfo: 3,
      adInfo: '',
      data: 8,
      items: [
        { img: this.$url.img.home },
        { img: this.$url.img.xunwen },
        { img: this.$url.img.gps }
      ],
      popShow: false,
      p_image: '',
      linkImg_wrap: false,
      linkImgIndex: '',
      blogs: [],
      num: 4,
      sw: true,
      newBlog: [],
      clickBlog: []
    }
  },
  inject: ['reload'],
  methods: {
    homeInfo () {
      this.$fetch(this.$url.api.home).then((res) => {
        this.bannerInfo = res.data.banner
        this.adInfo = res.data.ad
        this.data = res.data.product
        this.clickBlog = res.data.hotarticle.slice(0, 3)
        this.blogs = res.data.hotarticle
        sessionStorage.ad1 = res.data.ad[0].ad_id
        sessionStorage.ad2 = res.data.ad[1].ad_id
        sessionStorage.ad3 = res.data.ad[2].ad_id
      })
    },
    showLinkImg (index) {
      this.linkImg_wrap = true
      this.linkImgIndex = index
    },
    hideLinkImg (index) {
      this.linkImg_wrap = false
      this.linkImgIndex = ''
    },
    get (imgSrc) {
      this.popShow = !this.popShow
      this.p_image = imgSrc
    },
    removeTrim(str){
      return str.replace(/ /g,'-');
    },
    linkDetails (id, name) {
      let prodName=this.removeTrim(name);
      this.linkImg_wrap = false
      this.linkImgIndex = ''
      this.$router.push({
        name:'details',
        params:{
          item:'all',
          name:prodName,
        },
      })
    },
    chPopShow () {
      this.popShow = !this.popShow
      this.showBtn = false
    },
    toDetail (ad_id) {
      sessionStorage.ad_id = ad_id
      this.$router.push({
        name: 'Sum'
      })
    },
    loadMore () {
      let num = this.num
      if (this.sw === true) {
        this.sw = false
        this.$fetch(this.$url.api.scrollB + num).then(res => {
          if (res.data.data.length === 0) {
            this.$message({
              type: 'warning',
              message: 'no more blogs',
              center: true,
              duration: 1000

            })
          }
          this.num += 4
          let arr = this.blogs
          let addData = arr.concat(res.data.data)
          this.blogs = addData
          this.clickBlog = addData.slice(0, 3)
          this.sw = true
        })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    getHotBlogData () {
      this.$fetch(this.$url.api.hotBlog).then(res => {
        this.newBlog = res.data.data.slice(0, 3)
      })
    },
    setBannerH () {
      if (document.body.clientWidth < 768) {
        let bannerH = document.body.clientWidth / 2
        this.bannerH = bannerH
      }
      if (document.body.clientWidth > 768) {
        let bannerH = document.body.clientWidth / 2.3
        this.bannerH = bannerH
      }
    }

  },
  mounted () {
    this.homeInfo()
    this.getHotBlogData()
    this.setBannerH()
    window.addEventListener('resize', () => {
      this.setBannerH()
    }, false)
  },
  beforeRouteEnter (to, from, next) {
    let name = from.name
    let status = sessionStorage.judge
    let that = this
    if (name === 'Login' && status === 1) {
      location.reload()
    }
    if (name === 'ModifyPersonalData' && status !== 1) {
      location.reload()
    }
    if (name === 'ModifyPassword' && status !== 1) {
      location.reload()
    }
    if (name === 'Writeblog' && status !== 1) {
      location.reload()
    }
    if (name === 'Editblog' && status !== 1) {
      location.reload()
    }
    if (name === 'Myblog' && status !== 1) {
      location.reload()
    }
    next()
  }

}

</script>
