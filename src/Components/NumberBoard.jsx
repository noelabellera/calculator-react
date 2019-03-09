import React from 'react';


const NumberBoard = (props) => {
    return (
    <tbody id="nums">

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
            <th id="one" onClick={props.clickOne}>1</th>
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

    </tbody>
    )
}

export default NumberBoard;
