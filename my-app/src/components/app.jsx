import React, {Component} from "react";
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chooseValue: 1,
            count:1
        }
    }

    increment = () =>{
        const number = this.state.chooseValue;
        const count = this.state.count;
        this.setState({count:count+number});
    }

    decrement = () =>{
        const number = this.state.chooseValue;
        const count = this.state.count;
        this.setState({count:count-number});
    }

    incrementIfOdd = () =>{
        const number = this.state.chooseValue;
        const count = this.state.count;
        if (count%2===1) {
            this.setState({count:count+number});
        }
    }

    incrementAsync = () =>{
        const number = this.state.chooseValue;
        const count = this.state.count;
        setTimeout(() =>{
            this.setState({count:count+number})
        },1000)
    }

    handleChange = (event) =>{
        const chooseValue = event.target.value*1;
        this.setState({chooseValue});
    }

    render() {
        const {count,chooseValue} = this.state;
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    {/*<select ref={select => this.select = select}>*/}
                    <select value={chooseValue} onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> &nbsp;
                    <button onClick={this.increment}>+</button> &nbsp;
                    <button onClick={this.decrement}>-</button> &nbsp;
                    <button onClick={this.incrementIfOdd}>increase if odd</button> &nbsp;
                    <button onClick={this.incrementAsync}>increment async</button> &nbsp;
                </div>
            </div>
        )
    }
}