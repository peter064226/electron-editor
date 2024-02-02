import { useCallback, useState } from 'react'
import Editor from './components/Editor'
import styles from './App.module.less'
import Preview from './components/Preview'

function App(): JSX.Element {
  const [document, setDocument] = useState('')
  const handleDocumentChange = useCallback((newDocument: string) => {
    setDocument(newDocument)
  }, [])
  return (
    <div className={styles.wrapper}>
      <Editor onChange={handleDocumentChange} document={document} />
      <Preview document={document} />
    </div>
  )
}

export default App
