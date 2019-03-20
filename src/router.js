import App from './App'
import Admin from './admin'
import Login from './views/login'
import Home from './views/home'
import Buttons from './views/ui/button'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import React from 'react'
export default class ERouter extends React.Component{
    render () {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" render={() =>
                           <Admin>
                               <Switch>
                                   <Route path='/home' component={Home}/>
                                   <Route path='/ui/buttons' component={Buttons}/>
                               </Switch>
                           </Admin>
                        }/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}