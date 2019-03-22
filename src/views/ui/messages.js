import React from 'react'
import {Button, Card, message} from 'antd'
export default class Messages extends React.Component{
    handleClickBtn = (type) => {
        message[type]('This is a message of ' + type)
    }
    render () {
        return (
            <div>
                <Card title="全局提示框" className="card-warp">
                    <Button type="primary" onClick={() => this.handleClickBtn('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleClickBtn('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleClickBtn('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.handleClickBtn('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.handleClickBtn('loading')}>Loading</Button>
                </Card>
            </div>
        )
    }
}