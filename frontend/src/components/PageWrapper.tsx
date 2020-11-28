import * as React from 'react'

interface PageWrapperProps {
  title: string;
  subtitle?: string;
}

const PageWrapper: React.FunctionComponent<PageWrapperProps> = (props) => {
  return (
    <>
      <h1>
        {props.title}
      </h1>
      <section>
        {props.subtitle ?? <h2>{props.subtitle}</h2>}
        {props.children}
      </section>
    </>
  )
}
export default PageWrapper;