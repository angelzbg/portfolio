import React from "react";

export default class About extends React.Component {

    render() {
        return(
            <div className="aboutWrapper">
                <div style={{display: "inline-block", backgroundColor: "rgba(91, 235, 213, 0.9)", width: "100%", margin: "20px 0px"}}>
                    <h2 style={{color: "#155072", textAlign: "center", marginTop: "10px"}}>About me</h2>
                    <h5 style={{color: "#175980", textAlign: "center", marginTop: "10px", paddingBottom:"10px"}}>Background, interests, hobies etc..</h5>
                </div>

            </div>
        )
    } // render()

} // About{}