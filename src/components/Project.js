import React from "react";
import Gallery from "./Gallery";

export default class Project extends React.Component {

    constructor(){
        super();
        this.state = {
            showGallery: false,
            showVideo: false
        }
    }

    render() {

        

        return(
            <div className="projectInfoWrap" style={{paddingBottom: "10px"}}>
                <center style={{color: "#f5fff8", fontSize: "24px", textShadow: "0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)"}}>{this.props.project.title}</center>
                {/*<br/>
                <center><div className="projectBigImage"><img src={this.props.project.bigImage} style={{width: "100%", height: "100%", opacity: 0.9}} alt=""/></div></center>
                <br/>*/}
                <div style={{marginLeft: "15px", marginRight: "15px", textShadow: "0px 0px 5px rgba(16, 24, 194, 0.5)"}}>
                    <font style={{color: "#3dff3d", fontSize: "17px"}}>&#8226; Type:</font> <font style={{color: "#e8fff7", fontSize: "17px"}}>{this.props.project.type}</font><br/>
                    <font style={{color: "#3dff3d", fontSize: "17px"}}>&#8226; Technologies:</font> <font style={{color: "#e8fff7", fontSize: "17px"}}>|{this.props.project.techs.map(item => " "+item+" |")}</font><br/>
                    <font style={{color: "#3dff3d", fontSize: "17px"}}>&#8226; Sourcecode:</font> <a  target="_blank" rel="noopener noreferrer" href={this.props.project.source} style={{fontSize: "17px", color: "#5ee2ff", fontWeight: "bold", textDecoration: "none"}}> REPOSITORY</a><br/>
                    <font style={{color: "#3dff3d", fontSize: "17px"}}>&#8226; State:</font> <font style={{color: "#e8fff7", fontSize: "17px"}}>{this.props.project.state}</font><br/>
                    {
                        this.props.project.hasOwnProperty('info') ?
                        <font><font style={{color: "#3dff3d", fontSize: "17px"}}>&#8226; About:</font> <font style={{color: "#e8fff7", fontSize: "17px"}} dangerouslySetInnerHTML={{__html: this.props.project.info}} /><br/></font>
                        : this.props.textOrHtml
                    }
                </div>
                <br/>

                <center>
                {
                    this.props.project.hasOwnProperty('gallery') || this.props.project.hasOwnProperty('video') ?
                    <div className="btn-group-project" style={{align: "center"}}>
                        {
                            this.props.project.hasOwnProperty('gallery') ?
                            !this.state.showGallery ? <button className="button" onClick={() => this.setState({showGallery: true})}>Show Gallery</button>
                            : <button className="button" onClick={() => this.setState({showGallery: false})}>Hide Gallery</button> : this.props.textOrHtml
                        }
                        {
                            this.props.project.hasOwnProperty('video') ?
                            !this.state.showVideo ? <button className="button" onClick={() => this.setState({showVideo: true})}>Show Video</button>
                            : <button className="button" onClick={() => this.setState({showVideo: false})}>Hide Video</button> : this.props.textOrHtml
                        }
                    </div>
                    :
                    this.props.textOrHtml
                }
                </center>
                <p style={{clear: "both"}}></p>

                {
                   this.state.showGallery ? <Gallery images={this.props.project.gallery} /> : this.props.textOrHtml
                }

                {
                    this.state.showVideo ?
                    <div className="video-container">
                        <iframe title={this.props.project.title} width="100%" height="auto" src={this.props.project.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    :
                    this.props.textOrHtml
                }


            </div>
        )
    } // render()

} // Project{}