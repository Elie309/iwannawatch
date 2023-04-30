import React, { useState } from 'react'
import CloseIcon from '../../assets/icons/CloseIcon';
import SearchIcon from '../../assets/icons/SearchIcon';


const ICON_HEIGHT_SEARCH = 18;
const ICON_WIDTH_SEARCH = 18;

export default function SearchForm() {

    const [search, setSearch] = useState('');

    return (
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
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
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
                            setSearch('');
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
    )
}
