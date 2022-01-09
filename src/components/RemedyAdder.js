import React from "react";
import "../css/Adders.css"
import TextContainer from "./TextContainer";

class RemedyAdder extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            efficiency: 0,
            comfortable: 0,
        }
        this.nameChange = this.nameChange.bind(this);
        this.efficiencyChange = this.efficiencyChange.bind(this);
        this.comfortableChange = this.comfortableChange.bind(this);
    }
    nameChange(event){
        this.setState({
            name: event.target.value
        });
    }
    comfortableChange(event){
        this.setState({
            comfortable: event.target.value
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
                    <TextContainer text = "Название"/>
                    <input type="text" value={this.state.name} onChange={this.nameChange}/>
                    <TextContainer text = "Удобство"/>
                    <input type="text" value={this.state.comfortable} onChange={this.comfortableChange}/>
                    <TextContainer text = "Эффективность"/>
                    <input type="text" value={this.state.efficiency} onChange={this.efficiencyChange}/>
                    <button onClick={() =>this.props.vaccineAdder(this.state.name, this.state.efficiency,this.state.comfortable)}>Добавить</button>
                    <button onClick={() =>this.props.cancelVaccine()}>Отмена</button>
                </div>
            </div>
        );
    }
}
export default RemedyAdder;