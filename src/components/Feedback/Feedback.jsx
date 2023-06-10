import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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
        <div>
            <div>
                <h1>Feedback!</h1>
            </div>
            <div>
                <h1>Thank You!</h1>
                <button onClick={formComplete}>Leave New Feedback</button>
            </div>
        </div>
    )
}

export default Feedback;