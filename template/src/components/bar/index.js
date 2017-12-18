import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Menu, Icon } from 'antd';
import Connect from 'Connect';

const SubMenu = Menu.SubMenu;

class Bar extends Component {
  // submenu keys of first level
  rootSubmenuKeys = this.props.common.menu.map((item)=>{
     return item.key
  });

  state = {
    height:window.innerHeight-64,
    openKeys: ['1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  
  splitData = (arr) => {
     return arr.map((item)=>{
        if(item.children){
           let temp = this.splitData(item.children),
               title = item.name;
           if(item.icon) title = (<span><Icon type={item.icon} /><span>{item.name}</span></span>)
           return (
            <SubMenu key={item.key} title={title}>
             {temp}
            </SubMenu>
           )
        }
        else {
          return (
            <Menu.Item key={item.key}><Link to={item.url}>{item.name}</Link></Menu.Item>
          )
        }
     })
  }

  componentDidMount() {
    this.props.actions.get_menu()
  }

  render() {
    let lists = this.splitData(this.props.common.menu)

    return (
     <div className="_left_bar" style={{height:this.state.height }}>
      <Menu mode="inline" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} >
        {lists}
      </Menu>
    </div>
    );
  }
}

export default Connect(Bar, 'common')