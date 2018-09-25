<template>
  <el-container>
    <el-header height="auto">
      <Base-nav></Base-nav>
    </el-header>
    <el-main class="content" v-loading="loading" element-loading-text="loading"
             element-loading-spinner="el-icon-loading" element-loading-background="rgba(255, 255, 255, 1)">
      <div class="mainPart" :style="{minHeight:minHeight+'px'}">
        <bolg :blogs="data" :clickBlog="clickBlog" :hotBlog="newBlog"></bolg>
        <page :info="pageInfo" @changePage="change"></page>
      </div>
    </el-main>
    <el-footer>
      <Base-footer></Base-footer>
    </el-footer>
  </el-container>
</template>
<style scoped>
  @media screen and (max-width: 768px) {
    .mainPart {
      padding-bottom: 2em
    }
  }

  @media screen and (min-width: 768px) {
    .mainPart {
      padding-bottom: 2em
    }
  }
</style>
<script>
  import bolg from '../components/bolg.vue'
  import page from '../components/page.vue'

  export default {
    components: {
      bolg,
      page
    },
    data () {
      return {
        minHeight: 0,
        pageInfo: '',
        data: '',
        loading: true,
        newBlog: '',
        clickBlog: '',
      }
    },

    methods: {
      getdata (p) {
        var that = this
        this.$fetch(this.$url.api.inquireBlog + '/p/' + p).then(function (res) {
          that.data = res.data.data
          that.pageInfo = res.data
          that.loading = false
        })
      },
      getHotBlogData () {
        this.$fetch(this.$url.api.hotBlog).then(res => {
          this.newBlog = res.data.data
        })
      },
      homeInfo () {
        this.$fetch(this.$url.api.home).then((res) => {
          this.clickBlog = res.data.hotarticle.slice(0, 4)
        })
      },
      change (p) {
        // this.currentIndex = p - 1;
        this.getdata(p)

      },
    },
    mounted () {
      this.getdata(1)
      this.getHotBlogData()
      this.homeInfo()
      this.minHeight = document.documentElement.clientHeight - 100
      var that = this
      window.onresize = function () {
        that.minHeight = document.documentElement.clientHeight - 100
      }
    },
  }

</script>
