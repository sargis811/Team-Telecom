export default function JoinUs(){
    return(
        <div className="bg-sky-950 w-[100vw] h-[300px] flex items-center justify-center gap-[30px] flex-col mt-[50px]" key='joinUsDiv' >
            <h1 key={'joinH1'} className="font-[arial] text-[white] text-[30px] " >Դարձեք Team բաժանորդ</h1>
            <p key={'joinP'} className="text-[white]">Միացե՛ք մեզ ձեր համարվ և օգտվեք Team-ի բոլոր առավելություններից:</p>
            <button key={'joinButton'} className="text-[white] bg-[red] p-[10px] rounded-[30px]">Միանալ</button>
        </div>
    )
}