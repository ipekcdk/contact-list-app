import {useState, useEffect} from 'react'

import React from 'react'
import List from './List'
import Form from './Form'


function Contacts() {

  const[contacts, setContacts]=useState([
    {
      fullname:"İpek",
      phone_number:"123456"
    },
    {
      fullname:"Kerem",
      phone_number:"111111"
    },
    {
      fullname:"Enes",
      phone_number:"222222"
    }
  ]);

  useEffect(()=>{
    console.log(contacts)
  }, [contacts])

  return (
    <div id='container'>
      <h1>Contact List</h1>
      <List contacts={contacts}/> 
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;
