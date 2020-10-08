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
import Indexx from './IronMan/index'
import Detail from './detail/detail'


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
                        <Link to="/category">分类</Link>
                      </li>
                  </ul>
                  </nav>
              </div>
              <Switch>
                  {/* path和Link to 对应写路由 */}
                  <Route path="/category">
                      {/* 这里写导入的组件 */}
                      <Indexx />
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