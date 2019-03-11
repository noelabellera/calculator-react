import React, {Component} from 'react';
import NumberBoard from './NumberBoard.jsx';
import './Calc.scss';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            total: '',
            num: '',
            num2: '',
            init: ''
        })
    }

    clickOne = (e) => {
        this.setState({
            total: + this.state.total + '1' ,
            num: this.state.total
       
            
        })
        // this.state.num = this.state.total
  
    }

    clickTwo = () => {
        this.setState({
            total: this.state.total + '2',
            num: this.state.total
       
            
        })
        // this.state.num = this.state.total
  
    }

    clickClear = () => {
        this.setState({
            total: '',
            num: '',
            num1: ''
        })
        console.log("This is it after clear " + this.state.num)
        console.log("This is it after clear again " + this.state.num)
    }




    render() {
        return (
            <div className="Board">
                console.log()
                <h3>This is the calculator</h3>
                <div id="resultsDisplay">
                    <h1 id="results">{this.state.total}</h1>
                </div>
                <NumberBoard 
                    clickOne={this.clickOne}
                    clickTwo={this.clickTwo}
                    clickClear={this.clickClear}
                />



            </div>
        )
    }
}

export default Calculator;