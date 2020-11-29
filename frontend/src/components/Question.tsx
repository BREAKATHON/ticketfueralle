import * as React from 'react';
import { questions } from '../data/questions';

interface QuestionProps {
  answerQuestion: (questionKey: string, answer: number) => void;
  question: string;
  answer: number;
}

export default function Question(props: QuestionProps) {
  const handleChange = (value: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      props.answerQuestion(props.question, value);
    }
  }

  return (
    <fieldset className="signup">
      <legend>{questions[props.question]}</legend>

      <label className={`button yes ${props.answer === 1 ? 'active' : ''}`}>
        <input type="radio" name={props.question} checked={props.answer === 1} onChange={handleChange(1)} />
          Ja
      </label>
      <label className={`button no ${props.answer === -1 ? 'active' : ''}`}>
        <input type="radio" name={props.question} checked={props.answer === -1} onChange={handleChange(-1)} />
          Nein
      </label>
      <label className={`button dont-know ${props.answer === 0 ? 'active' : ''}`}>
        <input type="radio" name={props.question} checked={props.answer === 0} onChange={handleChange(0)} />
          Ich weiß nicht
      </label>
    </fieldset>
  )
}
