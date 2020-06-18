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
        collapse: true,
        path: '/meetings',
        name: 'Meetings',
        icon: WatchLater,
        views: [
            {
                path: '/meetings/all',
                name: 'All meetings',
                mini: 'AM',
            },
            {
                path: '/meetings/my',
                name: 'My meetings',
                mini: 'MM',
            },
        ],
    },
    {
        path: '/courses/all',
        name: 'All Courses',
        icon: School,
    },
    {
        path: '/classes',
        name: 'All Classes',
        icon: Class,
    },
    {
        path: '/products/all',
        name: 'All Products',
        icon: ShoppingCart,
    },
    {
        path: '/blog',
        name: 'Blog',
        icon: RateReview,
    },
    {
        collapse: true,
        path: '/tickets',
        name: 'Tickets',
        icon: Report,
        views: [
            {
                path: '/tickets/all',
                name: 'All Tickets',
                mini: 'AT',
            },
            {
                path: '/tickets/my',
                name: 'My Tickets',
                mini: 'MT',
            },
        ],
    },
]

export default links
