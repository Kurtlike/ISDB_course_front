import React from "react";
import "../css/TownMap.css"

class TownMap extends React.Component{
    constructor(props) {
        super(props);
        this.state = ({
            A0:{},
            B0:{},
            C0:{}
        })
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            getMapStatistics(this)
            getMapFill(this.state.A0);
        }, 1000);
    }
     render() {
         return (
             <div className="townMap">
                 <svg viewBox="0 0 814 891" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M 130.231 20.227 L 5.731 184.227 L 63.731 366.727 L 217.731 366.727 L 329.231 435.727 L 345.231 259.227 L 364.731 297.227 L 393.231 297.227 L 394.731 250.727 L 490.731 366.727 L 610.731 342.227 L 690.231 226.727 L 667.231 201.227 L 550.231 304.227 L 589.731 201.227 L 550.231 102.227 L 419.731 8.727 L 329.231 44.227 L 296.731 44.227 L 296.731 8.727 L 130.231 20.227 Z" fill={getMapFill(this.state.A0)} opacity="0.5" stroke="black"/>
                     <path d="M 218.206 396.679 L 73.706 396.679 C 84.039 430.179 106.206 500.879 112.206 515.679 C 118.206 530.479 51.373 563.179 17.206 577.679 L 134.706 780.179 L 185.706 802.679 L 218.206 757.679 L 250.706 855.179 L 462.706 886.179 L 756.706 832.179 L 783.706 634.679 L 748.206 546.679 L 691.706 634.679 L 584.206 599.179 L 563.206 563.679 L 425.706 535.679 L 218.206 396.679 Z" fill={getMapFill(this.state.B0)}  opacity="0.5"stroke="black"/>
                     <path d="M 360.235 442.837 L 360.235 315.935 L 418.283 315.935 L 485.064 399.878 L 683.865 360.375 L 810.235 315.935 L 767.084 486.29 L 683.865 593.935 C 659.208 588.339 610.201 576.554 611.434 574.184 C 612.667 571.813 586.947 544.227 573.934 530.731 L 435.749 507.029 L 360.235 442.837 Z" fill={getMapFill(this.state.C0)} opacity="0.5" stroke="black"/>
                     <text x="540" y="480" className="svgText">{this.state.C0.name}:</text><text x="610" y="410"  className="svgText greenSvgText">{this.state.C0.vaccinated}</text><text x="610" y="450" className="svgText regularSvgText "> {this.state.C0.regular}</text><text x="610" y="490" className="svgText yellowSvgText ">{this.state.C0.infected}</text><text  x="610" y="530" className="redSvgText svgText">{this.state.C0.died}</text>
                     <text x="140" y="620" className="svgText">{this.state.B0.name}:</text><text x="210" y="550"  className="svgText greenSvgText">{this.state.B0.vaccinated}</text><text x="210" y="590" className="svgText regularSvgText "> {this.state.B0.regular}</text><text x="210" y="630" className="svgText yellowSvgText ">{this.state.B0.infected}</text><text  x="210" y="670" className="redSvgText svgText">{this.state.B0.died}</text>
                     <text x="100" y="200" className="svgText">{this.state.A0.name}:</text><text x="170" y="140"  className="svgText greenSvgText">{this.state.A0.vaccinated}</text><text x="170" y="180" className="svgText regularSvgText "> {this.state.A0.regular}</text><text x="170" y="220" className="svgText yellowSvgText ">{this.state.A0.infected}</text><text  x="170" y="260" className="redSvgText svgText">{this.state.A0.died}</text>
                 </svg>
             </div>
         );
     }
 }
 export default TownMap;

function getMapStatistics(state){
    fetch("http://localhost:8081/getMapStatistic")
        .then(res => res.json())
        .then(
            (result) => {
                state.setState({
                    A0:result[0],
                    B0:result[1],
                    C0:result[2]
                })
            },
            (error) => {
                console.log(error);
            }
        )
}
function getMapFill(district) {
    let all = district.regular + district.vaccinated + district.infected + district.died;
    let red = parseInt(170 + (district.died/all) * 85, 10);
    let green = parseInt(170 + (district.vaccinated/all) * 85, 10);
    let blue = 170;
    return "#" + red.toString(16) + green.toString(16) + blue.toString(16);
}
