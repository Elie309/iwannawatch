import { Component } from 'react';
import LabelFilledIcon from '../../assets/icons/LabelFilledIcon';
import AddCircleOutlinedIcon from '../../assets/icons/AddCircleOutlinedIcon';
import { CSSTransition } from 'react-transition-group';
import '../../styles/animation/ADrawer.css';
import { AnimationState } from '../../Interfaces/Others/AnimationState';
import { CheckPageWidthDimensions, EPageDimensions } from '../../Utils/CheckPageWidthDimensions';
import SearchForm from './SearchForm';

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
  width: number,
}


export default class Drawer extends Component<Props, State>  {

  constructor(props: Props) {
    super(props);

    this.state = {
      isDrawerOpen: false,
      drawerState: 0,
      width: window.innerWidth,
    }

    this.ToggleDrawer = this.ToggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);

  }

  /**
   * Toggle the drawer to open and close
   */
  ToggleDrawer() {

    if (this.state.drawerState === AnimationState.onEntering || this.state.drawerState === AnimationState.onExiting) {
      return;
    }
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    })
  }

  /**
   * Change drawer state using AnimationState enum
   * @param drawerState AnimationState enum
   * @param callback Function if necessary
   */
  setDrawerState(drawerState: AnimationState, callback?: () => void) {

    this.setState({
      drawerState,
    }, callback);

  }

  /**
   * Return a JSX.Element searchForm is it is on small and medium screen and a hidden div if it is on large screen
   * @returns JSX.Element - SearchForm or hidden div
   */
  searchForm(): JSX.Element {

    if (CheckPageWidthDimensions(EPageDimensions.md) || CheckPageWidthDimensions(EPageDimensions.sm)) {
      return (
        <div className='m-2 px-3'>
          <SearchForm />
        </div>
      )
    }

    return <div className='hidden'></div>

  }


  /**
   * Update the state width of the window to render the component again.
   */
  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {

    /**
     * Render the tags
     */
    const TagsListJSX = Tags.map((tag: Tag) => {
      return (
        <div key={tag.label} className={`w-full py-2 pl-3 pr-2 flex items-center group text-base transition-colors hover:bg-red-600 cursor-pointer ${CheckPageWidthDimensions(EPageDimensions.sm, EPageDimensions.md) ? "justify-center py-4 text-lg" : "justify-start"}`}>
          <LabelFilledIcon className='p-0 group' subclass={`group-hover:fill-white`} strokeFill="transparent" height={ICON_HEIGHT} width={ICON_WIDTH} fill={tag.color} />
          <button key={tag.label} className={`border-none bg-transparent ${this.state.drawerState === 2 ? "" : "hidden"} group-hover:text-white`} >{tag.label}</button>
        </div>
      )
    })


    return (

      <div>
        <CSSTransition
          in={this.state.isDrawerOpen} timeout={400}
          classNames='drawer'
          mountOnEnter={CheckPageWidthDimensions(EPageDimensions.sm, EPageDimensions.md)}
          onEnter={() => { this.setDrawerState(AnimationState.onEnter) }}
          onEntering={() => { this.setDrawerState(AnimationState.onEntering) }}
          onEntered={() => { this.setDrawerState(AnimationState.onEntered) }}
          onExit={() => { this.setDrawerState(AnimationState.onExit) }}
          onExiting={() => { this.setDrawerState(AnimationState.onExiting) }}
          onExited={() => { this.setDrawerState(AnimationState.onExited) }}

        >
          <div className='drawer h-screen flex flex-col shadow bg-stone-100 overflow-x-hidden overflow-y-auto pb-20'>

            {this.searchForm()}

            <div className={`w-full py-2 pl-3 pr-2 flex items-center group text-base transition-colors hover:bg-red-600 cursor-pointer ${CheckPageWidthDimensions(EPageDimensions.sm, EPageDimensions.md) ? "justify-center py-4 text-lg" : "justify-start"}`}>

              <AddCircleOutlinedIcon subclass="stroke-black group-hover:stroke-white" className='group' height={ICON_HEIGHT} width={ICON_WIDTH} />
              <button className={`bg-transparent bordenone ${this.state.drawerState === 2 ? "" : "hidden"}  group-hover:text-white`}>Add</button>
            </div>

            <div className={`w-full ${CheckPageWidthDimensions(EPageDimensions.sm, EPageDimensions.md) ? "text-center py-4 text-lg" : "justify-start"}`}>

              <p className='mx-2 my-2 w-full font-bold text-1xl'>Tags</p>

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
