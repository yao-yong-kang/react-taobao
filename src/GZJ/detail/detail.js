import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'
import { Carousel } from 'antd';

import '../detail/css/detail.css'
// import './js/detail.js'
import t from './img/t.png'
import brand from './img/brand.jpg'
import xia from './img/xia.png'
import bj1 from './img/bj1.png'
import bj2 from './img/bj2.png'
import xin from './img/xin.png'
import shang from './img/shang.png'
import left from './img/left.png'
import xing from './img/xing.png'
import ddd from './img/ddd.png'
import taobao from './img/taobao.png'

const contentStyle = {
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#f9faf9',
};

export default class Detail extends React.Component{
    render(){
        return(
            <div>
                <div className="body">
                    <Carousel autoplay>
                        <div className="show">
                            <h3 style={contentStyle}>
                                <img src="https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/3338818776/O1CN01Ydb80b2EhSSeBqDBG_!!3338818776.jpg_430x430q90.jpg" />
                            </h3>
                        </div>
                        <div className="show">
                            <h3 style={contentStyle}>
                                <img src="https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/3338818776/O1CN0179T3Ep2EhSTdHqKjy_!!3338818776.jpg_430x430q90.jpg" />
                            </h3>
                        </div>
                        <div className="show">
                            <h3 style={contentStyle}>
                                <img src="https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2976311196/O1CN01YREMdJ1KhoJbaujqb_!!2976311196.jpg_430x430q90.jpg" />
                            </h3>
                        </div>
                    </Carousel>
                    <div className="info">
                        <p><img src={t} />猜你喜欢 商品名称</p>
                        <div className="info_bottom">
                            <span className="span1">淘宝价：</span>
                            <span className="span2">已售</span>

                            <div className="shouyi">
                                <font>预估收益：￥0.0</font>
                            </div>
                            <hr/>
                        </div>
                        
                    </div>

                    <div id="brand">
                        <img src={brand} />
                        <font>cokoeye珂珂旗舰店</font>
                    </div>  
                </div>

                <div className="tb">
                    <a href="" className="a1"><img src={left} /></a>
                    <a href="" className="a2"><img src={ddd} /></a>
                    <a href="" className="a3"><img src={xing} /></a>
                </div>

                <div className="deta">
                    <span>查看宝贝详情</span>
                    
                    <img id="img1" src={xia} />
                    <img id="img2" src={shang} />
                </div>
                <div className="bb_show">
                    <img src="//gdp.alicdn.com/imgextra/i2/250118929/O1CN01Vz70J12FpX646VkGq_!!250118929.jpg" />
                    <img src="https://img.alicdn.com/imgextra/i1/451135386/O1CN01O1JdCb1peppsM8yUf_!!451135386.jpg" />
                </div>

                

                <div className="recommend">
                    <span>
                        <hr/>
                        <img src={xin} />
                        <font>为你推荐</font>
                        <hr/>
                    </span>
                </div>

                <div className="commodity">
                    <ul>
                        <li>
                            <img className="tp" src="//gd1.alicdn.com/imgextra/i2/266923241/O1CN01s1wqYB1ZoQGhEuSrb_!!266923241.jpg_400x400.jpg" />
                            <div className="yf">
                                <img src={taobao} />
                                <font>一件衣服</font>
                                <p className="p1">￥66.6</p>
                                <p className="p2">已售 </p>
                                <hr/>
                            </div>  
                        </li>
                        <li>
                            <img className="tp" src="https://gd1.alicdn.com/imgextra/i2/266923241/O1CN01EiTkqc1ZoQGdTLIWZ_!!266923241-0-lubanu-s.jpg_400x400.jpg" />
                            <div className="yf">
                                <img src={taobao} />
                                <font>一件衣服</font>
                                <p className="p1">￥66.6</p>
                                <p className="p2">已售 </p>
                                <hr/>
                            </div> 
                        </li>
                        <li>
                            <img className="tp" src="https://img.alicdn.com/imgextra/https://picasso.alicdn.com/imgextra/i1/2182695700/O1CNA1XscYsq1ryeC9PmyeE_!!2182695700-0-psf.jpg_430x430q90.jpg" />
                            <div className="yf">
                                <img src={taobao} />
                                <font>一件衣服</font>
                                <p className="p1">￥66.6</p>
                                <p className="p2">已售 </p>
                                <hr/>
                            </div> 
                        </li>
                        <li>
                            <img className="tp" src="https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2104737844/O1CN01T7H9O927obMQThvYQ_!!2104737844.jpg_430x430q90.jpg" />
                            <div className="yf">
                                <img src={taobao} />
                                <font>一件衣服</font>
                                <p className="p1">￥66.6</p>
                                <p className="p2">已售 </p>
                                <hr/>
                            </div> 
                        </li>
                    </ul>
                </div>

                <div className="footer">
                    <a href="" className="a1">
                        <img src={bj1} />
                        <font>分享</font>
                    </a>
                    <a href="" className="a2">
                        <img src={bj2} />
                        <font>购买</font>
                    </a>
                </div>

                {/* <script>
                    $(function(){
                        $('#img1').click(function(){
                            $('#img1').css({display:'none'})
                            $('#img2').css({display:'inline-block'})
                            $('bb_show').css({display:'block'})
                        }),
                        $('#img2').click(function(){
                            $('#img1').css({display:'inline-block'})
                            $('#img2').css({display:'none'})
                            $('bb_show').css({display:'none'})
                        })
                        
                    })
                </script> */}

            </div>

        )
    }
}

ReactDOM.render(
    <Detail></Detail>,
    document.getElementById('content')
  )

