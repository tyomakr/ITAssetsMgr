import {CREATE_EMPLOYEE, GET_EMPLOYEES, GET_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE} from "../actions/employeeActions";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_EMPLOYEE:
            return {...state, [action.payload.id]: action.payload };
        case GET_EMPLOYEE:
            return {...state, [action.payload.id]: action.payload };
        case UPDATE_EMPLOYEE:
            return {...state, [action.payload.id]: action.payload };
        case DELETE_EMPLOYEE:
            return { ...state, [action.payload]: undefined };
        case GET_EMPLOYEES:
            let newEmployeesArrayObject = {};
            action.payload.forEach(employee => {
                newEmployeesArrayObject = {
                    ...newEmployeesArrayObject,
                    [employee.id]: employee
                };
            });
            return { ...state, ...newEmployeesArrayObject };
        default:
            return state;
    }
}