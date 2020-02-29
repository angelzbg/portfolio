import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import DATA from "./DATA.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";

import icon_curly_right from "./images/icon_curly_right.png";
import icon_curly_left from "./images/icon_curly_left.png";

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      indexMenu: 0
    };
  } // constructor()

  // BrowserRouting doesn't work on guthub pages
  render() {
    return (
      <div className="pageWrap">
        <center>
          {/* Menu [ START ] */}
          <div className="menuWrap">
            <img src={icon_curly_left} alt="" className="menuCurlyLeft"/>
            {
              DATA.menu.map( (item, index) => {
                return(
                  <div className={this.state.indexMenu === index ? "divMenuActive" : "divMenuInactive"} key={"tab"+item.name} onClick={ this.state.indexMenu === index ? null : () => this.setState({indexMenu: index}) }>
                    <img src={this.state.indexMenu === index ? item.icon_active : item.icon_inactive} alt=""/>

                    <font>{DATA.menu[index].name}</font>
                  </div>
                )
              })
            }
            <img src={icon_curly_right} alt="" className="menuCurlyRight"/>
            {/*<hr style={{height: "2px", border: 0, marginBottom: "0", paddingBottom: "0", marginTop: "4px", background: "linear-gradient(to right, rgb(185, 147, 214), rgb(140, 166, 219))"}}/>*/}
          </div>
          {/* Menu [  END  ] */}
        </center>
        {/* Content [ START ] */}
        {
          this.state.indexMenu === 0 ? <Projects key={this.state.indexMenu+'project'} projects={DATA.projects} tech={DATA.tech}/> :
          this.state.indexMenu === 1 ? <About about={DATA.about}/>
          : null
        }
        {/* Content [  END  ] */}
        <center>
        <Footer/>
        </center>
      </div>
    );
  } // render()


} // App{}