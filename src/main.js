// همه فایلها اینجا باندل میشوند
import Component from '../__JF__/Component';
import Router from '../__JF__/Router';

import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/popper.js/dist/popper';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Users from './components/Users';

Component.create("c-users", Users);