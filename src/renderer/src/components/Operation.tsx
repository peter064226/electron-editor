import { ReactElement } from 'react'
import styles from './Upload.module.less'
import { DocType } from '@renderer/App'

const Operation = ({ doc, path }: DocType): ReactElement => {
  const save = (): void => {
    window.electron.ipcRenderer.send('operation:save', path, doc)
  }
  return (
    <div className={styles.wrapper}>
      <button disabled={!doc} onClick={save}>
        Save Document <b>{path}</b>
      </button>
    </div>
  )
}

export default Operation
