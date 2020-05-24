import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";
import employeesReducer from "./employeesReducer";
import assetsReducer from "./assetsReducer";
import reportsReducer from "./reportsReducer";

const rootReducer = combineReducers({
    employees: employeesReducer,
    assets: assetsReducer,
    reports: reportsReducer,
    form: formReducer
});


export default rootReducer;