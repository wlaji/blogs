<template>
  <el-container>
    <el-header height="auto">
      <Base-nav></Base-nav>
    </el-header>
    <el-main class="main_content">
      <p>
        <span style="font-size:18px;backgroundColor: rgb(216, 216, 216);">Welcome to GS-JJ website</span>
      </p>
      <p>
        <span>GS-JJ e-commerce website is our latest venture in our effort to offer our quality products and service directly to Designer and end users.<br></span>
      </p>
      <p>
        <span>
          <span style="text-decoration:underline">U.S.A.:</span>
        <strong><span>Los Angeles</span></strong> Office address: 20829 Valley Blvd. Walnut, CA 91789</span>
      </p>
      <p>
        <span style="text-decoration:underline">Canada:</span>
        <strong>Vancouver</strong>
        <span>Office address: 5280 Oakmount Crescent, Ste 402, Burnaby, BC V5H 4S1</span>
      </p>
      <p class="adr">
        <span><img src="https://res.cloudinary.com/dehxpneyp/image/upload/v1534143218/v1_1/gs-blogs/other/1.png"> <img src="https://res.cloudinary.com/dehxpneyp/image/upload/v1534143218/v1_1/gs-blogs/other/2.jpg" ></span></p>
      <br>
      <p>
        <span>GS-JJ is affiliated to one of the largest manufacturers of promotional gifts merchandise in China, whose mission is offer their customers the best quality products at highly competitive prices and on-time delivery!  </span>
      </p>
      <p>
        <span>We have been in the manufacturing of promotional gifts merchandise for over 20 years!  We wholesale direct to some of the biggest distributors, franchise operators, and high-end customers in America and around the world!  We work hard everyday to be the best in the industry!  We have become actively involved in web commerce by joining promotional products industry associations, such as ASI, SAGE, PPAI, and ARA.  We are proud to say within a few years of becoming a member of these associations, we earned several awards for quality, service and customer satisfaction.  We have received excellent 5-star ratings from ASI and SAGE, as rated by our distributors.  </span>
      </p>
      <p>
        <span><img src="https://res.cloudinary.com/dehxpneyp/image/upload/v1534143218/v1_1/gs-blogs/other/3.png"></span>
      </p>
      <p>
        <span>We are especially proud to have received the "Best Supplier Awards" from SAGE four years in a row.</span>
      </p>
      <p class="showImg">
        <span>
          <img src="https://res.cloudinary.com/dehxpneyp/image/upload/v1534143218/v1_1/gs-blogs/other/10.png">
          <img src="https://res.cloudinary.com/dehxpneyp/image/upload/v1534143218/v1_1/gs-blogs/other/11.png" >
          <img src="https://res.cloudinary.com/dehxpneyp/image/upload/v1534143218/v1_1/gs-blogs/other/12.png">
          <img src="https://res.cloudinary.com/dehxpneyp/image/upload/v1534143218/v1_1/gs-blogs/other/13.png">
        </span>
      </p>
      <p>
        <span>Capitalizing on our company's excellent product quality and service experience gained through years of dealing with "demanding" distributors, we are ready to embark on a new mission to serve the general market.  GS-JJ.com is the newest division of GS Promo USA .  We invested heavily in GS-JJ.com to offer our clients the best products and services at the most competitive prices on our secured e-commerce website.  We provide some of the quickest turn-around time and fastest delivery schedule!  Whether you have a small quantity or a large project order to fill, you can always count on GS-JJ.com to help you through the entire order fulfillment process!</span>
      </p>
      <p><span>Our product lines include: </span></p>
      <p class="linkA">
        <a href="/lapel-pins/Custom-Lapel-Pins" target="_self"><span >Lapel Pins</span></a><span>/<a href="https://www.gs-jj.com/medals/Custom-Medals" target="_self" textvalue="Medals">Medals</a>  /  <a href="https://www.gs-jj.com/lanyards/Custom-Lanyards" target="_self" textvalue="Lanyards">Lanyards</a>  /  <a href="https://www.gs-jj.com/belt-buckles/Custom-Belt-Buckles" target="_self" textvalue="Belt Buckles">Belt Buckles</a>  /  <a href="https://www.gs-jj.com/challenge-coins/Custom-Challenge-Coins" target="_self" textvalue="Challenge Coins">Challenge Coins</a>  /  Ornaments  /  Embroidered Patches  /  Key Chains  /  Silicone Wristbands and MORE ......</span>
      </p>
    </el-main>
    <el-main>
      <div class="teamList">
        <h3>Our Team</h3>
        <list :items="peopleList" @info="info"></list>
      </div>
    </el-main>
    <el-footer>
      <Base-footer></Base-footer>
    </el-footer>
  </el-container>
