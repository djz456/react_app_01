import React from 'react';

import {HashRouter,Route,Link} from 'react-router-dom'

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout

import home from './components/home/home.jsx';
import movie from './components/movie/movie.jsx';
import about from './components/about/about.jsx';




export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 
  render(){
    return (
      <HashRouter> 
<Layout className="layout" style={{height:'100%'}}>
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
        style={{ lineHeight: '64px',marginLeft:'150px' }}
      >
        <Menu.Item key="home">
          <Link to='/home'>首页</Link>
        </Menu.Item>
        <Menu.Item key="movie">
        <Link to='/movie/in_theaters/1'>电影</Link>
        </Menu.Item>
        <Menu.Item key="about">
        <Link to='/about'>关于</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px',backgroundColor:'#fff',padding:'0',height:'100%'}}>
    <Route path='/home' component={home}></Route>
    <Route path='/movie' component={movie}></Route>
    <Route path='/about' component={about}></Route>
   
    </Content>
    <Footer style={{ textAlign: 'center' }}>我的牛逼项目</Footer>
  </Layout>
      </HashRouter>
    )
  }
}



