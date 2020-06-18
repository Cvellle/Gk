const ROLES = [
    {
        name: 'admin',
        displayName: 'Admin',
    },
    {
        name: 'manager',
        displayName: 'Manager',
    },
    {
        name: 'amm',
        displayName: 'Affiliate Marketing Manager',
    },
    {
        name: 'referral',
        displayName: 'Referral',
    },
    {
        name: 'sales',
        displayName: 'Sales',
    },
    {
        name: 'support',
        displayName: 'Support',
    },
    {
        name: 'teacher',
        displayName: 'Teacher',
    },
    {
        name: 'student',
        displayName: 'Student',
    },
]

const ROLE_DISPLAY_FROM_NAME = {
    admin: {
        displayName: 'Admin',
    },
    manager: {
        displayName: 'Manager',
    },
    amm: {
        displayName: 'Affiliate Marketing Manage',
    },
    referral: {
        displayName: 'Referral',
    },
    sales: {
        displayName: 'Sales',
    },
    support: {
        displayName: 'Support',
    },
    teacher: {
        displayName: 'Teacher',
    },
    student: {
        displayName: 'Student',
    },
}

const ROLE_NAMES = ROLES.map(role => role.name)

export { ROLES, ROLE_NAMES, ROLE_DISPLAY_FROM_NAME }
