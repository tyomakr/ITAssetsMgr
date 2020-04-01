import backendApi from "../../services/backendApis/backendAssetsApi";
import history from "../../components/history";

export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const GET_EMPLOYEE = 'GET_EMPLOYEE';
export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';


export const getEmployeesAction = () => async dispatch => {
    const response = await backendApi.get(`/employees`);
    dispatch({
        type: GET_EMPLOYEES,
        payload: response.data
    });
};

export const getEmployeeAction = id => async dispatch => {
    const response = await backendApi.get(`/employees/${id}`);
    dispatch({
        type: GET_EMPLOYEE,
        payload: response.data
    });
};

export const createEmployeeAction = (formValues) => async (dispatch) => {
    const response = await backendApi.post('/employees', { ...formValues });
    dispatch({
        type: CREATE_EMPLOYEE,
        payload: response.data
    });
};

export const updateEmployeeAction = (id, formValues) => async (dispatch) => {
    const response = await backendApi.put(`/employees/${id}`, {...formValues });
    dispatch({
        type: UPDATE_EMPLOYEE,
        payload: response.data
    });
};

export const deleteEmployeeAction = id => async dispatch => {
    await backendApi.delete(`/employees/${id}`);
    dispatch({
        type: DELETE_EMPLOYEE,
        payload: id
    });
    history.push('/employees/');
};