import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga, { sagaMW } from "./sagas";

const enhancer = applyMiddleware(sagaMW);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

sagaMW.run(rootSaga);

export default store;
