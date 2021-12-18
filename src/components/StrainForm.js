import React from "react";
import TextContainer from "./TextContainer";

class StrainForm extends React.Component{
    render() {
        return(
            <div className="strainForm" id={this.props.id}>
                <TextContainer text={this.props.tableName} classN="tableName"/>
                {setStrain(this.props.data, "regularText textContainers")}
                <button className="addStrain regularText textContainers">+</button>
            </div>
        );
    }
}
export default StrainForm;
function setStrain(strains, className){
    let s = [];
    strains.forEach(el=> {
         s.push(<TextContainer key={el} text={el} classN={className}/>);
    })
 return s;
}