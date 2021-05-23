import React , {Component} from 'react'
import { HashRouter } from "react-router-dom";

import Headers from './head'
import Bar from './bar'
import Main from './main'
import style from 'B/assets/css/style.css';
import { Layout } from 'antd';
const { Sider } = Layout;


class App extends Component {
  render() {
	return (
    <HashRouter>
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
    </HashRouter>
  )
 }
}

export default App
