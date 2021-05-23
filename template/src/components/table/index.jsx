import React, { Component } from 'react';
import { Table } from 'antd';
import Connect from 'Connect';


const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <p>{text}</p>,
  }, {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }];

class List extends Component {

    componentDidMount() {
      this.props.actions.get_table()
    }

    render() {

        let {tables} = this.props.list   // get state type 2

        return (
            <div>
                <Table columns={columns} dataSource={tables}  rowKey="key"/>
            </div>
        );
    }
}

export default Connect(List, 'list')