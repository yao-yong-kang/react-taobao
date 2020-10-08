import React from "react"
import ReactDOM from "react-dom"
import { Row, Col, Input, SearchOutlined, Carousel, Menu, Statistic, Tag } from "antd"
import {ScanOutlined, CommentOutlined, FireOutlined} from '@ant-design/icons'

function log(e) {
    console.log(e);
  }
  
function preventDefault(e) {
e.preventDefault();
console.log('Clicked! But prevent default.');
}

export default class Search extends React.Component{
    render() {
        return(
            <div>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                        <h2 style={{float:'left',margin:'1rem 0'}}><FireOutlined />大家都在搜</h2>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22} style={{marginBottom:'1rem'}}>
                        <Tag closable onClose={log} style={{borderRadius:'10rem',width:'30%',height:'auto',background:'#ddd',float:'left'}}>
                            父亲节大礼包
                        </Tag>
                        <Tag closable onClose={log} style={{borderRadius:'10rem',width:'30%',height:'auto',background:'#ddd',float:'left'}}>
                            施华蔻超低底价
                        </Tag>
                        <Tag closable onClose={log} style={{borderRadius:'10rem',width:'30%',height:'auto',background:'#ddd',float:'left'}}>
                            冰糖黄桃
                        </Tag>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22} style={{marginBottom:'1rem'}}>
                        <Tag closable onClose={log} style={{borderRadius:'10rem',width:'30%',height:'auto',background:'#ddd',float:'left'}}>
                            零食大礼包
                        </Tag>
                        <Tag closable onClose={log} style={{borderRadius:'10rem',width:'30%',height:'auto',background:'#ddd',float:'left'}}>
                            天然洗衣粉
                        </Tag>
                        <Tag closable onClose={log} style={{borderRadius:'10rem',width:'30%',height:'auto',background:'#ddd',float:'left'}}>
                            立白洗衣液
                        </Tag>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22} style={{marginBottom:'1rem'}}>
                        <Tag closable onClose={log} style={{borderRadius:'10rem',width:'30%',height:'auto',background:'#ddd',float:'left'}}>
                            玉米红豆祛湿茶
                        </Tag>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                        <h2 style={{float:'left',margin:'1rem 0'}}><FireOutlined />搜索历史</h2>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22} style={{marginBottom:'1rem'}}>
                        <Tag closable onClose={log} style={{borderRadius:'10rem',width:'30%',height:'auto',background:'#ddd',float:'left'}}>
                            switch
                        </Tag>
                        <Tag closable onClose={log} style={{borderRadius:'10rem',width:'30%',height:'auto',background:'#ddd',float:'left'}}>
                            哈哈哈
                        </Tag>
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>
        )   
    }
}