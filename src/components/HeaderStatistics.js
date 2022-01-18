import React from "react";
import "../css/HeaderStatistics.css"
import TextContainer from "./TextContainer";

class HeaderStatistics extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            vaccinated: 0,
            regular: 0,
            infected: 0,
            died: 0,
            speed: 1
        }
        this.speedUp=this.speedUp.bind(this);
        this.speedDown=this.speedDown.bind(this);
        this.stop=this.stop.bind(this);
    }
    componentDidMount() {
        this.interval = setInterval(()=>  getStatistic(this),1000);
    }
    speedUp(){
        let speed = this.state.speed + 1;
        if(speed <= 5){
            this.setState({
                speed: speed
            })
            speedChange(speed);
        }
    }
    speedDown(){
        let speed = this.state.speed - 1;
        if(speed >= 0){
            this.setState({
                speed: speed
            })
            speedChange(speed);
        }
    }
    stop(){
        if(this.state.speed !== 0){
            this.setState({
                speed: 0
            })
            speedChange(0);
        }

    }
    render() {
        return (
            <div id="header" className="divContainers textContainers" >
                <button className="textContainers" onClick={start}>Начать</button>
                    <div id="generalStatistics" className="divContainers textContainers">
                        <TextContainer text = {this.state.vaccinated} classN = "greenText textContainers"/>
                        <TextContainer text = {this.state.regular} classN = "regularText textContainers"/>
                        <TextContainer text = {this.state.infected} classN = "yellowText textContainers"/>
                        <TextContainer text = {this.state.died} classN = "redText textContainers"/>
                    </div>
                <div id="speedButtons">
                    <svg id="left" viewBox="0 0 40 80" xmlns="http://www.w3.org/2000/svg" fill="none" onClick={this.speedDown}>
                        <path d="M 40 0 L 40 80 L 0 40 Z" stroke="black" strokeWidth={2} fill={"#555151"} opacity={0.2}/>
                    </svg>
                    <svg id="centre" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" fill="none" onClick={this.stop}>
                        <path d="M 10 10 L 10 70 L 70 70 L 70 10 Z" stroke="black" strokeWidth={2} fill={"#555151"} opacity={0.2}/>
                        <text x="30" y="50" className="svgText">{this.state.speed}</text>
                    </svg>

                    <svg id="right" viewBox="0 0 40 80" xmlns="http://www.w3.org/2000/svg" fill="none" onClick={this.speedUp}>
                        <path d="M 0 0 L 0 80 L 40 40 Z" stroke="black" strokeWidth={2} fill={"#555151"} opacity={0.2}/>
                    </svg>
                </div>
            </div>
        );
    }
}
export default HeaderStatistics;

function getStatistic(state) {
    fetch("http://localhost:8081/getHumanStatistic")
        .then(res => res.json())
        .then(
            (result) => {
                state.setState({
                    vaccinated: result.vaccinated,
                    regular: result.regular,
                    infected: result.infected,
                    died: result.died
                })
            },
            (error) => {
                console.log(error);
            }
        )
}
function start() {
    fetch("http://localhost:8081/startSimulation");
}
function speedChange(speed){
    fetch("http://localhost:8081/changeSpeed", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
           value: speed
        })
    });
}


