import React from "react";
import "../css/Adders.css"
import TextContainer from "./TextContainer";

class VirusAdder extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            infectiousness: 0,
            mortality: 0,
            incubation_period: 0,
            asymptomatic_prob: 0
        }
        this.infectiousnessChange = this.infectiousnessChange.bind(this);
        this.mortalityChange = this.mortalityChange.bind(this);
        this.incubationPeriodChange = this.incubationPeriodChange.bind(this);
        this.asymptomaticProbChange = this.asymptomaticProbChange.bind(this);
    }
    infectiousnessChange(event){
        this.setState({
            infectiousness: event.target.value
        });
    }
    mortalityChange(event){
        this.setState({
            mortality: event.target.value
        });
    }
    incubationPeriodChange(event){
        this.setState({
            incubation_period: event.target.value
        });
    }
    asymptomaticProbChange(event){
        this.setState({
            asymptomatic_prob: event.target.value
        });
    }
    render() {
        return (
            <div className = "darkened">
                <div className = "modal">
                    <TextContainer text = "Заразность"/>
                    <input type="text" value={this.state.infectiousness} onChange={this.infectiousnessChange}/>
                    <TextContainer text = "Смертность" />
                    <input type="text" value={this.state.mortality} onChange={this.mortalityChange}/>
                    <TextContainer text = "Инкубационный период"/>
                    <input type="text" value={this.state.incubation_period} onChange={this.incubationPeriodChange}/>
                    <TextContainer text = "Шанс безсимптомного заболевания"/>
                    <input type="text" value={this.state.asymptomatic_prob} onChange={this.asymptomaticProbChange}/>
                    <button onClick={() =>this.props.virusAdder(this.state.infectiousness, this.state.mortality ,this.state.incubation_period ,this.state.asymptomatic_prob)}>Добавить</button>
                    <button onClick={() =>this.props.cancelVirus()}>Отмена</button>
                </div>
            </div>
        );
    }
}
export default VirusAdder;