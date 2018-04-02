import React from 'react';
import { connect } from 'dva';
import styles from './Introduction.css';
import IntroductionComponent from '../components/Introduction/Introduction'
import MainLayout from '../components/MainLayout/MainLayout'

function Introduction({ location }) {
  return (
    <MainLayout location={ location }>
      <IntroductionComponent />
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Introduction);
