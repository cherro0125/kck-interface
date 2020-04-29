import Vue from 'vue'
import VueRouter from 'vue-router'
import AICamera from '../components/AICamera.vue'
import Login from '../components/Login.vue'
import loginService from '../service/LoginService.js';

Vue.use(VueRouter);


const ifNotAuthenticated = (to, from, next) => {
    if (!loginService.getIsLogged()) {
        next()
        return
    }
    next('/')
}

const ifAuthenticated = (to, from, next) => {
    if (loginService.getIsLogged()) {
        next()
        return
    }
    next('/login')
}


const routes = [
    {
        path: '/camera',
        name: 'AICamera',
        component: AICamera,
        beforeEnter: ifAuthenticated
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        beforeEnter: ifNotAuthenticated
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
