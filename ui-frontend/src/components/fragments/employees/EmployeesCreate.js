import React from "react";
import {createEmployeeAction} from "../../../redux/actions/employeeActions";
import EmployeeForm from "./EmployeeForm";
import {connect} from "react-redux";

class EmployeesCreate extends React.Component {

    onSubmit = formValues => {
        this.props.createEmployeeAction(formValues);
        this.props.history.push('/employees');
    };

    render() {
        return (
            <div className="container-fluid">
                <h3 className="header-section">Добавить сотрудника</h3>
                <div className="container-fluid">
                    <EmployeeForm onRenderPropSubmit = {formValues => {this.onSubmit(formValues);}} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {employee: state.employee};
};

export default connect(mapStateToProps, {createEmployeeAction})(EmployeesCreate);