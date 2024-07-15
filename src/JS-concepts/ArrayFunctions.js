import React from 'react'

function ArrayFunctions() {
    arrayOps();
    arrayObj();
    CreateArrayWithSelectedFields();
    return (
        <div>ArrayFunctions</div>
    )
}

export default ArrayFunctions;

const arrayOps = () => {
    let arrayList = [1,2,3,4,5,6];
    const reduction = arrayList.reduce((acc, curr)=> acc+curr , 0);
    const filteration = arrayList.filter(value => value%2==0);

    console.log(reduction); 
    console.log(filteration);
    console.log(arrayList);
    arrayList.push(4);
} 

function arrayObj(){
    const array = {
        'one':1,
        'two':2
    }
    array.three = 3;
    array['four'] = 4;
    array.one = '01';

    console.log(array.three);
    console.log(array['three']);
    delete array.three;

    const { one, two} = array;

    if('one' in array){
        console.log("one exists in the array");
    }

    for (let key in array){
        console.log(key);
    }

    const array2 = {
        1: 'one',
        2: 'two'
    }

    const mergedArray = {...array, ...array2}; // spread operator
    console.log(mergedArray);

    const {four, ...restElements} = mergedArray;

    console.log(four);
    console.log(restElements);
}

function CreateArrayWithSelectedFields(){

    let originalArray = [
        {
            "prop1" : "value1",
            "nestedProp1":{
                "prop1" : "value1",
                "prop2" : "value2"
            },
            "prop3" : "value3"
        },
        {
            "prop1" : "value1",
            "nestedProp1":{
                "prop1" : "value1",
                "prop2" : "value2"
            },
            "prop3" : "value3",
            "prop4" : "value4"
        },
        {
            "prop1" : "value1",
            "nestedProp1":{
                "prop1" : "value1",
                "prop2" : "value2"
            },
            "prop3" : "value3",
            "prop4" : "value4",
            "prop5" : "value5"
        }
    ]

    // console.log(originalArray[0].prop1);
    let selectiveArray = originalArray.map(({prop1, nestedProp1, prop3}) => ({prop1, nestedProp1, prop3}))
    console.log(selectiveArray);

    let selectiveArrayWithoutDestructure = originalArray.map(item => {
        return{
            "prop1":item.prop1,
            "nestedProp1" : item.nestedProp1,
            "prop3" : item.prop3
        }
    });
    console.log(selectiveArrayWithoutDestructure);
}