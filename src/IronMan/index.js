import React from "react"
import ReactDOM from "react-dom"
import { Row, Col } from "antd"

export default class Indexx extends React.Component{
    render(){
        return (
            <footer>
                <h1>首页</h1>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>&copy; Powered By IronMan -- 2020</Col>
                    <Col span={2}></Col>
                </Row>
                
            </footer>
        )
    }
}