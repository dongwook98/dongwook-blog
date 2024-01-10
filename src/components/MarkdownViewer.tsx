import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className='prose lg:prose-xl max-w-none'
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { ref, children, className, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              showLineNumbers
              ref={null}
              {...rest}
              className='text-lg !m-0 !px-0'
              language={match[1]}
              style={oneDark}
              PreTag='div'
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className='w-full max-h-96 object-contain'
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={500}
          />
        ),
        pre({ children, className, ...props }) {
          return (
            <pre {...props} className='bg-[#282C34] p-0'>
              {children}
            </pre>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
