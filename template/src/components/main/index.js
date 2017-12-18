import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Bundle from '../../bundle'

import { Layout } from 'antd'
const { Content } = Layout

const Hello = (props) => (
  <Bundle load={() => import('../hello')}>
    {(Hello) => <Hello {...props} />}
  </Bundle>
);

const Test = (props) => (
  <Bundle load={() => import('../test')}>
    {(Test) => <Test {...props} />}
  </Bundle>
);

const List1 = (props) => (
  <Bundle load={() => import('../table')}>
    {(List1) => <List1 {...props} />}
  </Bundle>
);

// 404
const NoMatch = (props) => (
  <Bundle load={() => import('../error')}>
    {(NoMatch) => <NoMatch {...props} />}
  </Bundle>
);


export default class Headers extends Component {
  state = {
    height: window.innerHeight - 84
  };

  render() {

    return (
      <Content className="_content" style=\{{ height: this.state.height }}>
        <Switch>
          <Route exact path="/" component={Hello} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/table" component={List1} />
          <Route component={NoMatch} />
        </Switch>
      </Content>
    );
  }
}
