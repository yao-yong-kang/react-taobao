import React from "react"
import ReactDOM from "react-dom"
import MediaQuery from 'react-responsive'
import 'antd/dist/antd.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import "./css/style.css"
// import Indexx from './IronMan/index'


// 社区
import Community from './cy/community'
// 粉丝福利购
import Fanswelfare from './cy/FansWelfare'
// 搜索结果
import SearchShow from './cy/searchshow'
class Index extends React.Component{
  render(){
      return (
          <Router>
              <div className='tab-bar'>
                  <nav>
                  <ul>
                      <li>
                        <Link to="/">首页</Link>
                      </li>
                      <li>
                        <Link to="/earnings">分类</Link>
                      </li>
                      <li>
                        <Link to="/community">社区</Link>
                      </li>
                  </ul>
                  </nav>
              </div>
              <Switch>
                  {/* path和Link to 对应写路由 */}
                  <Route path="/community">
                      {/* 这里写导入的组件 */}
                      
                  </Route>
                  {/* 首页必须在最后一个 */}
                  <Route path="/earnings">
                      {/* 这里写导入的组件 */}
  
                  </Route>
                  <Route path="/">
                      {/* <Indexx /> */}
                      <SearchShow />
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