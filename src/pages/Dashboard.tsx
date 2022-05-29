import React, { Component } from 'react'
import Drawer from '../components/Dashboard/Drawer'
import HandlerDashboardElement from '../components/Dashboard/HandlerDashboardElement'
import Searchbar from '../components/Dashboard/Searchbar'
import { fillData } from '../data/DashboardElementData'

interface Props{}
interface State{
}


export default class Dashboard extends Component<Props, State> {

  private DrawerRef = React.createRef<Drawer>();

  constructor(props: Props) {

    super(props);

    this.DrawerRef = React.createRef<Drawer>();


  }


  private data = fillData(4);
  
  render() {
    return (
      <div className="container-fluid sm:flex flex-col h-full w-full">
      <div className="w-full">
        <Searchbar onPointerDownMainButton={(e) => {
          this.DrawerRef.current?.ToggleDrawer();
        }}
        />
      </div>
      <div className="flex-1 flex flex-row">
        <Drawer ref={this.DrawerRef} />
        <div className="main-content bg-white-100 w-full h-full overflow-x-hidden overflow-y-scroll">
          <HandlerDashboardElement data={this.data} className="" childClassName='' />
        </div>
      </div>
    </div>
    )
  }
}
