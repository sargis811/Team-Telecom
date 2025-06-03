
import Rounds from "./Rounds.jsx";

export default function InputAbout(){
    return (<div className="w-[100%] bg-sky-900 flex flex-col items-center  mt-[100px] p-[30px]">
        <div className="flex flex-col items-center justify-center g-[20px] w-[500px]">
            <h1 className="text-white text-center text-[30px] text-[bolder]">Տեղափոխվե՛ք Team Ձեր համարով</h1>
            <p className="text-center text-[white]">Դարձե՛ք Team բաժանորդ, օգտվեք ցանցի առավելություններից` պահելով Ձեր բջջային հեռախոսի համարը:</p>
            <form className="flex flex-col items-center justify-center w-[100%]">
                <div className="flex flex-col w-[600px] gap-[20px] mt-[50px]">
                    <div className="flex gap-[20px]">
                        <div>
                            <label className="block text-[12px] text-white" htmlFor="num1">Տեղափոխվող համար (0XXYYYYYY ֆորմատով)*</label>
                            <input type="number" id="num1" className="w-[250px] h-[30px] rounded-[20px]" />
                        </div>
                        <div>
                            <label className="block text-[12px] text-white" htmlFor="num2">Անուն Ազգանուն*</label>
                            <input type="text" id="num2" className="w-[250px] h-[30px] rounded-[20px]" />
                        </div>
                    </div>
                    <div className="flex gap-[20px]">
                        <div>
                            <label className="block text-[12px] text-white" htmlFor="num3">Կազմակերպություն*</label>
                            <input type="text" id="num3" className="w-[250px] h-[30px] rounded-[20px]" />
                        </div>
                        <div>
                            <label className="block text-[12px] text-white" htmlFor="num4">Կոնտակտային համար*</label>
                            <input type="number" id="num4" className="w-[250px] h-[30px] rounded-[20px]" />
                        </div>
                    </div>
                </div>
                <button className="bg-red-700 text-white w-[150px] h-[30px] rounded-[30px] mt-[30px] mr-[50px]">Միանալ</button>
            </form>
        </div>
        <div className="flex flex-col items-center">
            <h1 className="text-white text-center text-[30px] text-[bolder] mt-[30px]">Վիրտուալ ԱՀԿ</h1>
            <Rounds/>
            <button className="bg-white text-red-800 w-[150px] h-[30px] rounded-[30px] mt-[30px]">Մանրամասն</button>
        </div>
    </div>)
}