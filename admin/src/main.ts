import Vue from 'vue';
import ElementUI from 'element-ui';
// import './styles/_element-variables.scss';
import router from './router';
import store from './store';
import App from './App.vue';

import './registerServiceWorker';
import './core/filters';
import './components/global';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
