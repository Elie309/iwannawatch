import React, { Component } from 'react'
import Drawer from '../components/Drawer'


export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid h-full w-full">
        <div className="drawer w-1/6 h-full">
          <Drawer />
        </div>
      </div>
    )
  }
}
