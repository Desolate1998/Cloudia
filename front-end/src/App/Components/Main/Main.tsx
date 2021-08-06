import React from 'react'
import { Route, Router, Switch, useHistory } from 'react-router-dom'
import Register from '../../../Views/Register/Register'



export const Main = () => {

    return (
       
            <Switch>
                {/* <Route exact path="/Register">
                    <Register />
                </Route> */}
                <Register />
            </Switch>
     
    )
}
