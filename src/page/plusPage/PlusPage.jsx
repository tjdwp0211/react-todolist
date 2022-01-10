import React, { Component } from "react";
import Buttons from "../../component/buttons/Buttons";



class PlusPage extends Component {
    state = {
        name: "PLUS",
    };

    render () {
        const { name } = this.state;
        const { func } = this.props;
        // 구조분해할당 js 문법 공부하기
        
        
        return (
            <>
                <Buttons name={ name } func={func}></Buttons>
            </>
        );
    }
}



export default PlusPage;