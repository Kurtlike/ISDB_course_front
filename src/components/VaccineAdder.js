import React from "react";
import "../css/Adders.css"
import TextContainer from "./TextContainer";

class VaccineAdder extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            virusId: "",
            vaccineId: "",
            maxAge: 0,
            efficiency: 0
        }
        this.virusIdChange = this.virusIdChange.bind(this);
        this.vaccineIdChange = this.vaccineIdChange.bind(this);
        this.maxAgeChange = this.maxAgeChange.bind(this);
        this.efficiencyChange = this.efficiencyChange.bind(this);
    }
    virusIdChange(event){
        this.setState({
            virusId: event.target.value
        });
    }
    vaccineIdChange(event){
        this.setState({
            vaccineId: event.target.value
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
                    <TextContainer text = "Вирус"/>
                    <input type="text" value={this.state.virusId} onChange={this.virusIdChange}/>
                    <TextContainer text = "Имя вакцины"/>
                    <input type="text" value={this.state.vaccineId} onChange={this.vaccineIdChange}/>
                    <TextContainer text = "Максимвльный возраст" />
                    <input type="text" value={this.state.maxAge} onChange={this.maxAgeChange}/>
                    <TextContainer text = "Эффективность"/>
                    <input type="text" value={this.state.efficiency} onChange={this.efficiencyChange}/>
                    <button onClick={() =>this.props.vaccineAdder(this.state.virusId,this.state.vaccineId, this.state.maxAge ,this.state.efficiency)}>Добавить</button>
                    <button onClick={() =>this.props.cancelVaccine()}>Отмена</button>
                </div>
            </div>
        );
    }
}
export default VaccineAdder;