import React from "react";
import {Helmet} from "react-helmet/es/Helmet";
import ReportsForm from "../fragments/reports/ReportsForm";
import {connect} from "react-redux";
import {createReportAction} from "../../redux/actions/reportActions";
import backendReportsApi from "../../services/backendApis/backendApi";

class ReportsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resultAssets: [],
            isShowSearchResult: false,
        };
        this.getPdfReport = this.getPdfReport.bind(this);
    }

    onSubmit = formValues => {
        this.setState({isShowSearchResult: true});

        this.props.createReportAction(formValues)
            .then(response => {
                const resultAssets = response.payload;
                this.setState({resultAssets})
            });
    };

    getPdfReport() {
        backendReportsApi.createPdfReport(this.state.resultAssets);
    };


    render() {
        return (
            <div>
                <Helmet
                    htmlAttributes={{"lang": "ru", "amp": undefined}}
                    title="Отчеты"
                    titleTemplate="Генератор отчетов - %s" />

                <div className="container-fluid">
                    <h3 className="header-section">Отчеты</h3>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <ReportsForm onRenderPropSubmit = {formValues => {this.onSubmit(formValues);}} />
                            </div>
                            {
                                this.state.isShowSearchResult &&
                                <div className="col-sm">

                                    <div>РЕЗУЛЬТАТЫ ПОИСКА</div>
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Модель устройства</th>
                                            <th>Статус</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.resultAssets.map(asset => {
                                            if (asset)
                                                return (
                                                    <tr key={asset.id}>
                                                        <td>{asset.modelName}</td>
                                                        <td>{asset.status}</td>
                                                    </tr>
                                                );
                                            else return null;
                                        })}
                                        </tbody>
                                    </table>
                                    <div className="text-right">
                                        <button type="button" className="btn-sm btn-outline-secondary" onClick={this.getPdfReport}>Создать PDF</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {asset: state.asset};
};

export default connect(mapStateToProps, {createReportAction})(ReportsPage);