import { Component } from 'react'
import axiosInstance from '../../data/axiosInstance';
import { setAccessToken, setRefreshToken } from '../../Helpers/TokenHandler';
import ProfilSkeleton from '../../icons/ProfilSkeleton'
import AppearingMenu from '../AppearingDiv/AppearingMenu';
import AppearingMenuChild from '../AppearingDiv/AppearingMenuChild';

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
            axiosInstance.delete('sessions').then(res => {return res.data}).then(data => {
                if(data.success) {
                    setAccessToken(data.data.accessToken || '');
                    setRefreshToken(data.data.refreshToken || '');
                    window.location.reload();
                }else{
                    //TODO: handle why is it unsuccessfull
                    setAccessToken('');
                    setRefreshToken('');
                    window.location.reload();
                }
            })

        } catch (e: any) {
            //TODO: Handle error
        }
    }


    render() {

        const profileList = Object.values(ProfileSettings);

        const PorfileSettingsList = profileList.map((PorfileSettingsElement: string, index: number) => {
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
