import React from 'react'
import './Contacts.css'

const Contacts = ({ contacts, deleteContact }) => {
  document.title = 'Contacts \xB7 PhoneBook'  
  return (
    <div id='contacts'>
      <div id='page-title'>Contacts</div>
      <table id='contacts-table' cellSpacing='0'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts && contacts.reverse().map(contact => {
            return (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.cno}</td>
              <td><button className='delete-button' onClick={() => { deleteContact(contact.id)}}>Delete</button></td>
            </tr>
            )
          })}
        </tbody>
        
      </table>
    </div>
  )
}

export default Contacts