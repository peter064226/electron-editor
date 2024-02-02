import { ReactElement } from 'react'
import styles from './Editor.module.less'
import Markdown from 'react-markdown'

const Preview = ({ document }: { document: string }): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Markdown>{document}</Markdown>
    </div>
  )
}

export default Preview
