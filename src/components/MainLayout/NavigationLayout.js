import { Menu, BackTop, Layout, Card } from 'antd'
import styles from './MainLayout.css'
import HeaderComponent from './Header'
import NavigationComponent from './Navigation'

const { Header, Footer, Sider, Content } = Layout;

function NavigationLayout({ children, location, ...rest }) {
    return (
        <Layout className={ styles.normal }>
            <Header>
                <HeaderComponent location={ location } />
            </Header>
            
            <Content>
                <Layout className={ styles.layout }>
                    <Sider className={ styles.slide }>
                        <div className="logo" />
                        <NavigationComponent location={ location } />
                    </Sider>
                    <Content>
                        <div className={ styles.content }>
                            { children }
                        </div>
                        
                    </Content>
                </Layout>
            </Content>

            <Footer className={ styles.footer }>
                Blank Blog@2017 Created by ZSF(450811238@qq.com)
            </Footer>
        </Layout>
    )
}

export default NavigationLayout;