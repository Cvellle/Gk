import {
  Dashboard,
  //   WatchLater,
  //   Payment,
  School,
  SupervisorAccount,
  //   Class,
  //   ShoppingCart,
  //   RateReview,
  //   Report,
  //   ViewList,
  //   Star,
  //   People,
} from '@material-ui/icons'

const links = [
  {
    path: '/',
    name: 'Statistika',
    icon: Dashboard,
  },
  // {
  //     collapse: true,
  //     path: '/meetings',
  //     name: 'Meetings',
  //     icon: WatchLater,
  //     views: [
  //         {
  //             path: '/meetings/all',
  //             name: 'All meetings',
  //             mini: 'AM',
  //         },
  //         {
  //             path: '/meetings/my',
  //             name: 'My meetings',
  //             mini: 'MM',
  //         },
  //     ],
  // },
  {
    collapse: true,
    path: '/courses',
    name: 'Kursevi',
    icon: School,

    views: [
      {
        path: '/courses',
        name: 'Svi kursevi',
        mini: 'SK',
      },
      //   {
      //     path: '/courses/active',
      //     name: 'Active courses',
      //     mini: 'AC',
      //   },
      //   {
      //     path: '/courses/completed',
      //     name: 'Completed courses',
      //     mini: 'CC',
      //   },
    ],
  },
  // {
  //     path: '/orders',
  //     name: 'Orders',
  //     icon: ViewList,
  //     mini: 'OD',
  // },
  // {
  //     path: '/teacher-groups',
  //     name: 'Teacher Groups',
  //     icon: People,
  //     mini: 'TG',
  // },
  {
    collapse: true,
    path: '/users',
    name: 'Korisnici',
    icon: SupervisorAccount,
    views: [
      {
        path: '/users',
        name: 'Registrovani Korisnici',
        mini: 'RK',
      },
      {
        path: '/potential-users',
        name: 'Potencijalni Korisnici',
        mini: 'PK',
      },
    ],
  },
  // {
  //     path: '/classes',
  //     name: 'Classes',
  //     icon: Class,
  // },
  // {
  //     path: '/products',
  //     name: 'Products',
  //     icon: ShoppingCart,
  // },
  // {
  //     path: '/blog',
  //     name: 'Blog',
  //     icon: RateReview,
  // },
  // {
  //     path: '/payouts',
  //     name: 'Payouts',
  //     icon: Payment,
  // },
  // {
  //     collapse: true,
  //     path: '/tickets',
  //     name: 'Tickets',
  //     icon: Report,
  //     views: [
  //         {
  //             path: '/tickets/all',
  //             name: 'All Tickets',
  //             mini: 'AT',
  //         },
  //         {
  //             path: '/tickets/my',
  //             name: 'My Tickets',
  //             mini: 'MT',
  //         },
  //     ],
  // },
  // {
  //     path: '/ratings',
  //     name: 'Ratings',
  //     icon: Star,
  // },
]

export default links
