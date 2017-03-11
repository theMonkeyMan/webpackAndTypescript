import { HomeRouter } from '../routers';

import { mapStateToPropsInterface, mapDispatchToPropsInterface } from '../containers/containerInterface';

const {connect} = require('react-redux');

const mapStateToProps: mapStateToPropsInterface = (state: any, ownProps: any) => {
    return {
        state,
    }
}

const mapDispatchToProps: mapDispatchToPropsInterface = (dispatch: any, ownProps: any) => {
    return {

    }
}

const HomeRouterContainer = connect(mapStateToProps, mapDispatchToProps)(HomeRouter);

export default HomeRouterContainer;