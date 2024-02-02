import { ReactElement } from 'react'
import styles from './Preview.module.less'
import Markdown from 'react-markdown'

const Preview = ({ document }: { document: string }): ReactElement => {
  return (
    <div className={styles.wrapper}>
      {document ? (
        <Markdown>{document}</Markdown>
      ) : (
        <div className={styles.tip}>Markdown Preview</div>
      )}
    </div>
  )
}

export default Preview
