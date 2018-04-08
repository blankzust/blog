import { connect } from 'dva'
import { Icon, Modal, Input, Form, message, Dropdown } from 'antd'
import Setting from './Setting'
import  styles from './index.less'

const DropdownBtn = Dropdown.Button;

function Login({ currentUser, loginModal, dispatch, form }) {
  const openLoginModal =  () => {
    dispatch({
      type: 'loginModal/toggleVisible',
      payload: {
        visible: true
      }
    })
  }
  const closeLoginModal =  () => {
    form.resetFields();
    dispatch({
      type: 'loginModal/toggleVisible',
      payload: {
        visible: false
      }
    })
  }
  const login = () => {
    const formData = form.getFieldsValue();
    dispatch({
      type: 'loginModal/login',
      payload: {
        username: formData.username,
        password: formData.password,
        callback: (res) => {
          if(res.result) {
            form.resetFields();
            dispatch({
              type: 'app/getCurrentUser'
            })
            closeLoginModal();
            message.success("成功登录");
          } else {
            message.error(res.message);
          }
        }
      }
    })
  }

  return (
    <div className={styles.loginIcon}>
      {
        currentUser?
        <Setting dispatch={dispatch}/>
        :
        <Icon style={{ cursor: 'point' }} type="user" onClick={ openLoginModal }/>
      }

      <Modal
        visible={ loginModal.visible }
        onCancel={ closeLoginModal }
        okText="登录"
        onOk={ login }
      >
        <Form>
          <Form.Item
            label="用户名"
          >
            {
              form.getFieldDecorator('username')(
                <Input placeholder="请输入用户名"/>
              )
            }
          </Form.Item>
          <Form.Item
            label="密码"
          >
            {
              form.getFieldDecorator('password')(
                <Input type="password" placeholder="请输入密码"/>
              )
            }
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Form.create()(connect((state) => {
  return {
    currentUser: state.app.currentUser,
    loginModal: state.loginModal,
  }
})(Login))
