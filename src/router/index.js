import Vue from 'vue'
import VueRouter from 'vue-router'

import Admin from '../views/admin'
import Cart from '../views/cart'
import Account from '../views/account'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'admin',
    component: Admin
}, {
    path: '/cart',
    name: 'cart',
    component: Cart
}, {
    path: '/account',
    name: 'account',
    component: Account
}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router