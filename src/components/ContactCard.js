import React from "react";
import user from "../images/user.png";
import del from "../images/del.png";


function ContactCard(props){
    const {id, name, email} = props.contact;
    return(
        <div className="d-flex align-items-center justify-content-between border-bottom py-2 px-3 w-50">
            <div className="d-flex align-items-center">
                <img src={user} alt="user" className="rounded-circle me-3" style={{ width: "40px", height: "40px" }} />
                <div>
                    <div className="fw-bold">{name}</div>
                    <div className="text-muted">{email}</div>
                </div>
            </div>
            <button className="btn btn-link p-2" onClick={() => props.clickHandler(id)} >
                <img src={del} alt="delete" style={{ width: "24px", height: "24px", cursor: "pointer" }} />
            </button>
        </div>
    )
}
export default ContactCard;