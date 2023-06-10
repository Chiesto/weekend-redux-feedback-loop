import { useState } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Feeling(){
    const dispatch = useDispatch();
    const history = useHistory();
    //local state to track how the user is feeling today
    const [howFeeling, setHowFeeling] = useState(0);

    const submitFeeling = () =>{
        //dispatch our feeling to the store
        dispatch({type: 'FEELING', payload:howFeeling})
        // TODO: put the history part here to move to the next slide
        history.push('/understanding')
    }

    return(
    <div>
        <h1>How are you feeling today?</h1>
        <p>Feeling?</p>
        <form onSubmit={submitFeeling}>
            <input 
            type='number'
            required
            min={1}
            max={5}
            onChange={(event)=>setHowFeeling(event.target.value)}
            />
            <button type='submit'>NEXT</button>
        </form>
    </div>
    )
}
export default Feeling;