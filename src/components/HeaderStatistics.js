import React from "react";
import "../css/HeaderStatistics.css"
import TextContainer from "./TextContainer";

class HeaderStatistics extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            vaccinated: 0,
            regular: 5,
            infected: 7,
            died: 0
        }
    }
    render() {
        return (<div id="generalStatistics" className="divContainers textContainers" >
            <TextContainer text = {this.state.vaccinated} classN = "greenText textContainers"/>
            <TextContainer text = {this.state.regular} classN = "regularText textContainers"/>
            <TextContainer text = {this.state.infected} classN = "yellowText textContainers"/>
            <TextContainer text = {this.state.died} classN = "redText textContainers"/>
        </div>
        );
    }
}
export default HeaderStatistics;