import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {Helmet} from "react-helmet/es/Helmet";
import AssetsHeaderMenu from "../fragments/assets/AssetsHeader";
import AssetsList from "../fragments/assets/AssetsList";
import AssetsCreate from "../fragments/assets/AssetsCreate";
import AssetsEdit from "../fragments/assets/AssetsEdit";


class AssetsPage extends Component {


    render() {
        return (
            <div>
                <Helmet
                    htmlAttributes={{"lang": "ru", "amp": undefined}}
                    title="Оборудование"
                    titleTemplate="Spring Assets Manager - %s" />

                <AssetsHeaderMenu assetsMenu/>

                <Switch>
                    <Route exact path='/assets' render={(props) => <AssetsList/>} />
                    <Route exact path="/assets/create" component={AssetsCreate} />
                    <Route exact path="/assets/edit/:id" component={AssetsEdit} />
                </Switch>
            </div>
        )
    }
};

export default AssetsPage;