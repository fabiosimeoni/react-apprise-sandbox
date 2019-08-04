
import * as React from "react"

import 'antd/dist/antd.css';
import './styles.css'

import { Layout, Menu, Icon } from "antd"
import { ScaffoldModel } from "./model";
import { connect, BaseState } from "../../state";
import { Login } from "../Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

type Props = BaseState & {

   model : ScaffoldModel

}

const $Scaffold = (props: Props ) => {
  
  const { model } = props
  const { Sider, Content, Header } = Layout


  return <Router>
        <Layout style={{ textAlign: "center", minHeight: '100vh' }}>
        <Sider collapsible defaultCollapsed={true}>
          <Menu theme="dark" mode="inline">
            { model.sections.map ((section,i) => 
              
                <Menu.Item key={i}>
                  <Link to={section.route}>
                    <Icon type={section.icon} />
                    <span>{section.name}</span>
                  </Link>
                </Menu.Item>
             
            )}
          </Menu>
        </Sider>
         <Layout>
        <Header style={{ background: '#fff', padding: 0 }} >
          <Login />     
        </Header>
          <Content style={{ padding: 24, background: '#fff'}}>
               {model.sections.map( (section,i) => 

                <Route exact path={section.route} key={i} component={section.content} />
              )}
          </Content>
      </Layout>
    </Layout>
  </Router>

}

export const Scaffold = connect($Scaffold)