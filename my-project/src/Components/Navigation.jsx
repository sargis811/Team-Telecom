import '../CSS/navigation.css'
import NavList from './NavList.jsx'
let navList = [
    'Սակագներ', 'Ինտերնետ', 'Ծառայություններ', 'Ռոումինգ', 'Առցանց խանութ', 'Առաջարկներ', 
    'Օգնություն'
]

export function Navigation(){
    return (
            <nav className="flex justify-evenly" key={'nav'}>
                <img src="https://www.telecomarmenia.am/img/logo.svg?v=1" alt="logo" />
                <ul className='list-none flex gap-[30px]'>
                    <NavList list={navList}/>
                </ul>
            </nav>
        )
}