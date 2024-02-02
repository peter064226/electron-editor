import { ReactElement } from 'react'
import styles from './Editor.module.less'
import { DocType, OnChangeType } from '@renderer/App'

const Editor = ({
  onChange,
  doc,
  path
}: {
  onChange: OnChangeType
} & DocType): ReactElement => {
  return (
    <div className={styles.wrapper}>
      {doc || path ? (
        <textarea
          className={styles.editor}
          value={doc}
          onChange={(e) => onChange({ doc: e.target.value })}
        />
      ) : (
        <div className={styles.tip}>Input</div>
      )}
    </div>
  )
}

export default Editor
