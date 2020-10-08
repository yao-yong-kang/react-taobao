import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col,Carousel } from 'antd';
import { Avatar } from 'antd';
import { Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Divider,Button, Popconfirm, message } from 'antd';
import './yyk.css'
import { HomeOutlined,WifiOutlined,LockOutlined,LeftOutlined  } from '@ant-design/icons';
const text = '确定清理缓存吗?';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function confirm() {
  message.info('清理成功.');
}
export default class Header extends React.Component{
    render(){
        return (
  <div>
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
    <Col span={9} ><span>上午11:30</span></Col>
    <Col span={3}>
    <div className='right'> 100%
    <LockOutlined />
    </div>
    </Col>
    </Row>
    </Breadcrumb>
      <Row>
          <Col span={24} > <Link to="/fh">返回</Link>
          </Col>
      </Row>
      <Row>
          <Col span={24}  className='center'><div className='title'>设置</div>
          </Col>
      </Row>
      <Row>
      <Col span={24}  className='center'>
        <Avatar size={100} icon={<UserOutlined />}
          /> 
          </Col>
      </Row>
      <Row>
        <Col span={24}>  
          <Divider><a href="/nc" className='left'>昵称</a></Divider>
        </Col>
      </Row>
      <Row>
        <Col span={24}><Divider><a href=''>我的标签</a></Divider></Col>
      </Row>
      <Row>
        <Col span={24}><Divider><a>支付宝绑定</a></Divider></Col>
      </Row>
      <Row>
        <Col span={24}><Divider><a>微信绑定</a></Divider></Col>
      </Row>
      <Row>
        <Col span={24}><Divider><a>修改手机号</a></Divider></Col>
      </Row>
      <Row>
        <Col span={24}><Divider><a>修改密码</a></Divider></Col>
      </Row>
      <Row>
        <Col span={24} ><Divider><a>消息通知</a></Divider></Col>
      </Row>
      <Row>
        <Col span={24}  className='center' >
        <div style={{ marginLeft: 0, whiteSpace: 'nowrap' }}>
        <Popconfirm placement="top" title={text} onConfirm={confirm} okText="是" cancelText="否" >
        <Divider>清除缓存</Divider>
        </Popconfirm>
      </div>
            </Col>
      </Row>
      <Row>
      <Col span={24} className='center'>
      <button className='button' >退出登录</button>
      </Col>
      </Row>
  </div>
        )
  }
}
 
