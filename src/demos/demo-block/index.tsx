import React, { FunctionComponent } from 'react'
import styles from './index.less'

interface Props {
  title: string
  padding?: string
  background?: string
  children?: React.ReactNode
}

export const DemoBlock: FunctionComponent<Props> = props => {
  return (
    <div className={styles.demoBlock}>
      <div className={styles.title}>{props.title}</div>
      <div
        className={styles.main}
        style={{
          padding: props.padding,
          background: props.background,
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

DemoBlock.defaultProps = {
  padding: '0px 12px',
  background: 'transparent',
}
