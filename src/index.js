import React from "react"
import ReactDOM from "react-dom"
import MediaQuery from 'react-responsive'
import { Row, Col, Input, SearchOutlined, Carousel, Menu, Statistic } from "antd"
import {ScanOutlined,CommentOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {HomeOutlined, AppstoreOutlined,TeamOutlined, FundOutlined, UserOutlined} from '@ant-design/icons'

import "./css/style.css"
import Indexx from './IronMan/index'
import Header from './yyk/4'
import Nc from "./yyk/16"
import Sj from "./yyk/17"
import Mm from "./yyk/18"
import Tz from "./yyk/24"

import Search from './IronMan/search'
import Result from './IronMan/result'



class Index extends React.Component{
  render(){
      return (
          <Router>
                <div className='header'>
                  <Row>
                    <Col span={1}></Col>
                    <Col span={4}><Link to="/result"><ScanOutlined className='search-logo'/></Link></Col>
                    <Col span={14}><Link to="/search"><Input placeholder="搜索你感兴趣的内容"  className='search' mode={SearchOutlined}/></Link></Col>
                    <Col span={4}><CommentOutlined className='search-logo'/></Col>
                    <Col span={1}></Col>
                </Row>
              </div>
              <div className='tab-bar'>
                  <nav>
                  <ul>
                      <li>
                        <Link to="/"><HomeOutlined className='nav-logo' /><br/>首页</Link>
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
                  {/* path和Link to 对应写路由 */}
                  <Route path="/search">
                      {/* 这里写导入的组件 */}
                      <Search />
                  </Route>
                  <Route path="/result">
                    <Result />
                  </Route>
                  {/* 首页必须在最后一个 */}
                  <Route path="/">
                      <Indexx />
                  </Route>
              </Switch>
          </Router>
      )
  }
}


ReactDOM.render(
  <Index></Index>,
  document.getElementById('root')
)