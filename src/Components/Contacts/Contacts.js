import React from 'react'
import './Contacts.css'

const Contacts = ({ contacts, deleteContact }) => {
  console.log(contacts)
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
        {contacts && contacts.reverse().map(contact => {
          return (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.cno}</td>
            <td><button className='delete-button' onClick={() => { deleteContact(contact.id)}}>Delete</button></td>
          </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Contacts