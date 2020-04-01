import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {getEmployeesAction} from "../../../redux/actions/employeeActions";


class ReportsForm extends React.Component {

    componentDidMount() {
        this.props.getEmployeesAction();
    }

    

    onSubmit = formValues => {
        formValues.employee = this.props.employees.find(e=> e.id === formValues.employee);
        this.props.onRenderPropSubmit(formValues);
    };

    render() {

        const {
            assetTypeValue,
            pristine,
            reset,
            submitting,
        } = this.props;


        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

                <div className="form-group">
                    <Field component={"select"} className="form-control" name="assetType" aria-describedby="assetTypeHelp">
                        <option />
                        <option value={"ALL_IN_ONE"}>Моноблок</option>
                        <option value={"NOTEBOOK"}>Ноутбук</option>
                        <option value={"PRINTER"}>Принтер</option>
                    </Field>
                    <small className="form-text text-muted" id="assetTypeHelp">Тип устройства</small>
                </div>

                <div className="form-group">
                    <Field component={"select"} className="form-control" name="status" aria-describedby="statusHelp">
                        <option />
                        <option value={"USE"}>Используется</option>
                        <option value={"IN_STORE"}>На складе</option>
                        <option value={"UNDER_REPAIR"}>На ремонте</option>
                        <option value={"DECOMMISSIONED"}>Списан</option>
                    </Field>
                    <small className="form-text text-muted" id="assetTypeHelp">Статус устройства</small>
                </div>


                <div className="form-group">
                    <Field component={"input"} className="form-control" type="text" name={"modelName"} aria-describedby="modelNameHelp" />
                    <small className="form-text text-muted" id="modelNameHelp">Модель устройства</small>
                </div>

                <div className="form-group">
                    <Field component={"select"} className="form-control" name="employee" aria-describedby="employeeHelp">
                        <option />
                        {this.props.employees.map(employee => {
                            if (employee) {
                                return (
                                    <option key={employee.id} value={employee.id}>{employee.fullName}</option>
                                );
                            }
                            else return null;
                        })}

                    </Field>
                    <small className="form-text text-muted" id="employeeHelp">Сотрудник</small>
                </div>


                <div className="float-right my-sm-3">
                    <button className="btn btn-outline-secondary" type="button" data-toggle="collapse" data-target="#collapseAllFields"
                            aria-expanded="false" aria-controls="collapseAllFields">Еще поля...</button>
                </div>

                <div className="form-group collapse" id="collapseAllFields">
                    <Field component={"input"} className="form-control" type="text" name={"serialNumber"} aria-describedby="serialNumberHelp" />
                    <small className="form-text text-muted" id="serialNumberHelp">Серийный номер устройства</small>
                </div>

                <div className="form-group collapse" id="collapseAllFields">
                    <Field component={"input"} className="form-control" type="text" name={"assetLocation"}
                           aria-describedby="assetLocationHelp"/>
                    <small className="form-text text-muted" id="assetLocationHelp">Расположение</small>
                </div>

                <div className="form-group collapse" id="collapseAllFields">
                    <Field component={"input"} className="form-control" type="text" name={"desc"}
                           aria-describedby="descHelp" />
                    <small className="form-text text-muted" id="descHelp">Краткое описание</small>
                </div>

                <div className="form-group collapse" id="collapseAllFields">
                    <Field component={"input"} className="form-control" type="text" name={"datePurchase"}
                           aria-describedby="datePurchaseHelp" />
                    <small className="form-text text-muted" id="datePurchaseHelp">Дата покупки</small>
                </div>


                {(assetTypeValue === ("NOTEBOOK") || assetTypeValue === ("ALL_IN_ONE")) &&
                <div>
                    <div className="form-group collapse" id="collapseAllFields">
                        <Field component={"input"} className="form-control" type="text" name={"cpu"}
                               aria-describedby="cpuHelp" />
                        <small className="form-text text-muted" id="cpuHelp">CPU</small>
                    </div>

                    <div className="form-group collapse" id="collapseAllFields">
                        <Field component={"input"} className="form-control" type="text" name={"ram"}
                               aria-describedby="ramHelp" />
                        <small className="form-text text-muted" id="ramHelp">RAM</small>
                    </div>

                    <div className="form-group collapse" id="collapseAllFields">
                        <Field component={"input"} className="form-control" type="text" name={"storage"}
                               aria-describedby="storageHelp" />
                        <small className="form-text text-muted" id="storageHelp">Хранилище (HDD / SSD)</small>
                    </div>

                    <div className="form-group collapse" id="collapseAllFields">
                        <Field component={"input"} className="form-control" type="text" name={"videoCard"}
                               aria-describedby="videoCardHelp" />
                        <small className="form-text text-muted" id="videoCardHelp">Видеокарта</small>
                    </div>

                    <div className="form-group collapse" id="collapseAllFields">
                        <Field component={"input"} className="form-control" type="text" name={"macAddr"}
                               aria-describedby="macAddrHelp" />
                        <small className="form-text text-muted" id="macAddrHelp">MAC адрес</small>
                    </div>
                </div>
                }


                {assetTypeValue === "PRINTER" &&
                <div>
                    <div className="form-group collapse" id="collapseAllFields">
                        <Field component={"input"} className="form-control" type="text" name={"printFormat"}
                               aria-describedby="printFormatHelp" />
                        <small className="form-text text-muted" id="printFormatHelp">Максимальный формат печати</small>
                    </div>

                    <div className="form-group collapse" id="collapseAllFields">
                        <Field component={"input"} className="form-control" type="text" name={"cartridgeModel"}
                               aria-describedby="cartridgeModelHelp" />
                        <small className="form-text text-muted" id="cartridgeModelHelp">Модель картриджей</small>
                    </div>

                    <div className="form-group collapse" id="collapseAllFields">
                        <Field component={"input"} className="form-control" type="text" name={"macAddress"}
                               aria-describedby="macAddrHelp" />
                        <small className="form-text text-muted" id="macAddrHelp">MAC адрес</small>
                    </div>

                    <div className="form-group collapse" id="collapseAllFields">
                        <Field component={"input"} className="form-control" type="text" name={"ipAddress"}
                               aria-describedby="ipAddrHelp" />
                        <small className="form-text text-muted" id="ipAddrHelp">IP адрес</small>
                    </div>

                </div>
                }

                <div className="float-left my-sm-5">
                    <button className="btn btn-primary" type="submit" disabled={pristine || submitting}>Отправить запрос</button>
                    <button className="btn btn-info" type="button" disabled={pristine || submitting} onClick={reset}>Очистка формы</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = ({ employees }) => {
    return {
        employees: Object.values(employees)
    };
};

// Decorate with connect to read form values
const selector = formValueSelector('reportsForm'); // <-- same as form name
ReportsForm = connect(state => {
    // can select values individually
    const assetTypeValue = selector(state, 'assetType');
    // or together as a group
    return { assetTypeValue };
})(ReportsForm);


export default connect(mapStateToProps, {getEmployeesAction})(reduxForm({form: 'reportsForm'})(ReportsForm));




