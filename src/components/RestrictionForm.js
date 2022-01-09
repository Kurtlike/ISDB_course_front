import React from "react";
import TextContainer from "./TextContainer";

class RestrictionForm extends React.Component{
    constructor(props) {
        super(props);
        this.curfewChange = this.curfewChange.bind(this);
        this.remedyChange = this.remedyChange.bind(this);
        this.enterPress = this.enterPress.bind(this);
        this.state={
            curfew: "00:00-00:00",
            remedy: ""
        }
    }
    remedyChange(event){
        this.setState({
            remedy: event.target.value
        })
        this.props.currentRemedyChange(event.target.value);
    }
    curfewChange(event){
        this.setState({
            curfew: event.target.value
        })
    }
    enterPress(event){
        if(event.key === 'Enter'){
            this.props.currentCurfewChange(event.target.value);
        }
    }
    render() {
        return(
            <div id ="contForm">
                <TextContainer text ="Ограничения" classN="tableName"/>
                <div className="restrString">
                    <TextContainer text ="Коменданский час" classN="regularText textContainers"/>
                    <input id="curfew" type="text" placeholder="00:00-00:00" value={this.state.curfew} onChange={this.curfewChange} onKeyPress={this.enterPress}/>
                </div>
                <div className="restrString">
                    <TextContainer text ="Средства защиты" classN="regularText textContainers"/>
                    <select id="remedy" onChange={this.remedyChange}>
                        {createOptions(this.props.remedies)}
                    </select>
                    <button id="addRemedy" className="regularText" onClick={this.props.addRemedyModal}>+</button>
                </div>
            </div>
        );
    }
}
export default RestrictionForm;

function createOptions(opt){
    let s = [];
    opt.forEach(el=> {
        s.push(<option key={el.name} >{el.name}</option>);
    })
    return s;
}