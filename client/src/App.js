import React, { Component } from 'react';
import './App.css';
import PlayerInfo from './components/Player/PlayerInfo'
import Nav from './components/Nav/Nav'
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

    componentDidMount() {
      axios.get(`http://localhost:5000/api/players`)
        .then(res => {
          this.setState({
            data: res.data
          })
        })
    }

    render() {
      return (
        <div className="App">
        <Nav />
        <PlayerInfo data={this.state.data} />

        </div>
      )
    }
  }

export default App;
