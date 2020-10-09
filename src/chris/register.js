import React from 'react'
import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import icon from './img/图标.png'  


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { offset: 2,span: 16 },
  };

const tailLayout = {
    wrapperCol: { offset: 2, span: 16 },
};
  

export default class Register extends React.Component{
    render(){
        return (
            <div>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <div className="box2">
                    <img id="ico" src={ icon }/>
                        <Form 
                        {...layout}
                        >
                            <br/>
                            <br/>
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入手机号!' }]}
                            >
                                <Input className="text" id="tip" placeholder="      请输入您的手机号"/>
                            </Form.Item>
            
                            <Form.Item 
                                name="password"
                                rules={[{ required: false, message: '请输入密码!' }]}
                            >
                            
                                <Input.Password className="text" id="tip1" placeholder="       请输入密码" required="false"/>
                                <i class="icon"></i>
                                
                            </Form.Item>

                            <Form.Item 
                                name="password"
                                rules={[{ required: false, message: '请再次输入密码!' }]}
                            >
                            
                                <Input.Password className="text" id="tip1" placeholder="       请再次输入密码"/>
                                <i class="icon"></i>
                                
                            </Form.Item>
                            <br/>

                            {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item> */}

                            <Form.Item {...tailLayout} >
                                <Button type="primary" htmlType="submit" className="login">
                                注册
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <Col span={2}></Col>
            </Row>
        </div>
        )
    }
}