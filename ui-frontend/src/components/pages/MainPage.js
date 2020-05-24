import React, {Component} from "react";
import {Helmet} from "react-helmet/es/Helmet";

class MainPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Helmet
                    htmlAttributes={{"lang": "ru", "amp": undefined}}
                    title="Главная"
                    titleTemplate="Spring Assets Manager - %s" />

                <div className="jumbotron">
                    <h3 className="header-section">Система учета оборудования</h3>
                    <div className="container-fluid">
                        <span>Проектная работа курса OTUS "Разработчик Spring Framework" 2019-08</span>
                    </div>
                </div>
            </div>
        );
    }
}


export default MainPage;
