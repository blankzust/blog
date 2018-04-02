import React from 'react';
import { connect } from 'dva';
import styles from './ComponentPages.css';

function ComponentPages() {
  return (
    <div className={styles.normal}>
      Route Component: ComponentPages
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ComponentPages);
