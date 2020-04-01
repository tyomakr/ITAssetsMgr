import axios from 'axios';

const baseUrlApi = "http://localhost:8080/api";
const baseUrlAssetService = baseUrlApi + "/assets-service/v1/";

export default axios.create({
    baseURL: baseUrlAssetService
})