import { ReactElement, useState } from 'react'
import styles from './Upload.module.less'

const Upload = ({ onChange }: { onChange: (newDocument: string) => void }): ReactElement => {
  const [path, setPath] = useState('')
  return (
    <div className={styles.wrapper}>
      <label>
        Upload Document <b>{path}</b>
        <input
          hidden
          accept="text/plain,text/markdown"
          type="file"
          name="file"
          onChange={(e) => {
            const _file = e.target.files?.[0]
            if (_file) {
              const reader = new FileReader()
              reader.onload = (): void => {
                onChange(reader.result as string)
              }
              reader.readAsText(_file)
              setPath(_file.path)
            }
          }}
        />
      </label>
    </div>
  )
}

export default Upload
