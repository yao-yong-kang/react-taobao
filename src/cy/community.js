// 社区


import React from "react"
import ReactDOM from "react-dom"
import { Row, Col, Tabs } from "antd"

import './css/classify.css'
import Shequ from './img/community_title.png'
import Touxiang from './img/touxiang.png'

const { TabPane } = Tabs;
export default class community extends React.Component{
    render(){
        return (
            <div>
                <div className='logo'>
                    <img src={Shequ}></img>
                </div>
                <div className='tab'>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="每日爆款" key="1">
                            <div className='con'>
                                <img src={Touxiang} width={40}></img><span>用户姓名1</span><span className='fen'><a src='#'>分享</a></span>
                                <div>
                                    <h3>商家名字</h3>
                                    发表内容<br></br>
                                    <img src={Touxiang} width={80}></img>
                                </div>
                            </div>
                            <div className='con'>
                                <img src={Touxiang} width={40}></img><span>用户姓名2</span><span className='fen'><a src='#'>分享</a></span>
                                <div>
                                    <h3>商家名字</h3>
                                    发表内容<br></br>
                                    <img src={Touxiang} width={80}></img>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="趣分享" key="2">
                        趣分享
                        </TabPane>
                        <TabPane tab="宣传素材" key="3">
                        宣传素材
                        </TabPane>
                        <TabPane tab="花粉学堂" key="4">
                        花粉学堂
                        </TabPane>
                    </Tabs>
                </div>
                
            </div>
        )
    }
}