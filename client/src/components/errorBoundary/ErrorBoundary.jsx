import React, {Component} from 'react';
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from './errorBoundaryStyles';

export default class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    //  process the error
    return {hasError: true};
  }

  componentDidCatch(err, info) {
    console.error('Error:', err);
  }

  render() {
    if (this.state.hasError)
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageurl='https://i.imgur.com/lKJiT77.png' />
          <ErrorImageText>Sorry, this page is broken.</ErrorImageText>
        </ErrorImageOverlay>
      );
    return this.props.children;
  }
}
