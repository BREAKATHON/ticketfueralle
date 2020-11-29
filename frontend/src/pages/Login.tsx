import * as React from 'react'
import { navigate, RouteComponentProps } from '@reach/router'
import { UserContext } from '../contexts/UserContext'
import PageWrapper from '../components/PageWrapper';

export default function Login(props: RouteComponentProps) {
  const { loginUser } = React.useContext(UserContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser(email, password).then(success => {
      if (success) {
        navigate('/profile');
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
    <PageWrapper title="Einloggen">
      <form autoComplete="on" onSubmit={handleSubmit}>
        {error ? <p tabIndex={0} style={{ color: "beige", fontSize: "2rem", border: "2px solid red" }}>Login or password is not correct. Please try again.</p> : null}

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
        <button>Einloggen</button>
      </form>
    </PageWrapper>
  )
}
