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

import './css/order.css'
import get_back from './img/get_back.png'

import My from './title1/my'
import Lower from './title1/lower'


export default class Order extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/lower">
                        <Lower></Lower>
                    </Route>
                    <Route path="/">
                        <My></My>
                    </Route>
                </Switch>
                <div className="tab-bar">
                    <ul>
                        <img src={get_back} />
                        <li>
                            <Link to="/" className="a1">我的订单</Link>
                        </li>
                        <li>
                            <Link to="/lower" className="a2">下级订单</Link>
                        </li>
                    </ul>
                </div>
            </Router>
            
        )
    }
}


ReactDOM.render(

    <Order></Order>,

    document.getElementById("root")
)