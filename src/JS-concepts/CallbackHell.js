
function CallBackHell(){
    console.log("callback hell concept");
    Func1(true);
}

function Func1(condition){
    if(condition){
        console.log("chained callback halted");
    }
    else{
        function Func2(condition){
            if(condition){
                console.log("chained callback halted");
            }
            //else{
                //implement nested callbacks...
            //}
        }
        Func2(true);
    }
}

export default CallBackHell;