import {
  DefaultPage,
} from './';

export default {
  path: 'dinners',
  name: 'Dinners',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
  ],
};
