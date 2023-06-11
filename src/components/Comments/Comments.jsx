import { useState } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from '../Header/Header'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Comments(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [gaugeComments, setGaugeComments] = useState('');

    const submitComments = ()=>{
        //dispatch comments to the store
        dispatch({type: 'COMMENTS', payload:gaugeComments});
        // TODO: put the history part here to move to the next slide
        history.push('/review');
    }

    return(
        <div>
            <Header/>
            <h1>Any comments you want to leave?</h1>
            <p>Comments</p>
            <form onSubmit={submitComments}>
                <input 
                type='text'
                onChange={(event)=>setGaugeComments(event.target.value)}
                />
                <button type='submit'>NEXT</button>
            </form>
            <p>
                <Link to="/review">Review your information</Link>
            </p>
        </div>
    )
}

export default Comments;