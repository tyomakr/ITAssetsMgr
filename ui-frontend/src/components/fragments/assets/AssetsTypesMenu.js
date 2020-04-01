import {Collapse, Nav, Navbar} from "bootstrap-4-react";
import {Link} from "react-router-dom";
import React from "react";

const AssetTypesMenu = () => {
    return(
        <div className="jumbotron-fluid">
            <header>
                <Navbar className="navbar-third-line" expand="sm" dark >
                    <Collapse navbar id="navbarSupportedContent">
                        <Navbar.Nav mr="auto">
                            <Nav.Item active>
                                <Link to={"/assets/"}><Nav.Link>Все оборудование</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={"/assets/all-in-one"}><Nav.Link>Моноблоки</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={"/assets/notebook"}><Nav.Link>Ноутбуки</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={"/assets/printer"}><Nav.Link>Принтеры</Nav.Link></Link>
                            </Nav.Item>
                        </Navbar.Nav>
                    </Collapse>
                </Navbar>
            </header>
        </div>
    );
};

export default AssetTypesMenu;