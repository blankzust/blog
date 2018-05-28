import { Modal, Form, Input, message } from 'antd'

const FormItem = Form.Item;

const labelCol = {
  span: 5
}

const wrapperCol = {
  span: 15
}

function PersonalModal({ dispatch, form, currentUser, ...otherProps }) {
  return (
    <Modal
      { ...otherProps }
      onCancel={() => {
        form.resetFields();
        dispatch({
          type: 'personalModal/toggleVisible',
          payload: {
            visible: false
          }
        })
      }}
      onOk={() => {
        const formData = form.getFieldsValue();
        dispatch({
          type: 'personalModal/save',
          payload: {
            ...formData,
            callback: (res) => {
              if(res.result) {
                form.resetFields();
                message.success("更新成功");
              } else {
                message.error(res.message);
              }
            }
          }
        })
      }}
    >
      <Form>
        <FormItem
          label="用户名"
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <span>{ currentUser.username }</span>
        </FormItem>
        <FormItem
          label="新密码"
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          {
            form.getFieldDecorator('password')(
              <Input type="password" />
            )
          }
        </FormItem>
        <FormItem
          label="邮箱"
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          {
            form.getFieldDecorator('email')(
              <Input />
            )
          }
        </FormItem>
        <FormItem
          label="联系方式"
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          {
            form.getFieldDecorator('phone')(
              <Input />
            )
          }
        </FormItem>
      </Form>
    </Modal>
  )
}

PersonalModal.defaultProps = {
  currentUser: {},
  visible: false
}

export default Form.create({
  mapPropsToFields: (props) => {
    const { currentUser={} } = props;
    return {
      email: {
        value: currentUser.email
      },
      phone: {
        value: currentUser.phone
      },
    }
  }
})(PersonalModal);
