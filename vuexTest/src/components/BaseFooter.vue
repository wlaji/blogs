<template>
  <div class="wrap">
    <div class="footer">
      <div class="footer-left">
        <a href="https://www.gs-jj.com/" class="home">GS-JJ</a>
      </div>
      <div class="server server1 ">
        <ol>
          <li>
            <a href="javascript:;" @click="toDetail1">About US</a>
          </li>
          <li>
            <a href="javascript:;" @click="toDetail2">Our advantages</a>
          </li>
          <li>
            <a href="javascript:;" @click="toDetail3">Our services</a>
          </li>
        </ol>
      </div>
      <div class="server server2 clearfix">
        <ol>
          <li>
            <router-link to="/products">Products</router-link>
          </li>
          <li>
            <router-link to="/blogs">Blogs</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ol>
      </div>
      <div class="footer-right">
        <p>Copyright © GS-JJ.com 2016 Custom Pins, Custom Lanyards info@GS-JJ.com</p>
      </div>
    </div>
  </div>
  </div>
</template>
<style scoped>
@media screen and (max-width:767px) {
  .wrap {
    width: 100%;
    background-color: #545c64;
  }

  .footer {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 1em 0;
    text-align: center;
  }

  .footer-left {
    color: white;
  }

  .footer-left a {
    color: white;
    font-size: 1.5rem;
  }

  .footer-right p {
    color: white;
    text-align: center;
  }
  .mainContent {
    width: 70%;
    margin: 0 auto;
    text-align: left;
  }
  .server ol {
    list-style-type: none;
  }

  .server ol li {
    margin: 0.5em;
  }

  .server ol li a {
    color: #fff;
  }
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  .wrap {
    width: 100%;
    height: 8em;
    background-color: #545c64
  }

  .footer {
    height: 100%;
    width: 99%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-left {
    color: white;
  }

  .footer-left a {
    color: white;
    font-size: 2rem;
  }

  .footer-right p {
    color: white;
    font-size: 1.2rem;
    text-align: right;
  }

  .server ol {
    list-style-type: none;
  }

  .server ol li {
    margin: 0.5em;
  }

  .server ol li a {
    color: #fff;
    font-size: 1.1rem;
  }

  .server ol li a:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #000;
  }
}

@media screen and (min-width:1200px) {
  .wrap {
    width: 100%;
    height: 8em;
    background-color: #545c64
  }

  .footer {
    height: 100%;
    width: 85.71em;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-left {
    color: white;
  }

  .footer-left a {
    color: white;
    font-size: 2rem;
  }

  .footer-right p {
    color: white;
    font-size: 1.2rem;
    text-align: right;
  }

  .server ol {
    list-style-type: none;
  }

  .server ol li {
    margin: 0.5em;
  }

  .server ol li a {
    color: #fff;
    font-size: 1.1rem;
  }

  .server ol li a:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #000;
  }
}

</style>
<script>
export default {
  data() {
    return {

    }
  },
  inject: ['reload'],
  methods: {
    toDetail1() {
      sessionStorage.ad_id = sessionStorage.ad1;
      this.$router.push({
        name: 'Sum',
      })
      this.reload();
    },
    toDetail2() {
      sessionStorage.ad_id = sessionStorage.ad2;
      this.$router.push({
        name: 'Sum',
      })
      this.reload();
    },
    toDetail3() {
      sessionStorage.ad_id = sessionStorage.ad3;
      this.$router.push({
        name: 'Sum',
      })
      this.reload();
    },
  },
  mounted() {

  }
}

</script>
