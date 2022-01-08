import React from "react";
import "../css/Adders.css"
import TextContainer from "./TextContainer";

class VaccineAdder extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            virusId: 0,
            maxAge: 0,
            efficiency: 0
        }
        this.virusIdChange = this.virusIdChange.bind(this);
        this.maxAgeChange = this.maxAgeChange.bind(this);
        this.efficiencyChange = this.efficiencyChange.bind(this);
    }
    virusIdChange(event){
        this.setState({
            virusId: event.target.value
        });
    }
    maxAgeChange(event){
        this.setState({
            maxAge: event.target.value
        });
    }
    efficiencyChange(event){
        this.setState({
            efficiency: event.target.value
        });
    }

    render() {
        return (
            <div className = "darkened">
                <div className = "modal">
                    <TextContainer text = "Заразность"/>
                    <input type="text" value={this.state.virusId} onChange={this.virusIdChange}/>
                    <TextContainer text = "Смертность" />
                    <input type="text" value={this.state.maxAge} onChange={this.maxAgeChange}/>
                    <TextContainer text = "Инкубационный период"/>
                    <input type="text" value={this.state.efficiency} onChange={this.efficiencyChange}/>
                    <button onClick={() =>this.props.vaccineAdder(this.state.virusId, this.state.maxAge ,this.state.efficiency)}>Добавить</button>
                    <button onClick={() =>this.props.cancelVaccine()}>Отмена</button>
                </div>
            </div>
        );
    }
}
export default VaccineAdder;