import singleSpaReact from 'single-spa-react';
import React from 'react';
import ReactDOM from 'react-dom';
import AdminAppAnalytics from './adminAppAnalytics';

const parcelConfig = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: AdminAppAnalytics,
  errorBoundary(err, info, props) {
    return <div>Error in AdminAppAnalytics Parcel</div>;
  },
});

export default parcelConfig;