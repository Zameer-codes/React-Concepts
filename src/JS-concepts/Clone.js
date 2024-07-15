
export function CloneObject(){
    ShallowCopy();
    DeepCopy();
}

function ShallowCopy(){
    let originalObject = {
        "prop1": "val1",
        "prop2":"val2",
        "nestedProp" : {
            "nestedProp1" : "nestedVal1",
            "nestedProp2" : "nestedVal2"
        }
    }
    
    let shallowCopyObjectMethod = Object.assign({}, originalObject);
    shallowCopyObjectMethod.nestedProp.nestedProp1 = "ObjectMethodUpdatedValue";
    console.log(originalObject);
    console.log(shallowCopyObjectMethod);

    let shallowCopySpreadMethod = {...originalObject};
    shallowCopySpreadMethod.nestedProp.nestedProp2 = "SpreadMethodUpdatedValue";
    console.log(originalObject);
    console.log(shallowCopySpreadMethod);
}

function DeepCopy(){
    let originalObject = {
        "prop1": "val1",
        "prop2":"val2",
        "nestedProp" : {
            "nestedProp1" : "nestedVal1",
            "nestedProp2" : "nestedVal2"
        }
    }
    
   let deepCopyJsonMethod = JSON.parse(JSON.stringify(originalObject));
   deepCopyJsonMethod.nestedProp.nestedProp1 = "JsonMethodUpdatedValue";
   console.log(originalObject);
   console.log(deepCopyJsonMethod);
}