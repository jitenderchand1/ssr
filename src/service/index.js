import React,{Component} from 'react';

export default class Home extends Component{


    printSomeValue = ()=>{
        console.log('jitender')
    }

    render(){
        return(
            <div>
                <h1>Service page</h1>
                <button onClick={this.printSomeValue}>Button</button>
            </div>
        )
    }
}