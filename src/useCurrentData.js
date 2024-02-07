import { useState, useEffect } from "react";

export const useCurrentData = ()=>{
    const [data, setData] = useState(new Date());

    useEffect(()=>{
        const intervalID = setInterval(() => {
            setData(new Date())
        }, 1000)
    
        return()=>{
            clearInterval(intervalID)
        }
    },[])
return data;
}