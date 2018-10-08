import React, {Component} from 'react';
import {Switch, Route} from 'react-router';
import Home from './src/home/index';
import Service from './src/service/index';


export default class App extends Component{
    render(){
        return(
            <Switch>
                <Route exact path={'/'} render={(props)=>(
                    <Home {...props} />
                )} />
                <Route path={'/service'} render={(props)=>(
                    <Service {...props} />
                )} />
            </Switch>

        )
    }
}