import * as React from "react"

export class ErrorBoundary extends React.Component<{},any> {

  constructor(props) {
    super(props);
     this.state = { error: null, errorInfo:null  };
  }

  componentDidCatch(error, info) {
    console.log("here")
    this.setState({
      error: error,
      errorInfo: info
    })
   
  }
  render() {
    if (this.state.error) {
        // Error path
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details open={true} style={{ whiteSpace: 'pre-wrap' }}>
              <summary>{this.state.error && this.state.error.toString()}</summary>
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
  }
}