import { Component } from 'react'
import ProfilSkeleton from '../../assets/icons/ProfilSkeleton'
import AppearingMenu from '../AppearingDiv/AppearingMenu';
import AppearingMenuChild from '../AppearingDiv/AppearingMenuChild';

import {auth} from '../../../Firebase/firebase';
import {signOut} from 'firebase/auth';

interface Props {

}

const ICON_HEIGHT_PROFILE = 40;
const ICON_WIDTH_PROFILE = 40;

enum ProfileSettings {
    PROFILE = "profile",
    SETTINGS = "settings",
    LOGOUT = "logout",
}

export default class Profile extends Component<Props> {

    constructor(props: Props) {
        super(props);


        this.handleDropDownClick = this.handleDropDownClick.bind(this);
    }

    handleDropDownClick(value: string) {
        if (value === ProfileSettings.LOGOUT) this.LogoutHandler();
        //TODO: Profile, settings
    }


    LogoutHandler() {
        try {
            
            signOut(auth)

        } catch (e: any) {
            console.log(e);
            //TODO: Error handling
        }
    }


    render() {

        const profileList = Object.values(ProfileSettings);

        const PorfileSettingsList = profileList.map((PorfileSettingsElement: string) => {
            return (
                <AppearingMenuChild
                    key={PorfileSettingsElement}
                    text={PorfileSettingsElement}
                    className="capitalize w-full p-2 hover:bg-red-600 hover:text-white"
                    data-value={PorfileSettingsElement}
                ></AppearingMenuChild>
            );
        });

        return (
            <AppearingMenu
                text={
                    <ProfilSkeleton height={ICON_HEIGHT_PROFILE} width={ICON_WIDTH_PROFILE} className='fill-slate-500' subclass='fill-white' />

                }
                className='mr-3 w-10 cursor-pointer rounded-md '
                buttonClassName='bg-none '
                dropDownClassName='absolute flex flex-col w-32 mt-1 -translate-x-3/4 z-10 bg-white shadow-xl rounded-m'
                onDropDownClick={this.handleDropDownClick}
            >
                {PorfileSettingsList}
            </AppearingMenu>
        )
    }
}
