import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import authReducer from "./AuthReducer/reducer";
import employeeReducer from "./EmployeeReducer/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({ auth: authReducer, employee: employeeReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);