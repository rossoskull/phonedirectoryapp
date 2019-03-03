import React, { Component } from 'react'
import Header from './Components/Header/Header'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {id: 1, name: 'John Doe', cno: '1239192301'},
        {id: 2, name: 'John Doe', cno: '3231351412'},
        {id: 3, name: 'John Doe', cno: '5678212123'},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App
