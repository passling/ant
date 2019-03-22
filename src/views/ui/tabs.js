import React from 'react'
import {Card, Tabs, Icon} from 'antd'
const {TabPane} = Tabs
export default class Tab extends React.Component{
    componentWillMount () {
        this.newTabIndex = 0
        const panes = [
            {
                title: 'tab1',
                content: 'Content fo Tab 1',
                key: '1'
            },
            {
                title: 'tab2',
                content: 'Content fo Tab 2',
                key: '2'
            },
            {
                title: 'tab3',
                content: 'Content fo Tab 3',
                key: '3'
            }
        ]

        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }
    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey, action) => {
       this[action](targetKey)
    }
    add () {
        const {panes} = this.state
        const activeKey = `newTab${this.newTabIndex++}`
        panes.push({
            title: 'NewTab',
            content: 'NewTab',
            key: activeKey
        })
        this.setState(() => ({panes, activeKey}))
    }
    remove = (targetKey) => {
        let {activeKey} = this.state
        let lastIndex = 0
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i -1
            }
        })
        const panes = this.state.panes.filter(item => item.key!== targetKey)
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key
        }
        this.setState({
            panes,
            activeKey
        })
    }
    render () {
        return (
            <div>
                <Card title="Tab页标签" className="card-warp">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Tab1" key="1">Content fo TabsPane 1</TabPane>
                        <TabPane tab="Tab2" key="2" disabled>Content fo TabsPane 2</TabPane>
                        <TabPane tab="Tab3" key="3">Content fo TabsPane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="带图标Tab页标签" className="card-warp">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span><Icon type="plus"/>tab1</span>} key="1">Content fo TabsPane 1</TabPane>
                        <TabPane tab={<span><Icon type="edit"/>tab2</span>} key="2">Content fo TabsPane 2</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>tab3</span>} key="3">Content fo TabsPane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab可关闭卡片式标签" className="card-warp">
                    <Tabs
                    activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                    onChange={this.onChange}>
                        {this.state.panes.map(item => (
                            <TabPane tab={item.title} key={item.key}>{item.content}</TabPane>
                        ))}
                    </Tabs>
                </Card>
            </div>
        )
    }
}