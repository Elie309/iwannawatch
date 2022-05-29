import React, { Component } from 'react'
import Profile from '../Profile/Profile';
import SearchForm from './SearchForm';
import HamburgerIcon from '../../icons/HamburgerIcon';



const ICON_WIDTH_HAM = 30;
const ICON_HEIGHT_HAM = 30;

interface stateComponent {
    search: string,
}

interface Props {
    onPointerDownMainButton: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}



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
            <div className="w-full h-fit py-1 pl-3 flex justify-between shadow bg-stone-100">

                <div className="w-10/12 flex items-center">
                    <div className="w-fit">
                        <button onPointerDown={this.props.onPointerDownMainButton}><HamburgerIcon height={ICON_HEIGHT_HAM} width={ICON_WIDTH_HAM} className='cursor-pointer stroke-gray-400' /></button>
                    </div>

                    <div className='h-full w-full md:w-fit my-1 px-3 cursor-pointer text-center'>
                        <a href="/"><img src="logo.svg" alt="Logo" className='w-full  max-h-10' /></a>
                    </div>


                    <div className="hidden md:flex flex-col justify-start  md:w-6/12">

                        <SearchForm />

                    </div>

                </div>
                <Profile />
            </div>
        );

    }
}
