import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./Reducers/LoginReducer";
import RegisterReducer from "./Reducers/RegisterReducer";
import QuizReducer from "./Reducers/QuizReducer";

const store = configureStore({
    reducer : {
        LoginRedux : LoginReducer,
        RegisterRedux : RegisterReducer,
        QuizRedux : QuizReducer
    }
})

export default store