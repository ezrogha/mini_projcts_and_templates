import React from 'react';

import styles from './index.module.scss'

export default ({ title, percent }) => (
    <div className={styles.skill}>
      <h4>{title}</h4>
      <div className={styles.progress}>
        <div style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
