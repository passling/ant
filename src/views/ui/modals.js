import React from 'react'
import {Card, Button, Modal} from 'antd'
export default class Modals extends React.Component{
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }
    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }
    handleConfirm = (type) => {
        Modal[type] ({
            title: '确认？',
            content: '这是一个确认弹框测试！'
        })
    }
    render () {
        return (
            <div>
                <Card className="card-warp">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-warp">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>warning</Button>
                </Card>
                <Modal
                title="React"
                visible={this.state.showModal1}
                onCancel={() => {
                    this.setState({
                        showModal1: false
                    })
                }}>
                    <p> 欢迎使用modal</p>
                </Modal>
                <Modal
                title="React"
                visible={this.state.showModal2}
                okText="好的"
                cancelText="算了"
                onCancel={() => {
                    this.setState({
                        showModal2: false
                    })
                }}>
                    <p> 欢迎使用modal</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal3}
                    styel={{top: 20}}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}>
                    <p> 欢迎使用modal</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal4}
                    className="vertical-center-modal"
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}>
                    <p> 欢迎使用modal</p>
                </Modal>
            </div>

        )
    }
}