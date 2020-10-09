import React from 'react'
import ReactDOM from 'react-dom'

import '../../css/style.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch,
    useParams
} from "react-router-dom"

import Zarq from './xcsc/zarq'
import Yjs from './xcsc/yjs'
import Hsyx from './xcsc/hsyx'
import Xxhd from './xcsc/xxhd'


export default class Tit3 extends React.Component{
    render(){
        return(
            <Router>
                    <Switch>
                        <Route path="/zarq">
                            <Zarq />
                        </Route>
                        <Route path="/yjs">
                            <Yjs />
                        </Route>
                        <Route path="/xxhd">
                            <Xxhd />
                        </Route>
                        <Route path="/">
                            <Hsyx />
                        </Route>
                    </Switch>
                    <div className="tab-bar2">
                        <ul>
                            <li>
                                <Link to="/zarq">早安日签</Link>
                            </li>
                            <li>
                                <Link to="/yjs">遇见说</Link>
                            </li>
                            <li>
                                <Link to="/">花生严选</Link>
                            </li>
                            <li>
                                <Link to="/xxhd">星选好店</Link>
                            </li>
                        </ul>
                    </div>
                </Router>
            
        )
    }
}