import React from 'react';

import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

import {Link,Route} from 'react-router-dom'

import movielist from './movielist.jsx'

export default class Movie extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1">
                            <Link to='/movie/in_theaters/1'>正在热映</Link>
                            </Menu.Item>
                        <Menu.Item key="2">
                        <Link to='/movie/comming_son/1'>即将上映</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                        <Link to='/movie/top250/1'>Top250</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ paddingLeft:'1px'}}>

                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 785,
                        }}
                    >
                        <Route path='/movie/:type/:page' component={movielist}></Route>
                        
        </Content>
                </Layout>
            </Layout>
        )
    }
}
