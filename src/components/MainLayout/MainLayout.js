import React from 'react'
import { Menu, BackTop, Layout } from 'antd'
import styles from './MainLayout.css'
import HeaderComponent from './Header'

const { Header, Footer, Sider, Content } = Layout;

function MainLayout({ children, location, ...rest }) {
    return (
        <Layout className={ styles.normal }>
            <Header>
                <HeaderComponent location={ location } />
            </Header>
            
            <Content>
                { children }
            </Content>

            <Footer className={ styles.footer }>
                Blank Blog@2017 Created by ZSF(450811238@qq.com)
            </Footer>
        </Layout>
    )
}

export default MainLayout;