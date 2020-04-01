import backendApi from "../../services/backendApis/backendReportsApi";

export const CREATE_REPORT = 'CREATE_REPORT';

export const createReportAction = (formValues) => async (dispatch) => {
    const response = await backendApi.requestReportData().post('/reports/request', { ...formValues });
    return dispatch({
        type: CREATE_REPORT,
        payload: response.data
    });
};