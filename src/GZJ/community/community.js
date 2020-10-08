import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch,
    useParams
} from "react-router-dom"

import './css/style.css'
import sy from './img/sy.png'
import sy1 from './img/sy1.png'
import fl from './img/fl.png'
import fl1 from './img/fl1.png'
import sq from './img/sq.png'
import sq1 from './img/sq1.png'
import syi from './img/syi.png'
import syi1 from './img/syi1.png'
import wd from './img/wd.png'
import wd1 from './img/wd1.png'


import Index from './components/index'
import Classify from './components/classify'
import Comm from './components/comm'
import Earnings from './components/earnings'
import My from './components/my'

export default class Community extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/classify">
                        <Classify />
                    </Route>
                    <Route path="/comm">
                        <Comm />
                    </Route>
                    <Route path="/earnings">
                        <Earnings />
                    </Route>
                    <Route path="/my">
                        <My />
                    </Route>
                    <Route path="/">
                        <Index />
                    </Route>
                </Switch>
                <div className="tab-bar">
                    <ul>
                        <li>
                            <Link to="/"><img src={sy} /><p>首页</p></Link>
                        </li>
                        <li>
                            <Link to="/classify"><img src={fl} /><p>分类</p></Link>
                        </li>
                        <li>
                            <Link to="/comm"><img src={sq} /><p>社区</p></Link>
                        </li>
                        <li>
                            <Link to="/earnings"><img src={syi} /><p>收益</p></Link>
                        </li>
                        <li>
                            <Link to="/my"><img src={wd} /><p>我的</p></Link>
                        </li>
                    </ul>
                </div>

            </Router>
        )
    }
}

ReactDOM.render(

    <Community></Community>,

    document.getElementById("root")
)
