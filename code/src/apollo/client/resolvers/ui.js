import { SIDEBAR_QUERY } from '../queries'

const toogleDrawer = (parent, args, { cache }, info) => {
    const { sidebar } = cache.readQuery({ query: SIDEBAR_QUERY })
    cache.writeData({
        data: {
            sidebar: {
                __typename: 'Sidebar',
                mobileOpen: !sidebar.mobileOpen,
            },
        },
    })

    return null
}

const toogleMini = (parent, args, { cache }, info) => {
    const { sidebar } = cache.readQuery({ query: SIDEBAR_QUERY })
    cache.writeData({
        data: {
            sidebar: {
                __typename: 'Sidebar',
                miniActive: !sidebar.miniActive,
            },
        },
    })

    return null
}

const toogleCollapse = (parent, { value }, { cache }, info) => {
    cache.writeData({
        data: {
            sidebar: {
                __typename: 'Sidebar',
                activeCollapse: value,
            },
        },
    })

    return null
}

export { toogleDrawer, toogleMini, toogleCollapse }
