import React, { Component } from 'react'
import Home from './views/Home';
import ResponsiveAppBar from './components/Appbar';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user:{
        username:'Tyler'
      }
    }
  }

  render() {
    return (
      <div>
      <ResponsiveAppBar user={this.state.user} />
      <Home />
      </div>
    )
  }
}

