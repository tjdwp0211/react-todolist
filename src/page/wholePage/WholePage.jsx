import React, { Component } from "react";
import PlusPage from "../plusPage/PlusPage"; 
import MinusPage from "../minusPage/MinusPage"; 



class WholePage extends Component {
    state = {
        number: 10,
    };

    plus = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1,
        });
    };
    minus = () => {
        const { number } = this.state;
        this.setState({
            number: number - 1,
        });
    };

    render () {
        const { number } = this.state;
        const { plus, minus } = this
        // 구조분해할당 js 문법 공부하기
        
        return (
            <>
                <div class="numDiv">{number}</div>
                <PlusPage number={number} func={plus}></PlusPage>
                <MinusPage number={number} func={minus} ></MinusPage>
            </>
        );
    }
}



export default WholePage;