import React, { Component } from "react";

class Buttons extends Component {
    state = {
    };

    change = () => {
        console.log(this.props)
        this.props.func();
    }

    render() {
        const { change } = this;
        const { name } = this.props;
        return (
            <>
                <button onClick={change}>{name}</button>
            </>
        );
    }
}

export default Buttons;