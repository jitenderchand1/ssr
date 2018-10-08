import React,{Component} from 'react';
import {Helmet} from 'react-helmet';

export default class Home extends Component{


    printSomeValue = ()=>{
        console.log('jitender')
    }

    renderTitle = ()=> {
        return (
            <Helmet>
                <title>jitender</title>
            </Helmet>
        )
    }

    render(){
        return(
            <div>
                {this.renderTitle()}
                <h1>Home page</h1>
                <button onClick={this.printSomeValue}>Button</button>
            </div>
        )
    }
}