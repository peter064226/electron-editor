import { useCallback, useState } from 'react'
import Editor from './components/Editor'
import styles from './App.module.less'
import Preview from './components/Preview'
import Upload from './components/Upload'
import Operation from './components/Operation'

function App(): JSX.Element {
  const [document, setDocument] = useState('')
  const handleDocumentChange = useCallback((newDocument: string) => {
    setDocument(newDocument)
  }, [])
  return (
    <div className={styles.wrapper}>
      <Upload onChange={handleDocumentChange} />
      <div className={styles.content}>
        <Editor onChange={handleDocumentChange} document={document} />
        <Preview document={document} />
      </div>
      <Operation />
    </div>
  )
}

export default App
