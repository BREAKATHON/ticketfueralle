import * as React from 'react'
import type { RouteComponentProps } from '@reach/router'

import PageWrapper from '../components/PageWrapper'
import Question from '../components/Question'

const questionsDe = [
  'Bist du blind?',
  'Bist du sehbehindert?',
  'Nutzt du einen Rollstuhl? ',
  'Bist du gehbehindert?',
  'Hast du andere Mobilitätseinschränkungen?',
  'Bist du taub? ',
  'Bist du hörbehindert? ',
  'Hast du Schwierigkeiten beim Schreiben und Lesen?',
  'Hast du Angst in engen Räumen?',
  'Erschrecken dich laute Geräusche, plötzliches Licht oder unvorhergesehene Dinge?',
  'Musst du oft zur Toilette?',
  'Findest du dich am Veranstaltungsort alleine zurecht?',
  'Wird dir oft schwindelig?',
  'Benötigst du während des Konzertes Medikamente?',
  'Bist du kleinwüchsig?',
  'Bist du besonders groß?',
]

const questionsEn = []

export default function Signup(props: RouteComponentProps) {
  const [questions] = React.useState(questionsDe);

  return (
    <PageWrapper title="Signup">
      {questions.map(question =>
        <Question question={question} />
      )}
    </PageWrapper>
  )
}
