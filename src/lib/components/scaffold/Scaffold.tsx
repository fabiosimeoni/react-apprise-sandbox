
import * as React from "react"

import 'antd/dist/antd.css';
import './styles.css'

import { Layout, Menu, Icon } from "antd"
import { ScaffoldModel } from "./model";
import { connect, BaseState } from "../../state";
import { Login } from "../Login";

type Props = BaseState & {

   model : ScaffoldModel

}

const $Scaffold = (props: Props ) => {
  
  const { model } = props
  const { Sider, Content, Header } = Layout


  return <div style={{ textAlign: "center" }}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible defaultCollapsed={true}>
          <Menu theme="dark" mode="inline">
            { model.sections.map ((section,i) => 
              <Menu.Item key={i}>{}
                <Icon type={section.icon} />
                <span>{section.name}</span>
              </Menu.Item>
            )}
          </Menu>
        </Sider>
         <Layout>
        <Header style={{ background: '#fff', padding: 0 }} >
          <Login />     
        </Header>
          <Content style={{ padding: 24, background: '#fff'}}>
            {model.sections.map( (section,i) => <div key={i}>{section.content}</div>) }
          </Content>
      </Layout>
    </Layout>
     
  </div>
}

export const Scaffold = connect($Scaffold)