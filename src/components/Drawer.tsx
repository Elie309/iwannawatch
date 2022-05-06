import React, { Component } from 'react';
import LabelFilledIcon from '../icons/LabelFilledIcon';
import AddCircleOutlinedIcon from '../icons/AddCircleOutlinedIcon';
import "../styles/Drawer.css"


const ICON_HEIGHT = 18;
const ICON_WIDTH = 18;

enum DrawerState {
  CLOSED,
  OPEN,
  OPENING,
  CLOSING,
}

enum Tags {
  ToWatch = "To Watch",
  Watched = "Watched",
  ToRead = "To Read",
  Read = "Read",
  ToDo = "ToDo",
  Done = "Done",
}


export default class Drawer extends Component {

  constructor(props: any) {
    super(props);

    this.state = {
      DrawerPosition: DrawerState.CLOSED,
    }




  }

  render() {

    let TagsListJSX: JSX.Element[] = Object.values(Tags).map((tag: String | Tags, index: number) => {
      return (
        <div key={tag.toString()} className='tag-element p-2 flex hover:bg-red-200 cursor-pointer justify-start text-sm'>
           <LabelFilledIcon className='p-0 items-center' height={`${ICON_HEIGHT}`} width={`${ICON_WIDTH}`} fill='red' />
          <p key={tag.toString()} className="p-0" >{tag}</p>
        </div>
      )
    })


    return (
      <div className='Drawer h-full flex flex-col bg-red-50'>

        <div className='my-3 px-2 cursor-pointer'>
          <a href="/"><img src="logo.svg" alt="Logo" className="w-full" /></a>
        </div>


        <div className='group flex justify-center p-3 hover:bg-red-200 cursor-pointer '>
          <AddCircleOutlinedIcon className='' height={`${ICON_HEIGHT}`} width={`${ICON_WIDTH}`}/>
          <a className='p-0'>Add</a>
        </div>

        <div>
          <p className='ml-2 my-2 font-bold text-1xl'>Tags</p>

          <div className="tags-group">

            {TagsListJSX}

          </div>
        </div>


      </div>
    )
  }
}
