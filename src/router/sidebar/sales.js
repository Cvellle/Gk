import {
    Dashboard,
    WatchLater,
    Payment,
    School,
    SupervisorAccount,
    Class,
    ShoppingCart,
    RateReview,
    Report,
    ViewList,
} from '@material-ui/icons'

const links = [
    {
        path: '/',
        name: 'Dashboard',
        icon: Dashboard,
    },
    {
        path: '/meetings/my',
        name: 'My meetings',
        icon: WatchLater,
    },
    {
        path: '/courses/all',
        name: 'All Courses',
        icon: School,
    },
    {
        path: '/products/all',
        name: 'All Products',
        icon: ShoppingCart,
    },
    {
        path: '/tickets/my',
        name: 'My Tickets',
        icon: Report,
    },
]

export default links
