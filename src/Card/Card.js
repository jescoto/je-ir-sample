import React, {useMemo} from "react";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import ListContext from "../ListContext";

export default function Card({user}) {

    return (
        <ListContext.Consumer>
            {({activeId, activeClick}) => (

                    <div className={`Card ${activeId === user.id ? 'Card-active' : ''}`} onClick={(event) => activeClick(event)} id={user.id}>
                        <div className="Card-info">
                            <img src={user.picture} alt={user.name} />
                            <p className="Card-name">{user.name}</p>
                            <p className="Card-email">{user.email}</p>
                            <p className="Card-role">Admin</p>
                        </div>
                        <div className="Card-actions">
                            <button className="Card-button">
                                <FontAwesomeIcon icon={faEnvelope} className="Card-icon"/>
                                Email
                            </button>
                            <button className="Card-button">
                                <FontAwesomeIcon icon={faPhone} className="Card-icon"/>
                                Call
                            </button>
                        </div>
                    </div>

            )}
        </ListContext.Consumer>


    );
}