import singleSpaReact from 'single-spa-react';
import React from 'react';
import ReactDOM from 'react-dom';
import AppAnalytics, { AppAnalyticsProps } from './appAnalytics';

const parcelConfig = singleSpaReact<AppAnalyticsProps>({
  React,
  ReactDOM,
  rootComponent: AppAnalytics,
  errorBoundary(err, info, props) {
    return <div>Error in AppAnalytics Parcel</div>;
  },
});

export default parcelConfig;