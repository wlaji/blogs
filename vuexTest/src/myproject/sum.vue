<template>
  <div class="wrap">
    <Base-nav></Base-nav>
    <div class="content" :style="{minHeight:minHeight+'px'}">
      <template>
        <h3>{{data.ad_title}}</h3>
        <p class="ad_remark">{{data.ad_remark}}</p>
        <p v-html="content" class="ad_content"></p>
      </template>
    </div>
    <Base-footer></Base-footer>
  </div>
</template>
<style scoped>
@media (min-width:768px) {
  .content {
    position: relative;
    box-sizing: border-box;
    width: 1200px;
    padding: 20px;
    text-align: left;
    margin: 0 auto;
  }
  .content h3 {
    font-size: 2em;
    text-align: center;
  }
  .ad_remark {
    font-size: 15px;
    margin: 10px 0;
    color: #888;
  }
}

@media (max-width:768px) {
  .content {
    position: relative;
    box-sizing: border-box;
    width: 100%px;
    margin: 10px auto;
    padding: 5px;
    text-align: left;
  }
  .content h3 {
    font-size: 1.3em;
    text-align: center;
  }
  .ad_remark {
    font-size: 15px;
    margin: 10px 0;
    color: #888;
  }
  .ad_content p img {
    width: 100% !important;
    ;
  }
}

</style>
<script>
export default {
  data() {
    return {
      data: '',
      ad_id: '',
      minHeight: '',
      content: '',
    }
  },
  methods: {
    getAdInfo() {
      this.$fetch(this.$url.api.ad + this.ad_id).then((res) => {
        this.data = res.data.data;
        this.content = this.unescape(res.data.data.ad_content);
      })
    },
    unescape(html) {
      var s = "";
      if (html.length == 0) return "";
      return html
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'")
        .replace(/&nbsp;/g, " ")
    },
  },
  mounted() {
    this.ad_id = sessionStorage.ad_id;
    this.getAdInfo()
    this.minHeight = document.documentElement.clientHeight - 192;
    let that = this;
    window.onresize = function() {
      that.minHeight = document.documentElement.clientHeight - 192;
    }
  },
}

</script>
