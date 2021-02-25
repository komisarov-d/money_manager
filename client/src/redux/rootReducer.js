import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { commonReducer } from "./reducers/commonReducer";
import { recordsReducer } from "./reducers/recordsReducer";



const rootReducer = combineReducers({
   auth: authReducer,
   categories: categoriesReducer,
   records: recordsReducer,
   common: commonReducer
})

export const store = createStore(rootReducer, compose(
   applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
