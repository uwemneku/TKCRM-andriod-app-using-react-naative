/* eslint-disable prettier/prettier */
import faker, { fake } from 'faker'
const contacts = [
    // {
    //     id:'',
    //     Name: '',
    //     role:'',
    // }
]

let count = 0
do {
    contacts.push({id:faker.random()*10, Name:`${faker.name.firstName()} ${faker.name.lastName()}`, role:faker.name.jobTitle()})
}
while(count < 50)



const messages = [
    {
        id:'',
        messages:[
            {type:'text', details:'lorem,ipsum', mode:'sent'},
            {type:'text', details:'lorem,ipsum', mode:'recieved'},
            {type:'text', details:'lorem,ipsum', mode:'sent'},
            {type:'text', details:'lorem,ipsum', mode:'recieved'},
            {type:'text', details:'lorem,ipsum', mode:'sent'},
            {type:'text', details:'lorem,ipsum', mode:'recieved'},
            {type:'text', details:'lorem,ipsum', mode:'sent'},
            {type:'text', details:'lorem,ipsum', mode:'sent'},
        ]
    }

]
   
function getLastMessage(){

}