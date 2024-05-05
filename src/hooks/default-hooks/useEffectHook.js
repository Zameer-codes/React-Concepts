import { useEffect } from 'react'

const useEffectHook = () => {
    const dependencyVariable = "update the value";
    useEffect(()=>{
        console.log("ComponentDidMount phase");
    },[]);

    useEffect(()=>{
        console.log("ComponentDidUpdate phase");
    },[dependencyVariable]);

    useEffect(()=>{
        return () => {
            //I should return function for cleanup code not a statement
            console.log("ComponentUnMount phase");
        }
    },[]);
}

export default useEffectHook;