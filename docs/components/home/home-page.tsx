import React, { useContext } from 'react'
import styles from './home-page.less'
import { context, usePrefersColor} from 'dumi/theme'

import headerDark from './svg/header-dark'
import headerLight from './svg/header-light'

export default () => {

  const { locale } = useContext(context)
  const [ color ] = usePrefersColor()
  function trans<T>(en: T, zh: T) {
    return locale === 'zh' ? zh : en
  }

  const simple = [
    {
      id:1,
      title:'免费和开源',
      describe:'所有软件包都有 MIT 许可证，您可以在任何项目中使用 Aunt',
      icon:''
    },
    {
      id:2,
      title:'基于 TypeScript',
      describe:'构建类型安全的应用程序，所有组件和挂钩导出类型',
      icon:''
    },
    {
      id:3,
      title:'轻量化组件库',
      describe:'性能极佳，组件平均体积小于1KB，支持按需引入。',
      icon:''
    }
  ]

  return (
    <div className={styles.homePage}>
      {/* 内容部分 */}
      <div className={styles.main}>
        <div className={styles.title}>
          {
            color == 'dark' ? headerDark() : headerLight()
          }
        </div>
        <div className={styles.describe}>
          比以往更快地构建功能齐全的可访问 Web 应用程序 - Aunt 包含 70 多个可定制的组件和挂钩，可在任何情况下满足您的开发需求。
        </div>
        <div className={styles.simple}>
          {
            simple.map((item)=>{
              return <div key={item.id} className={styles.simpleCard}>
                <h2>{item.title}</h2>
                <span>{item.describe}</span>
              </div>
            })
          }
        </div>
        <div className={styles.button}>
            <a href={trans('/en/guide/quick-start', '/guide/quick-start')} className={styles.buttonFull}>
              开始使用
            </a>
            <a href={'https://github.com/79E/aunt'} target="_blank" className={styles.buttonGhost}>
              <svg aria-hidden="true" role="img" className="octicon octicon-mark-github" viewBox="0 0 16 16" width="20" height="20" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              <span style={{paddingLeft:10}}>GitHub</span>
            </a>
        </div>
      </div>
      {/* 底部导航 */}
      <div className={styles.footer}>
        <div className={styles.copyright}>
          {/* Open-source MIT Licensed | Copyright © 2022-present Aunt */}
        </div>
      </div>
    </div>
  )
}
