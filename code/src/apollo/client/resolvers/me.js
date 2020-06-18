import state from '../state'

const loginLocal = (
    _,
    { firstName, lastName, currentRole, timeZone, roles },
    { cache },
) => {
    cache.writeData({
        data: {
            me: {
                __typename: 'Me',
                firstName,
                lastName,
                // timeZone,
                currentRole: currentRole.toLowerCase(),
            },
            roles: {
                __typename: 'Role',
                json: roles.map(role => role.toLowerCase()),
            },
        },
    })

    return null
}

const logoutLocal = (_, args, { cache }) => {
    cache.writeData({
        data: {
            ...state,
        },
    })

    return null
}

export { loginLocal, logoutLocal }
