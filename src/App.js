import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Components/Header/Header'
import Contacts from './Components/Contacts/Contacts'
import Add from './Components/Add/Add'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {id: 1, name: 'John Doe', cno: '1239192301'},
        {id: 2, name: 'Vincent Charles', cno: '3231351412'},
        {id: 3, name: 'Ravi Kishan', cno: '5678212123'},
      ]
    }
  }

  deleteContact = key => {
    let contacts = this.state.contacts
    contacts = contacts.filter(c => c.id !== key)
    this.setState({
      contacts: contacts
    })
  }

  addContact = contact => {
    let contacts = this.state.contacts
    contacts = [...contacts, contact]
    this.setState({
      contacts: contacts
    }, () => {
      return <Redirect to='/' />
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Contacts deleteContact={this.deleteContact.bind(this)} contacts={this.state.contacts} />} />
          <Route exact path='/add' render={() => <Add addContact={this.addContact.bind(this)} />} />
        </Switch>
      </div>
    );
  }
}

export default App
