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

interface Tag {

  label: string;
  color: string;
}

const Tags: Tag[]  = [
  {
    label: "To Buy",
    color: "red"
  },
  {
    label: "To Watch",
    color: "orange"
  },
  {
    label: "Watched",
    color: "yellow"
  },
  {
    label: "To Read",
    color: "green"
  },
  {
    label: "Read",
    color: "blue"
  },
  {
    label: "Todo",
    color: "purple"
  },
  {
    label: "Done",
    color: "gray"
  }
]


export default class Drawer extends Component {

  constructor(props: any) {
    super(props);

    this.state = {
      DrawerPosition: DrawerState.CLOSED,
    }




  }

  render() {



    const TagsListJSX = Tags.map((tag: Tag) => {
      return (
        <div key={tag.label} className='w-full p-2 flex group transition-colors hover:bg-red-600 cursor-pointer justify-start text-sm'>
           <LabelFilledIcon className='p-0 items-center group' subclass={`group-hover:fill-white`} strokeFill="transparent" height={`${ICON_HEIGHT}`} width={`${ICON_WIDTH}`} fill={tag.color}/>
          <p key={tag.label} className="p-0 group-hover:text-white" >{tag.label}</p>
        </div>
      )
    })


    return (
      <div className='Drawer h-full flex flex-col shadow bg-stone-100 '>

        <div className='my-3 px-5  md:px-3 cursor-pointer'>
          <a href="/"><img src="logo.svg" alt="Logo" className="w-full" /></a>
        </div>


        <div className='group w-full flex items-center p-3 hover:bg-red-600  transition-colors cursor-pointer '>
          <AddCircleOutlinedIcon subclass="stroke-black group-hover:stroke-white" className='mx-2 group' height={`${ICON_HEIGHT}`} width={`${ICON_WIDTH}`}/>
          <a className='p-0  group-hover:text-white'>Add</a>
        </div>

        <div className='w-full'>
          <p className='ml-2 my-2 w-full font-bold text-1xl'>Tags</p>

          <div>

            {TagsListJSX}

          </div>
        </div>


      </div>
    )
  }
}
