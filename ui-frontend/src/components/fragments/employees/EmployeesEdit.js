import React from 'react';
import { connect } from 'react-redux';
import { updateEmployeeAction, getEmployeeAction } from "../../../redux/actions/employeeActions";
import EmployeeForm from "./EmployeeForm";

class EmployeesEdit extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getEmployeeAction(id);
    }

    onSubmit = formValues => {
        this.props.updateEmployeeAction(this.props.match.params.id, formValues);
        this.props.history.push('/employees');
    };


    render() {
        if (!this.props.employee) {
            return <div>Загрузка...</div>
        }

        return (
            <div className="container-fluid">
                <h3 className="header-section">Редактировать данные сотрудника</h3>
                <div className="container-fluid">
                    <EmployeeForm
                        initialValues={{
                        fullName: this.props.employee.fullName,
                        departmentName: this.props.employee.departmentName,
                        position: this.props.employee.position,
                        phoneNumber: this.props.employee.phoneNumber,
                        email: this.props.employee.email }}
                        onRenderPropSubmit={formValues => { this.onSubmit(formValues) }}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ employees }, ownProps) => {
    return { employee: employees[ownProps.match.params.id] };
};

const mapDispatchToProps = dispatch => {
    return {
        updateEmployeeAction: function(id, formValues) {
            dispatch(updateEmployeeAction(id, formValues));
        },
        getEmployeeAction: function(id) {
            dispatch(getEmployeeAction(id));
        }
    };
};

export default connect( mapStateToProps, mapDispatchToProps)(EmployeesEdit);