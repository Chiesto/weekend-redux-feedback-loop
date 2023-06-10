import { useState } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
function Understanding (){
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [gaugeUnderstanding, setGaugeUnderstanding] = useState(0);

    const submitUnderstanding = ()=>{
        //dispatch our understanding to the store
        dispatch({type: 'UNDERSTANDING', payload:gaugeUnderstanding})
        // TODO: put the history part here to move to the next slide
        history.push('/support')
    }

    return (
    <div>
        <h1>How well are you understanding the content?</h1>
        <p>Understanding?</p>
        <form onSubmit={submitUnderstanding}>
            <input 
            type='number'
            required
            min={1}
            max={5}
            onChange={(event)=>setGaugeUnderstanding(event.target.value)}
            />
            <button type='submit'>NEXT</button>
        </form>
    </div>
    )
}

export default Understanding;