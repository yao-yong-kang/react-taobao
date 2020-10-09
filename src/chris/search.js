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
import zp from './img/屏幕快照 2020-10-09 上午4.17.28.png'
import { CheckOutlined,TaobaoCircleOutlined,MenuUnfoldOutlined,CaretUpOutlined,CaretDownOutlined,HomeOutlined, AppstoreOutlined,TeamOutlined, FundOutlined, UserOutlined} from '@ant-design/icons'

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const menu = (
    <Menu className="menu">
      <Menu.Item key="0">
        <a className="box6" style={{color:'orange'}} href="#">综合排序<CheckOutlined style={{marginLeft:'300px',marginTop:'12px'}} /></a>
      </Menu.Item>
      <Menu.Item key="1">
        <a className="box6" href="#">优惠券面值由高到低</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a className="box6" href="#">优惠券面值由低到高</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a className="box6" href="#">预估收益由高到低</a>
      </Menu.Item>
      
    </Menu>
  );
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
                                            <Dropdown id="up" overlay={menu} trigger={['click']}>
                                                <a className="ant-dropdown-link"  onClick={e => e.preventDefault()}>
                                                综合 <CaretDownOutlined />
                                                </a>
                                            </Dropdown>
                
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

                            
                            <div style={{marginTop:"1rem",width:'430px',height:'50px',marginBottom:'3rem'}}>
                                <p style={{marginRight:'1rem',marginLeft:'1rem'}}>
                                    <img src={zp} style={{borderRadius:'1rem'}}/>
                                    <p style={{fontSize:'13px',float:"right",marginTop:'-5px'}}>
                                    <h3><TaobaoCircleOutlined style={{color:'orange'}} />网红同款xs max苹果x手机壳7P简约
                                    <br/>
                                    iPhone6S文字8plus情侣XR</h3>
                                    <div style={{color:'red',float:'left'}}>￥16.0</div>
                                    <div style={{color:'#ddd',float:'left',marginLeft:'0.5rem'}}>淘宝价 ￥21</div>
                                    <br/>
                                    <div style={{color:'#ddd',float:'left',marginRight:'0.5rem'}}>已售 0</div>
                                    <div style={{borderRadius:'5rem',background:'pink',float:'left',textAlign:'center',width:'30%',height:'auto'}}>5元券</div>
                                </p>
                                </p> 
                            </div>
                            <br/>
                            <div style={{marginTop:"1rem",width:'430px',height:'50px',marginBottom:'3rem'}}>
                                <p style={{marginRight:'1rem',marginLeft:'1rem'}}>
                                    <img src={zp} style={{borderRadius:'1rem'}}/>
                                    <p style={{fontSize:'13px',float:"right",marginTop:'-5px'}}>
                                    <h3><TaobaoCircleOutlined style={{color:'orange'}} />网红同款xs max苹果x手机壳7P简约
                                    <br/>
                                    iPhone6S文字8plus情侣XR</h3>
                                    <div style={{color:'red',float:'left'}}>￥16.0</div>
                                    <div style={{color:'#ddd',float:'left',marginLeft:'0.5rem'}}>淘宝价 ￥21</div>
                                    <br/>
                                    <div style={{color:'#ddd',float:'left',marginRight:'0.5rem'}}>已售 0</div>
                                    <div style={{borderRadius:'5rem',background:'pink',float:'left',textAlign:'center',width:'30%',height:'auto'}}>5元券</div>
                                </p>
                                </p> 
                            </div>
                            <br/>
                            <div style={{marginTop:"1rem",width:'430px',height:'50px',marginBottom:'3rem'}}>
                                <p style={{marginRight:'1rem',marginLeft:'1rem'}}>
                                    <img src={zp} style={{borderRadius:'1rem'}}/>
                                    <p style={{fontSize:'13px',float:"right",marginTop:'-5px'}}>
                                    <h3><TaobaoCircleOutlined style={{color:'orange'}} />网红同款xs max苹果x手机壳7P简约
                                    <br/>
                                    iPhone6S文字8plus情侣XR</h3>
                                    <div style={{color:'red',float:'left'}}>￥16.0</div>
                                    <div style={{color:'#ddd',float:'left',marginLeft:'0.5rem'}}>淘宝价 ￥21</div>
                                    <br/>
                                    <div style={{color:'#ddd',float:'left',marginRight:'0.5rem'}}>已售 0</div>
                                    <div style={{borderRadius:'5rem',background:'pink',float:'left',textAlign:'center',width:'30%',height:'auto'}}>5元券</div>
                                </p>
                                </p> 
                            </div>
                            <br/>
                            <div style={{marginTop:"1rem",width:'430px',height:'50px',marginBottom:'3rem'}}>
                                <p style={{marginRight:'1rem',marginLeft:'1rem'}}>
                                    <img src={zp} style={{borderRadius:'1rem'}}/>
                                    <p style={{fontSize:'13px',float:"right",marginTop:'-5px'}}>
                                    <h3><TaobaoCircleOutlined style={{color:'orange'}} />网红同款xs max苹果x手机壳7P简约
                                    <br/>
                                    iPhone6S文字8plus情侣XR</h3>
                                    <div style={{color:'red',float:'left'}}>￥16.0</div>
                                    <div style={{color:'#ddd',float:'left',marginLeft:'0.5rem'}}>淘宝价 ￥21</div>
                                    <br/>
                                    <div style={{color:'#ddd',float:'left',marginRight:'0.5rem'}}>已售 0</div>
                                    <div style={{borderRadius:'5rem',background:'pink',float:'left',textAlign:'center',width:'30%',height:'auto'}}>5元券</div>
                                </p>
                                </p> 
                            </div>
                            <br/>
                                </div>
                                
                            </div>
                    

                    </Header>
                    <Content>Content</Content>
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