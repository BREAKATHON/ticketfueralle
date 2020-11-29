import * as React from 'react'
import { navigate, RouteComponentProps } from '@reach/router'
import { UserContext } from '../contexts/UserContext'
import PageWrapper from '../components/PageWrapper';

export default function Signup(props: RouteComponentProps) {
  const { registerUser } = React.useContext(UserContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerUser(email, password).then(success => {
      if (success) {
        navigate('/questions');
      } else {
        setError(true)
      }
    });
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  return (
    <PageWrapper title="Anmelden">
      {error ? <p tabIndex={0} style={{ color: "beige", fontSize: "2rem", border: "2px solid red" }}>Login or password is not correct. Please try again.</p> : null}

      <form autoComplete="on" onSubmit={handleSubmit}>

        <fieldset className="signup">
          <label>
            <p>E-Mail-Addresse</p>
            <input type="email" name="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            <p>Passwort</p>
            <input type="password" name="password" value={password} onChange={handlePasswordChange} />
          </label>
        </fieldset>

        <button>Anmelden</button>
      </form>
    </PageWrapper>
  )
}
