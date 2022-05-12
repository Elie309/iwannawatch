import React, { Component } from 'react'
import Drawer from '../components/Dashboard/Drawer'
import HandlerDashboardElement from '../components/Dashboard/HandlerDashboardElement'
import Searchbar from '../components/Dashboard/Searchbar'

import { data } from '../data/DashboardElementData'


export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid sm:flex flex-row h-full w-full">
        <div className="drawer w-full sm:w-2/6 md:w-1/6 h-fit sm:h-full">
          <Drawer />
        </div>
        <div className="flex-1 flex flex-col">
          <Searchbar />
          <div className="main-content bg-white-100 w-full h-full overflow-x-hidden overflow-y-scroll">
              <HandlerDashboardElement data={data} className="" childClassName=''/>
          </div>
        </div>


      </div>
    )
  }
}
