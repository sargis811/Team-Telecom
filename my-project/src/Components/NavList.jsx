
export default function NavList({list}){
    return(
        list.map((li) => {
            return <li key={li} className="text-[15px]">{li}</li>
        })
    )
}