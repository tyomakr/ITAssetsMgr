import React from 'react';
import { connect } from 'react-redux';
import { updateAssetAction, getAssetAction } from "../../../redux/actions/assetActions";
import AssetForm from "./AssetForm";

class AssetsEdit extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getAssetAction(id);
    }

    onSubmit = formValues => {
        this.props.updateAssetAction(this.props.match.params.id, formValues);
        this.props.history.push('/assets');
    };


    render() {
        if (!this.props.asset) {
            return <div>Загрузка...</div>
        }

        return (
            <div className="container-fluid">
                <h3 className="header-section">Редактировать данные оборудования</h3>
                <div className="container-fluid">
                    <AssetForm
                        initialValues={{
                            assetType: this.props.asset.assetType,
                            modelName: this.props.asset.modelName,
                            status: this.props.asset.status,
                            assetLocation: this.props.asset.assetLocation,
                            serialNumber: this.props.asset.serialNumber,
                            desc: this.props.asset.desc,
                            employee: this.props.asset.employee.id,
                            datePurchase: this.props.asset.datePurchase,

                            cpu: this.props.asset.cpu,
                            ram: this.props.asset.ram,
                            storage: this.props.asset.storage,
                            videoCard: this.props.asset.videoCard,

                            macAddress: this.props.asset.macAddress,
                            ipAddress: this.props.asset.ipAddress,

                            monitorSize: this.props.asset.monitorSize,
                            screenResolution: this.props.asset.screenResolution,

                            currentExtNumber: this.props.asset.currentExtNumber,

                            phoneIMEI: this.props.asset.phoneIMEI,

                            isColorPrint: this.props.asset.isColorPrint,
                            printFormat: this.props.asset.printFormat,
                            cartridgeModel: this.props.asset.cartridgeModel

                            }}
                        onRenderPropSubmit={formValues => { this.onSubmit(formValues) }}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ assets }, ownProps) => {
    return { asset: assets[ownProps.match.params.id] };
};

const mapDispatchToProps = dispatch => {
    return {
        updateAssetAction: function(id, formValues) {
            dispatch(updateAssetAction(id, formValues));
        },
        getAssetAction: function(id) {
            dispatch(getAssetAction(id));
        }
    };
};

export default connect( mapStateToProps, mapDispatchToProps)(AssetsEdit);