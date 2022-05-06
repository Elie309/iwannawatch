import React, { Component } from 'react'
import ProfilSkeleton from '../icons/ProfilSkeleton'
import SearchIcon from '../icons/SearchIcon';


const ICON_HEIGHT_PROFILE = 40;
const ICON_WIDTH_PROFILE = 40;
const ICON_HEIGHT_SEARCH = 18;
const ICON_WIDTH_SEARCH = 18;

export default class Searchbar extends Component {



    render() {

        return (
            <div className="w-full h-fit py-2 pl-3 shadow bg-stone-100">
                <div className="w-full h-full flex justify-between">

                    <form method="get" className='w-4/6  sm:w-3/6'>

                        <div className="relative flex items-center">
                            <SearchIcon
                            className="absolute ml-3"
                            height={`${ICON_HEIGHT_SEARCH}`} 
                            width={`${ICON_WIDTH_SEARCH}`} 
                            subclass='fill-slate-200' />
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder='Search'
                                className='p-2 pl-10 outline-0 
                                    border-0 shadow-slate-50 w-full
                                    focus:ring-1 ring-red-100
                                    font-semibold rounded-md
                                    '
                            />
                        </div>
                    </form>

                    <div className="user pr-4 cursor-pointer">
                        <ProfilSkeleton height={`${ICON_HEIGHT_PROFILE}`} width={`${ICON_WIDTH_PROFILE}`} className='fill-slate-500' subclass='fill-white' />
                    </div>

                </div>
            </div>
        )
    }
}
