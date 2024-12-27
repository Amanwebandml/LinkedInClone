import SearchIcon from '@mui/icons-material/Search';
export function Header (){
    return (
        <div className='flex'>
            <div className="flex header__left">
                <img className = "object-contain h-10" src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt=""  />
                <div className="p-2">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                right div
            </div>
        </div>
    )
}