/* eslint-disable prettier/prettier */
import React, { useContext, useEffect }  from 'react'
import { View } from 'react-native'
import ScreenHeader from '../mock components/ScreenHeader'
import Contacts, { ChatList } from './SubScreens/Contacts'
import { ContactsContext, MessagesContext } from '../Context/ContactProvider'
import  faker from 'faker'



export default function Chats() {
    const contacts = useContext(ContactsContext)
    const [messages, setmessages] = useContext(MessagesContext)

    useEffect(() => {
        for (let index = 0; index < 3; index++) {
            console.log('creating messages')
            messages.push(
                {
                id: contacts[index]?.id,
                date: Date.now(),
                conversation:[
                                {sent:true, contactIndex:index, text:faker.lorem.lines(2)},
                                {sent:false, contactIndex:index, text:faker.lorem.text(4)},
                                {sent:true, contactIndex:index, text:faker.lorem.text(4)},
                                {sent:true, contactIndex:index, text:faker.lorem.text(4)},
                                {sent:true, contactIndex:index, text:faker.lorem.text(4)},
                                {sent:false, contactIndex:index, text:faker.lorem.text(4)},
                                {sent:true, contactIndex:index, text:faker.lorem.text(4)},
                            ]
                }
            )

            
        }
        
    },[])
    return (
        <View style={{
            height:'100%'
        }}
        >   
            {/* Header */}
            <View
                style={{flex:0}}
            >
                <ScreenHeader text='Chat' showIcon={true} iconName="people" navigateTo='Contacts' />
            </View>
            {/* Contact List */}
            <View
                style={{
                    flex:1
                }}
            >
                {/* <Contacts /> */}
                <ChatList />
            </View>
            
        </View>
    )
}
