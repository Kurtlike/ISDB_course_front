import React from "react";
import "../css/UserInput.css"
import StrainForm from "./StrainForm";
import RestrictionForm from "./RestrictionForm";
class UserInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            viruses: [],
            vaccines: [],
            remedies: []
        }
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
    render() {
        return(
            <div className="userInput">
                <StrainForm id="virusForm" tableName = "Вирусы" data={this.state.viruses}/>
                <StrainForm id="vacForm" tableName = "Вакцины" data={this.state.vaccines}/>
                <RestrictionForm remedies={this.state.remedies}/>
            </div>
        );
    }
}
export default UserInput;

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
            }
        )
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