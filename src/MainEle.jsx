import { useState , useRef , useEffect } from "react"

export default function MainEle(){
    const [hour,setHour] = useState(0)
    const [min,setMin] = useState(0)
    const [sec,setSec] = useState(0)
    const [ms,setMs] = useState(0)
    let intervalId = useRef(null);

    useEffect(()=>{
        if(ms>=1000){
            setSec(prevSec=>prevSec+1)
            setMs(0)
        }
        if(sec>=60){
            setMin(prevMin=>prevMin+1)
            setSec(0)
        }
        if(min>=60){
            setHour(prevHour=>prevHour+1)
            setMin(0)
        }
    },[ms,sec,min,hour])

    function startTimer(){
        setMs(prevMs => prevMs + 10)
    }

    function start(){
        if(intervalId.current == null){
            intervalId.current = setInterval(startTimer,10)
        }
    }

    function stop(){
        if(intervalId.current!=null){
            clearInterval(intervalId.current)
        }
    }

    function reset(){
        stop()
        setHour(0)
        setMin(0)
        setSec(0)
        setMs(0)
    }

    return(
        <div className="bg-gradient-to-r from-blue-950 to-slate-800 p-2 m-2 rounded-xl border-2 border-solid border-white mt-16">
            <h1 className="text-center text-2xl">
                {String(hour).padStart(2,"0")} : {String(min).padStart(2,"0")} : {String(sec).padStart(2,"0")} : {String(ms).padStart(2,"0")} 
            </h1>
            <div className="flex justify-evenly p-2">
                <button className="border-2 border-solid border-white rounded-lg text-center text-white hover:opacity-70 cursor-pointer bg-green-500 p-3" onClick={start}>
                    Start
                </button>
                <button className="border-2 border-solid border-white rounded-lg text-center text-white hover:opacity-70 cursor-pointer bg-red-500 p-3" onClick={stop}>
                    Stop
                </button>
                <button className="border-2 border-solid border-white rounded-lg text-center text-white hover:opacity-70 cursor-pointer bg-blue-500 p-3" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    )
}