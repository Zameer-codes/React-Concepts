import React, { useState } from 'react'

function ControlledComponent() {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    }
    return (
        <div>
            <div>ControlledComponent</div>
            <form onSubmit={handleSubmit}>
                <input type='input' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <input type='submit' />
            </form>
        </div>
    )
}

export default ControlledComponent;