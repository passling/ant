import React from 'react'
import {Menu} from 'antd'
import {NavLink} from 'react-router-dom'
import './index.less'
import {menuList} from '../../config/menuConfig.js'
const {SubMenu} = Menu
class NavLeft extends React.Component{
    componentWillMount () {
        const menuTreeNode = this.renderMenu (menuList)
        this.setState({
            menuTreeNode
        })
    }
    renderMenu = (data) => {
        return data.map(item => {
            if (item.children) {
                return(
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            )
        })
    }
    render () {
        return(
            <div>
                <NavLink to="/home">
                    <div className="logo">
                        <img src={require('../../images/logo-ant.svg')} alt=""/>
                        <h1>Imooc Ms</h1>
                    </div>
                </NavLink>

                <Menu onClick={this.handleClick} theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}
export default NavLeft