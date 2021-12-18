import React from "react";
import TextContainer from "./TextContainer";

class RestrictionForm extends React.Component{
    render() {
        return(
            <div id ="contForm">
                <TextContainer text ="Ограничения" classN="tableName"/>
                <div className="restrString">
                    <TextContainer text ="Коменданский час" classN="regularText textContainers"/>
                    <input id="curfew" type="text" placeholder="00:00-00:00"/>
                </div>
                <div className="restrString">
                    <TextContainer text ="Средства защиты" classN="regularText textContainers"/>
                    <select id="remedy">
                        {createOptions(this.props.remedies)}
                    </select>
                    <button id="addRemedy" className="regularText">+</button>
                </div>
            </div>
        );
    }
}
export default RestrictionForm;

function createOptions(opt){
    let s = [];
    opt.forEach(el=> {
        s.push(<option key={el} >{el}</option>);
    })
    return s;
}