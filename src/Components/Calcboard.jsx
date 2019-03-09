import React, {Component} from 'react';
import NumberBoard from './NumberBoard.jsx';
import './Calc.scss';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            num: 0
        })
    }

    clickOne = () => {
        console.log("this is one")
        this.setState({
            num: 1
        })
    }

    render() {
        return (
            <div className="Board">
                <h3>This is the calculator</h3>
                <div id="resultsDisplay">
                    <h1 id="results">{this.state.num}</h1>
                </div>
                <NumberBoard 
                    clickOne={this.clickOne}
                />



            </div>
        )
    }
}

export default Calculator;