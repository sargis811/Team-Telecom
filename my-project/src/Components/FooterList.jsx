export default function FooterList({list}){
    return(
        list.map((li, index) => {
            return <p className="text-[lightGray] text-[12px]" key={li + index}>{li}</p>
        })
    )
}