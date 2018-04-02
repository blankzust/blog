import { Menu } from 'antd'
import menuItemsJson from '../../utils/menu-items.json'
import { Link } from 'dva/router'

function Navigation({ location }) {
    const pathname = location.pathname;
    let menus = [];
    const pathparams = pathname.split('/');
    if(pathparams.length > 1) {
        menus = menuItemsJson[pathparams[1]];
    }
    
    return (
        <Menu selectedKeys={[pathname]}>
            {
                menus.map((menu) => {
                    if(menu.children) {
                        return (
                            <Menu.SubMenu key={ menu.route } title={ menu.title }>
                                {
                                    menu.children.map((childMenu) => (
                                        <Menu.Item key={ childMenu.route }><Link to={ childMenu.route }>{ childMenu.title }</Link></Menu.Item>
                                    ))
                                }
                            </Menu.SubMenu>
                        )
                    } else {
                        return (
                            <Menu.Item key={ menu.route }><Link to={ menu.route }>{ menu.title }</Link></Menu.Item>
                        )
                    }
                })
            }
        </Menu>
    )
}

export default Navigation;