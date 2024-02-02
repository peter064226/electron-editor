import { useCallback, useState } from 'react'
import Editor from './components/Editor'
import styles from './App.module.less'
import Preview from './components/Preview'
import Upload from './components/Upload'
import Operation from './components/Operation'

export type DocType = { path?: string; doc: string }
export type OnChangeType = (params: DocType) => void

function App(): JSX.Element {
  const [path, setPath] = useState('')
  const [document, setDocument] = useState('')
  const handleDocumentChange = useCallback<OnChangeType>(({ path, doc }) => {
    setDocument(doc)
    if (path) setPath(path)
  }, [])
  return (
    <div className={styles.wrapper}>
      <Upload onChange={handleDocumentChange} />
      <div className={styles.content}>
        <Editor onChange={handleDocumentChange} doc={document} path={path} />
        <Preview document={document} />
      </div>
      <Operation doc={document} path={path} />
    </div>
  )
}

export default App
