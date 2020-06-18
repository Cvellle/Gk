import { toogleDrawer, toogleMini, toogleCollapse } from './ui'
import { loginLocal, logoutLocal } from './me'

const resolvers = {
    Mutation: {
        toogleDrawer,
        toogleMini,
        toogleCollapse,
        loginLocal,
        logoutLocal,
    },
}

export default resolvers
