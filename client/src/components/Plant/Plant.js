import React from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Plant.css";
import PlantCard from "../PlantCard";

// Uses a ternatry statement to either render a plant or category detail page.
const Plant = (props) => {
  
	props = props.location.state.props.item;

	document.title = props.title + " -- Gardyn.org";

	// Styling for plant climage
	var warmDivStyle, coolDivStyle;
	if (props.climate === "warm") {
		warmDivStyle = { backgroundColor: "rgba(255, 134, 35, 0.7)" }
		coolDivStyle = { backgroundColor: "rgba(0, 0, 0, 0.3)" }
	} else {
		warmDivStyle = { backgroundColor: "rgba(0, 0, 0, 0.3)" }
		coolDivStyle = { backgroundColor: "rgba(50, 204, 255, 0.7)" }
	}

	// Styling for plant support
	var yesDivStyle, noDivStyle;
	if (props.support) {
		yesDivStyle = { backgroundColor: "rgba(98, 216, 93, 1)" }
		noDivStyle = { backgroundColor: "rgba(0, 0, 0, 0.3)" }
	} else {
		yesDivStyle = { backgroundColor: "rgba(0, 0, 0, 0.3)" }
		noDivStyle = { backgroundColor: "rgba(239, 62, 31, 0.7)" }
	}

	// Styling for plant difficulty
	var difficultyDivStyle;
	if (props.difficulty === "beginner") { 
		difficultyDivStyle = { backgroundColor: "rgba(126, 252, 147, 1)" }
	} else if (props.difficulty === "intermediate") {
		difficultyDivStyle = { backgroundColor: "rgba(244, 223, 66, 1)" }
	} else {
		difficultyDivStyle = { backgroundColor: "rgba(255, 0, 0, 0.8)" }
	}

	var plantImage = {
		backgroundImage: `url(${props.imageURL})`
	}

	var difficulty;
	if ( props.difficulty ) {
		difficulty = props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1);
	}

	  return (
	  	<Wrapper>
	  	  <Navbar/>
		  <div className = "plantAlign">
		  	<div id="individualPlantHeader">
			  	<h2 className = "plantName">{props.title}</h2>
		  	</div>  
		      {
	      	  (!props.isCat)
				?
				<div>
					<div className = "row plantSectionSeparate">
				        <div className="col-md-6" id="leftColumn">
				        	
							<div className="plantImageDiv" style={plantImage}>
								<h4 id="difficultyDivText" style={difficultyDivStyle}>{difficulty}</h4>
							</div>

				        </div>
						<div className="col-md-6">

							<div className="infoDiv" id="info1">
								<h4 className="textLeft">Climate: </h4>
								<div className="infoDivOptions">
									<div className="infoDivOptionsDiv" style={warmDivStyle}>
										<img alt="flame" className="infoDivOptionsImage" src="https://www.shareicon.net/download/2015/09/02/94489_flame.svg"></img>
									</div>
									<div id="divider"/>
									<div className="infoDivOptionsDiv" style={coolDivStyle}>
										<img alt="icons/svg/63/63341" className="infoDivOptionsImage" src="https://image.flaticon.com/icons/svg/63/63341.svg"></img>
									</div>	
								</div>
							</div>

							<div className="infoDiv" id="info2">
								<img alt="ios7/Weather-Sun.ico" src="http://www.iconarchive.com/download/i89293/icons8/ios7/Weather-Sun.ico" id="sunlightDivIcon"></img>
								<h4 className="textRight">{props.sunlight}</h4>
							</div>

							<div className="infoDiv" id="info3">
								<img alt="double-arrow-symbols-icons" src="http://downloadicons.net/sites/default/files/left-right-double-arrow-symbols-icons-68674.png" id="sunlightDivIcon"></img>
								<h4 className="textRight">{props.spacing}</h4>
							</div>

							<div className="infoDiv" id="info4">
								<h4 className="textLeft">Support: </h4>
								<div className="infoDivOptions">
									<div className="infoDivOptionsDiv" style={yesDivStyle}>
										<img alt="Very-Basic-Checkmark-icon" className="infoDivOptionsImage" src="http://icons.iconarchive.com/icons/icons8/android/512/Very-Basic-Checkmark-icon.png"></img>
									</div>
									<div id="divider"/>
									<div className="infoDivOptionsDiv" style={noDivStyle}>
										<img alt="geomicons/32/672366-x-128" className="infoDivOptionsImage" src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672366-x-128.png"></img>
									</div>	
								</div>
							</div>

							<div className="infoDiv" id="info5">
								<img alt="sunlightDivIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Ic_schedule_48px.svg/2000px-Ic_schedule_48px.svg.png" id="sunlightDivIcon"></img>
								<h4 className="textRight">{props.growingPeriod}</h4>
							</div>

						</div>
					</div>
					<div className = "row plantSectionSeparate">
						<div className = "plantGuideDescription">
						{
					        props.special.map(item => (
					          <p>{item}</p>
					        ))
					    }
					    </div>
					</div>
				</div>
				:
				<div id="childPlantHolder">
				{
					props.childPlants.map(item => (
						<PlantCard
							item = {item}
						/>
					))
				}
				</div>
		  	  }
		  </div>
		</Wrapper>
)};

export default Plant;
