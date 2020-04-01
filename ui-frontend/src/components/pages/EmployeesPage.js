import React, {Component} from "react";
import EmployeesList from "../fragments/employees/EmployeesList";
import EmployeeHeaderMenu from "../fragments/employees/EmployeesHeader";
import {Route, Switch} from "react-router-dom";
import EmployeesCreate from "../fragments/employees/EmployeesCreate";
import EmployeesEdit from "../fragments/employees/EmployeesEdit";
import {Helmet} from "react-helmet/es/Helmet";


class EmployeesPage extends Component {


    render() {
        return (
            <div>
                <Helmet
                    htmlAttributes={{"lang": "ru", "amp": undefined}}
                    title="Сотрудники"
                    titleTemplate="Spring Assets Manager - %s" />

                <EmployeeHeaderMenu employeeMenu />

                <Switch>
                    <Route exact path="/employees/create" component={EmployeesCreate} />
                    <Route exact path="/employees/edit/:id" component={EmployeesEdit} />
                    {/*<Route exact path="/employees/view" component={EmployeesView} />*/}
                    <Route exact path='/employees' render={(props) => <EmployeesList/>} />
                </Switch>
            </div>
        )
    }
};


export default EmployeesPage;