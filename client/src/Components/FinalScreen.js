import { useDispatch, useSelector } from "react-redux"
import "../css/questions.css"
import { useNavigate } from "react-router-dom";
import { setScore } from "../Redux/Reducers/QuizReducer";
import CircularProgress from '@mui/joy/CircularProgress';

const capitalizeFirst = str => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  };

function FinalScreen() {
    const user = JSON.parse(localStorage.getItem('user'))
    const { score, amount_of_question } = useSelector(state => state.QuizRedux)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleBackTo = () => {
        dispatch(setScore())
        navigate("/profile")
    }

  return (
    <div>
        <div className='quest'>
            <h2>{capitalizeFirst(user?.username)}, your Final Score is :</h2>
            <CircularProgress determinate value={score*10} sx={{
                    "--CircularProgress-size": "120px"
                }}> 
                {score} / {amount_of_question}
            </CircularProgress>
            <button onClick={handleBackTo}>Back to Categories</button>
        </div>
    </div>
  )
}

export default FinalScreen
