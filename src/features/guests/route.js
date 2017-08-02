import {
  Guests,
  Guest,
} from './';

export default {
  path: 'guests',
  name: 'Guests',
  childRoutes: [
    { path: '', name: 'Guests', component: Guests, isIndex: true },
    { path: ':id', name: 'Guest', component: Guest },
  ],
};
