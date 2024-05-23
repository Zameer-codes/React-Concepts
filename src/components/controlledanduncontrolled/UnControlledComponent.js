import React, { useRef } from 'react'

const UnControlledComponent = () => {
    const inputRef = useRef(null);
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <div>UnControlledComponent</div>
            <form onSubmit={handleSubmit}>
                <input type="input" ref={inputRef} />
                <input type='submit'/>
            </form>
        </div>
    )
}

export default UnControlledComponent;