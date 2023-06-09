import { useState } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../Header/Header";
import { Button } from "@mui/material/";
import './Understanding.css'

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
        <Header/>
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
            <Button id='nextBtn'type='submit'>NEXT</Button>
        </form>
        <p>
            <Link to="/review">Review your information</Link>
        </p>
    </div>
    )
}

export default Understanding;