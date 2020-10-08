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
} from "react-router-dom";

import '../css/order.css'

import All from './title2/all'
import Paid from './title2/paid'
import Settle from './title2/settle'
import Lost from './title2/lost'

export default class My extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/paid">
                        <Paid></Paid>
                    </Route>
                    <Route path="/settle">
                        <Settle></Settle>
                    </Route>
                    <Route path="/lost">
                        <Lost></Lost>
                    </Route>
                    <Route path="/">
                        <All></All>
                    </Route>
                </Switch>
                <div className="tab-bar1">
                    <ul>
                        <li>
                            <Link to="/">全部</Link>
                        </li>
                        <li>
                            <Link to="/paid">已付款</Link>
                        </li>
                        <li>
                            <Link to="/settle">已结算</Link>
                        </li>
                        <li>
                            <Link to="/lost">已失效</Link>
                        </li>
                    </ul>
                </div>
            </Router>
            
        )
    }
}