</template>
<style scoped>
@media(min-width: 768px) {
  .main_content {
    box-sizing: border-box;
    width: 85.71em;
    margin: 1.43em auto;
    text-align: left;
  }
  .main_content p {
    color: #333;
    line-height: 2em;
  }
  .adr {
    margin: 1.43em 0;
  }
  .adr span img {
    display: inline-block;
    width: 35.71em;
  }
  .showImg span {
    font-size: 0;
  }
  .showImg span img {
    width: 7.86em;
    height: 7.86em;
  }
  .linkA a {
    color: #333;
  }
  .linkA a:hover {
    text-decoration: underline;
  }
  #navBar {
    position: fixed;
    top: 0;
    z-index: 999;
  }

  .teamList {
    width: 100%;
    padding: 5em 0;
    background-color: #EEE;
    text-align: center;
  }

  .teamList>h3 {
    font-size: 2.5em;
    color: #BE8140FF;
    margin-bottom: 2em;
  }
}

@media(max-width: 768px) {
  .main_content {
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1.5em;
    text-align: left;
  }
  .main_content p {
    font-size: 1.1rem;
    color: #333;
    margin: 0.8em 0;
  }
  .adr {
    margin: 1.5em 0;
  }
  .adr span img {
    display: inline-block;
    width: 40%;
  }
  .showImg span {
    font-size: 0;
  }
  .showImg span img {
    width: 20%;
  }
  .linkA a {
    color: #333;
  }
  .teamList {
    width: 100%;
    background-color: #eee;
    text-align: center;
    padding: 0 0 20px 0;
  }

  .teamList>h3 {
    font-size: 1.5rem;
    color: #BE8140FF;
    padding-top: 0.8em;
    margin-bottom: 0.8em;
  }
}

</style>
<script>
import list from '../components/list.vue'
export default {
  components: {
    list
  },
  data() {
    return {
      linkNumber: 1,
      aboutTitle: "About US",
      aboutImg: this.$url.img.about1,
      aboutAlt: "pictur1",
      textTitle: "Welcome to GS-JJ website",
      textContent: "GS-JJ is affiliated to one of the largest manufacturers of promotional gifts merchandise in China, whose mission is offer their customers the best quality products at highly competitive prices and on-time delivery!We have been in the manufacturing of promotional gifts merchandise for over 20 years! We wholesale direct to some of the biggest distributors, franchise operators, and high-end customers in America and around the world! We work hard everyday to be the best in the industry! We have become actively involved in web commerce by joining promotional products industry associations, such as ASI, SAGE, PPAI, and ARA. We are proud to say within a few years of becoming a member of these associations, we earned several awards for quality, service and customer satisfaction. We have received excellent 5-star ratings from ASI and SAGE, as rated by our distributors.",
      peopleList: [{
          src: this.$url.img.about2,
          alt: 'first',
          title: 'Aaron',
          content: 'Do you have the fashion elements that are indispensable for hipsters?',
          p: 'When we were a child, we were born with curiosity. We fearlessly ran on the grass to catching butterflies, bugs. When we grow up, the fast-paced life makes us disappear the fearless and happiness. And we lose our innate curiosity and instinct. But our pursuit of happiness and goodness has never stopped, we just changed the way. The butterflies that we have hunted for and the bugs we have caught that have become beautiful ornaments which are worn on our clothing. They are not only memories of our childhood happiness, but also have become an essential fashion element.'
        },
        {
          src: this.$url.img.about3,
          alt: 'secont',
          title: 'Abel',
          content: '10 Tips Help You Lose Weight',
          p: 'More than half of Americans want to lose weight by controlling their diet, according to the latest US survey, the Daily Mail of London reported. The U.S. Centers for Disease Control (CDC) says at least 160 million Americans are now registered to lose weight through diet control. From 2013 to 2016, these people kept in shape and reduced blood pressure and blood lipids by eating more vegetables, drinking more water, eating less or even not eating fried food and meat, while the other half continued to grow weight in the past few years.'
        },
        {
          src: this.$url.img.about4,
          alt: 'three',
          title: 'Aidan',
          content: 'The fabulous gifts express our appreciation to women',
          p: 'She believed she could, and finally she did.The role of women should never ignore,especialfor family management and society development. Women are always as special labor in all industries since they have freedom and equal right.They have contributed a lot,what kind of fabulous gifts are properfor them ?GS - JJ is the gifts expert you’ re lookingfor.We have metal crafts as perfect items to express your appreciation to others.'
        },
        {
          src: this.$url.img.about5,
          alt: 'four',
          title: 'Benjamin',
          content: 'The different advantages of printed patches',
          p: 'Printed patches can completely copy your photos, and any photo details can be captured to perfectly present themselves in front of you. For example, choose one of your favorite landscapes or even a picture of a star you like, and we can copy it all the same on a printed patches. We can even add some special effects, such as drop shadows and shading, make it look vivid. And for printed patches, you don’t have to worry about not having the color you want, or worrying about its color. You can use any color without any color restrictions.'
        },
      ]
    }
  },
  methods: {
    info: function(e, index) {
      e.hide = false;
      e.current = index;
    },
  },
  mounted() {}

}

</script>
