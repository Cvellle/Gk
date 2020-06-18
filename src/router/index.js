import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import allPrivateRoutes from './routes/allPrivateRoutes'

import LoginPage from '@pages/public/Login/Login'

const NoMatch = () => <Redirect to="/" />

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                {allPrivateRoutes.map((route, index) => (
                    <PrivateRoute key={index} {...route} exact />
                ))}

                <Route component={LoginPage} path={'/login'} exact />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
