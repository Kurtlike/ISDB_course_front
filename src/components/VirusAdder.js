import React from "react";
import TextContainer from "./TextContainer";

class VirusAdder extends React.Component{
    render() {
        return (
            <div className = "modal">
                <TextContainer text = "Заразность"/>
                <input id="infectiousness" type="text"/>
                <TextContainer text = "Смертность"/>
                <input id="mortality" type="text"/>
                <TextContainer text = "Инкубационный период"/>
                <input id="incubation_period" type="text"/>
                <TextContainer text = "Шанс безсимптомного заболевания"/>
                <input id="asymptomatic_prob" type="text"/>
            </div>
        );
    }
}