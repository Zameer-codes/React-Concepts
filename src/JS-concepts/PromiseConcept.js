
const PromiseConcept = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Promise resolve concept");
            // reject("Promise reject concept");
        },2000);
    })
}

export default PromiseConcept;