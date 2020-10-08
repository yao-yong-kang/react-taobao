// 搜索页面展示

import React from "react"
import ReactDOM from "react-dom"

import { Row, Col, Tabs, Input   } from "antd"
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

import tu from './img/touxiang.png'
import './css/searchshow.css'
const { TabPane } = Tabs;
export default class Fanswelfare extends React.Component{
    render(){
        return (
            <div className='con'>
                <div className='tab'>
                    <h2><span>《</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Search
                        placeholder="先领卷，后购买"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                        />
                    </h2>
                </div>
                <div className='con2'>
                    <div className='l'>
                        <div className='ta'>
                            母婴
                        </div>
                        <div className='ta'>
                            母婴
                        </div>
                        <div className='ta'>
                            母婴
                        </div>
                        <div className='ta'>
                            母婴
                        </div>


                    </div>
                    <div className='r'>
                        <div className='shop'>
                            <img src={tu} width='50'></img>
                            <h4>奶粉/其它</h4>
                        </div>
                        <div className='shop'>
                            <img src={tu} width='50'></img>
                            <h4>奶粉/其它</h4>
                        </div>
                        <div className='shop'>
                            <img src={tu} width='50'></img>
                            <h4>奶粉/其它</h4>
                        </div>
                        <div className='shop'>
                            <img src={tu} width='50'></img>
                            <h4>奶粉/其它</h4>
                        </div>

                    </div>
                </div>

                
            </div>
        )
    }
}