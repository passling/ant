import React from 'react'
import {Card, Button, notification} from 'antd'
export default class Notice extends React.Component{
    handleClickBtn = (type, direction) => {
        if (direction) {
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message: 'Notification Title',
            description: 'This is the content of then notification'
        })
    }
    render () {
        return (
            <div>
                <Card title="通知提醒框" className="card-warp">
                    <Button type="primary" onClick={() => this.handleClickBtn('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleClickBtn('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleClickBtn('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.handleClickBtn('error')}>Error</Button>
                </Card>
                <Card title="通知提醒框-方向控制" className="card-warp">
                    <Button type="primary" onClick={() => this.handleClickBtn('success')}>Success-TopLeft</Button>
                    <Button type="primary" onClick={() => this.handleClickBtn('info')}>Info-TopRight</Button>
                    <Button type="primary" onClick={() => this.handleClickBtn('warning')}>Warning-BottomLeft</Button>
                    <Button type="primary" onClick={() => this.handleClickBtn('error')}>Error-BottomRight</Button>
                </Card>
            </div>
        )
    }
}