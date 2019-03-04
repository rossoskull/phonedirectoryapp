import React from 'react'
import './Contacts.css'

const Contacts = ({ contacts }) => {
  console.log(contacts)
  return (
    <div id='contacts'>
      <div id='page-title'>Contacts</div>
      <table id='contacts-table' cellSpacing='0'>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
        {contacts && contacts.map(contact => {
          return (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.cno}</td>
            <td>{contact.name}</td>
          </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Contacts