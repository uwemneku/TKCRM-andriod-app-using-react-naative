/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import  faker from 'faker'
import images from '../constants/images'

export const ContactsContext = React.createContext()

export default function ContactProvider ({children}) {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        console.log('computing');
        const newContact = () => ({ id:Math.random()*10, name:`${faker.name.firstName()} ${faker.name.lastName()}`, role:faker.name.jobTitle(), pic:images[Math.round(Math.random()*8)]})
        for (let count = 0; count < 100; count++) {
            setContacts(prev => ([...prev, newContact()]))
            
        }
    },[setContacts])

    return (
        <ContactsContext.Provider value={contacts} >
            {children}
        </ContactsContext.Provider>
    )
}
