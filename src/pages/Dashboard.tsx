import React, { Component } from 'react'
import Drawer from '../components/Drawer'
import Searchbar from '../components/Searchbar'


export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid sm:flex flex-row h-full w-full">
        <div className="drawer w-full sm:w-2/6 md:w-1/6 h-full">
          <Drawer />
        </div>
        <div className="flex-1">
          <Searchbar />
          <div className="main-content">

          </div>
        </div>


      </div>
    )
  }
}
