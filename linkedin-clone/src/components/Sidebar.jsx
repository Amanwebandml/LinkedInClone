import {Avatar}from '@material-ui/core';


export function Sidebar (){
    return (
        <div className="top-20 position-sticky flex-[0.2] rounded-[10px] text-center h-auto">
            <div className="flex flex-col items-center border-b-0 rounded-tl-[10px] rounded-tr-[10px] border-[1px] border-gray-200 pb-2.5 bg-white">
                <img className= 'mb-[-20px] w-full h-[60px] rounded-tl-[10px] rounded-tr-[10px] object-cover' src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" alt="" />
                <Avatar className='mb-2.5'></Avatar>
                <h2>Aman Kr Singh</h2>
                <h4>amankrsingh0220@gmail.com</h4>
            </div>
            <div className='mid'>
                <div className="mb-2.5 flex justify-between">
                    <p className='color-gray'> who viewed you</p>
                    <p className=''>2345</p>
                </div>
                <div className='mb-2.5 flex justify-between'>
                    <p> views on post</p>
                    <p className=''>2345</p>
                </div>

            </div>
            <div className='bottom'>
                <p>Recent</p>
                <p>Items</p>
            </div>
        </div>
    )
}