// import backendApi from "../../services/backendApis/backendAssetsApi";
import backendReportsApi from "../../services/backendApis/backendApi";
import history from "../../components/history";

export const CREATE_ASSET = 'CREATE_ASSET';
export const GET_ASSET = 'GET_ASSET';
export const GET_ASSETS = 'GET_ASSETS';
export const UPDATE_ASSET = 'UPDATE_ASSET';
export const DELETE_ASSET = 'DELETE_ASSET';


export const getAssetsAction = () => async dispatch => {
    const response = await backendReportsApi.getAssetsData().get(`/assets/all`);
    dispatch({
        type: GET_ASSETS,
        payload: response.data
    });
};

export const getAssetAction = id => async dispatch => {
    const response = await backendReportsApi.getAssetsData().get(`/assets/${id}`);
    dispatch({
        type: GET_ASSET,
        payload: response.data
    });
};

export const createAssetAction = (formValues) => async (dispatch) => {
    const response = await backendReportsApi.getAssetsData().post('/assets', { ...formValues });
    dispatch({
        type: CREATE_ASSET,
        payload: response.data
    });
};

export const updateAssetAction = (id, formValues) => async (dispatch) => {
    const response = await backendReportsApi.getAssetsData().put(`/assets/${id}`, {...formValues });
    dispatch({
        type: UPDATE_ASSET,
        payload: response.data
    });
};

export const deleteAssetAction = id => async dispatch => {
    await backendReportsApi.getAssetsData().delete(`/assets/${id}`);
    dispatch({
        type: DELETE_ASSET,
        payload: id
    });
    history.push('/assets/');
};