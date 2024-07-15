

// var is functional scope
// let and const are block scoped, it can be accessible within the block it is defined

export function VariableDeclarations(){

    function VarKeyword(){
        for(var i=0; i<5; i++){
            console.log(i);
        }
        console.log("outside for loop, i value is",i);
    }
    VarKeyword();

    function LetKeyword(){
        for(let i=0; i<5; i++){
            console.log(i);
        }
        //console.log("outside for loop, i value is",i);  //Reference error : i not defined
    }
    LetKeyword();
}