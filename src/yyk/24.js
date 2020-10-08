import React from 'react'
import { Row, Col,Carousel } from 'antd';
import { Breadcrumb,Input,Space,Switch,Descriptions } from 'antd';
import { Divider,Button, Popconfirm, message } from 'antd';
import './yyk.css'
import Indexx from '../IronMan/index'
import Header from './4'
import { HomeOutlined,WifiOutlined,LockOutlined,LeftOutlined,EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


export default class Tz extends React.Component{
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
    </Breadcrumb>
      <Row>
          <Col span={24} > <Link to="/fh">返回</Link>
          </Col>
      </Row>
      <Row>
          <Col span={24}  className='center'><div className='title'>通知</div>
          </Col>
      </Row>
      <Row>
        <Col span={24}>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
        <Input prefix="接受消息通知"    suffix={ <p>已开启</p> }/>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
        <Input prefix="收益消息" disabled  suffix={ <Switch className='kg' checkedChildren="开启" unCheckedChildren="关闭" defaultChecked /> }  />

        </Col>
      </Row>
      <Row>
        <Col span={24}>
        <Input prefix="新粉丝消息" disabled suffix={ <Switch className='kg' checkedChildren="开启" unCheckedChildren="关闭" defaultChecked /> }   />
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
 