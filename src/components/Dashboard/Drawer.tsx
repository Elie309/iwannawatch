import React, { Component } from 'react';
import LabelFilledIcon from '../../icons/LabelFilledIcon';
import AddCircleOutlinedIcon from '../../icons/AddCircleOutlinedIcon';
import { CSSTransition } from 'react-transition-group';
import '../../styles/animation/ADrawer.css';
import { AnimationState } from '../../Interfaces/Others/AnimationState';

const ICON_HEIGHT = 25;
const ICON_WIDTH = 25;



interface Tag {

  label: string;
  color: string;
}

const Tags: Tag[] = [
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

interface Props { }
interface State {
  isDrawerOpen: boolean,
  drawerState: AnimationState,
}


export default class Drawer extends Component<Props, State>  {

  constructor(props: Props) {
    super(props);

    this.state = {
      isDrawerOpen: false,
      drawerState: 0,
    }

    this.ToggleDrawer = this.ToggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);

  }

  ToggleDrawer() {

    if (this.state.drawerState === AnimationState.onEntering || this.state.drawerState === AnimationState.onExiting) {
      return;
    }
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    })
  }

  setDrawerState(drawerState: AnimationState, callback?: () => void) {

    this.setState({
      drawerState,
    }, callback);

  }


  render() {



    const TagsListJSX = Tags.map((tag: Tag) => {
      return (
        <div key={tag.label} className='w-full p-2 flex group transition-colors hover:bg-red-600 cursor-pointer justify-start'>

          <LabelFilledIcon className='p-0 group' subclass={`group-hover:fill-white`} strokeFill="transparent" height={ICON_HEIGHT} width={ICON_WIDTH} fill={tag.color} />
          <a key={tag.label} className={`${this.state.drawerState === 2 ? "" : "hidden"} group-hover:text-white`} >{tag.label}</a>
        </div>
      )
    })


    return (

      <div>
        <CSSTransition
          in={this.state.isDrawerOpen} timeout={400}
          classNames='drawer'
          mountOnEnter={false}
          onEnter={() => {this.setDrawerState(AnimationState.onEnter) }}
          onEntering={() => { this.setDrawerState(AnimationState.onEntering) }}
          onEntered={() => { this.setDrawerState(AnimationState.onEntered) }}
          onExit={() => { this.setDrawerState(AnimationState.onExit) }}
          onExiting={() => { this.setDrawerState(AnimationState.onExiting) }}
          onExited={() => { this.setDrawerState(AnimationState.onExited) }}
        >
          <div className='h-full flex flex-col shadow bg-stone-100 '>

            
            <div className='group w-full flex items-center p-3 hover:bg-red-600  transition-colors cursor-pointer '>
              <AddCircleOutlinedIcon subclass="stroke-black group-hover:stroke-white" className='mx-2 group' height={ICON_HEIGHT} width={ICON_WIDTH} />
              <a className={`${this.state.drawerState === 2 ? "" : "hidden"}  group-hover:text-white`}>Add</a>
            </div>

            <div className='w-full'>
              <p className='ml-2 my-2 w-full font-bold text-1xl'>Tags</p>

              <div>

                {TagsListJSX}

              </div>
            </div>


          </div>
        </CSSTransition>
      </div>
    )
  }
}
