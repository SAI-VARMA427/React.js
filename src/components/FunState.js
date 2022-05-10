import {useState} from 'react';

function FunState(){

    const [val, setVal] = useState('virat')
    const fun = () => {
        setVal('Maxwell')
    }

    return(
        <>
        <h1>Next Batsman:{val}</h1>
        <button onClick={fun}>Next</button>
        </>
    )
}

function xyz(val){
    alert(val)
}
 
export default FunState;