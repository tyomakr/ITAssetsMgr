import axios from 'axios';

const baseUrlApi = "http://localhost:8080/api";
const baseUrlReportService = baseUrlApi + "/reports-service/v1/";
const baseUrlReportPdfCreator = baseUrlReportService + "reports/pdf";

class BackendReportsApi {

    requestReportData() {
        return axios.create({ baseURL: baseUrlReportService})
    }


    createPdfReport(data) {
        axios.post(baseUrlReportPdfCreator,
            {
                bodyData: data
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/pdf'
                },
                responseType: "blob"
            }).then(response => {
                const blob = new Blob([response.data], {type: 'application/pdf'});
                const objectUrl = window.URL.createObjectURL(blob);
                window.open(objectUrl)
        }).catch((error => {alert(error)}));


    }
}

export default new BackendReportsApi();