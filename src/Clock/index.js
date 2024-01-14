import { useEffect, useState } from "react"

export const Clock=()=>{
const [data, setData] =useState(new Date());

useEffect(()=>{
const intervalID = setInterval(()=>{
setData(new Date())
},1000)
return()=>{
    clearInterval(intervalID)
}

},[])

    return(
        <div>
            Dzisiaj jest {""}
            {data.toLocaleString(undefined,{
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                
            })}
        </div>
    )
}