import React from 'react'
import { Menu, BackTop, Icon } from 'antd'
import { Link } from 'dva/router'
import Login from './Login.js'
import styles from './index.less'

function Header({ location }) {
    return (
        <div className={styles.topArea}>
            <Menu
                selectedKeys={[location.pathname]}
                mode="horizontal"
                theme="dark"
            >
                <Menu.Item key="/components">
                    <Link to="/components"><Icon type="code" />组件</Link>
                </Menu.Item>
                <Menu.Item key="/articles">
                    <Link to="/articles"><Icon type="bulb" />文章</Link>
                </Menu.Item>
                <Menu.Item key="/introduction">
                    <Link to="/introduction"><Icon type="smile-o" />关于我</Link>
                </Menu.Item>
            </Menu>
            <Login />
        </div>
    )
}

export default Header;