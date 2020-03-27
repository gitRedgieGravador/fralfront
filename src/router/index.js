import Vue from 'vue'
import VueRouter from 'vue-router'

import Customer from '../views/customer'
import Cart from '../views/cart'
import Account from '../views/account'
import Card from '../components/redgie/card'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'customer',
    component: Customer
}, {
    path: '/cart',
    name: 'cart',
    component: Cart
}, {
    path: '/cart/:price',
    name: 'cart2',
    component: Cart
}, {
    path: '/account',
    name: 'account',
    component: Account
}, {
    path: '/card',
    name: 'card',
    component: Card
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router