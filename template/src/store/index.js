import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from './actions'

export default (app, stateName) => {

    let mapStateToProps = state => {
        let re = {};
        re[stateName] = state[stateName]
        return re
    }

    let mapDispatchToProps = dispatch => ({
        actions: bindActionCreators(Actions, dispatch)
    })



    return connect(mapStateToProps, mapDispatchToProps)(app)
}