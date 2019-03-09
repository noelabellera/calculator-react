import React, {Component} from 'react';
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

                <div id="nums">
                    <table>
                        <tr>
                            <th id="seven">7</th>
                            <th id="eight">8</th>
                            <th id="nine">9</th>
                            <th id="divide">/</th>
                        </tr>

                        <tr>
                            <th id="four">4</th>
                            <th id="five">5</th>
                            <th id="six">6</th>
                            <th id="mult">X</th>
                        </tr>
                        <tr>
                            <th id="three">3</th>
                            <th id="two">2</th>
                            <th id="one" clickOne={this.clickOne}>1</th>
                            <th id="sub">-</th>
                        </tr>

                        <tr>
                            <th id="zero">0</th>
                            <th id="dot">.</th>
                            <th id="equals">=</th>
                            <th id="add">+</th>
                        </tr>

                        <tr>
                            <th id="back">Back</th>
                            <th id="clear">Clear</th>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Calculator;