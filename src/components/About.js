import React from "react";

import about_name_age from "../images/about_name_age.png";
import about_email from "../images/about_email.png";
import about_phone from "../images/about_phone.png";
import about_home from "../images/about_home.png";
import about_location from "../images/about_location.png";

export default class About extends React.Component {

    render() {
        return(
            <div className="aboutWrapper">
                <div style={{display: "inline-block", backgroundColor: "rgba(91, 235, 213, 0.9)", width: "100%", margin: "20px 0px"}}>
                    <h2 style={{color: "#155072", textAlign: "center", marginTop: "10px"}}>About me</h2>
                    <h5 style={{color: "#175980", textAlign: "center", marginTop: "10px", paddingBottom:"10px"}}>Background, interests, hobies etc..</h5>
                </div>

                <center>
                    <div style={{width: "450px", height: "200px", position:"relative"}}>
                        <div style={{float: "left", width:"176px", height: "176px", padding: "5%"}}>
                            <img className="aboutImage" src={this.props.about.avatar} alt=""/>
                        </div>
                        <div className="aboutInfo">
                            <img src={about_name_age} style={{height:"30px"}} alt=""/> {this.props.about.name}, {new Date().getFullYear()-this.props.about.date}y<br/>
                            <img src={about_phone} style={{height:"30px"}} alt=""/> {this.props.about.phone}<br/>
                            <img src={about_email} style={{height:"30px"}} alt=""/> {this.props.about.email}<br/>
                            <img src={about_location} style={{height:"30px"}} alt=""/> {this.props.about.region}<br/>
                            <img src={about_home} style={{height:"30px"}} alt=""/> {this.props.about.home}<br/>
                        </div>
                    </div>
                </center>

            </div>
        )
    } // render()

} // About{}