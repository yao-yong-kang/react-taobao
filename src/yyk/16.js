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
import { HomeOutlined,WifiOutlined,LockOutlined,LeftOutlined  } from '@ant-design/icons';
const text = 'Are you sure you want to clear the cache?';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function confirm() {
  message.info('Cache cleared successfully.');
}
export default class Nc extends React.Component{
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
          <Col span={24} >  <Link to="/fh">返回</Link>
          </Col>
      </Row>
      <Row>
          <Col span={24}  className='center'><div className='title'>昵称</div>
          </Col>
      </Row>
      <Row>
        <Col span={24}>
        <Input placeholder="输入新的昵称" />
        </Col>
      </Row>
      <Row>
      <Col span={24} className='center'> 
      <button className='button'>确认修改</button>
      </Col>
      </Row>
      
  </>
        )
  }
}
 