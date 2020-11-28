import * as React from 'react';
import { navigate, RouteComponentProps } from '@reach/router';

import { UserContext } from '../contexts/UserContext';

export default function Logout(props: RouteComponentProps) {
  const { logoutUser } = React.useContext(UserContext)

  logoutUser();
  navigate('/');

  return null;
};
