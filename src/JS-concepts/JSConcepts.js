import PromiseConcept from "./PromiseConcept";
import CallBackHell from "./CallbackHell";
import ArrayFunctions from "./ArrayFunctions";
import { Recursion } from "./Recursion.js";

export const JSConcepts = () => {
    PromiseConcept().then((data) => console.log(data)).catch((error) => console.log(error));
    CallBackHell();
    ArrayFunctions();
    Recursion();
}