import React from "react"
import ReactDOM from "react-dom"
import { Row, Col, Input, SearchOutlined, Carousel, Menu, Statistic,Dropdown  } from "antd"
import {ScanOutlined,CommentOutlined,DownOutlined,AppstoreOutlined,TaobaoCircleOutlined } from '@ant-design/icons'

import img from '../images/img.jpg'

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">销量</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">价格</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#">人气</a>
      </Menu.Item>
    </Menu>
  );

export default class Result extends React.Component{
    render() {
        return(
            <div>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                        <Menu mode="horizontal" className='result-nav'>
                            <Menu.Item>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    综合 <DownOutlined />
                                    </a>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item>
                                销量
                            </Menu.Item>
                            <Menu.Item>
                                券后价
                            </Menu.Item>
                            <Menu.Item>
                                <AppstoreOutlined />
                            </Menu.Item>                
                        </Menu>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row style={{marginTop:"1rem"}}>
                    <Col span={1}></Col>
                    <Col span={6} style={{marginRight:'1rem'}}>
                        <img src={img} style={{borderRadius:'1rem'}}/>
                    </Col>
                    <Col span={16}>
                        <h3><TaobaoCircleOutlined style={{color:'orange'}} />网红同款xs max苹果x手机壳7P简约iPhone6S文字8plus情侣XR</h3>
                        <div style={{color:'red',float:'left'}}>￥16.0</div>
                        <div style={{color:'#ddd',float:'left',marginLeft:'0.5rem'}}>淘宝价 ￥21</div>
                        <br/>
                        <div style={{color:'#ddd',float:'left',marginRight:'0.5rem'}}>已售 0</div>
                        <div style={{borderRadius:'5rem',background:'pink',float:'left',width:'30%',height:'auto'}}>5元券</div>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row style={{marginTop:"1rem"}}>
                    <Col span={1}></Col>
                    <Col span={6} style={{marginRight:'1rem'}}>
                        <img src={img} style={{borderRadius:'1rem'}}/>
                    </Col>
                    <Col span={16}>
                        <h3><TaobaoCircleOutlined style={{color:'orange'}} />网红同款xs max苹果x手机壳7P简约iPhone6S文字8plus情侣XR</h3>
                        <div style={{color:'red',float:'left'}}>￥16.0</div>
                        <div style={{color:'#ddd',float:'left',marginLeft:'0.5rem'}}>淘宝价 ￥21</div>
                        <br/>
                        <div style={{color:'#ddd',float:'left',marginRight:'0.5rem'}}>已售 0</div>
                        <div style={{borderRadius:'5rem',background:'pink',float:'left',width:'30%',height:'auto'}}>5元券</div>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row style={{marginTop:"1rem"}}>
                    <Col span={1}></Col>
                    <Col span={6} style={{marginRight:'1rem'}}>
                        <img src={img} style={{borderRadius:'1rem'}}/>
                    </Col>
                    <Col span={16}>
                        <h3><TaobaoCircleOutlined style={{color:'orange'}} />网红同款xs max苹果x手机壳7P简约iPhone6S文字8plus情侣XR</h3>
                        <div style={{color:'red',float:'left'}}>￥16.0</div>
                        <div style={{color:'#ddd',float:'left',marginLeft:'0.5rem'}}>淘宝价 ￥21</div>
                        <br/>
                        <div style={{color:'#ddd',float:'left',marginRight:'0.5rem'}}>已售 0</div>
                        <div style={{borderRadius:'5rem',background:'pink',float:'left',width:'30%',height:'auto'}}>5元券</div>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row style={{marginTop:"1rem"}}>
                    <Col span={1}></Col>
                    <Col span={6} style={{marginRight:'1rem'}}>
                        <img src={img} style={{borderRadius:'1rem'}}/>
                    </Col>
                    <Col span={16}>
                        <h3><TaobaoCircleOutlined style={{color:'orange'}} />网红同款xs max苹果x手机壳7P简约iPhone6S文字8plus情侣XR</h3>
                        <div style={{color:'red',float:'left'}}>￥16.0</div>
                        <div style={{color:'#ddd',float:'left',marginLeft:'0.5rem'}}>淘宝价 ￥21</div>
                        <br/>
                        <div style={{color:'#ddd',float:'left',marginRight:'0.5rem'}}>已售 0</div>
                        <div style={{borderRadius:'5rem',background:'pink',float:'left',width:'30%',height:'auto'}}>5元券</div>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row style={{marginTop:"1rem"}}>
                    <Col span={1}></Col>
                    <Col span={6} style={{marginRight:'1rem'}}>
                        <img src={img} style={{borderRadius:'1rem'}}/>
                    </Col>
                    <Col span={16}>
                        <h3><TaobaoCircleOutlined style={{color:'orange'}} />网红同款xs max苹果x手机壳7P简约iPhone6S文字8plus情侣XR</h3>
                        <div style={{color:'red',float:'left'}}>￥16.0</div>
                        <div style={{color:'#ddd',float:'left',marginLeft:'0.5rem'}}>淘宝价 ￥21</div>
                        <br/>
                        <div style={{color:'#ddd',float:'left',marginRight:'0.5rem'}}>已售 0</div>
                        <div style={{borderRadius:'5rem',background:'pink',float:'left',width:'30%',height:'auto'}}>5元券</div>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row style={{marginTop:"1rem"}}>
                    <Col span={1}></Col>
                    <Col span={6} style={{marginRight:'1rem'}}>
                        <img src={img} style={{borderRadius:'1rem'}}/>
                    </Col>
                    <Col span={16}>
                        <h3><TaobaoCircleOutlined style={{color:'orange'}} />网红同款xs max苹果x手机壳7P简约iPhone6S文字8plus情侣XR</h3>
                        <div style={{color:'red',float:'left'}}>￥16.0</div>
                        <div style={{color:'#ddd',float:'left',marginLeft:'0.5rem'}}>淘宝价 ￥21</div>
                        <br/>
                        <div style={{color:'#ddd',float:'left',marginRight:'0.5rem'}}>已售 0</div>
                        <div style={{borderRadius:'5rem',background:'pink',float:'left',width:'30%',height:'auto'}}>5元券</div>
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>
        ) 
    }
}