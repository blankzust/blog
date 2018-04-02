import React from 'react';
import styles from './Introduction.css';

function Introduction() {
  return (
    <div className={styles.normal}>
      <p>本人是前端菜鸟，这个网站是个人学习专用，不定期会发布一些文章，文章内容主要涉及JavaScript、设计模式、React开发等内容</p>
      <p>也会发布一些JavaScript原生组件、Jquery原生组件、React原生组件、AntDesign复用性组件</p>
      <p>欢迎前辈们指点批评，我的个人邮箱为：450811238@qq.com</p>
    </div>
  );
}

export default Introduction;
