import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from 'react-icons/md';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: 'default',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: 'Check In',
    layout: '/admin',
    path: 'nft-marketplace',
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,

    secondary: true,
  },
  {
    name: 'Member',
    layout: '/admin',
    path: 'member',
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,

    secondary: true,
  },
  {
    name: 'Match',
    layout: '/admin',
    icon: <MdBarChart className="h-6 w-6" />,
    path: 'match',
  },
  {
    name: 'Cost',
    layout: '/admin',
    icon: <MdBarChart className="h-6 w-6" />,
    path: 'cost',
  },
  /*{
    name: 'Profile',
    layout: '/admin',
    path: 'profile',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <MdLock className="h-6 w-6" />,
  },
  {
    name: 'RTL Admin',
    layout: '/rtl',
    path: 'rtl-default',
    icon: <MdHome className="h-6 w-6" />,
  },*/
];
export default routes;
