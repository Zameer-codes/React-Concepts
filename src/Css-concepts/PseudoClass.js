import './PseudoClass.css';

export const PseudoClassConcepts =  () => {
    return(
        <>
        <NthChildConcept/>
        </>
    )
}

const NthChildConcept = () => {
    return(
        <div className='nthChildCss'>
            <span>even</span>
            <span>odd</span>
            <span>even</span>
            <span>odd</span>
            <span>even</span>
            <span>odd</span>
            <span>even</span>
            <span>odd</span>
        </div>
    )
}