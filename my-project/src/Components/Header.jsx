import { HeaderList } from "./HeaderList";
import '../CSS/header.css'
import PageApp from "./Page2/PageApp";
import { useContext, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import { useFavouriteStore } from "../favouriteStore";

let headerListFirstLine = [['Անհատներին', '/'], ['Բիզնես', '/business'], ['E-shop', '/eshop']]
let headerListLastLine = [ ['Հայ', '/'], ['Рус', '/'], ['Eng', '/'], ['Անձնական գրասենյակ', '/']]




export function Header(){
    const liked = useFavouriteStore((state) => state.favourites);
    
    useEffect(() => {
        localStorage.setItem("liked", JSON.stringify(liked));
    }, [liked])

    return (
        
        <div>
            <header className="flex justify-between bg-sky-950" key={'header'}>
            <div className="flex gap-[50px] ml-[50px]" key={'headerdiv1'}>
                <HeaderList list={JSON.stringify(headerListFirstLine)}/>
                <Link to="/favourites"><div className="flex items-center gap-[10px]"><span className="text-white">{liked.length}</span><i className="fa-solid fa-heart text-red-600"></i></div></Link>
            </div>
            
            <div className="flex gap-[50px] mr-[50px]" key={'headerdiv2'}>
                <HeaderList list={JSON.stringify(headerListLastLine)}/>
            </div>
            </header>

        </div>
    )
}