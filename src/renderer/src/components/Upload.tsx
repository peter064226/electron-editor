import { ReactElement, useState } from 'react'
import styles from './Upload.module.less'
import { OnChangeType } from '@renderer/App'

const Upload = ({ onChange }: { onChange: OnChangeType }): ReactElement => {
  const [path, setPath] = useState('')
  return (
    <div className={styles.wrapper}>
      <button>
        <label htmlFor="name">
          Upload Document <b>{path}</b>
          <input
            hidden
            accept="text/plain,text/markdown"
            type="file"
            name="file"
            id="name"
            onChange={(e) => {
              const _file = e.target.files?.[0]
              if (_file) {
                const reader = new FileReader()
                reader.onload = (): void => {
                  onChange({ path: _file.path, doc: reader.result as string })
                }
                reader.readAsText(_file)
                setPath(_file.path)
              }
            }}
          />
        </label>
      </button>
    </div>
  )
}

export default Upload
