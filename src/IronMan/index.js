import React from "react"
import ReactDOM from "react-dom"
import { Row, Col, Input, SearchOutlined, Carousel, Menu, Statistic } from "antd"
import {ScanOutlined,CommentOutlined} from '@ant-design/icons'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import img from '../images/img.jpg'
import img1 from '../images/img1.png'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.png'
import img4 from '../images/img4.jpg'
import news_logo from '../images/featured_headlines_title.png'


const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function onFinish() {
  console.log('抢购结束!');
}

export default class Indexx extends React.Component{
    render(){
        return (
            <div>
                <div className='header'>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={22}>
                            <Menu mode="horizontal" className='nav-box'>
                                <Menu.Item>
                                    精选
                                </Menu.Item>
                                <Menu.Item>
                                    猜你喜欢
                                </Menu.Item>
                                <Menu.Item>
                                    母婴
                                </Menu.Item>
                                <Menu.Item>
                                    食品
                                </Menu.Item>
                                <Menu.Item>
                                    女装
                                </Menu.Item>
                                <Menu.Item>
                                    彩妆
                                </Menu.Item>
                                <Menu.Item>
                                    洗护
                                </Menu.Item>
                                <Menu.Item>
                                    科技
                                </Menu.Item>
                                <Menu.Item>
                                    时尚
                                </Menu.Item>                       
                            </Menu>
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={22}>
                            <Carousel autoplay>
                                <div>
                                    <h3 className='banner'><img src={img1} className='img-size'/></h3>
                                </div>
                                <div>
                                    <h3 className='banner'><img src={img2} className='img-size'/></h3>
                                </div>
                                <div>
                                    <h3 className='banner'><img src={img3} className='img-size'/></h3>
                                </div>
                                <div>
                                    <h3 className='banner'><img src={img4} className='img-size'/></h3>
                                </div>
                            </Carousel>
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                    <nav>
                        <ul className='nav-ul'>
                            <li className='nav-li'>
                                <a href='#'>
                                    <img src={img} className='nav-img'/>
                                    <p style={{color:'#000'}}>9.9包邮</p>
                                </a>
                                <a href='#'>
                                    <img src={img} className='nav-img'/>
                                    <p style={{color:'#000'}}>天猫超市</p>
                                </a>
                            </li>
                            <li className='nav-li'>
                                <a href='#'>
                                    <img src={img} className='nav-img'/>
                                    <p style={{color:'#000'}}>淘抢购</p>
                                </a>
                                <a href='#'>
                                    <img src={img} className='nav-img'/>
                                    <p style={{color:'#000'}}>天猫国际</p>
                                </a>
                            </li>
                            <li className='nav-li'>
                                <a href='#'>
                                    <img src={img} className='nav-img'/>
                                    <p style={{color:'#000'}}>新人专享</p>
                                </a>
                                <a href='#'>
                                    <img src={img} className='nav-img'/>
                                    <p style={{color:'#000'}}>每日爆款</p>
                                </a>
                            </li>
                            <li className='nav-li'>
                                <a href='#'>
                                    <img src={img} className='nav-img'/>
                                    <p style={{color:'#000'}}>聚划算</p>
                                </a>
                                <a href='#'>
                                    <img src={img} className='nav-img'/>
                                    <p style={{color:'#000'}}>天猫严选</p>
                                </a>
                            </li>
                            <li className='nav-li'>
                                <a href='#'>
                                    <img src={img} className='nav-img'/>
                                    <p style={{color:'#000'}}>今日推荐</p>
                                </a>
                                <a href='#'>
                                    <img src={img} className='nav-img'/>
                                    <p style={{color:'#000'}}>大额券</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={6}><img src={news_logo} className='news-logo-size'/></Col>
                        <Col span={16}>
                        <Carousel autoplay effect="fade">
                            <div>
                            <h3>第一条广告</h3>
                            </div>
                            <div>
                            <h3>第二条广告</h3>
                            </div>
                            <div>
                            <h3>第三条广告</h3>
                            </div>
                            <div>
                            <h3>第四条广告</h3>
                            </div>
                        </Carousel>
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                    <div style={{background:'#F5F5F5'}}>
                        <Row>
                            <Col span={1}></Col>
                            <Col span={11} className='buy-left'>
                                <h2 className='img-title'>品牌闪购</h2>
                                <h3 className='img-desc'>洁婷第二件0元</h3>
                                <img src={img} style={{width:'80%',margin:'0 auto'}}/>
                            </Col>
                            <Col span={11}>
                                <Row className='buy-right-up'>
                                    <Col span={12}>
                                        <h2 className='img-title'>限时抢购</h2>
                                        <Countdown value={deadline} onFinish={onFinish} />
                                    </Col>
                                    <Col span={12}>
                                        <img src={img} style={{width:'70%',margin:'0.5rem auto'}}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={11} className='buy-right-left'>
                                        <h2 className='img-title'>爆款单</h2>
                                        <img src={img} style={{width:'70%',margin:'0.5rem auto'}}/>
                                    </Col>
                                    <Col span={2}></Col>
                                    <Col span={11} className='buy-right-left'>
                                        <h2 className='img-title'>大额券榜</h2>
                                        <img src={img} style={{width:'70%',margin:'0.5rem auto'}}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={1}></Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}