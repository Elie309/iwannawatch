import React, { Component } from 'react'
import CloseIcon from '../../icons/CloseIcon';
import ProfilSkeleton from '../../icons/ProfilSkeleton'
import SearchIcon from '../../icons/SearchIcon';
import AppearingMenu from '../AppearingDiv/AppearingMenu';
import AppearingMenuChild from '../AppearingDiv/AppearingMenuChild';


//TODO: NEed to work more on it - Needs Refactoring...

const ICON_HEIGHT_PROFILE = 40;
const ICON_WIDTH_PROFILE = 40;
const ICON_HEIGHT_SEARCH = 18;
const ICON_WIDTH_SEARCH = 18;

interface stateComponent {
    search: string,
}

enum searchBy {
    TITLE = "title",
    DESCRIPTION = "description",
    GENRE = "genre",
    TYPE = "type",

}

enum PorfilSettings {
    PROFILE = "profile",
    SETTINGS = "settings",
    LOGOUT = "logout",
}

interface Props {

}



//TODO: Change props type
export default class Searchbar extends Component<Props, stateComponent> {



    constructor(props: Props) {
        super(props);

        this.state = {
            search: "",
        }

        this.handleDropDownClick = this.handleDropDownClick.bind(this);

    }

    handleDropDownClick(value: string) {
        console.log(value);
    }

    render() {

        const searchByList = Object.values(searchBy);

        const AppearingChildList = searchByList.map((searchByStringElement: string, index: number) => {
            return (
                <AppearingMenuChild
                    key={searchByStringElement}
                    text={searchByStringElement}
                    className="capitalize w-full p-2 hover:bg-red-600 hover:text-white"
                    data-value={searchByStringElement}
                ></AppearingMenuChild>
            );
        });

        return (
            <div className="w-full h-fit py-2 pl-3 shadow bg-stone-100">
                <div className="w-full h-full flex justify-between">

                    <div className="flex flex-col w-4/6 md:2/6">

                        <form method="get" className='w-full'>

                            <div className="relative flex items-center">
                                <SearchIcon
                                    className="absolute ml-3"
                                    height={ICON_HEIGHT_SEARCH}
                                    width={ICON_WIDTH_SEARCH}
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
                                            width={ICON_WIDTH_SEARCH}
                                            height={ICON_HEIGHT_SEARCH}
                                        />
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>



                    <AppearingMenu
                        text={
                            <ProfilSkeleton height={ICON_HEIGHT_PROFILE} width={ICON_WIDTH_PROFILE} className='fill-slate-500' subclass='fill-white' />

                        }
                        className='user absolute right-0 w-20 cursor-pointer rounded-md '
                        buttonClassName='bg-none'
                        dropDownClassName='flex flex-col w-32 mt-1 -translate-x-3/4 z-10 bg-white shadow-xl rounded-m'
                        onDropDownClick={this.handleDropDownClick}
                    >
                        {AppearingChildList}
                    </AppearingMenu>

                </div>
            </div>
        );

    }
}