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
} from '@material-ui/icons'

const adminRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: Dashboard,

    role: 'admin',
  },
  //   {
  //     collapse: true,
  //     path: '/meetings',
  //     name: 'Meetings',
  //     icon: WatchLater,
  //     role: 'admin',
  //     views: [
  //       {
  //         path: '/meetings/all',
  //         name: 'All meetings',
  //         mini: 'AM',

  //         role: 'admin',
  //       },
  //       {
  //         path: '/meetings/my',
  //         name: 'My meetings',
  //         mini: 'MM',

  //         role: 'admin',
  //       },
  //     ],
  //   },
  {
    collapse: true,
    path: '/courses',
    name: 'Courses',
    icon: School,
    role: 'admin',
    views: [
      {
        path: '/courses',
        name: 'All courses',
        mini: 'AL',

        role: 'admin',
      },
      //   {
      //     path: '/courses/active',
      //     name: 'Active courses',
      //     mini: 'AC',

      //     role: 'admin',
      //   },
      //   {
      //     path: '/courses/completed',
      //     name: 'Completed courses',
      //     mini: 'CC',

      //     role: 'admin',
      //   },
    ],
  },
  //   {
  //     path: '/orders',
  //     name: 'Orders',
  //     icon: ViewList,
  //     mini: 'OD',
  //     role: 'admin',
  //   },
  {
    path: '/users',
    name: 'Users',
    icon: SupervisorAccount,
    role: 'admin',
  },
  //   {
  //     path: '/classes',
  //     name: 'Classes',
  //     icon: Class,

  //     role: 'admin',
  //   },

  //   {
  //     path: '/shop',
  //     name: 'Shop',
  //     icon: ShoppingCart,

  //     role: 'admin',
  //   },
  //   {
  //     path: '/blog',
  //     name: 'Blog',
  //     icon: RateReview,

  //     role: 'admin',
  //   },
  //   {
  //     path: '/payouts',
  //     name: 'Payouts',
  //     icon: Payment,

  //     role: 'admin',
  //   },
  //   {
  //     path: '/tickets',
  //     name: 'Tickets',
  //     icon: Report,

  //     role: 'admin',
  //   },
  //   {
  //     redirect: true,
  //     name: 'Educational program',
  //     path: '/shop/educational-program',

  //     role: 'admin',
  //   },
  //   {
  //     redirect: true,
  //     name: 'Educational program',
  //     path: '/edit/educational-program',

  //     role: 'admin',
  //   },
]

const studentRoutes = [
  {
    path: '/',
    name: 'My Dashboard',
    icon: Dashboard,

    role: 'student',
  },
  //   {
  //     path: '/classes',
  //     name: 'My Classes',
  //     icon: Class,

  //     role: 'student',
  //   },
  {
    collapse: true,
    path: '/courses',
    name: 'Courses',
    icon: School,
    role: 'student',
    views: [
      {
        path: '/my-courses',
        name: 'My courses',
        mini: 'MY',

        role: 'student',
      },
      {
        path: '/courses/active',
        name: 'Active courses',
        mini: 'AC',

        role: 'student',
      },
      {
        path: '/courses/completed',
        name: 'Completed courses',
        mini: 'CC',

        role: 'student',
      },
    ],
  },
  //   {
  //     path: '/shop',
  //     name: 'Shop',
  //     icon: ShoppingCart,

  //     role: 'student',
  //   },
  //   {
  //     path: '/tickets',
  //     name: 'Tickets',
  //     icon: Report,

  //     role: 'student',
  //   },
]

// const referralRoutes = [
//   {
//     path: '/',
//     name: 'Dashboard',
//     icon: Dashboard,

//     role: 'refferal',
//   },
//   {
//     path: '/users',
//     name: 'Students',
//     mini: 'S',
//     icon: SupervisorAccount,

//     role: 'referral',
//   },
//   {
//     path: '/tickets',
//     name: 'Tickets',
//     icon: Report,

//     role: 'referral',
//   },
// ]

// const teacherRoutes = [
//   {
//     path: '/',
//     name: 'Dashboard',
//     icon: Dashboard,

//     role: 'teacher',
//   },
//   {
//     path: '/classes',
//     name: 'Classes',
//     icon: Class,

//     role: 'teacher',
//   },
//   {
//     path: '/tickets',
//     name: 'Tickets',
//     icon: Report,

//     role: 'teacher',
//   },
// ]

const publicRoutes = [
  {
    path: '/login',
    name: 'Login',

    role: null,
  },
]

const dashRoutes = [
  ...adminRoutes,
  // ...referralRoutes,
  // ...teacherRoutes,
  ...studentRoutes,
  ...publicRoutes,
]

export default dashRoutes
