import { HeaderList } from "./HeaderList";
import '../CSS/header.css'
import PageApp from "./Page2/PageApp";
import { UserContext } from "./NewsSlider";
import { useContext } from "react";

let headerListFirstLine = [['Անհատներին', '/'], ['Բիզնես', '/business'], ['E-shop', '/eshop']]
let headerListLastLine = [ ['Հայ', '/'], ['Рус', '/'], ['Eng', '/'], ['Անձնական գրասենյակ', '/']]




export function Header(){
    let context = useContext(UserContext)
    console.log(context);
    return (
        
        <div>
            <header className="flex justify-between bg-sky-950" key={'header'}>
            <div className="flex gap-[50px] ml-[50px]" key={'headerdiv1'}>
                <HeaderList list={JSON.stringify(headerListFirstLine)}/>
                <div className="flex items-center gap-[10px]"><span className="text-white">{(useContext(UserContext).liked).length}</span><i className="fa-solid fa-heart text-red-600"></i></div>
            </div>
            
            <div className="flex gap-[50px] mr-[50px]" key={'headerdiv2'}>
                <HeaderList list={JSON.stringify(headerListLastLine)}/>
            </div>
            </header>

        </div>
    )
}