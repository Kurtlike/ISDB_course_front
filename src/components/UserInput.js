import React from "react";
import "../css/UserInput.css"
import StrainForm from "./StrainForm";
import VirusAdder from "./VirusAdder"
import RestrictionForm from "./RestrictionForm";
import VaccineAdder from "./VaccineAdder";
class UserInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            virusModalShow: false,
            vaccineModalShow: false,
            viruses: [],
            vaccines: [],
            remedies: []
        }
        this.addVirusModal = this.addVirusModal.bind(this);
        this.addVirus = this.addVirus.bind(this);
        this.cancelVirus = this.cancelVirus.bind(this);
        this.addVaccineModal = this.addVaccineModal.bind(this);
        this.addVaccine = this.addVaccine.bind(this);
        this.cancelVaccine = this.cancelVaccine.bind(this);
    }
    componentDidMount() {
        getViruses(this);
        getVaccines(this);
        getRemedies(this);
        this.interval = setInterval(()=>  {
            getViruses(this);
            getVaccines(this);
            getRemedies(this);
        },5000);
    }
    addVirusModal = () =>{
        this.setState({
            virusModalShow: true
        })
    }
    addVirus(infectiousness, mortality ,incubationPeriod ,asymptomaticProb){
        setVirus(mortality, incubationPeriod, asymptomaticProb, infectiousness)
        this.setState({
            virusModalShow: false
        })
    }
    cancelVirus(){
        this.setState({
            virusModalShow: false
        })
    }
    addVaccineModal = () =>{
        this.setState({
            vaccineModalShow: true
        })
    }
    addVaccine(virusId, maxAge, efficiency){
        this.setState({
            vaccineModalShow: false
        })
    }
    cancelVaccine(){
        this.setState({
            vaccineModalShow: false
        })
    }
    render() {
        return(
            <div className="userInput">
                <StrainForm id="virusForm" tableName = "Вирусы" data={this.state.viruses} addFunction={this.addVirusModal}/>
                <StrainForm id="vacForm" tableName = "Вакцины" data={this.state.vaccines} addFunction={this.addVaccineModal}/>
                <RestrictionForm remedies={this.state.remedies}/>
                {addVirusesForm(this.state.virusModalShow, this.addVirus, this.cancelVirus)}
                {addVaccineForm(this.state.vaccineModalShow, this.addVaccine, this.cancelVaccine)}
            </div>
        );
    }
}
function getViruses(state) {
    fetch("http://localhost:8081/getViruses")
        .then(res => res.json())
        .then(
            (result) => {
                state.setState({
                    viruses: result
                })
            },
            (error) => {
                console.log(error);
            })
}
function getVaccines(state) {
    fetch("http://localhost:8081/getVaccines")
        .then(res => res.json())
        .then(
            (result) => {
                state.setState({
                    vaccines: result
                })
            },
            (error) => {
                console.log(error);
            }
        )
}
function getRemedies(state) {
    fetch("http://localhost:8081/getRemedies")
        .then(res => res.json())
        .then(
            (result) => {
                state.setState({
                    remedies: result
                })
            },
            (error) => {
                console.log(error);
            }
        )
}
function addVirusesForm(isShow, addVirus, cancel){
    if(isShow){
        return <VirusAdder virusAdder={addVirus} cancelVirus={cancel}/>
    }
    return "";
}
function addVaccineForm(isShow, addVaccine, cancel){
    if(isShow){
        return <VaccineAdder vaccineAdder={addVaccine} cancelVaccine={cancel}/>
    }
    return "";
}
function setVirus(mortality, incubationPeriod, asymptomaticProb, infectiousness){
    fetch("http://localhost:8081/addVirus", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            mortality: mortality,
            incubationPeriod: incubationPeriod,
            asymptomaticProb: asymptomaticProb,
            infectiousness: infectiousness,
        })

    }).then()
}
export default UserInput;