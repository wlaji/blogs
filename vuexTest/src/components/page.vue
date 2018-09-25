<template>
  <div class="wrpa">
    <div class="page" v-if="pagecount>1">
      <span @click="change(currentIndex)">&lt;</span>
      <span v-for="(item,index) in pagecount" @click="change(index+1)" :class="{active:index==currentIndex}">{{index+1}}</span>
      <span @click="change(currentIndex+2)">&gt;</span>
    </div>
  </div>
</template>
<style scoped>
@media (min-width:768px) {
  .page {
    width:100%;
    margin:2.2em auto 1em auto;
    text-align: center;
    font-weight: 400;
  }
  .page span {
    margin: 0 0.5em;
    padding: 0.8em 1.2em;
    border: 1px solid #ccc;
    border-radius: 0.5em;
    cursor: pointer;
    transition: all .6s;
  }

  .page span:hover {
    border: 1px solid #03A89E !important;
    color: #03A89E;
  }

  .active {
    margin: 0 0.5em;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    cursor: pointer;
    border: 1px solid #03A89E !important;
    color: #03A89E;
  }
}

@media (max-width:768px) {
  .page {
    position: absolute;
    width: 100%;
    margin:0 auto;
    text-align: center;
    font-weight: 400;
  }
  .page span {
    margin: 0 0.5em;
    padding: 0.4em 1em;
    border: 1px solid #ccc;
    border-radius:0.5em;
    cursor: pointer;
  }
  .active {
    margin: 0 0.5em;
    border-radius: 0.5em;
    cursor: pointer;
    border: 1px solid #03A89E !important;
    color: #03A89E;
  }
}

</style>
<script>
export default {
  props: ['info'],
  data() {
    return {
      items: {},
      pagecount: '',
      p: 1,
      currentIndex: 0
    }
  },
  watch: {
    info(val) {
      this.items = val;
      this.pagecount = val.pagecount;
      this.p = val.p;
    }
  },
  methods: {
    change(p) {
      if (p <= 0) {
        this.$message({
          type: 'warning',
          message: 'This is already the first one',
          center: true
        });
      } else if (p > this.pagecount) {
        this.$message({
          type: 'warning',
          message: 'This is already  the last one',
          center: true
        });
      } else {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        this.currentIndex = p - 1;
        this.$emit('changePage', p);
      }

    }
  },
  mounted() {

  }
}

</script>
