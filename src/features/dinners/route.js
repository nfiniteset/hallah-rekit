import {
  UpcomingDinners,
} from './';

export default {
  path: 'dinners',
  name: 'Dinners',
  childRoutes: [
    { path: '', name: 'Upcoming dinners', component: UpcomingDinners, isIndex: true },
  ],
};
