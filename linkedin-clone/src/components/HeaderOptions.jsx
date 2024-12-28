import { Avatar } from "@mui/material";

export function HeaderOptions({avatar, Icon, title}){
    return (
        <div className="flex flex-col items-center mr-5 cursor-pointer group hover:text-black">
          {Icon && <Icon className="object-contain h-6 w-6 text-gray-400 group-hover:text-black" />}
          {avatar && <Avatar className="text-gray-400 group-hover:text-black" src={avatar}/>}
          <h3 className="text-gray-400 group-hover:text-black mt-2 text-xs font-normal">{title}</h3>
        </div>
      );
      
}