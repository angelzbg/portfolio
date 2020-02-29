import React from "react";

import contacs_mail from "../images/contacs_mail.png";
import contacts_github from "../images/contacts_github.png";
import contacts_fb from "../images/contacts_fb.png";

export default class Footer extends React.Component {

    render() {
        return(
            <div className="footer">
                <center>
                    <h4>Contacts</h4>
                    <div className="contactsWrap">
                        <a className="contact" href="mailto:angel.zlatanovv@gmail.com"><img src={contacs_mail} alt=""/></a>
                        <a className="contact" href="https://github.com/angelzbg" target="_blank" rel="noopener noreferrer"><img src={contacts_github} alt=""/></a>
                        <a className="contact" href="https://www.facebook.com/angel.zlatanovv" target="_blank" rel="noopener noreferrer"><img src={contacts_fb} alt=""/></a>
                    </div>
                </center>
            </div>
        )
    } // render()

} // Footer{}