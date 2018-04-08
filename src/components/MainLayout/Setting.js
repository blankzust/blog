import { Dropdown, Icon, Menu, message } from 'antd'

function Setting({ dispatch, currentUser }) {
  const menu = (
    <Menu
      onClick={({ key }) => {
        dispatch({
          type: 'app/' + key,
          payload: {
            callback: (res) => {
              if(res.result) {
                message.success("成功退出登录");
              } else {
                message.error(res.message);
              }
            }
          }
        })
      }}
    >
      <Menu.Item key="personal">修改个人信息</Menu.Item>
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu}>
      <Icon type="setting"/>
    </Dropdown>
  )
}

export default Setting;
