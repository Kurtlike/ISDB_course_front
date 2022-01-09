import React from "react";
import TextContainer from "./TextContainer";

class StrainForm extends React.Component{
    render() {
        return(
            <div className="strainForm" id={this.props.id}>
                <TextContainer text={this.props.tableName} classN="tableName"/>
                {setStrain(this.props.data, "regularText textContainers")}
                <button className="addStrain regularText textContainers" onClick={this.props.addFunction}>+</button>
            </div>
        );
    }
}
export default StrainForm;
function setStrain(strains, className){
    let s = [];
    strains.forEach(el=> {
        if(strains.virus === true){
            s.push(<TextContainer key={el.virusId} text={el.virusId} classN={className}/>);
        }else {
            s.push(<TextContainer key={el.vaccineId} text={el.vaccineId} classN={className}/>);
        }

    })
 return s;
}