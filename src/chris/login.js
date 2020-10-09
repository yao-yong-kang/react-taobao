import React from 'react'
import { Row, Col } from 'antd';
import { Form, Input, Button} from 'antd';
import icon from './img/图标.png'  

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { offset: 2,span: 16 },
  };

const tailLayout = {
    wrapperCol: { offset: 2, span: 16 },
};
  

export default class Login extends React.Component{
    render(){
        return (
            <div>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <div className="box1">
                    <img id="ico" src={ icon }/>
                        <Form 
                        {...layout}
                        >
                            <br/>
                            <br/>
                            <Form.Item className=""
                                name="username"
                                // rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input className="text" id="tip" placeholder="      请输入您的手机号"/>
                            </Form.Item>
            
                            <Form.Item 
                                name="password"
                                // rules={[{ required: false, message: 'Please input your password!' }]}
                            >
                                {/* <div className="icons-list"> */}
                            
                                {/* <SafetyOutlined /> */}
                                <Input.Password className="text" id="tip1" placeholder="       请输入验证码" required="false"/>
                                <i class="icon"></i>
                                {/* </div> */}
                            </Form.Item>
                            <br/>

                            {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item> */}

                            <Form.Item {...tailLayout} >
                                <Button type="primary" htmlType="submit" className="login">
                                登录
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