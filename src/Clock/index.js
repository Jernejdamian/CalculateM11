import { useCurrentData } from "../useCurrentData";

const formDate =(data)=>{
    data.toLocaleString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
}


export const Clock = () => {
    
const data = useCurrentData();

    return (
        <div>
            Dzisiaj jest {" "}
            {formDate(data)}
        </div>
    )
}