import Vue from 'vue';
import { date } from './date';
import { excerpt } from './excerpt';
import { slugify } from './slugify';

Vue.filter('date', date);
Vue.filter('excerpt', excerpt);
Vue.filter('slugify', slugify);
