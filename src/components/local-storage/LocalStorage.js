import { useState } from "react";
import { useLocalStorage } from "../../hooks/custom-hooks/UseLocalStorage";
import "./LocalStorage.css";

const LocalStorage = () => {
    const [getYourItem, setYourItem, removeYourItem] = useLocalStorage();
    const [keyState, setKeyState] = useState("");
    const [valueState, setValueState] = useState("");
    const [data , setData] = useState({key:"", value:""});

    const handleGetItem = () =>{
        let value = getYourItem(keyState);
        setData({key:keyState, value:value});
    }

    const handleSetItem = () => {
        setYourItem(keyState, valueState);
    }
    return (
        <div>
            <span className="inlineToBlock">useLocalStorage Hook</span>
            <div className="inlineToBlock">
                <input placeholder="enter key"></input>
                <button>get</button>
                <button>remove</button>
            </div>
            <div>
                <input placeholder="enter value"></input>
                <button>set</button>
            </div>
        </div>
    )
}

export default LocalStorage;