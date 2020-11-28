import * as React from 'react'
import type { RouteComponentProps } from '@reach/router'

import PageWrapper from '../components/PageWrapper'
import axios from 'axios';

export default function Home(props: RouteComponentProps) {
  React.useEffect(() => {
    axios.get('/api/users/').then((res) => {
      console.log(res);
    })
  }, []);
  return (
    <PageWrapper title="Ticket für Alle">
      Make a profile and share your access needs.
    </PageWrapper>
  )
}
