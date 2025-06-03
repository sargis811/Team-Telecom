import { Link } from "react-router-dom"

export function HeaderList({list}){
    return(
        JSON.parse(list).map((li) => {
            return <Link to={li[1]} key={li[0] + 'link'}><p key={li[0]} className="text-[white]">{li[0]}</p></Link>
        })
    )
}