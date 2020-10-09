import React from 'react'
import { Layout } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import img from './img/app_bar_plate_1.png'
import { Row, Col,Form, Input, Dropdown, Menu, Statistic,Carousel } from 'antd';
import {
    SearchOutlined,
  } from '@ant-design/icons';
import search from './img/app_bar_service.png'
import sm from './img/app_bar_scan.png'
import ggx from './img/高跟鞋.png'
import { TaobaoCircleOutlined,MenuUnfoldOutlined,CaretUpOutlined,CaretDownOutlined,HomeOutlined, AppstoreOutlined,TeamOutlined, FundOutlined, UserOutlined} from '@ant-design/icons'

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

export default class Register extends React.Component{

    render(){
   
        return (
            <div>
                <Layout>
                    <Header>
                        <div className="box3">
                            <img className="img" src={img}/>
                            <span className="icon"><SearchOutlined /></span>
                            <img className="logo" src={sm}/>
                            <Form.Item 
                                name="search"
                                rules={[{ required: false, message: '请输入密码!' }]}
                            >
                                
                                <Input className="search"  placeholder="       粘贴宝贝标题，先领券在购物" required="false"/>
                                <span className="icon"><SearchOutlined /></span>
                                <img className="logo1" src={search}/>
                                
                            </Form.Item>
                            <div className="box4">
                                <Menu onClick={this.handleClick} selectedKeys={[]} mode="horizontal">
                                    <Menu.Item key="" >
                                     猜你喜欢
                                    </Menu.Item>
                                    <Menu.Item key="" >
                                     母婴
                                    </Menu.Item>
                                    <Menu.Item key="" >
                                     食品
                                    </Menu.Item>
                                    <Menu.Item key="alipay">
                                        <a className="color" href="#" target="_blank" rel="noopener noreferrer">
                                            女鞋
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key="" >
                                     女装
                                    </Menu.Item>
                                    <Menu.Item key="" >
                                     彩妆
                                    </Menu.Item>
                                    <Menu.Item key="" >
                                     洗护
                                    </Menu.Item>

                                    <SubMenu key="sub1" title="Navigation One">
                                        <Menu.Item key="5">Option 5</Menu.Item>
                                        <Menu.Item key="6">Option 6</Menu.Item>
                                        <Menu.Item key="7">Option 7</Menu.Item>
                                        <Menu.Item key="8">Option 8</Menu.Item>
                                    </SubMenu>

                                    </Menu>
                  
                            </div>
                            <div>
                                <Row>
                                    <Col span={1}></Col>
                                    <Col span={22}>
                                        <Menu mode="horizontal" className='result-nav'>
                                
                                            <Menu.Item>
                                                综合<CaretDownOutlined />
                                            </Menu.Item>

                                            <Menu.Item>
                                                销量<CaretUpOutlined id="up"/><CaretDownOutlined id="down" />
                                            </Menu.Item>
                                            <Menu.Item>
                                                券后价<CaretUpOutlined id="up"/><CaretDownOutlined id="down"/>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <MenuUnfoldOutlined />
                                            </Menu.Item>
                                        </Menu>
                                    </Col>
                                    <Col span={1}></Col>    
                                </Row>
                           
                                <div >
                                    <p className="box5">
                                        <p><img className="photo1" src={ ggx }/>
                                            <span className="left">
                                                <p><TaobaoCircleOutlined style={{color:'orange'}} />
                                                网红同款xs max苹果x手机壳7P
                                                简约iPhone6S文字8plus情侣XR</p>
                                                <p>
                                                <span style={{color:'red',marginRight:'60px'}}>5元券</span>
                                                <span style={{color:'red'}}>预估收益：￥0.3</span>
                                                </p>
                                                <p>
                                                <span style={{marginRight:'90px'}}>￥158.0</span>
                                                <span style={{color:'#ddd'}}>已售 211</span>
                                                </p>
                                                
                                            </span>
                                        </p>
                                        <p><img className="photo1" src={ ggx }/>
                                            <span className="left">
                                                <p><TaobaoCircleOutlined style={{color:'orange'}} />
                                                网红同款xs max苹果x手机壳7P
                                                简约iPhone6S文字8plus情侣XR</p>
                                                <p>
                                                <span style={{color:'red',marginRight:'60px'}}>5元券</span>
                                                <span style={{color:'red'}}>预估收益：￥0.3</span>
                                                </p>
                                                <p>
                                                <span style={{marginRight:'90px'}}>￥158.0</span>
                                                <span style={{color:'#ddd'}}>已售 211</span>
                                                </p>
                                                
                                            </span>
                                        </p>
                                    </p>
                                    <p className="box5">
                                        <p><img className="photo1" src={ ggx }/>
                                            <span className="left">
                                                <p><TaobaoCircleOutlined style={{color:'orange'}} />
                                                网红同款xs max苹果x手机壳7P
                                                简约iPhone6S文字8plus情侣XR</p>
                                                <p>
                                                <span style={{color:'red',marginRight:'60px'}}>5元券</span>
                                                <span style={{color:'red'}}>预估收益：￥0.3</span>
                                                </p>
                                                <p>
                                                <span style={{marginRight:'90px'}}>￥158.0</span>
                                                <span style={{color:'#ddd'}}>已售 211</span>
                                                </p>
                                                
                                            </span>
                                        </p>
                                        <p><img className="photo1" src={ ggx }/>
                                            <span className="left">
                                                <p><TaobaoCircleOutlined style={{color:'orange'}} />
                                                网红同款xs max苹果x手机壳7P
                                                简约iPhone6S文字8plus情侣XR</p>
                                                <p>
                                                <span style={{color:'red',marginRight:'60px'}}>5元券</span>
                                                <span style={{color:'red'}}>预估收益：￥0.3</span>
                                                </p>
                                                <p>
                                                <span style={{marginRight:'90px'}}>￥158.0</span>
                                                <span style={{color:'#ddd'}}>已售 211</span>
                                                </p>
                                                
                                            </span>
                                        </p>
                                    </p>
                                        
                                
                                </div>
                                
                            </div>
                        </div>

                    </Header>
                    <Footer>
                        <Router>
                        <div className="tab-bar">
                            <nav>
                            <ul>
                                <li>
                                    <Link to="/"><HomeOutlined className='nav-logo'/><br/>首页</Link>
                                </li>
                                <li>
                                    <Link to="/"><AppstoreOutlined className='nav-logo'/><br/>分类</Link>
                                </li>
                                <li>
                                    <Link to="/"><TeamOutlined className='nav-logo'/><br/>社区</Link>
                                </li>
                                <li>
                                    <Link to="/"><FundOutlined className='nav-logo'/><br/>收益</Link>
                                </li>
                                <li>
                                    <Link to="/"><UserOutlined className='nav-logo'/><br/>我的</Link>
                                </li>
                            </ul>
                            </nav>
                        </div>

                            
                        <Switch>
                            <Route path="/content">
                                <Content />
                            </Route>
                            <Route path="/footer">
                                <Footer />
                            </Route>
                            <Route path="/">
                                <Header />
                            </Route>
                            <Route path="/register">
                                <Register />
                            </Route>
                            
                        </Switch>
                        </Router>        
                    </Footer>
                </Layout>
            
            </div>
        )
    }
}