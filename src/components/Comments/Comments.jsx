import { useState } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Comments(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [gaugeComments, setGaugeComments] = useState('');

    const submitComments = ()=>{
        //dispatch comments to the store
        dispatch({type: 'COMMENTS', payload:gaugeComments});
        // TODO: put the history part here to move to the next slide
        history.push('/feedback');
    }

    return(
        <div>
            <h1>Any comments you want to leave?</h1>
            <p>Comments</p>
            <form onSubmit={submitComments}>
                <input 
                type='number'
                required
                min={1}
                max={5}
                onChange={(event)=>setGaugeComments(event.target.value)}
                />
                <button type='submit'>NEXT</button>
            </form>
        </div>
    )
}

export default Comments;