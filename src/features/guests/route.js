import {
  DefaultPage,
  Guest,
} from './';

export default {
  path: 'guests',
  name: 'Guests',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'guests', name: 'Guest', component: Guest },
  ],
};
