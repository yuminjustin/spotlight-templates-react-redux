import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Layout } from 'antd';
import Connect from 'Connect';
const { Header } = Layout;

import style from 'B/assets/css/style.css';

class Headers extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  componentDidMount() {
    // get userInfo
    this.props.actions.get_user()
  }

  render() {
    let state = this.context.store.getState();  // get state type 1

    return (<Header>
      <h2 className={style._app_name}>Spotlight for React</h2>
      <div className={style._user}>
        {state.common.userInfo.name}
      </div>
    </Header>
    );
  }
}


export default Connect(Headers, 'common')
