import {Avatar}from '@material-ui/core';


export function Sidebar (){
    const recentItems = (topic) =>{
        return (<
             div className='flex text-[13px] text-gray-500 font-bold cursor-pointer hover:bg-gray-100 rounded-[5px]'>
             <span className='mr-2.5 ml-[5px]'>#</span>
            <p>{topic}</p>
            </div>

        )
    }
    return (
        <div className="top-20 position-sticky flex-[0.2] rounded-[10px] text-center h-auto">
            <div className="flex flex-col items-center border-b-0 rounded-tl-[10px] rounded-tr-[10px] border-[1px] border-gray-200 pb-2.5 bg-white">
                <img className= 'mb-[-20px] w-full h-[60px] rounded-tl-[10px] rounded-tr-[10px] object-cover' src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" alt="" />
                <Avatar className='mb-2.5'></Avatar>
                <h2 className='text-[15px]'>Aman Kr Singh</h2>
                <h4 className='text-gray text-xs'>amankrsingh0220@gmail.com</h4>
            </div>
            <div className='p-2.5 bg-white border-[1px] mb-2.5 rounded-bl-[10px] rounded-br-[10px] '>
                <div className="mb-2.5 flex justify-between">
                    <p className='color-gray text-xs font-semibold'> who viewed you</p>
                    <p className='font-bold text-xs text-blue-300 mb-[10px]'>2345</p>
                </div>
                <div className='mb-2.5 flex justify-between'>
                    <p className='text-xs font-semibold'> views on post</p>
                    <p className='text-xs font-bold text-blue-300 mb-[10px]'>2345</p>
                </div>

            </div>
            <div className='text-left p-2.5 bg-white border-[1px] rounded-[10px] mt-2.5'>
                <p className='text-[13px] pb-2.5'>Recent</p>
                {recentItems('reactjs')}
                {recentItems('programming')}
                {recentItems('softwareengineering')}
                {recentItems('design')}
                {recentItems('developer')}
            </div>
        </div>
    )
}