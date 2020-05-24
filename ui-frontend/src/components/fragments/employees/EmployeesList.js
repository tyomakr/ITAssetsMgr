import React from "react";
import {getEmployeesAction, deleteEmployeeAction} from "../../../redux/actions/employeeActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class EmployeesList extends React.Component {

    componentDidMount() {
        this.props.getEmployeesAction();
    }

    handleDeleteEmployee(id) {
        this.props.deleteEmployeeAction(id);
    }

    showOptions = employee => {
        return (
            <div>
                <Link to={`/employees/edit/${employee.id}`}><button className="btn btn-outline-success">Изменить</button></Link>&nbsp;
                <button className="btn btn-outline-danger" onClick={this.handleDeleteEmployee.bind(this, employee.id)}>Удалить</button>
            </div>
        );
    };

    render() {
        return(
            <div className="container-fluid">
                <h3 className="header-section">Список сотрудников</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Сотрудник</th>
                        <th>Департамент</th>
                        <th>Должность</th>
                        <th>Телефон</th>
                        <th>E-Mail</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.employees.map(employee => {
                        if (employee)
                            return (
                                <tr key={employee.id}>
                                    <td>{employee.fullName}</td>
                                    <td>{employee.departmentName}</td>
                                    <td>{employee.position}</td>
                                    <td>{employee.phoneNumber}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        {this.showOptions(employee)}
                                    </td>
                                </tr>
                            );
                        else return null;
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = ({ employees }) => {
    return {
        employees: Object.values(employees)
    };
};

export default connect(mapStateToProps, {getEmployeesAction, deleteEmployeeAction}) (EmployeesList);
