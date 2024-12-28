import SearchIcon from '@mui/icons-material/Search';
import { HeaderOptions } from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export function Header (){
    return (
        <div className='flex justify-evenly border-b p-2 w-full position-sticky top-0 z-[999]'>
            <div className="flex header__left">
                <img className = "object-contain h-10 mr-2.5" src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt=""  />
                <div className="p-2 flex align-center rounded-md bg-gray-100">
                    <SearchIcon />
                    <input className = "outline-none border-none bg-inherit h-full" type="text" />
                </div>
            </div>
            <div className="flex">
                <HeaderOptions Icon = {HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={ChatIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                <HeaderOptions avatar="https://www.flaticon.com/free-icon/avatar_6858504" title="Me"/>
            </div>
        </div>
    )
}