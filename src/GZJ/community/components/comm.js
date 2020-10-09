import React from 'react'
import ReactDOM from 'react-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch,
    useParams
} from "react-router-dom"

import '../css/style.css'
import ym from '../img/ym.png'

import Tit1 from './title1/tit1'
import Tit2 from './title1/tit2'
import Tit3 from './title1/tit3'
import Tit4 from './title1/tit4'

export default class Comm extends React.Component{
    render(){
        return(
            <div>
                <div className="logo">
                    <img src={ym} />
                </div>
                <Router>
                    <Switch>
                        <Route path="/tit1">
                            <Tit1 />
                        </Route>
                        <Route path="/tit2">
                            <Tit2 />
                        </Route>
                        <Route path="/tit4">
                            <Tit4 />
                        </Route>
                        <Route path="/">
                            <Tit3 />
                        </Route>
                    </Switch>
                    <div className="tab-bar1">
                        <ul>
                            <li>
                                <Link to="/tit1">每日爆款</Link>
                            </li>
                            <li>
                                <Link to="/tit2">趣分享</Link>
                            </li>
                            <li>
                                <Link to="/">宣传素材</Link>
                            </li>
                            <li>
                                <Link to="/tit4">花粉学堂</Link>
                            </li>
                        </ul>
                    </div>
                </Router>
            </div>
            
        )
    }
}