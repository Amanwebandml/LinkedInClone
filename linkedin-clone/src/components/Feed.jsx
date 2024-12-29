import CreateIcon from '@mui/icons-material/Create';
export function Feed(){
    return (
        <div className="flex-[0.6]">
            <div className="flex justify-evenly pb-[20px] p-[10px] rounded-[10px] bg-white mb-[20px]">
                <div className=''>
                    <CreateIcon></CreateIcon>
                    <form >
                        <input type="text" />
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}