<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive&&isRouterAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive&&isRouterAlive" />
    <back-top :transitionName="'easeOutQuad'"></back-top>
  </div>
</template>
<style>
@import './assets/public.css';
#app{
  
}
</style>
<script>
import backTop from './components/backToTop'
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  components:{
    backTop,
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      })
    }
  },
}

</script>
