import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./css/index.css";
import { Layout, List, Avatar, Image, Tabs  } from "antd";

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }



const { Header, Footer, Content } = Layout;
const data = [
    {
        title: '用户1',
    },
    {
        title: '用户2',
    },
    {
        title: '用户3',
    },
    {
        title: '用户4',
    },
    {
        title: '用户5',
    },
    {
        title: '用户6',
    },
];

ReactDOM.render(
    <>
        <Layout>
            <Header>粉丝</Header>
            <Content>
                <Tabs defaultActiveKey="1" onChange={callback} centered >
                    <TabPane tab="全部" key="1"  className='tag'>
                        {/* 列表 */}
                        <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="15110794996  2019年03月24日"
                                />
                            </List.Item>
                            )}
                        />,
                    </TabPane>
                    <TabPane tab="直邀" key="2">
                        <ImageDemo />
                    </TabPane>
                    <TabPane tab="推荐" key="3">
                        <ImageDemo />
                    </TabPane>
                </Tabs>

      </Content>
            <Footer>超级会员：14位</Footer>
        </Layout>
    </>,
    document.getElementById("container")
);

// 图片
function ImageDemo() {
    return (
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    );
  }
  
