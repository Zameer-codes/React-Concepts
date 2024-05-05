import React, { useMemo, useState } from 'react'

export const UseMemoHook = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    function Increment1(){
        setCount1(prev => prev+1);
    }

    function Increment2(){
        setCount2(prev => prev+1);
    }

    const isEven = useMemo(() => {
        let i=0;
        while(i<100000000)i++;
        return count1 % 2 === 0;
    },[count1]);

    // const isEven = () => {
    //     let i=0;
    //     while(i<100000000)i++;
    //     return count1 % 2 === 0;
    // }
  return (
    <div>
        <h1>useMemoHook</h1>
        <p>Counter1</p>
        <button onClick={()=>Increment1()}>{count1} +</button>
        {isEven?"Even":"Odd"}
        <p>Counter2</p>
        <button onClick={()=>Increment2()}>{count2} +</button>        
    </div>
  )
}