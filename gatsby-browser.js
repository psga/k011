import "tachyons"
import "katex/dist/katex.min.css"

import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/dracula"

/* eslint-disable */
const component = {
  pre: props => {
    const className = props.children.props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
        theme={theme} 
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className + " overflow-auto ba b--white-20 ma1 br2"} style={style}>
	   <div className="pa3 bg-black">
            {tokens.map((line, i) => {
              if (i === tokens.length - 1) {
                return null
              }
              return (
                <div {...getLineProps({ line, key: i })}  className="bg-black f7 pb1">
                  {line.map((token, key) => {
                    return <span {...getTokenProps({ token, key })} />
                  })}
                </div>
              )
            })}
                </div>
          </pre>
        )}
      </Highlight>
    )
  },
}
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>
}
