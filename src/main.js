// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueRounter from 'vue-router';
import Vue from 'vue';
import App from './App';
import Login from './components/Login';
import Base from './components/Base';

// import Room from './components/room/room';

Vue.config.productionTip = false;

Vue.use(VueRounter);

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/emit', component: Base },
];
const router = new VueRounter({
    routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
