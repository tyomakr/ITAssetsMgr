import React from "react";
import { Navbar, Nav, Collapse} from 'bootstrap-4-react';
import {Link} from "react-router-dom";


const EmployeeHeaderMenu = () => {
    return(
        <div className="jumbotron-fluid">
            <header>
                <Navbar className="navbar-second-line" expand="sm" dark >
                    <Collapse navbar id="navbarSupportedContent">
                        <Navbar.Nav mr="auto">
                            <Nav.Item active>
                                <Link to={"/employees"}><Nav.Link>Список сотрудников</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={"/employees/create"}><Nav.Link>Добавить сотрудника</Nav.Link></Link>
                            </Nav.Item>
                        </Navbar.Nav>
                    </Collapse>
                </Navbar>
            </header>
        </div>
    );
};

export default EmployeeHeaderMenu;