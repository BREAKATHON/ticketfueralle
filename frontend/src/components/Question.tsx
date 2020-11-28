import * as React from 'react';

interface QuestionProps {
  question: string;
}

export default function Question(props: QuestionProps) {
  return (
    <div>
      {props.question}
    </div>
  )
}
