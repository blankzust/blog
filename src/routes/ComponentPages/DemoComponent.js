import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import NavigationLayout from '../../components/MainLayout/NavigationLayout'
import DemoComponent from '../../components/Components/demoComponent' 

function index({ location }) {
  return (
    <NavigationLayout location={ location }>
      <DemoComponent />
    </NavigationLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(index);
