<template>
  <el-container>
    <el-header height="auto">
      <Base-nav></Base-nav>
    </el-header>
    <el-main class="content" v-loading="loading1" element-loading-text="loading"
             element-loading-spinner="el-icon-loading" element-loading-background="rgba(255, 255, 255, 1)">
      <el-carousel class="hide-mobel" :interval="4000" type="card" :height="bannerH +'px'" indicator-position="outside"
                   trigger="click">
        <el-carousel-item v-for="(item,index) in bannerInfo" :key="index">
          <img :src="item.banner_image" class="bannerImg" alt="">
          <h3 style="display:none">{{item.banner_title}}</h3>
        </el-carousel-item>
      </el-carousel>
      <el-carousel :interval="4000" trigger="click" :height="bannerH +'px'" arrow="always" class="hide-pc">
        <el-carousel-item v-for="(item,index) in bannerInfo" :key="index">
          <img :src="item.banner_image" class="bannerImg" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="divider">
        <h2><i class="el-icon-goods"></i>Products</h2>
      </div>
      <el-container class="productShow">
        <div class="showProductNav hide-pc"><i class="el-icon-xyr-et-more" @click="showProductNav"></i></div>
        <el-aside class="product-nav hide-mobel">
          <h3>Products Menu</h3>
          <ul>
            <li @click="getAllInfo" :class="{active:currentIndex==-1}"><i class="el-icon-caret-right"></i>All Products
            </li>
            <li v-for="(item,index) in productsSort" :key="item.t_id" @click="change(index,item.t_id,item.t_name)"
                :class="{active:index==currentIndex}">
              <i class="el-icon-caret-right"></i>
              <span>{{item.t_name}}</span>
            </li>
          </ul>
        </el-aside>
        <el-aside class="product-nav hide-pc" v-show="productNav" width="15em">
          <h3>Products Menu</h3>
          <ul>
            <li @click="getAllInfoMobel" :class="{active:currentIndex==-1}"><i class="el-icon-caret-right"></i>All
              Products
            </li>
            <li v-for="(item,index) in productsSort" :key="item.t_id" @click="change(index,item.t_id,item.t_name)"
                :class="{active:index==currentIndex}">
              <i class="el-icon-caret-right"></i>
              <span>{{item.t_name}}</span>
            </li>
          </ul>
        </el-aside>
        <el-main class="product-item" v-loading="loading2">
          <div class="showImg">
            <div id="imgShow" class="showImgWrap">
              <ul class="hide-mobel">
                <template v-if="productsSortInfo.length==0">
                  <p class="tips">Temporarily no product</p>
                </template>
                <template v-else>
                  <li v-for="(item,index) in productsSortInfo" :key="item.p_id">
                    <div class="imgWrap">
                      <div class="procImg_wrap">
                        <img class="procImg" :src="item.p_image" @mouseover="showLinkImg(index)"
                             @mouseout="hideLinkImg(index)">
                      </div>
                      <transition name="linkImg">
                        <div class="linkImg_wrap" v-if="linkImg_wrap,index===linkImgIndex"
                             @mouseover="showLinkImg(index)" @mouseout="hideLinkImg(index)">
                          <img class="linkImg" src="../../static/images/detail.svg" alt="" title="see details"
                               @click="linkDetails(item.p_id,item.p_name)">
                          <div class="showImgContent">
                            <h4 class="showImgTitle">{{item.p_name}}</h4>
                            <el-button type="primary" @click="get(item.p_image)" size="small" style="opacity:1">Get the
                              price similar like this product
                            </el-button>
                          </div>
                        </div>
                      </transition>
                    </div>
                  </li>
                </template>
                <submitBtn :imgSrc="p_image" :popShow="popShow" @changPopShow="chPopShow"></submitBtn>
              </ul>
              <ul class="hide-pc">
                <li v-for="(item,index) in productsSortInfo" :key="item.p_id">
                  <div class="imgWrap">
                    <div class="procImg">
                      <img :src="item.p_image" @click="linkDetails(item.p_id,item.p_name)">
                    </div>
                    <div class="showImgContent">
                      <h4 class="showImgTitle">{{item.p_name}}</h4>
                      <el-button type="primary" size="mini" @click="get(item.p_image)" style="width:90%;overflow:hidden;textOverflow:ellipsis;
