import React , {Component} from 'react'
import {BrowserRouter as Router } from 'react-router-dom'

import Headers from './head'
import Bar from './bar'
import Main from './main'
import style from 'B/assets/css/style.css';
import { Layout } from 'antd';
const { Sider } = Layout;


class App extends Component {
  render() {
	return (
    <Router>
      <Layout>
        <Headers />
        <Layout>
          <Sider>
            <Bar/>
          </Sider>
          <Layout className={style._main_body}>
            <Main />
          </Layout>
        </Layout>
      </Layout>
    </Router>
  )
 }
}

export default App
