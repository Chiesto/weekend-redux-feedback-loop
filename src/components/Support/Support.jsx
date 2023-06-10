import { useState } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from '../Header/Header'
function Support (){
    const dispatch = useDispatch();
    const history = useHistory();

    const [gaugeSupport, setGaugeSupport] = useState(0);

    const submitSupport = ()=>{
        //dispatch support to the store
        dispatch({type: 'SUPPORT', payload:gaugeSupport});
        // TODO: put the history part here to move to the next slide
        history.push('/comments');
    }


    return(
    <div>
        <Header/>
        <h1>How well are you being supported?</h1>
        <p>Support?</p>
        <form onSubmit={submitSupport}>
            <input 
            type='number'
            required
            min={1}
            max={5}
            onChange={(event)=>setGaugeSupport(event.target.value)}
            />
            <button type='submit'>NEXT</button>
        </form>
    </div>
    )
}

export default Support;
