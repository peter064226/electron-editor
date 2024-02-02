import { ReactElement } from 'react'
import styles from './Editor.module.less'

const Editor = ({
  onChange,
  document
}: {
  document: string
  onChange: (newDocument: string) => void
}): ReactElement => {
  return (
    <div className={styles.wrapper}>
      {document ? (
        <textarea
          className={styles.editor}
          value={document}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <div className={styles.tip}>Input</div>
      )}
    </div>
  )
}

export default Editor
