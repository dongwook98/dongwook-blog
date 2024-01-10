## What you should already know

This guide assumes you have the following basic background:

A general understanding of the Internet and the World Wide Web (WWW).
Good working knowledge of HyperText Markup Language (HTML).
Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.
Where to find JavaScript information
The JavaScript documentation on MDN includes the following:

- Learn Web Development provides information for beginners and introduces basic concepts of programming and the Internet.
- JavaScript Guide (this guide) provides an overview about the JavaScript language and its objects.
- JavaScript Reference provides detailed reference material for JavaScript.
  If you are new to JavaScript, start with the articles in the learning area and the JavaScript Guide. Once you have a firm grasp of the fundamentals, you can use the JavaScript Reference to get more details on individual objects and statements.

## What is JavaScript?

JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JavaScript such as Node.js, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers). Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.

```tsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
              className='text-lg !m-0 !p-0'
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
```
