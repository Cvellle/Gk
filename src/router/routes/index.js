//	Pages
import DashboardPage from '@pages/Dashboard/Dashboard'
// import MeetingsPage from '@pages/Meetings/Meetings'
import CoursesPage from '@pages/Courses/Courses'
import UsersPage from '@pages/Users/Users'
import AddUserPage from '@pages/Users/AddUser'
// import OrdersPage from '@pages/Orders/Orders'
// import LessonsPage from '@pages/Lessons/Classes'
// import ShopPage from '@pages/Shop/Shop'
// import EducationalProgramPage from '@pages/EducationalProgram/EducationalProgram'
// import EditEducationalProgramPage from '@pages/EducationalProgram/EditEducationalProgram'
// import BlogPage from '@pages/Blog/Blog'
// import PayoutsPage from '@pages/Payouts/Payouts'
// import TicketsPage from '@pages/Tickets/Tickets'
import UpdatePage from '@pages/UpdateProfile/UpdateProfile'
import LoginPage from '@pages/public/Login/Login'
import RegisterPage from '@pages/public/Register/Register'
import PotentialUsers from '../../pages/protected/admin/Users/PotentialUsers'

const ADMIN = 'admin'
const REFERRAL = 'referral'
const TEACHER = 'teacher'
const STUDENT = 'student'

const routes = [
  {
    path: '/',
    name: 'Blog',
  },
]

const allRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardPage,
    roles: [ADMIN, REFERRAL, TEACHER, STUDENT],
  },
  //   {
  //     path: '/meetings/all',
  //     name: 'All meetings',
  //     component: MeetingsPage,
  //     roles: [ADMIN],
  //   },
  //   {
  //     path: '/meetings/my',
  //     name: 'My meetings',
  //     component: MeetingsPage,
  //     roles: [ADMIN],
  //   },
  {
    path: '/courses',
    name: 'All courses',
    component: CoursesPage,
    roles: [ADMIN],
  },
  {
    path: '/my-courses',
    name: 'My courses',
    component: CoursesPage,
    roles: [STUDENT],
  },
  {
    path: '/courses/active',
    name: 'Active courses',
    component: CoursesPage,
    roles: [ADMIN, STUDENT],
  },
  {
    path: '/courses/completed',
    name: 'Completed courses',
    component: CoursesPage,
    roles: [ADMIN, STUDENT],
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersPage,
    roles: [ADMIN],
  },
  {
    path: '/users/admins',
    name: 'Admins',
    component: UsersPage,
    roles: [ADMIN],
  },
  {
    path: '/users/add',
    name: 'Add User',
    component: AddUserPage,
    roles: [ADMIN],
  },
  {
    path: '/potential-users',
    name: 'Potential Users',
    component: PotentialUsers,
    roles: [ADMIN],
  },
  //   {
  //     path: '/orders',
  //     name: 'Orders',
  //     component: OrdersPage,
  //     roles: [ADMIN],
  //   },
  //   {
  //     path: '/classes',
  //     name: 'Classes',
  //     component: LessonsPage,
  //     roles: [ADMIN, TEACHER, STUDENT],
  //   },
  //   {
  //     path: '/shop',
  //     name: 'Shop',
  //     component: ShopPage,
  //     roles: [ADMIN, STUDENT],
  //   },
  //   {
  //     path: '/blog',
  //     name: 'Blog',
  //     component: BlogPage,
  //     roles: [ADMIN],
  //   },
  //   {
  //     path: '/payouts',
  //     name: 'Payouts',
  //     component: PayoutsPage,
  //     roles: [ADMIN],
  //   },
  //   {
  //     path: '/tickets',
  //     name: 'Tickets',
  //     component: TicketsPage,
  //     roles: [ADMIN, REFERRAL, TEACHER, STUDENT],
  //   },
  //   {
  //     redirect: true,
  //     name: 'Educational program',
  //     path: '/shop/educational-program',
  //     component: EducationalProgramPage,
  //     roles: [ADMIN],
  //   },
  //   {
  //     redirect: true,
  //     name: 'Educational program',
  //     path: '/edit/educational-program',
  //     component: EditEducationalProgramPage,
  //     roles: [ADMIN],
  //   },
  {
    name: 'Login',
    path: '/login',
    component: LoginPage,
    roles: [],
  },
  {
    name: 'Izmeni Profil',
    path: '/updateProfile',
    component: UpdatePage,
    roles: [STUDENT, ADMIN],
  },
]

export default allRoutes
