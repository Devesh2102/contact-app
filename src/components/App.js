import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import ContactList from './ContactList';
import { v4 as uuidv4 } from 'uuid';
import AddContactWrapper from "./AddContactWrapper";
import ContactDetails from "./ContactDetails";
import NotFound from "./NotFound";

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
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <ContactList contacts={contacts} getContactId={removeContactHandler} />
                    }
                    />
                    <Route
                        path="/add"
                        element={<AddContactWrapper addContactHandler={addContactHandler} />}
                    />
                    <Route path="/contact/:id" element={<ContactDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>

        </div>
    );
}

export default App;
