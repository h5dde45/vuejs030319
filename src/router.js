import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Books from './views/Books'
import Signin from './views/Signin'
import Signup from './views/Signup'
import Words from './views/Words'
import Profile from './views/Profile'
import Store from './store'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Books',
            name: 'books',
            component: Books,
            beforeEnter: AuthGuard
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },
        {
            path: '/words',
            name: 'words',
            component: Words,
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            beforeEnter: AuthGuard
        },
    ],
    mode: 'history'
})

function AuthGuard(from, to, next) {
    if(Store.getters.isUserAuthenticated){
        next()
    }else {
        next('/signin')
    }
}