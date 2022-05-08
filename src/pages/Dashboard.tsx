import React, { Component } from 'react'
import Drawer from '../components/Drawer'
import ElementDashboard from '../components/ElementDashboard'
import Searchbar from '../components/Searchbar'
import { ElementsTypes, ReleaseTypes } from '../Interfaces/Enums'


export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid sm:flex flex-row h-full w-full">
        <div className="drawer w-full sm:w-2/6 md:w-1/6 h-fit sm:h-full">
          <Drawer />
        </div>
        <div className="flex-1 flex flex-col">
          <Searchbar />
          <div className="main-content bg-stone-100 w-full h-full overflow-x-hidden overflow-y-scroll">
            <div className="
              p-5 
              masonry sm:masonry-sm md:masonry-md lg:masonry-lg
              ">
              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
                releaseTypes={ReleaseTypes.Daily}

              />

              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
                releaseTypes={ReleaseTypes.Daily}

              />
              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
                releaseTypes={ReleaseTypes.Daily}

              />
              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
                releaseTypes={ReleaseTypes.Daily}

              />

              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
                releaseTypes={ReleaseTypes.Daily}

              />
              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
                releaseTypes={ReleaseTypes.Daily}

              />

              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
                releaseTypes={ReleaseTypes.Daily}

              />
              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
                releaseTypes={ReleaseTypes.Daily}

              />
              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
                releaseTypes={ReleaseTypes.Daily}

              />
              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
                releaseTypes={ReleaseTypes.Daily}

              />
              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                releaseTypes={ReleaseTypes.Daily}

              />
              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                releaseTypes={ReleaseTypes.Daily}

              />
              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                releaseTypes={ReleaseTypes.Daily}
                startedAt={new Date()}

              />
              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                releaseTypes={ReleaseTypes.Daily}

              />
              <ElementDashboard
                id={1}
                type={ElementsTypes.Series}
                title="Title"
                releaseTypes={ReleaseTypes.Daily}

              />
            </div>
          </div>
        </div>


      </div>
    )
  }
}
