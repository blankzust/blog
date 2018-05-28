import React from 'react';
import { Table } from 'antd'
import { connect } from 'dva'


function Users({ dispatch, list, page = 1, total, loading }) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website"
    },
    {
      title: "Operation",
      dataIndex: "id",
      key: "id",
      render: (text, record) => {
        return (
          <span>
            <a>编辑</a>
            &nbsp;|&nbsp;
            <a>删除</a>
          </span>
        )

      }
    }
  ]

  return (
    <div className={ styles.normal }>
      <Table
        rowKey="id"
        columns={ columns }
        dataSource={ list }
        pagination={{ current: page, total: total, pageSize: 5 }}
        loading={ loading }
        onChange={(pagination, filters, sorter) => {
          console.log(dispatch);
          dispatch({type: 'users/list', payload: { page: pagination.current }})
        }}
      />
    </div>
  );
}

function mapToProps(state) {
  const { list, total, page, loading } = state.users;
  return { list, total, page, loading };
}

export default connect(mapToProps)(Users);
