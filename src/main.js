import Vue from 'vue'
Vue.config.productionTip = false


// 引入 element ui
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

// 引入router
import router from './router'
// page title修改
router.beforeEach((to, from, next) => {
    document.body.scrollTop = 0
    // 兼容firefox
    document.documentElement.scrollTop = 0
    // 兼容safari
    window.pageYOffset = 0
    // 鼠标点击
    if (to.meta.title) {
        document.title = to.meta.title;
        next()
    }
})

// 引入Swiper样式
import "swiper/dist/css/swiper.css";

// 引入仓库
import store from './store'




new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

