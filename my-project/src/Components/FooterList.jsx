import { Link } from "react-router-dom"

export default function FooterList({list}){
    return(
        list.map((li, index) => {
            return (li[1] ? <Link to={'/teamPay'}><p className="text-[lightGray] text-[12px]" key={li[0] + index}>{li[0]}</p></Link> : <p className="text-[lightGray] text-[12px]" key={li[0] + index}>{li[0]}</p>)
        })
    )
}