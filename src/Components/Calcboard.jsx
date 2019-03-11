import React, {Component} from 'react';
import NumberBoard from './NumberBoard.jsx';
import './Calc.scss';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            total: '',
            num: '0',
            num2: '',
            init: '0'
        })
    }

    clickOne = () => {
        console.log(this.state.num)
        this.setState({
            total: '1' + this.state.total,
       
            
        })
        console.log(this.state.num)
  
    }




    render() {
        return (
            <div className="Board">
                <h3>This is the calculator</h3>
                <div id="resultsDisplay">
                    <h1 id="results">{this.state.total}</h1>
                </div>
                <NumberBoard 
                    clickOne={this.clickOne}
                />



            </div>
        )
    }
}

export default Calculator;