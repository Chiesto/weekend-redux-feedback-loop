import { useSelector } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function ReviewFeedback(){
    const history = useHistory();
    //grabbing my store variables
    const feelings = useSelector(store=>store.feelingToday);
    const understanding = useSelector(store=>store.understandingToday);
    const support = useSelector(store=>store.supportToday);
    const comments = useSelector(store=>store.commentsToday);
    const dataToSend={
        feelings,
        understanding,
        support,
        comments
    }
    //function to submit feedback to the database
    const submitFeedback=()=>{
        axios.post('/feedback', dataToSend)
            .then(response=>{
                console.log('Post function works!');
                history.push('/feedback')
            }).catch(error=>{
                console.log('POST function does NOT work', error);
            })
    }

    return(
        <div>
            <h1>Review Your Feedback</h1>
            <br/>
            <p>Feelings: {feelings}</p>
            <br/>
            <p>Understanding: {understanding}</p>
            <br/>
            <p>Support: {support}</p>
            <br/>
            <p>Comments: {comments}</p>
            <br/>
            <button onClick={submitFeedback}>SUBMIT</button>
        </div>
    )
}

export default ReviewFeedback;