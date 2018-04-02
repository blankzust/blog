import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import NavigationLayout from '../../components/MainLayout/NavigationLayout'
import DefaultComponent from '../../components/Components/' 

function index({ location }) {
  return (
    <NavigationLayout location={ location }>
      <DefaultComponent />
    </NavigationLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(index);
