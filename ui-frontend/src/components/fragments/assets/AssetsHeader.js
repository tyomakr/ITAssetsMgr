import {Collapse, Nav, Navbar} from "bootstrap-4-react";
import {Link} from "react-router-dom";
import React from "react";

const AssetsHeaderMenu = () => {
    return(
        <div className="jumbotron-fluid">
            <header>
                <Navbar className="navbar-second-line" expand="sm" dark >
                    <Collapse navbar id="navbarSupportedContent">
                        <Navbar.Nav mr="auto">
                            <Nav.Item active>
                                <Link to={"/assets"}><Nav.Link>Список оборудования</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={"/assets/create"}><Nav.Link>Добавить оборудование</Nav.Link></Link>
                            </Nav.Item>
                        </Navbar.Nav>
                    </Collapse>
                </Navbar>
            </header>
        </div>
    );
};

export default AssetsHeaderMenu;