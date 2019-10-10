import React from "react";

import Project from "./Project.js";

import icon_close from "../images/icon_close.png";

export default class Projects extends React.Component {
    
    constructor() {
        super();
        this.state = {
            indexProject: -1,
            width: 0,
            height: 0,
            projectsWrapHeight: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this); // got it from here https://www.hawatel.com/blog/handle-window-resize-in-react/
    } // constructor()

    render() {
        //let combWidth = 98; // 98 vw (2 for the vertical scrollbar)
        let scrollbarSize = 17; // 17 px for most browsers
        let scrollbarVW = (100/this.state.width)*scrollbarSize;
        let combWidth = 100-scrollbarVW;
        /*let columnsCount = 7;
        if(this.state.width < 1920) columnsCount = 6;
        if(this.state.width < 1280) columnsCount = 5;
        if(this.state.width < 800) columnsCount = 3;
        //*/
        let columnsCount = Math.floor((this.state.width-scrollbarSize)/230); // assuming 230px is somewhat good size
        if(columnsCount < 2) { // Mobile browsers are cancer
            columnsCount = 2;
            combWidth +=scrollbarVW/2;
        }
        
        combWidth = (combWidth/(columnsCount*3+1))*4;
        let combHeight = combWidth/1.113; // 256 width && 230 height -> 256/230 ~ 1.113
        let evenMargin = combHeight/2;

        // otherwise the footer will be placed at the top
        const rows = (Math.round(this.props.projects.length/columnsCount+0.49));
        let projectsWrapHeight = combHeight*rows+combHeight/2;
        //if(this.props.projects.length !== (rows-1)*columnsCount+1) projectsWrapHeight+=combHeight/2; // turbo fix xP
        
        let counter = 0, row = 0;

        // Techs
        const techSide = combWidth/6;
        const techPaddingTop = combHeight/2-techSide/2;
        const techPaddingImg = techSide/8;
        const techBorderRadius = techSide/2;
        return(
            <div className="projectsWrapper">
            <div style={{display: "inline-block", backgroundColor: "rgba(91, 235, 213, 0.9)", width: "100%", margin: "20px 0px"}}>
                <h2 style={{color: "#155072", textAlign: "center", marginTop: "10px"}}>My Projects</h2>
                <h5 style={{color: "#175980", textAlign: "center", marginTop: "10px", paddingBottom:"10px"}}>Tasks from university and self assignments.</h5>
            </div>

            {/*
                this.state.indexProject === -2 ? // -2
                <center>
                <div className="projSelectInfo">Select a project to check it's details.}
                </div>
                </center>
                : this.props.textOrHtml
            //*/}

            <div className="projectsWrap" style={{height: projectsWrapHeight+"vw"}}>

                {
                    this.props.projects.map((item, index) => {

                        if(counter === columnsCount) {
                            counter = 0;
                            row++;
                        }

                        if(this.props.projects.length === (rows-1)*columnsCount+1 && row === rows-1) counter++; // actually this fix is visually better
            
                        let X = counter*combWidth;
                        if(counter > 0) X-=(combWidth/4)*counter;
                        let Y = row*combHeight;
                        if(counter % 2 === 1 ) Y+=evenMargin;
            
                        counter++;
            
                        let infoWidth = combWidth*0.5, infoHeight = infoWidth, infoMarginTop = (combHeight-infoHeight)/2, infoMarginLeft = (combWidth-infoWidth)/2;
            
                        const techCount = item.techs.length;
                        const techPaddingLeft = combWidth/2 - techSide*techCount/2;
                        return(
                            <a className={this.state.indexProject === index ? "projectHoneycombSelected" : "projectHoneycomb"} style={{left: X+"vw", top: Y+"vw", width: combWidth+"vw", height: combHeight+"vw"}} key={index+item.title} href="#projectBox" onClick={() => this.setState({indexProject: index})}>
                                <img src={item.image} style={{width: "100%", height: "100%", opacity: "0.8"}} alt=""/>
                                <div style={{position: "absolute", width: infoWidth+"vw", height: infoHeight+"vw", left: infoMarginLeft+"vw", top: infoMarginTop+"vw"}}>
                                    <span style={{position: "absolute", left: 0, top: 0, width:infoWidth+"vw", height: infoHeight/3+"vw", fontSize: infoWidth/10+"vw"}}>{item.title}</span>
                                </div>
                                <div className="techsWrap" style={{position: "absolute", left: techPaddingLeft+"vw", top: techPaddingTop+"vw",borderRadius: techBorderRadius+"vw"}}>
                                    { item.techs.map( tech => <img key={tech+item.title} src={this.props.tech[tech]} alt="" style={{width: techSide+"vw", height: techSide+"vw", padding: techPaddingImg+"vw"}}/> ) }
                                </div>
                            </a>
                        )
                    })
                }
                
            </div>

            <div id="projectBox">
            {
                this.state.indexProject > -1 /* -1 */ ?
                <div className="projectBoxWrap">
                    <img  src={icon_close} alt="" style={{width: "18px", height: "18px", position: "absolute", right: "10px", top: "7px", cursor: "pointer"}} onClick={() => this.setState({indexProject: -1})}/>
                    <Project project={this.props.projects[this.state.indexProject]}/>
                </div>
                : this.props.textOrHtml
            }
            </div>

            </div>
        )
    } // render()

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

} // Projects{}