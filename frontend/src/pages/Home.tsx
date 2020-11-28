import * as React from 'react'
import { Link, RouteComponentProps } from "@reach/router";

import PageWrapper from '../components/PageWrapper';
import { UserContext } from '../contexts/UserContext';

export default function Home(props: RouteComponentProps) {
  const { user } = React.useContext(UserContext);

  return (
    <PageWrapper title="Ticket für Alle" subtitle={`Du möchtest eine Veranstaltung besuchen. 
    Du hast besondere Bedürfnisse. 
    Was brauchst du Besonderes?
    Auf dieser Seite kannst du Deine Bedürfnisse angeben und dein Profil erstellen.

    Du bekommst das Profil als Link. 
    Den Link kannst du an den Veranstalter senden.
    Dann weiß der Veranstalter, was du brauchst, um die Veranstaltung zu besuchen.
    `}>
      {user ? (
        <Link to="/profile" className="button" tabIndex={0}>Profil</Link>
      ) : (
          <Link to="/signup" className="button" tabIndex={0}>Anmelden</Link>
        )}
    </PageWrapper >
  )
}
