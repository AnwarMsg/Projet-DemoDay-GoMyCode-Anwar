import { createSlice} from "@reduxjs/toolkit";

const QuizSlice = createSlice({
    name : "Quizz",
    initialState : {
        question_category: "",
        amount_of_question : 10,
        question_type: "multiple",
        score : 0,
        category_name: ""
    },
    reducers : {
        changeCategory(state, action){
            state.question_category = action.payload.vId;
            state.category_name = action.payload.nom
        },
        changeScore(state){
            state.score += 1;
        },
        setScore(state) {
            state.score = 0;
        }
    }
})
export const {changeCategory, changeScore, setScore} = QuizSlice.actions
export default QuizSlice.reducer