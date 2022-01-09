import React from "react";
import "../css/UserInput.css"
import StrainForm from "./StrainForm";
import VirusAdder from "./VirusAdder"
import RestrictionForm from "./RestrictionForm";
import VaccineAdder from "./VaccineAdder";
import RemedyAdder from "./RemedyAdder";
class UserInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            virusModalShow: false,
            vaccineModalShow: false,
            remedyModalShow:false,
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
        this.addRemedy = this.addRemedy.bind(this);
        this.addRemedyModal = this.addRemedyModal.bind(this);
        this.cancelRemedy = this.cancelRemedy.bind(this);
        this.currentCurfewChange = this.currentCurfewChange.bind(this);
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
    addVirus(virusId, mortality, incubationPeriod, asymptomaticProb, infectiousness){
        setVirus(virusId, mortality, incubationPeriod, asymptomaticProb, infectiousness)
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
    addVaccine(virusId, vaccineId, maxAge, efficiency){
        setVaccine(virusId, vaccineId, maxAge, efficiency)
        this.setState({
            vaccineModalShow: false
        })
    }
    cancelVaccine(){
        this.setState({
            vaccineModalShow: false
        })
    }
    addRemedy(name, efficiency, comfortable){
        setRemedy(name, efficiency, comfortable)
        this.setState({
            remedyModalShow: false
        })
    }
    addRemedyModal(){
        this.setState({
            remedyModalShow: true
        })
    }
    cancelRemedy(){
        this.setState({
            remedyModalShow: false
        })
    }
    currentRemedyChange(remedyName){
        setCurrentRemedy(remedyName);
    }
    currentCurfewChange(curfew){
        setCurrentCurfew(curfew);
    }
    render() {
        return(
            <div className="userInput">
                <StrainForm id="virusForm" tableName = "Вирусы" data={this.state.viruses} addFunction={this.addVirusModal}/>
                <StrainForm id="vacForm" tableName = "Вакцины" data={this.state.vaccines} addFunction={this.addVaccineModal}/>
                <RestrictionForm remedies={this.state.remedies} addRemedyModal={this.addRemedyModal} currentRemedyChange={this.currentRemedyChange} currentCurfewChange={this.currentCurfewChange}/>
                {addVirusesForm(this.state.virusModalShow, this.addVirus, this.cancelVirus)}
                {addVaccineForm(this.state.vaccineModalShow, this.addVaccine, this.cancelVaccine)}
                {addRemedyForm(this.state.remedyModalShow, this.addRemedy, this.cancelRemedy)}
            </div>
        );
    }
}
function getViruses(state) {
    fetch("http://localhost:8081/getViruses")
        .then(res => res.json())
        .then(
            (result) => {
                result.virus = true;
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
                result.virus = false;
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
function addRemedyForm(isShow, addRemedy, cancel){
    if(isShow){
        return <RemedyAdder vaccineAdder={addRemedy} cancelVaccine={cancel}/>
    }
    return "";
}
function setVirus(virusId, mortality, incubationPeriod, asymptomaticProb, infectiousness){
    fetch("http://localhost:8081/addVirus", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            virusId: virusId,
            mortality: mortality,
            incubationPeriod: incubationPeriod,
            asymptomaticProb: asymptomaticProb,
            infectiousness: infectiousness,
        })

    }).then()
}
function setVaccine(virusId, vaccineId, maxAge, efficiency){
    fetch("http://localhost:8081/addVaccine", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            virusId: virusId,
            vaccineId: vaccineId,
            maxAge: maxAge,
            efficiency: efficiency,
        })
    }).then()
}
function setRemedy(name, efficiency, comfortable){
    fetch("http://localhost:8081/addRemedy", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            name: name,
            efficiency: efficiency,
            comfortable: comfortable,
        })
    }).then()
}
function setCurrentRemedy(name){
    fetch("http://localhost:8081/setCurrentRemedy", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            name: name,
            efficiency: 0,
            comfortable: 0,
        })
    }).then()
}
function setCurrentCurfew(curfew){
    fetch("http://localhost:8081/setCurrentCufrew", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            curfew: curfew
        })
    }).then()
}
export default UserInput;