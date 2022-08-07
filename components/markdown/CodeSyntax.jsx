import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { VsStyle } from '@/data/SynatxStyle'

export default function CodeSyntax({ children }) {
  return (
    <div className='relative mb-50px' id='code-block'>
      <SyntaxHighlighter language='html' style={VsStyle}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
