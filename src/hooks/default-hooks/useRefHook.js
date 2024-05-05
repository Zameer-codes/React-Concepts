import React, { useRef } from 'react'

export function UseRefHook() {
    const inputBoxRef = useRef();
    
    return (
        <>
            <div>useRefHook</div>
            <input ref = {inputBoxRef}/>
            <button onClick={()=>inputBoxRef.current.focus()}>Focus</button>
        </>
    )
}
