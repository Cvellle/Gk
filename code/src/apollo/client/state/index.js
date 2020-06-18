const state = {
    sidebar: {
        __typename: 'Sidebar',
        mobileOpen: false,
        miniActive: false,
        activeCollapse: '',
    },
    me: {
        __typename: 'Me',
        firstName: null,
        lastName: null,
        currentRole: null,
        timeZone: null,
    },
    role: {
        __typename: 'Role',
        json: [],
    },
}

export default state
