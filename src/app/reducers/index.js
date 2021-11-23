import { combineReducers } from "redux";
import chatReducer from "./chat.reducer";
import userReducer from "./user.reducer";



const rootReducer = combineReducers({
    // срабатывают по очереди
    userSlice: userReducer,
    chatSlice: chatReducer,
})


export default rootReducer;
