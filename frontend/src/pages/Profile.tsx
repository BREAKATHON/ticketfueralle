import * as React from 'react'
import { Link, navigate, RouteComponentProps } from '@reach/router'
import { UserContext } from '../contexts/UserContext'
import PageWrapper from '../components/PageWrapper';
import { questions } from '../data/questions';

export default function Profile(props: RouteComponentProps) {
  const { user, deleteProfile } = React.useContext(UserContext);

  const confirmDelete = () => {
    if (window.confirm('Would you really like to delete your profile?')) {
      deleteProfile().then(success => {
        if (success) {
          navigate('/');
        }
      });
    }
  }

  if (user) {
    return (
      <PageWrapper title="Dein Profil" subtitle={user.email}>
        <ul>
          {Object.keys(questions).map((question, index) => (
            <React.Fragment key={index}>
              {(user as any)[question] > 0 ? <li tabIndex={0}>{questions[question]}: Ja</li> :
                (user as any)[question] === 0 ? <li tabIndex={0}>{questions[question]}: Ich weiß nicht</li> : null}
            </React.Fragment>
          ))}
        </ul>
        <Link to="/questions" className="button" tabIndex={0}>Edit</Link>

        {/* <button type="button" onClick={confirmDelete}>Profil Löschen</button> */}
      </PageWrapper>
    )
  }
  return null;
}
