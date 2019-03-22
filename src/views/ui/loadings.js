
import React from 'react'
import {Card, Spin, Icon, Alert} from 'antd'
export default class Loadings extends React.Component{
    render () {
        const icon = <Icon type="loading" style={{fontSize: 24}}/>
        return (
            <div>
                <Card title="Spin的用法" className="card-warp">
                     <Spin size="small" style={{margin: 10}}/>
                    <Spin style={{margin: 10}}/>
                    <Spin size="large" style={{margin: 10}}/>
                    <Spin indicator={icon} style={{margin: 10}} spinning={true}/>
                </Card>
                <Card title="内容遮罩" className="card-warp">
                    <Alert
                    message="React"
                    description="欢迎使用React遮罩层Loading"
                    type="info"
                    style={{margin: 10}}/>
                    <Spin>
                        <Alert
                        message="React"
                        description="欢迎使用React遮罩层Loading"
                        type="info"
                        style={{margin: 10}}/>
                    </Spin>
                    <Spin tip="加载中">
                        <Alert
                            message="React"
                            description="欢迎使用React遮罩层Loading"
                            type="info"
                            style={{margin: 10}}/>
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert
                            message="React"
                            description="欢迎使用React遮罩层Loading"
                            type="info"
                            style={{margin: 10}}/>
                    </Spin>
                </Card>
            </div>
        )
    }
}