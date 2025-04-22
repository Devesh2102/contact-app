import React from "react";
import ContactCard from "./ContactCard"
function ContactList(props){


    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    }

    const RenderList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        )
    })
    // console.log(RenderList)

    return (
        <div>{RenderList}</div>
    );
}
export default ContactList;