/* eslint-disable prettier/prettier */
import React, { useEffect, useLayoutEffect, useState } from 'react'
import  faker from 'faker'
import images from '../constants/images'

export const ContactsContext = React.createContext()
export const MessagesContext = React.createContext()

export default function ContactProvider ({children}) {
    const [contacts, setContacts] = useState([])
    const [messages, setmessages] = useState([])

    useEffect(() => {
        console.log('computing');
        const newContact = () => ({ id:Math.random()*10, name:`${faker.name.firstName()} ${faker.name.lastName()}`, role:faker.name.jobTitle(), pic:images[Math.round(Math.random()*8)]})
        for (let count = 0; count < 100; count++) {
            setContacts(prev => ([...prev, newContact()]))
            
        }

        

    },[setContacts])

    // useEffect(() => {
    //     for (let index = 0; index < 10; index++) {
    //         messages.push(
    //             {
    //             id: contacts[index]?.id,
    //             conversation:[
    //                             {sent:true, text:faker.lorem.lines(2)},
    //                             {sent:false, text:faker.lorem.text(4)},
    //                             {sent:true, text:faker.lorem.text(4)},
    //                             {sent:true, text:faker.lorem.text(4)},
    //                             {sent:true, text:faker.lorem.text(4)},
    //                             {sent:false, text:faker.lorem.text(4)},
    //                             {sent:true, text:faker.lorem.text(4)},
    //                         ]
    //             }
    //         )

            
    //     }

        
    // },[contacts, messages])

    return (
        <ContactsContext.Provider value={contacts} >
            <MessagesContext.Provider value={[messages, setmessages]} >
                {children}
            </MessagesContext.Provider>
        </ContactsContext.Provider>
    )
}


