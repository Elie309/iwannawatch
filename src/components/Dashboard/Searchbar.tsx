import React, { Component } from 'react'
import CloseIcon from '../../icons/CloseIcon';
import HamburgerIcon from '../../icons/HamburgerIcon';
import ProfilSkeleton from '../../icons/ProfilSkeleton'
import SearchIcon from '../../icons/SearchIcon';
import AppearingMenu from '../AppearingDiv/AppearingMenu';
import AppearingMenuChild from '../AppearingDiv/AppearingMenuChild';


//TODO: NEed to work more on it - Needs Refactoring...

const ICON_HEIGHT_PROFILE = 40;
const ICON_WIDTH_PROFILE = 40;
const ICON_HEIGHT_SEARCH = 18;
const ICON_WIDTH_SEARCH = 18;
const ICON_WIDTH_HAM = 30;
const ICON_HEIGHT_HAM = 30;

interface stateComponent {
    search: string,
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

        const searchByList = Object.values(PorfilSettings);

        const PorfilSettingsList = searchByList.map((PorfilSettingsElement: string, index: number) => {
            return (
                <AppearingMenuChild
                    key={PorfilSettingsElement}
                    text={PorfilSettingsElement}
                    className="capitalize w-full p-2 hover:bg-red-600 hover:text-white"
                    data-value={PorfilSettingsElement}
                ></AppearingMenuChild>
            );
        });

        return (
            <div className="w-full h-fit py-2 pl-3 shadow bg-stone-100">
                <div className="w-full h-full flex flex-row items-center">

                    <div className="w-9/12 flex flex-row items-center">
                        <div className="w-fit">
                            <HamburgerIcon height={ICON_HEIGHT_HAM} width={ICON_WIDTH_HAM} className='cursor-pointer stroke-gray-400' />
                        </div>

                        <div className='h-full w-full md:w-4/12 my-1 px-3 cursor-pointer text-center'>
                            <a href="/"><img src="logo.svg" alt="Logo" className='w-full  max-h-10' /></a>
                        </div>


                        <div className="hidden md:flex flex-col justify-start  md:w-6/12">

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

                    </div>

                    <div className="w-3/12 flex justify-end">

                        <AppearingMenu
                            text={
                                <ProfilSkeleton height={ICON_HEIGHT_PROFILE} width={ICON_WIDTH_PROFILE} className='fill-slate-500' subclass='fill-white' />
                            }
                            className='right-0 w-20 cursor-pointer rounded-md '
                            buttonClassName='bg-none'
                            dropDownClassName='flex flex-col w-32 mt-1 -translate-x-3/4 z-10 bg-white shadow-xl rounded-m'
                            onDropDownClick={this.handleDropDownClick}
                        >
                            {PorfilSettingsList}
                        </AppearingMenu>
                    </div>

                </div>
            </div>
        );

    }
}
