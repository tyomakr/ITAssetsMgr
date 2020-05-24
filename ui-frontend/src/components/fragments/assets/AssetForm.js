import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {getEmployeesAction} from "../../../redux/actions/employeeActions";


class AssetForm extends React.Component {

    componentDidMount() {
        this.props.getEmployeesAction();
    }

    onSubmit = formValues => {
        if (formValues.employee) {
            formValues.employee = this.props.employees.find(e=> e.id === formValues.employee);
        }
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
                    <Field component={"select"} className="form-control" name="assetType" aria-describedby="assetTypeHelp" required>
                        <option />
                        <option value={"ALL_IN_ONE"}>Моноблок</option>
                        <option value={"NOTEBOOK"}>Ноутбук</option>
                        <option value={"PRINTER"}>Принтер</option>
                    </Field>
                    <small className="form-text text-muted" id="assetTypeHelp">Тип устройства</small>
                </div>

                <div className="form-group">
                    <Field component={"select"} className="form-control" name="status" aria-describedby="statusHelp" required>
                        <option />
                        <option value={"USE"}>Используется</option>
                        <option value={"IN_STORE"}>На складе</option>
                        <option value={"UNDER_REPAIR"}>На ремонте</option>
                        <option value={"DECOMMISSIONED"}>Списан</option>
                    </Field>
                    <small className="form-text text-muted" id="assetTypeHelp">Статус устройства</small>
                </div>


                <div className="form-group">
                    <Field component={"input"} className="form-control" type="text" name={"modelName"} aria-describedby="modelNameHelp" required />
                    <small className="form-text text-muted" id="modelNameHelp">Модель устройства</small>
                </div>

                <div className="form-group">
                    <Field component={"input"} className="form-control" type="text" name={"serialNumber"} aria-describedby="serialNumberHelp" required />
                    <small className="form-text text-muted" id="serialNumberHelp">Серийный номер устройства</small>
                </div>

                <div className="form-group">
                    <Field component={"select"} className="form-control" name="employee" aria-describedby="employeeHelp" required>
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


                <div className="form-group">
                    <Field component={"input"} className="form-control" type="text" name={"assetLocation"}
                           aria-describedby="assetLocationHelp" required/>
                    <small className="form-text text-muted" id="assetLocationHelp">Расположение</small>
                </div>

                <div className="form-group">
                    <Field component={"input"} className="form-control" type="text" name={"desc"}
                           aria-describedby="descHelp" required/>
                    <small className="form-text text-muted" id="descHelp">Краткое описание</small>
                </div>

                <div className="form-group">
                    <Field component={"input"} className="form-control" type="text" name={"datePurchase"}
                           aria-describedby="datePurchaseHelp" required/>
                    <small className="form-text text-muted" id="datePurchaseHelp">Дата покупки</small>
                </div>


                {(assetTypeValue === ("NOTEBOOK") || assetTypeValue === ("ALL_IN_ONE")) &&
                <div>
                    <div className="form-group">
                        <Field component={"input"} className="form-control" type="text" name={"cpu"}
                               aria-describedby="cpuHelp" required/>
                        <small className="form-text text-muted" id="cpuHelp">CPU</small>
                    </div>

                    <div className="form-group">
                        <Field component={"input"} className="form-control" type="text" name={"ram"}
                               aria-describedby="ramHelp" required/>
                        <small className="form-text text-muted" id="ramHelp">RAM</small>
                    </div>

                    <div className="form-group">
                        <Field component={"input"} className="form-control" type="text" name={"storage"}
                               aria-describedby="storageHelp" required/>
                        <small className="form-text text-muted" id="storageHelp">Хранилище (HDD / SSD)</small>
                    </div>

                    <div className="form-group">
                        <Field component={"input"} className="form-control" type="text" name={"videoCard"}
                               aria-describedby="videoCardHelp" required/>
                        <small className="form-text text-muted" id="videoCardHelp">Видеокарта</small>
                    </div>

                    <div className="form-group">
                        <Field component={"input"} className="form-control" type="text" name={"macAddr"}
                               aria-describedby="macAddrHelp" required/>
                        <small className="form-text text-muted" id="macAddrHelp">MAC адрес</small>
                    </div>
                </div>
                }


                {assetTypeValue === "PRINTER" &&
                <div>
                    <div className="form-group">
                        <Field component={"input"} className="form-control" type="text" name={"printFormat"}
                               aria-describedby="printFormatHelp" required/>
                        <small className="form-text text-muted" id="printFormatHelp">Максимальный формат печати</small>
                    </div>

                    <div className="form-group">
                        <Field component={"input"} className="form-control" type="text" name={"cartridgeModel"}
                               aria-describedby="cartridgeModelHelp" required/>
                        <small className="form-text text-muted" id="cartridgeModelHelp">Модель картриджей</small>
                    </div>

                    <div className="form-group">
                        <Field component={"input"} className="form-control" type="text" name={"macAddress"}
                               aria-describedby="macAddrHelp" required/>
                        <small className="form-text text-muted" id="macAddrHelp">MAC адрес</small>
                    </div>

                    <div className="form-group">
                        <Field component={"input"} className="form-control" type="text" name={"ipAddress"}
                               aria-describedby="ipAddrHelp" required/>
                        <small className="form-text text-muted" id="ipAddrHelp">IP адрес</small>
                    </div>

                </div>
                }

                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
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
const selector = formValueSelector('assetForm'); // <-- same as form name
AssetForm = connect(state => {
    // can select values individually
    const assetTypeValue = selector(state, 'assetType');
    // or together as a group
    return { assetTypeValue };
})(AssetForm);


export default connect(mapStateToProps, {getEmployeesAction})(reduxForm({form: 'assetForm'})(AssetForm));




