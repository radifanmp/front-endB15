import React, {Component} from 'react';
import './App.css';

class Increment extends Component {
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    render(){
        return(
            <div className="App">
                <p>Click the button to Increment</p>

                    <h3>{this.state.counter}</h3>

                <button onClick={()=> this.setState({counter: this.state.counter + 1})}>Hit Me</button>
            </div>
        )
    }
}

export default Increment;