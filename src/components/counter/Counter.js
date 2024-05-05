import { useEffect, useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     console.log("Mounted");
    // },[]);
    return(
        <>
            <h1>Counter {count}</h1>
            <button onClick={()=>setCount(prev => prev+1)}>+</button>
            <button onClick={()=>setCount(prev => prev-1)}>-</button>
        </>
    )
}

export default Counter;