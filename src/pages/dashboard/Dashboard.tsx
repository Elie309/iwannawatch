import { useRef } from 'react'
import Drawer from '../../components/Dashboard/Drawer'
import HandlerDashboardElement from '../../components/Dashboard/HandlerDashboardElement'
import Searchbar from '../../components/Dashboard/Searchbar'
import { fillData } from '../../data/DashboardElementData'

interface Props { }


export default function Dashboard(props: Props) {

  const data = fillData(4);

  const drawerRef = useRef<Drawer>(null);

  return (
    <div className="container-fluid sm:flex flex-col h-full w-full overflow-hidden">
      <div className="w-full">
        <Searchbar onPointerDownMainButton={(e) => {
          drawerRef.current?.ToggleDrawer();
        }}
        />
      </div>
      <div className="flex-1 flex flex-row">
        <Drawer ref={drawerRef} />
        <div className={`main-content bg-white-100 w-full h-screen overflow-y-scroll `}>
          <HandlerDashboardElement data={data} className="" childClassName='' />
        </div>
      </div>
    </div>
  )
}
