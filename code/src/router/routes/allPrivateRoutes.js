const allPrivateRoutes = [
  //
  // 01 - DASHBOARD
  //
  {
    path: '/',
    name: 'Statistika',
    componentPath: 'Dashboard/Dashboard',
  },
  //
  // 02 - MEETINGS
  //
  //   {
  //     path: '/meetings/all',
  //     name: 'All meetings',
  //     componentPath: 'Meetings/Meetings',
  //   },
  //   {
  //     path: '/meetings/my',
  //     name: 'My meetings',
  //     componentPath: 'Meetings/MyMeetings',
  //   },
  //   {
  //     path: '/meetings/add',
  //     name: 'Add Meeting',
  //     componentPath: 'Meetings/AddMeeting',
  //   },
  //   {
  //     path: '/meetings/show/:id',
  //     name: 'Meeting',
  //     componentPath: 'Meetings/Meeting',
  //   },
  //
  // 03 - COURSES
  //
  //   {
  //     path: '/courses/all',
  //     name: 'All courses',
  //     componentPath: 'Courses/AllCourses',
  //   },
  // Student
  {
    path: '/my-courses',
    name: 'Moji kursevi',
    componentPath: 'Courses/MyCourses',
  },
  {
    path: '/my-courses/:courseName',
    name: 'Moji kursevi',
    componentPath: 'Courses/Course',
  },
  {
    path: '/my-courses/:courseName/:lesson',
    name: 'Lekcija',
    componentPath: 'Courses/Lesson',
  },
  // Admin
  {
    path: '/courses',
    name: 'Svi kursevi',
    componentPath: 'Courses/AllCourses',
  },
  {
    path: '/courses/new-course',
    name: 'Novi kurs',
    componentPath: 'Courses/NewCourse',
  },
  {
    path: '/courses/:courseName',
    name: 'Moji kursevi',
    componentPath: 'Courses/Course',
  },
  {
    path: '/courses/:courseName/:lesson',
    name: 'Lekcija',
    componentPath: 'Courses/Lesson',
  },
  //   {
  //     path: '/courses/active',
  //     name: 'Active courses',
  //     componentPath: 'Courses/ActiveCourses',
  //   },
  //   {
  //     path: '/courses/completed',
  //     name: 'Completed courses',
  //     componentPath: 'Courses/ArchivedCourses',
  //   },
  //
  // 04 - USERS
  //
  {
    path: '/users',
    name: 'Registrovani Korisnici',
    componentPath: 'Users/Users',
  },
  {
    path: '/users/add',
    name: 'Dodaj Potencijalnog Korisnika',
    componentPath: 'Users/AddUser',
  },
  {
    path: '/users/:id',
    name: 'Korisnik',
    componentPath: 'Users/User',
  },
  {
    path: '/potential-users',
    name: 'Potencijalni Korisnici',
    componentPath: 'Users/PotentialUsers',
  },
  //
  // 05 - ORDERS
  //
  //   {
  //     path: '/orders',
  //     name: 'Orders',
  //     componentPath: 'Orders/Orders',
  //   },
  //
  // 06 - CLASSES
  //
  //   {
  //     path: '/classes',
  //     name: 'Classes',
  //     componentPath: 'Classes/EducationalProgram',
  //   },
  //   {
  //     path: '/classes/:id/edit',
  //     name: 'Classes',
  //     componentPath: 'Classes/EditEducationalProgram',
  //   },
  //
  // 07 - SHOP
  //
  //   {
  //     path: '/shop',
  //     name: 'Shop',
  //     componentPath: 'Shop/Shop',
  //   },
  //   {
  //     path: '/shop/add',
  //     name: 'Add Product',
  //     componentPath: 'Shop/AddProduct',
  //   },
  // PRODUCTS
  //   {
  //     path: '/products',
  //     name: 'Products',
  //     componentPath: 'Products/Products',
  //   },
  //   {
  //     path: '/products/show/:id',
  //     name: 'Product',
  //     componentPath: 'Products/Product',
  //   },
  //   {
  //     path: '/products/add',
  //     name: 'Add Product',
  //     componentPath: 'Products/AddProduct',
  //   },
  //
  // 08 - BLOG
  //
  //   {
  //     path: '/blog',
  //     name: 'Blog',
  //     componentPath: 'Blog/Blog',
  //   },
  //
  // 09 - PAYOUTS
  //
  //   {
  //     path: '/payouts',
  //     name: 'Payouts',
  //     componentPath: 'Payouts/Payouts',
  //   },
  //
  // 10 - TICKETS
  //
  //   {
  //     path: '/tickets/all',
  //     name: 'All Tickets',
  //     componentPath: 'Tickets/Tickets',
  //   },
  //   {
  //     path: '/tickets/my',
  //     name: 'My Tickets',
  //     componentPath: 'Tickets/Tickets',
  //   },
  //
  // 11 - TEACHER GROUPS
  //
  //   {
  //     path: '/teacher-groups',
  //     name: 'Teacher Groups',
  //     componentPath: 'TeacherGroups/TeacherGroups',
  //   },
  //
  // 12 - RATINGS
  //
  //   {
  //     path: '/ratings',
  //     name: 'Ratings',
  //     componentPath: 'Ratings/Ratings',
  //   },
  //
  // 13 - Profile
  //
  //   {
  //     path: '/my-profile',
  //     name: 'My Profile',
  //     componentPath: 'MyProfile/MyProfile',
  //   },
  {
    path: '/updateProfile',
    name: 'Izmeni Profil',
    componentPath: 'UpdateProfile/UpdateProfile',
  },
]

export default allPrivateRoutes
