import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import './Feedback.css'

function Feedback(){
    const history = useHistory();
    const dispatch = useDispatch();


    const formComplete = ()=>{
        //resetting the store for the next submission
        dispatch({type: 'RESET'});
        //bringing the user back to the first page for a 
        // new submission
        history.push('/');
    }


    return(
        <div className="page">
            <div id="feedback">
                <h1>Feedback!</h1>
            </div>
            <div id="thank-you">
                <h1>Thank You!</h1>
                <Button variant='contained' onClick={formComplete}>Leave New Feedback</Button>
            </div>
        </div>
    )
}

export default Feedback;