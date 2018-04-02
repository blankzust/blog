import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import MainLayout from '../components/MainLayout/MainLayout'
import UsersComponent from '../components/Users/Users'

function Users({ location }) {
  return (
    <MainLayout location={ location }>
      <UsersComponent />
    </MainLayout>
  );
}

export default connect()(Users);