whiteSpace: nowrap;">Get the price similar like this product
                      </el-button>
                    </div>
                  </div>
                </li>
                <submitBtn :imgSrc="p_image" :popShow="popShow" @changPopShow="chPopShow"></submitBtn>
              </ul>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-main>
    <el-footer>
      <Base-footer></Base-footer>
    </el-footer>
  </el-container>
</template>
<style scoped>
  @media screen and (max-width: 768px) {
    .bannerImg {
      width: 100%;
      height: 100%;
    }

    .el-icon-xyr-et-more {
      color: #000;
      font-size: 1.5rem
    }

    .divider {
      width: 100%;
      height: 4em;
      line-height: 4em;
      background-color: #eee;
    }

    .divider h2 {
      width: 100%;
      margin: 0 auto;
      color: #df1f26;
      font-weight: 500;
      font-size: 1.2rem;
      text-align: left;
      padding: 0 0.5em;
    }

    .el-icon-caret-right {
      font-size: 1.2rem;
      vertical-align: middle;
    }

    .content {
      min-height: 100vh;
      margin: 0 0 0.5em 0;
      background-color: #fff;
    }

    .productShow {
      position: relative;
      width: 100%;
      margin: 2em auto;
    }

    .showProductNav {
      position: absolute;
      top: -1.5em;
    }

    .product-nav {
      position: absolute;
      overflow: hidden;
      border-right: 1px solid #ccc;
      background-color: #F5F5F5;
      z-index: 1000;
    }

    .product-item {
      width: 100%;
      padding: 0;
      background-color: #fff;
    }

    .product-nav h3 {
      padding: 0.8em;
      font-size: 1.1rem;
      font-weight: 700;
      color: #222;
    }

    .product-nav ul li {
      padding: 1em 0.5em;
      border-bottom: 1px solid #eee;
      color: #888;
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
    }

    .tips {
      width: 20em;
      height: 5em;
      line-height: 5em;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5rem;
      font-weight: 500;
      color: #fff;
      text-align: center;
    }

    .showImg {
      width: 100%;
    }

    .showImgWrap {
      width: 100%;
    }

    .showImgWrap ul {
      width: 100%;
      padding: 0.5em;
      padding-right: -2%
    }

    .showImgWrap ul li {
      overflow: hidden;
      position: relative;
      display: inline-block;
      width: 49%;
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
      white-space: nowrap;
    }
  }

  @media screen and (min-width: 768px) {
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

    .el-icon-goods {
      margin-right: 0.5em;
    }

    .divider {
      width: 100%;
      height: 4em;
      line-height: 4em;
      background-color: #eee;
    }

    .divider h2 {
      width: 85.71rem;
      margin: 0 auto;
      color: #df1f26;
      font-weight: 500;
      font-size: 1.5rem;
      text-align: left;
    }

    .el-icon-caret-right {
      font-size: 1.5rem;
      vertical-align: middle;
    }

    .content {
      min-height: 100vh;
      margin: 0.5em 0;
      background-color: #fff;
    }

    .banner h3 {
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #222;
      font-size: 1.5em;
      font-weight: 400;
      z-index: 1000;
    }

    .el-carousel__item {
      text-align: center;
    }

    .productShow {
      width: 85.71em;
      margin: 2em auto;
      background-color: #eee;
    }

    .product-nav {
      overflow: hidden;
      width: 20%;
      border-right: 1px solid #ccc;
      background-color: #F5F5F5;
    }

    .product-item {
      width: 80%;
      padding: 0 1.43em;
      background-color: #fff;
    }

    .product-nav h3 {
      padding: 0.8em;
      font-size: 1.2rem;
      font-weight: 700;
      color: #222;
    }

    .product-nav ul li {
      padding: 1em 0.5em;
      border-bottom: 1px solid #eee;
      color: #888;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
    }

    .product-nav ul li:hover {
      background-color: #fff;
      border-right: 4px solid #df1f26;
      color: #df1f26 !important;
    }

    .active {
      background-color: #fff;
      border-right: 4px solid #df1f26;
      color: #df1f26 !important;
    }

    .showImg {
      width: 100%;
      height: 100%;
    }

    .showImgWrap {
      position: relative;
      height: 100%;
    }

    .tips {
      width: 20em;
      height: 5em;
      line-height: 5em;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5rem;
      font-weight: 500;
      color: #fff;
      text-align: center;
    }

    .showImgWrap ul {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .showImgWrap ul li {
      overflow: hidden;
      position: relative;
      display: inline-block;
      width: 33%;
      height: 20em;
      border: 1px solid #eee;
      margin-right: 0.5%;
      margin-bottom: 0.5%;
      text-align: center;
      background-color: #ccc;
    }

    .showImgWrap ul li:nth-child(3n) {
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
  }

</style>
<script>
  import submitBtn from '../components/submitBtn.vue'

  export default {
    components: {
      submitBtn
    },
    data () {
      return {
        itemName: 'all',
        bannerH: '',
        productsSort: '',
        currentIndex: -1,
        pageInfo: '',
        productsSortInfo: '',
        p_image: '',
        linkImg_wrap: false,
        linkImgIndex: '',
        popShow: false,
        bannerInfo: 3,
        loading1: true,
        loading2: '',
        productNav: false,
      }
    },
    methods: {
      productType () {
        this.$fetch(this.$url.api.allCategories).then(res => {
          this.productsSort = res.data.data
        })
      },
      change (index, id, name) {
        this.productNav = !this.productNav
        this.loading2 = true
        this.currentIndex = index
        this.itemName = this.removeTrim(name)
        this.getIdInfo(id)
        sessionStorage.removeItem('goId')
        sessionStorage.removeItem('goName')
        sessionStorage.removeItem('goIndex')
        sessionStorage.typeName = name
        this.$router.push({
          path: '/products/' + this.removeTrim(name)
        })
      },
      getIdInfo (id) {
        console.log(id)
        this.$fetch(this.$url.api.aClassification + id).then(res => {
          console.log(res)
          this.pageInfo = res.data
          this.productsSortInfo = res.data.data
          this.loading1 = false
          this.loading2 = false
        })
      },
      getAllInfo () {
        this.loading2 = true
        this.currentIndex = -1
        this.$fetch(this.$url.api.allProduct).then(res => {
          sessionStorage.typeName = 'all'
          this.pageInfo = res
          this.productsSortInfo = res.data.data
          this.loading1 = false
          this.loading2 = false
        })
      },
      getAllInfoMobel () {
        this.productNav = !this.productNav
        this.loading2 = true
        this.currentIndex = -1
        this.$fetch(this.$url.api.allProduct).then(res => {
          this.pageInfo = res
          this.productsSortInfo = res.data.data
          this.loading1 = false
          this.loading2 = false
        })
      },
      getBannerInfo () {
        this.$fetch(this.$url.api.banner).then((res) => {
          this.bannerInfo = res.data.data
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
      linkDetails (id, name) {
        let prodName = this.removeTrim(name)
        this.linkImg_wrap = false
        this.linkImgIndex = ''
        this.$router.push({
          name: 'details',
          params: {
            item: this.itemName,
            name: prodName,
          },
        })
      },
      get (imgSrc) {
        this.popShow = !this.popShow
        this.p_image = imgSrc
      },
      chPopShow () {
        this.popShow = !this.popShow
        this.showBtn = false
      },
      showProductNav () {
        this.productNav = !this.productNav
      },
      setBannerH () {
        if (document.body.clientWidth < 768) {
          let bannerH = document.body.clientWidth / 2.2
          this.bannerH = bannerH
        }
        if (document.body.clientWidth > 768) {
          let bannerH = document.body.clientWidth / 4.5
          this.bannerH = bannerH
        }
      },
      removeTrim (str) {
        return str.replace(/ /g, '-')
      }
    },
    mounted () {
      if (sessionStorage.goId && sessionStorage.goName && sessionStorage.goIndex) {
        this.getBannerInfo()
        this.productType()
        this.getIdInfo(sessionStorage.goId)
        this.currentIndex = sessionStorage.goIndex
      } else {
        this.productType()
        this.getAllInfo()
        this.getBannerInfo()
      }
      this.setBannerH()
      window.addEventListener('resize', () => {
        this.setBannerH()
      }, false)
    },
    beforeRouteLeave (to, from, next) {
      if (to.name !== 'details') {
        sessionStorage.removeItem('goId')
        sessionStorage.removeItem('goName')
        sessionStorage.removeItem('goIndex')
      }
      next()
    },
  }

</script>
