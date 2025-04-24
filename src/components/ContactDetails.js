import React from "react";
import user from "../images/user1.png";
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom"

const ContactDetails = ()=>{
    const location = useLocation();
    const { contact } = location.state || {};
    if (!contact) {
        return <p className="text-center mt-5">No contact data found.</p>;
    }
    console.log(contact.name)


    return(
        <div className="d-flex align-items-center justify-content-center mt-5">
            <div className="border border-info rounded p-4 w-25" >
                <div className="text-center"><img src={user} alt="user" className="rounded-circle" style={{width: "100px"}}/></div>
                <div className="mt-4">
                    <p><strong>Name:</strong> {contact.name}</p>
                    <p><strong>Email:</strong> {contact.email}</p>
                </div>
                <Link to={"/"} className="mx-5">
                    <div className="px-3 btn btn-success">Back to Contact List</div>
                </Link>
            </div>

        </div>
    )
}

export default ContactDetails;