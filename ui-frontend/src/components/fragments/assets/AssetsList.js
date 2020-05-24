import React from "react";
import {getAssetsAction, deleteAssetAction} from "../../../redux/actions/assetActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class AssetsList extends React.Component {

    componentDidMount() {
        this.props.getAssetsAction();
    }

    handleDeleteAsset(id) {
        this.props.deleteAssetAction(id);
    }

    showOptions = asset => {
        return (
            <div>
                <Link to={`/assets/edit/${asset.id}`}><button className="btn btn-outline-success">Изменить</button></Link>&nbsp;
                <button className="btn btn-outline-danger" onClick={this.handleDeleteAsset.bind(this, asset.id)}>Удалить</button>
            </div>
        );
    };

    render() {
        return(
            <div>

            <div className="container-fluid">
                <h3 className="header-section">Список оборудования</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Тип оборудования</th>
                        <th>Модель</th>
                        <th>Сотрудник</th>
                        <th>Статус</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.assets.map(asset => {
                        if (asset)
                            return (
                                <tr key={asset.id}>
                                    <td>{asset.assetType}</td>
                                    <td>{asset.modelName}</td>
                                    <td>{asset.employee.fullName}</td>
                                    <td>{asset.status}</td>
                                    <td>
                                        {this.showOptions(asset)}
                                    </td>
                                </tr>
                            );
                        else return null;
                    })}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}

const mapStateToProps = ({ assets }) => {
    return {
        assets: Object.values(assets)
    };
};

export default connect(mapStateToProps, {getAssetsAction, deleteAssetAction}) (AssetsList);
