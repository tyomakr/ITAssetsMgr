import React from "react";
import {createAssetAction} from "../../../redux/actions/assetActions";
import AssetForm from "./AssetForm";
import {connect} from "react-redux";

class AssetsCreate extends React.Component {

    onSubmit = formValues => {
        this.props.createAssetAction(formValues);
        this.props.history.push('/assets');
    };


    render() {
        return (
            <div className="container-fluid">
                <h3 className="header-section">Добавить оборудование</h3>
                <div className="container-fluid">
                    <AssetForm onRenderPropSubmit = {formValues => {this.onSubmit(formValues);}} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {asset: state.asset};
};

export default connect(mapStateToProps, {createAssetAction})(AssetsCreate);