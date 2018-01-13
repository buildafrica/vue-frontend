import Vue from 'vue';
// import 'es6-promise/auto';
import lodash from 'lodash';
import store from '@/store';
import router from '@/router';
import AppRoot from '@/AppRoot';
import VueLodash from 'vue-lodash';
import {
  timer,
  flash,
} from '@/directives';
import date from '@/filters/date';
import percentage from '@/filters/percentage';
import * as GoogleMaps from 'vue2-google-maps';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import VueObserveVisibility from 'vue-observe-visibility';
import VueVirtualScroller from 'vue-virtual-scroller';


Vue.use(VueObserveVisibility);
Vue.use(VueVirtualScroller);
Vue.use(VueLodash, lodash);
Vue.use(GoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places, drawing, visualization',
  }
});
Vue.filter('date', date);
Vue.filter('percentage', percentage);
Vue.directive('timer', timer);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#dcmpa',
  router,
  store,
  template: '<AppRoot/>',
  components: {
    AppRoot,
  },
});
