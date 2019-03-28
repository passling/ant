import React from 'react'
import {Card, Form, Input, Button, Icon, Checkbox, message} from 'antd'

class FormLogin extends React.Component{
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
            }
        })
    }
    render () {
        const { getFieldDecorator } = this.props.form
        return(
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <Form.Item>
                            <Input placeholder="请输入用户名"/>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="请输入密码"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{marginTop: 10}}>
                    <Form onSubmit={this.handleSubmit} style={{width: 300}}>
                        <Form.Item>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        },
                                        {
                                            min: 5,
                                            max: 10,
                                            message: '长度不在范围内'
                                        },
                                        {
                                            pattern: new RegExp('^\\w+$', 'g')
                                        }
                                    ]
                                })
                                (
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('usePwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your Password!'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float: 'right'}}>忘记密码</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{width: 300}}>登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create() (FormLogin)