// 粉丝福利购

import React from "react"
import ReactDOM from "react-dom"
import { Row, Col, Tabs } from "antd"

import tu from './img/touxiang.png'
const { TabPane } = Tabs;
import './css/fanswelfare.css'
export default class Fanswelfare extends React.Component{
    render(){
        return (
            <div>
                <div className='tab'>
                    <h2>《 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>粉丝福利购</span> <span className='s'>···</span></h2>
                </div>
                <div className='con1'>
                    <img src={tu} width='100%'></img>
                </div>
                <div className='con2'>
                    <div className='t'>
                        <img src={tu} width={80}></img>
                        <span className='shop'>
                            猜你喜欢--商品名字
                        </span>
                    </div>
                    
                </div>
                <div className='bot'>
                    <h2>更多宝贝推荐</h2>
                    <img src={tu} width='50%'></img>
                </div>
                
            </div>
        )
    }
}