import CreateIcon from '@mui/icons-material/Create';
import { InputOptions } from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewIcon from '@mui/icons-material/CalendarViewDay';
export function Feed(){
    return (
        <div className="flex-[0.6] mr-0 ml-5">
            <div className="pb-[20px] p-[10px] rounded-[10px] bg-white mb-[20px]">
                <div className='border-[1px] border-gray-200 rounded-[30px] p-[10px] pl-[15px] flex color-gray w-full'>
                    <CreateIcon></CreateIcon>
                    <form className='flex flex-1'>
                        <input className='border-0 ml-2.5 outline-0 font-semibold' type="text" />
                        <button className = "ml-auto hidden" type='submit'>Send</button>
                    </form>
                </div>
                <div className='flex justify-evenly mt-[10px]'>
                    <InputOptions Icon={ImageIcon} title='Photo' color="#7085F9"/>
                    <InputOptions Icon={SubscriptionIcon} title='Video' color="#E7A33E"/>
                    <InputOptions Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
                    <InputOptions Icon={CalendarViewIcon} title='Write article' color="#7FC15E"/>
                </div>
            </div>
        </div>
    )
}