import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col,Carousel } from 'antd';
import { Avatar } from 'antd';
import { Breadcrumb,Input  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Divider,Button, Popconfirm, message } from 'antd';
import './yyk.css'
import Indexx from '../IronMan/index'
import Header from './4'
import { HomeOutlined,WifiOutlined,LockOutlined,LeftOutlined,SettingOutlined,MessageOutlined  } from '@ant-design/icons';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
export default class Wd extends React.Component{
    render(){
        return (
  <>
  <Breadcrumb>
    <Row>
      <Col span={12}>
    <Breadcrumb.Item href="">
      <HomeOutlined/>
    </Breadcrumb.Item>
    中国移动
    <Breadcrumb.Item href="">
      <WifiOutlined/>
    </Breadcrumb.Item>
    
    <Breadcrumb.Item></Breadcrumb.Item>
    
    </Col>
    <Col span={9} ><span>上午12:30</span></Col>
    <Col span={3}>
    <div id='right'> 78%
    <LockOutlined />
    </div>
    </Col>
    </Row>
    </Breadcrumb>,
      <Row>
          <Col span={24} >
              <div>
              <Avatar size={50} icon={<UserOutlined />}/>
              <span>昵称昵称昵称</span>
              
                </div>  
                <MessageOutlined />
              <SettingOutlined />
          </Col>
      </Row>
      
      
  </>
        )
  }
}
 