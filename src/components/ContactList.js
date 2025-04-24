import React from "react";
import ContactCard from "./ContactCard"
import {Link} from "react-router-dom"
import Swal from 'sweetalert2';
function ContactList(props){
    const deleteContactHandler = (id)=>{
        if (window.confirm("Are You Sure?") === true){
            props.getContactId(id);
            Swal.fire({
                title: 'Success!',
                text: 'Contact deleted successfully!',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            })
        }
    }

    const RenderList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        )
    })

    return (
        <div>
            <div className="d-flex align-item-center justify-content-between my-4 px-3">
                <h2>Contact List</h2>
                <Link to="/add">
                    <button className="btn btn-primary me-5">Add Contact</button>
                </Link>

            </div>
            <div>{RenderList}</div>
        </div>
    );
}
export default ContactList;