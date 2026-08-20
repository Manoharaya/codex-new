import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // If a fallback UI is provided, render it. Otherwise, render a generic safe block.
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div style={{ padding: '20px', margin: '20px', border: '1px solid #ef4444', borderRadius: '8px', backgroundColor: '#fef2f2', color: '#991b1b', fontFamily: 'monospace' }}>
          <h3 style={{ marginTop: 0 }}>Something went wrong in this component.</h3>
          <p style={{ fontSize: '12px' }}>{this.state.error && this.state.error.toString()}</p>
          <details style={{ whiteSpace: 'pre-wrap', fontSize: '10px', marginTop: '10px' }}>
            <summary>View stack trace</summary>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
