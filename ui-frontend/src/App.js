import React, {Component} from 'react';
import {Link, Route, Router, Switch} from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import EmployeesPage from "./components/pages/EmployeesPage";
import AssetsPage from "./components/pages/AssetsPage";
import ReportsPage from "./components/pages/ReportsPage";
import history from "./components/history";
import './common/App.css';


class App extends Component {

    render() {
        return (
            <div>
                <Router history={history}>

                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <Link to={"/"} className="navbar-brand">IT Assets Manager</Link>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/assets"} className="nav-link">Оборудование</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/employees"} className="nav-link">Сотрудники</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/reports"} className="nav-link">Отчеты</Link>
                            </li>
                        </div>
                    </nav>


                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/assets" component={AssetsPage}/>
                        <Route path="/employees" component={EmployeesPage}/>
                        <Route path="/reports" component={ReportsPage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;