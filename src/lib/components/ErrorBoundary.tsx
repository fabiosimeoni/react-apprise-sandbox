import * as React from "react"
import { Modal } from "antd";

export class ErrorBoundary extends React.Component<{},any> {

  constructor(props) {
    super(props);
    this.state = { error: null  };
  }

  componentDidCatch(error, info) {
    this.setState({  error: error, errorInfo: info})
  }

  
  render() {

    if (!this.state.error) 
     return this.props.children;

      return  <Modal
        closable={false}
        title={this.state.error.toString()}
        visible={true}
        footer={<span></span>}>

      <details open={true} style={{ whiteSpace: 'pre-wrap' }}>
      {this.state.errorInfo.componentStack}
      </details>
    </Modal>
    
      
  }
}