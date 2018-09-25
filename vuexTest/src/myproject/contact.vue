<template>
  <el-container>
    <el-header height="auto">
      <Base-nav></Base-nav>
    </el-header>
    <el-main>
      <div class="mainContent" :style="{minHeight:minHeight+'px'}">
        <div class="maimainPart-bottom">
          <div class="maimainPart-bottom-l">
            <h3>Contact US</h3>
            <div>
              <p>We always have someone on hand to answer your questions. We believe in the timeliness of customer service, and will do everything possible to satisfy our customers. If you have any problems, comments, or suggestions, please contact</p>
              <p>Office Hours: 9:00 AM to 6:00 PM Pacific Time Zone (PT)</p>
              <p>Chat Service – 9:00 AM to 11:30 PM Pacific Time Zone (PT)</p>
            </div>
            <h3>address</h3>
            <p class="adderssInfo">
              <span>U.S.A. Office address: 20829 Valley Blvd. Walnut, CA 91789</span>
              <br>
              <span>Canada Office address: 5280 Oakmount Crescent, Ste 402, Burnaby, BC V5H 4S1 </span>
              <br>
              <span>Tel:<span class="phone">{{phoneNumber}}</span></span>
              <br>
              <span>Our office hours are from 9 AM to 6 PM (Pacific Time Zone)</span>
              <br>
              <span>Email:info<a href="https://www.gs-jj.com/">@gs-jj.com</a> </span>
            </p>
          </div>
        </div>
      </div>
    </el-main>
    <el-footer>
      <Base-footer></Base-footer>
    </el-footer>
  </el-container>
  </div>
</template>
<style scoped>
@media(min-width: 768px) {
  .mainContent {
    width: 100%;
  }
  .maimainPart-bottom {
    box-sizing: border-box;
    width: 85.71em;
    margin: 0 auto;
  }
  .maimainPart-bottom-l {
    color: #000;
    line-height:2em;
    width: 50%;
  }
  .maimainPart-bottom-l h3 {
    color: #B87C46FF;
    font-size: 1.3rem;
    margin: 1em 0;
  }
  .maimainPart-bottom-l p {
    line-height: 2em;
  }
  .phone {
    color: #C34C3BFF;
  }
}

@media(max-width: 768px) {
  .mainContent {
    width: 90%;
    margin: 0 auto;
  }
  .mainPart-top {
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    margin: 10px auto;
  }
  .mainPart-top h3 {
    font-size: 2em;
    margin-bottom: 10px;
    color: #AE5C50FF;
  }
  .maimainPart-bottom {
    box-sizing: border-box;
    width: 100%;
    margin: 20px 0;
  }
  .maimainPart-bottom-l {
    margin-bottom: 20px;
    color: #000;
    font-size: 15px;
    line-height: 30px;
  }
  .maimainPart-bottom-l h3 {
    font-size: 1.5em;
    color: #B87C46FF;
    margin: 10px 0;
  }
  .maimainPart-bottom-l p {
    font-size: 15px;
  }
  .maimainPart-bottom-l h4 {
    font-size: 1.5em;
    color: #B87C46FF;
    margin: 10px 0;
  }
  .phone {
    color: #C34C3BFF;
  }
}

</style>
<script>
export default {
  components: {

  },
  data() {
    return {
      minHeight: 0,
      linkNumber: 4,
      phoneNumber: '(909) 468 4808',
      title: 'Contact Us',
      introduce: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.',
      information: "We always have someone on hand to answer your questions. We believe in the timeliness of customer service, and will do everything possible to satisfy our customers. If you have any problems, comments, or suggestions, please contact\
        Office Hours: 9:00 AM to 6:00 PM Pacific Time Zone (PT)\
        Chat Service – 9:00 AM to 11:30 PM Pacific Time Zone (PT)"
    }
  },
  methods: {},
  mounted() {
    this.minHeight = document.documentElement.clientHeight-210;
    var that = this;
    window.onresize = function() {
      that.minHeight = document.documentElement.clientHeight-210;
    }
  }
}

</script>
