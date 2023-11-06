import React from "react";
import './styles.scss'

class Button extends React.Component<{text: string}> {
    render() {
        return (
            <button className="button">
                {this.props.text}
            </button>
        )
    }
}

export default Button