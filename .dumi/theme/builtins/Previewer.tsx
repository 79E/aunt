import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  useCallback,
} from 'react'
import { context } from 'dumi/theme'
import type { IPreviewerProps } from 'dumi-theme-default/es/builtins/Previewer'
import Previewer from 'dumi-theme-default/es/builtins/Previewer'
import './Previewer.less'

export const ACTIVE_MSG_TYPE = 'dumi:scroll-into-demo'

export default (props: IPreviewerProps) => {
  const ref = useRef<HTMLDivElement>()
  const { meta } = useContext(context)
  const [previewerProps, setPreviewerProps] = useState<null | IPreviewerProps>(
    null
  )
  const [isActive, setIsActive] = useState(false)
  const isInactive = meta.mobile !== false && !isActive
  const isHidden = props.hidden == true ? true : false
  
  const activeSelf = useCallback(() => {
    if(!isHidden) return
    window.postMessage(
      {
        type: ACTIVE_MSG_TYPE,
        value: JSON.stringify({
          identifier: props.identifier,
          demoUrl: props.demoUrl,
          simulator: props.simulator,
          hidden: isHidden
        }),
      },
      '*'
    )
    setIsActive(true)
  }, [props])

  useEffect(() => {
    // skip if page not loaded
    /* istanbul ignore next */
    if (!meta.title) return

    if(isHidden){
      activeSelf()
    }
    
    if (
      // only render mobile phone when screen max than 960px
      window?.outerWidth > 960 &&
      // do not disable mobile simulator
      meta.mobile !== false
    ) {

      setPreviewerProps(
        Object.assign({}, props, {
          // omit iframe
          iframe: null,
          // omit children
          children: null,
          // show source code
          defaultShowCode: true,
          // hide external action
          hideActions: ['EXTERNAL' as IPreviewerProps['hideActions'][0]].concat(
            props.hideActions
          ),
        })
      )
    } else {
      // use standard mode if screen min than 960px
      setPreviewerProps(props)
    }
    return () => {}
  }, [props, meta])

  useEffect(() => {
    const handler = ev => {
      if (
        ev.data.type === ACTIVE_MSG_TYPE &&
        isActive &&
        JSON.parse(ev.data.value).identifier !== props.identifier
      ) {
        setIsActive(false)
      }
    }

    window.addEventListener('message', handler)
  
    return () => window.removeEventListener('message', handler)
  })

  return (
    <div
      className={`
      ${meta.mobile !== false ? '__dumi-default-mobile-previewer' : null} ${isHidden ? '__dumi-default-previewer--hidden' : ''}
      `}
      onClick={() => {
        if (isInactive) {
          activeSelf()
        }
      }}
      data-inactive={isInactive || undefined}
      ref={ref}
    >
      {previewerProps && (
        <Previewer
          className={isActive ? '__dumi-default-previewer-target' : null}
          {...previewerProps}
        />
      )}
    </div>
  )
}
