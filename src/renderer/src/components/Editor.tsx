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
      <form>
        <label htmlFor="">
          select
          <input
            accept="text/plain,text/markdown"
            type="file"
            name="file"
            onChange={(e) => {
              const _file = e.target.files?.[0]
              if (_file) {
                const reader = new FileReader()
                reader.onload = (): void => {
                  console.log(reader.result)
                  onChange(reader.result as string)
                }
                reader.readAsText(_file)
              }
            }}
          />
        </label>
        <label htmlFor="">
          select
          <textarea value={document} onChange={(e) => onChange(e.target.value)} />
        </label>
      </form>
    </div>
  )
}

export default Editor
