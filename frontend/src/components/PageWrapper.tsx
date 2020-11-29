import { Link } from '@reach/router';
import * as React from 'react'
import { UserContext, UserContextProvider } from '../contexts/UserContext';

interface PageWrapperProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageWrapper: React.FunctionComponent<PageWrapperProps> = (props) => {
  const { user } = React.useContext(UserContext);
  return (
    <>
      <header>
        <Link to="/" tabIndex={0}>Ticket für Alle</Link>
        {user ? null /*<Link to="/logout" tabIndex={0}>Ausloggen</Link>*/ : <Link to="/login" tabIndex={0}>Einloggen</Link>}
      </header>
      <main className={props.className}>
        <h1 tabIndex={0}>
          {props.title}
        </h1>
        <section className={props.title}>
          {props.subtitle ? <h2 tabIndex={0}>{props.subtitle}</h2> : null}
          {props.children}
        </section>
      </main>
    </>
  )
}
export default PageWrapper;