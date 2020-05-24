import React from 'react';
import { Field, reduxForm } from 'redux-form';

class EmployeeForm extends React.Component {

    onSubmit = formValues => {
        this.props.onRenderPropSubmit(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="form-group">
                    <Field component={"input"} className="form-control" type="text" name={"fullName"} aria-describedby="fullNameHelp" required />
                    <small className="form-text text-muted" id="fullNameHelp">Пожалуйста введите Ф.И.О.</small>
                </div>
                <div className="form-group">
                    <Field component={"input"} className="form-control" type="text" name={"departmentName"} aria-describedby="departmentNameHelp" required />
                    <small className="form-text text-muted" id="departmentNameHelp">Пожалуйста введите название подразделения</small>
                </div>
                <div className="form-group">
                    <Field component={"input"} className="form-control" type="text" name={"position"} aria-describedby="positionHelp" required />
                    <small className="form-text text-muted" id="positionHelp">Пожалуйста введите должность</small>
                </div>
                <div className="form-group">
                    <Field component={"input"} className="form-control" type="text" name={"phoneNumber"} aria-describedby="phoneNumberHelp" required />
                    <small className="form-text text-muted" id="phoneNumberHelp">Пожалуйста введите номер телефона</small>
                </div>
                <div className="form-group">
                    <Field component={"input"} className="form-control" type="text" name={"email"} aria-describedby="emailHelp" required />
                    <small className="form-text text-muted" id="emailHelp">Пожалуйста введите адрес электронной почты</small>
                </div>
                <div className="float-right my-sm 1">
                    <button className="btn btn-primary" type="submit">Сохранить</button>
                </div>
            </form>
        )
    }

}

export default reduxForm({
    form: 'employeeForm',
})(EmployeeForm);