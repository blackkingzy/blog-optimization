import Vue from 'vue'
import App from './App.vue' // 根组件
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import '../public/global.css'
import { create } from './utils/create.js'

Vue.prototype.$create = create
Vue.config.productionTip = false
Vue.use(ElementUI)

//这个是根实例,根组件App.$parent是根实例
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
