import History from '../screens/history';
import Home from '../screens/home';
import Search from '../screens/search';

interface Route {
  component: any;
  name: string;
}

export const ROUTES: Route[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Search',
    component: Search,
  },
  {
    name: 'History',
    component: History,
  },
];
