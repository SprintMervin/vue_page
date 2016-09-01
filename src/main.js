import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
Vue.use(vueResource);
//引入组件
import App from './app.vue';
import home from './components/home.vue';
// import tab_2 from './components/tab_2.vue';
// import tab_1 from './components/tab_1.vue';
import content from './components/content.vue';
import login from './components/login_window.vue';


Vue.use(VueRouter);

var app=Vue.extend(App);
var router=new VueRouter();

//配置路由
router.map({
  '/home': {
    component: home,
    subRoutes:{
		'/':{
			name:'content',
			component:content
		},
		'/tab_2':{
			name:'tab_2',
			component:login
		}

    }
  }
  
});

//设置默认情况下打开的页面
router.redirect({
  '/':'home'
});

router.start(app,'#app');
//暴露路由接口调试
window.router = router;