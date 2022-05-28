import { LocationSearching, ShoppingBasket } from '@mui/icons-material';
import { routes } from '@redwoodjs/router';

export interface SideMenuConfigInterface {
  readonly name: string;
  readonly icon: CallableFunction;
  readonly link: CallableFunction;
}

export const config: SideMenuConfigInterface[] = [
  {
    name: 'New job',
    icon: () => <ShoppingBasket />,
    link: () => routes.newJob(),
  },
  {
    name: 'Find jobs',
    icon: () => <LocationSearching />,
    link: () => routes.home(),
  },
];
