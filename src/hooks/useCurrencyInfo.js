import { useEffect,useState } from "react";


function useCurrencyInfo(Currency){
    const[data,setData]= useState(0);

    useEffect(()=>{
        fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${Currency}.json")
        .then((Res)=>Response.json())
        .then((res)=>setData(res[Currency]))
 },[Currency])
 
 
 return data;
}

export default useCurrencyInfo;