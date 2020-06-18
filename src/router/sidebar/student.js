import {
  // Dashboard,
  // WatchLater,
  // Payment,
  School,
  // SupervisorAccount,
  // Class,
  // ShoppingCart,
  // RateReview,
  // Report,
  // ViewList,
} from '@material-ui/icons'

const links = [
  // {
  //     path: '/',
  //     name: 'Dashboard',
  //     icon: Dashboard,
  // }
  // {
  //     path: '/meetings/my',
  //     name: 'My meetings',
  //     icon: WatchLater,
  // },
  {
    collapse: true,
    path: '/my-courses',
    name: 'Kursevi',
    icon: School,

    views: [
      {
        path: '/my-courses',
        name: 'Moji kursevi',
        mini: 'MK',
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
  //     path: '/products/all',
  //     name: 'All Products',
  //     icon: ShoppingCart,
  // },
  // {
  //     path: '/tickets/my',
  //     name: 'My Tickets',
  //     icon: Report,
  // },
]

export default links
