import React from "react";

export default class Gallery extends React.Component {

    render() {
        return(
            <div>
                {
                    this.props.images.map(
                        (item, index) => {
                            return(
                                <div class="responsive">
                                    <div class="gallery">
                                        <a target="_blank" rel="noopener noreferrer" href={item}>
                                        <img src={item} alt="Cinque Terre" width="600" height="400"/>
                                        </a>
                                    </div>
                                </div>
                            )
                        }
                    )
                }

                <div class="clearfix"></div>
            </div>
        )
    } // render()

} // Gallery{}