import React, { useState, useEffect } from "react";
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const Local_Storage_key = "contacts";

    const getInitialContacts = () => {
        const storedContacts = localStorage.getItem(Local_Storage_key);
        return storedContacts ? JSON.parse(storedContacts) : [];
    };

    const [contacts, setContacts] = useState(getInitialContacts);

    const addContactHandler = (contact) => {
        setContacts([...contacts, { id: uuidv4(), ...contact }]);
    };

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => contact.id !== id);
        setContacts(newContactList);
    };

    useEffect(() => {
        localStorage.setItem(Local_Storage_key, JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div>
            <Header />
            <AddContact addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} getContactId={removeContactHandler} />
        </div>
    );
}

export default App;