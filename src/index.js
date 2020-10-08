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
import Header from './yyk/4'
import Nc from "./yyk/16"
import Sj from "./yyk/17"
import Mm from "./yyk/18"
import Tz from "./yyk/24"

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
                  </ul>
                  </nav>
              </div>
              <Switch>
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