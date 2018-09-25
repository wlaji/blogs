import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Index = () =>
  import ('../myproject/index') //路由懒加载
const About = () =>
  import ('../myproject/about')
const Products = () =>
  import ('../myproject/products')
const Blogs = () =>
  import ('../myproject/blogs')
const Contact = () =>
  import ('../myproject/contact')
const Sum = () =>
  import ('../myproject/sum')
const Details = () =>
  import ('../myproject/details')
const BlogsDetail = () =>
  import ('../myproject/blogDetail')
const Login = () =>
  import ('../myproject/login')
const Register = () =>
  import ('../myproject/register')
const Writeblog = () =>
  import ('../myproject/writeblog')
const Myblog = () =>
  import ('../myproject/myblog')
const Editblog = () =>
  import ('../myproject/editblog')
const ModifyPersonalData = () =>
  import ('../myproject/modifyPersonalData')
const ModifyAvatar = () =>
  import ('../myproject/modifyAvatar')
const ModifyPassword = () =>
  import ('../myproject/modifyPassword')
const FondPassword = () =>
  import ('../myproject/fondPassword')
Vue.use(Router)
export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {x: 0, y: to.meta.savedPosition || 0}
    }
  },
  routes: [{
    path: '/',
    name: 'home',
    component: Index,
    meta: {
      title: 'Home',
      keepAlive: true,
    },
  },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About',
        keepAlive: true,
      },
    },
    {
      path: '/products',
      name: 'products',
      alias: '/products/:item',
      component: Products,
      meta: {
        title: 'products',
        keepAlive: false,
      }
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs,
      meta: {
        title: 'blogs',
        keepAlive: true,
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'contact',
        keepAlive: true,
      },
    },
    {
      path: '/sum',
      name: 'Sum',
      component: Sum,
      meta: {
        title: 'Details',
        keepAlive: false,
      }
    },
    {
      path: '/details/:item/:name',
      name: 'details',
      component: Details,
      meta: {
        title: 'ProductDetails',
        keepAlive: false,
      }
    },
    {
      path: '/blogs/blogDetail/:id',
      name: 'BlogsDetail',
      component: BlogsDetail,
      meta: {
        title: 'BlogDetails',
        keepAlive: false,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login',
        keepAlive: false,
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: 'register',
        keepAlive: false,
      }
    },
    {
      path: '/myblog',
      name: 'Myblog',
      component: Myblog,
      meta: {
        title: 'myblog',
        keepAlive: false,
      }
    },
    {
      path: '/writeblog',
      name: 'Writeblog',
      component: Writeblog,
      meta: {
        title: 'writeblog',
        keepAlive: false,
      }
    },
    {
      path: '/editblog',
      name: 'Editblog',
      component: Editblog,
      meta: {
        title: 'editblog',
        keepAlive: false,
      }
    },
    {
      path: '/modifyPersonalData',
      name: 'ModifyPersonalData',
      component: ModifyPersonalData,
      meta: {
        title: 'modifyPersonalData',
        keepAlive: false,
      }
    },
    {
      path: '/modifyPassword',
      name: 'ModifyPassword',
      component: ModifyPassword,
      meta: {
        title: 'modifyPassword',
        keepAlive: false,
      }
    },
    {
      path: '/modifyAvatar',
      name: 'ModifyAvatar',
      component: ModifyAvatar,
      meta: {
        title: 'modifyAvatar',
        keepAlive: false,
      }
    },
    {
      path: '/fondPassword',
      name: 'FondPassword',
      component: FondPassword,
      meta: {
        title: 'fondPassword',
        keepAlive: false,
      }
    },
  ]
})
