import React, { Component } from 'react'
import CloseIcon from '../../icons/CloseIcon';
import ProfilSkeleton from '../../icons/ProfilSkeleton'
import SearchIcon from '../../icons/SearchIcon';
import AppearingMenu from '../AppearingDiv/AppearingMenu';
import AppearingMenuChild from '../AppearingDiv/AppearingMenuChild';
import Profile from '../Profile/Profile';


//TODO: NEed to work more on it - Needs Refactoring...

const ICON_HEIGHT = 18;
const ICON_WIDTH = 18;

interface stateComponent {
    search: string,
}

interface Props {}



//TODO: Change props type
export default class Searchbar extends Component<Props, stateComponent> {



    constructor(props: Props) {
        super(props);

        this.state = {
            search: "",
        }

    }

    render() {

        

        return (
            <div className="w-full h-fit py-2 pl-3 shadow bg-stone-100">
                <div className="w-full h-full flex justify-between">

                    <div className="flex flex-col w-4/6 md:2/6">

                        <form method="get" className='w-full'>

                            <div className="relative flex items-center">
                                <SearchIcon
                                    className="absolute ml-3"
                                    height={ICON_HEIGHT}
                                    width={ICON_WIDTH}
                                    subclass='fill-slate-200' />

                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    value={this.state.search}
                                    onChange={(e) => { this.setState({ search: e.target.value }) }}
                                    placeholder='Search'
                                    className='p-2 pl-10 pr-8 outline-0 
                                    border-0 shadow-slate-50 w-full
                                    focus:ring-1 ring-red-100
                                    font-semibold rounded-md
                                    '
                                />

                                <div className="clear-search absolute flex items-center px-2 right-0 w-fit h-full">
                                    <button className='bg-none w-fit h-fit' onClick={
                                        (e) => {
                                            e.preventDefault();
                                            this.setState({ search: "" });
                                        }
                                    }>
                                        < CloseIcon
                                            className='group'
                                            subclass="stroke-slate-300 group-hover:stroke-red-600"
                                            width={ICON_WIDTH}
                                            height={ICON_HEIGHT}
                                        />
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>


                    <Profile />
                    

                </div>
            </div>
        );

    }
}
