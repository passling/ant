import React from 'react'
import {Card, Button,Icon, Radio} from 'antd'
import './ui.less'
const ButtonGroup = Button.Group
const RadioGroup = Radio.Group
export default class Buttons extends React.Component{
    state = {
        loading: true,
        value: 'default'
    }
    handleCloseLoading = () => {
        this.setState({
            loading: false
        })
    }
    handleLoading = () => {
        this.setState({
            loading: true
        })
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render () {
        return (
            <div>
                <Card title="基础按钮" className="card-warp">
                    <Button type="primary">Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="图形按钮" className="card-warp">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="search" shape="circle"/>
                    <Button icon="search" type="primary">搜索</Button>
                    <Button icon="download" type="primary">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-warp">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}/>
                    <Button onClick={this.handleLoading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}/>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组" className="card-warp">
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left" />Go back
                        </Button>
                        <Button type="primary">
                            Go forward<Icon type="right" />
                        </Button>
                    </ButtonGroup>
                </Card>
                <Card title="按钮尺寸" className="card-warp">
                    <RadioGroup value={this.state.value} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </RadioGroup>
                    <Button type="primary" size={this.state.value}>Imooc</Button>
                    <Button  size={this.state.value}>Imooc</Button>
                    <Button type="dashed" size={this.state.value}>Imooc</Button>
                    <Button type="danger" size={this.state.value}>Imooc</Button>
                </Card>
            </div>
        )
    }
}