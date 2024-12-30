export function InputOptions({Icon, title, color}) {
    return (
        <div className='flex items-center space-x-1.5 cursor-pointer hover:bg-gray-100 rounded-[5px] p-2.5'>
            <Icon style={{color: color}}></Icon>
            <h4 className='text-gray text-[13px] ml-[5px]'>{title}</h4>
        </div>
    )
}