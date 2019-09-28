require('./bootstrap');

window.Vue = require('vue');
import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name , HasError)
Vue.component(AlertError.name , AlertError)
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import User from './components/User'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'

let routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
    {
        path: '/users',
        name: 'users',
        component: User,
    },
]
const router = new VueRouter({
    mode : 'history' ,
    routes
});
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    el: '#app',
    components : { User , Profile , Dashboard },
    router
});
