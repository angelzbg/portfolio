import React from "react";

export default class Gallery extends React.Component {

    render() {
        return(
            <div>
                {
                    this.props.images.map(
                        (item, index) => {
                            return(
                                <div className="responsive" key={index+"image"}>
                                    <div className="gallery">
                                        <a target="_blank" rel="noopener noreferrer" href={item}>
                                        <img src={item} alt="" width="600" height="400"/>
                                        </a>
                                    </div>
                                </div>
                            )
                        }
                    )
                }

                <div className="clearfix"></div>
            </div>
        )
    } // render()

} // Gallery{}