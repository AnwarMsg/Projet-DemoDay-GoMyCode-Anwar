import useAxios from '../hooks/useAxios';
import "../css/questions.css"
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeScore } from '../Redux/Reducers/QuizReducer';
import { decode } from 'html-entities'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

function Questions() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { question_category, amount_of_question, question_type, category_name, score} = useSelector(state => state.QuizRedux)
    let apiUrl = `/api.php?amount=${amount_of_question}&type=${question_type}`
    if(question_category){
        apiUrl = apiUrl.concat(`&category=${question_category}`)
    }

    const { response, loading } = useAxios({ url: apiUrl})
    const [questionIndex, setQuestionIndex] = useState(0)
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if(response?.results.length){
            const question = response.results[questionIndex];
            let answers = [...question.incorrect_answers];
            answers.splice(
                getRandomInt(question.incorrect_answers.length),
                0,
                question.correct_answer
            );
            setOptions(answers)
        }
    }, [response, questionIndex])

    if(loading) {
        return (
            <div>
                <div className='quest'>
                    <h2>Please wait for a moment ...</h2>
                    <CircularProgress />
                </div>
            </div>
        )
    }

    const handleClickAnswer = (e) => {
        const question = response.results[questionIndex];
        if(e.target.textContent === question.correct_answer) {
            dispatch(changeScore())
        }

        if(questionIndex + 1 < response.results.length) {
            if(e.target.textContent === question.correct_answer) {
                MySwal.fire({
                    title: <strong>Good job!</strong>,
                    icon: 'success'
                  })
            } else {
                MySwal.fire({
                    title: <strong>False!</strong>,
                    html: <i>The correct answer is : {decode(question.correct_answer)}</i>,
                    icon: 'error'
                  })
            }
            setQuestionIndex(questionIndex + 1)
        } else {
            if(e.target.textContent === question.correct_answer) {
                MySwal.fire({
                    title: <strong>Good job!</strong>,
                    icon: 'success'
                  })
            } else {
                MySwal.fire({
                    title: <strong>False!</strong>,
                    html: <i>The correct answer is : {decode(question.correct_answer)}</i>,
                    icon: 'error'
                  })
            }
            navigate("/final")
        }
    }

  return (
    <div>
        <div className='quest'>
            {category_name ? <h2>{category_name}</h2> : ""}
            <h3>Question {questionIndex + 1}</h3>
            <p className='ml'>{decode(response.results[questionIndex].question)}</p>
            {options.map((data, id) => (
                <button className='btn' key={id} onClick={handleClickAnswer}>{decode(data)}</button>
            ))}
            <p>{score} / {amount_of_question}</p> 
            <p>Choose the correct answer.</p>
        </div>
    </div>
  )
}

export default Questions
