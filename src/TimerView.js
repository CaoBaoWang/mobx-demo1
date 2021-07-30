import {observer} from "mobx-react";
import {useEffect} from "react";


const TimerView = ({ timer }) => {

    useEffect(()=>{
        setInterval(()=> {
            timer.increase()
        },1000)

    }, [])

    return (

        <button  onClick={()=> timer.reset()} >已过秒数: {timer.secondsPassed}</button>
    )
}

export default observer(TimerView)