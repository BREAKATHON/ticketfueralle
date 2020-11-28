import * as React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

import PageWrapper from '../components/PageWrapper'
import Question from '../components/Question'
import { UserContext } from '../contexts/UserContext';
import { questions } from '../data/questions';

export default function Questions(props: RouteComponentProps) {
  const { user, answerQuestion } = React.useContext(UserContext);

  if (user) {
    return (
      <PageWrapper title="Deine Bedürfnisse" className="questions-page" subtitle="Ich brauche...">

        {Object.keys(questions).map((question, index) =>
          <Question key={index} question={question} answer={(user as any)[question]} answerQuestion={answerQuestion} />
        )}

        <fieldset className="signup">
          <legend>Etwas mehr?</legend>
          <textarea />
        </fieldset>

        <Link to="/profile" tabIndex={0} className="button">Save</Link>
      </PageWrapper>
    )
  }
  return null;
}
