import React from 'react';
import { connect } from 'dva';
import NavigationLayout from '../../components/MainLayout/NavigationLayout'
import ArticlesComponent from '../../components/Articles/Articles'

function Articles({ location }) {
  return (
    <NavigationLayout location={ location }>
      <ArticlesComponent />
    </NavigationLayout>
  );
}

export default connect()(Articles);
