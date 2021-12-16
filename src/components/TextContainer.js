import React from "react";

class TextContainer extends React.Component{
    render() {
        return (
            <div className={this.props.classN}>
                {this.props.text}
            </div>
        );
    }
}
export default TextContainer;