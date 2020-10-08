import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'

import './css/accredit.css'
import get_back from './img/get_back.png'
import quit from './img/quit.png'
import head from './img/head.jpg'
import arrows from './img/arrows.png'
import app from './img/app.png'

export default class Accredit extends React.Component{
    render(){
        return(
            <div className="gb">
                <div className="head">
                    <a href=""><img className="img1" src={get_back} /></a>
                    <font className="">应用授权</font>
                    <a><img className="img2" src={quit} /></a>
                </div>
                <div className="image">
                    <img className="img1" src={head} />
                    <img className="img2" src={arrows} />
                    <img className="img3" src={app} />
                </div>
                <div className="btn">
                    <a className="a1" href="">
                        <button>授权</button>
                    </a>
                    <a className="a2" href="">切换账号</a>
                </div>
                <div className="con">
                    <p>允许 鑫企点 进行以下操作：</p>
                    <ul>
                        <li>读取您的登录状态信息</li>
                        <li>允许读取您的淘宝订单号和对应手机号信息</li>
                    </ul>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <p>授权后表示您已同意 <a href="">授权协议</a></p>
                </div>
            </div>
            
        )
    }
}


ReactDOM.render(

    <Accredit></Accredit>,

    document.getElementById("root")
)
