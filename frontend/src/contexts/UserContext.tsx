import * as React from 'react';
import axios from 'axios';
const questionsDe = [
  'Bist du blind?',
  'Bist du sehbehindert?',
  'Nutzt du einen Rollstuhl? ',
];

const questionObjects = questionsDe.map(question => ({ question, answer: 1 }));

const initalUser = {
  email: "",
  questions: questionObjects,
};

interface IUser {
  _id: string;
  email: string;
  questions: {
    question: string;
    answer: number;
  }[];
  token: string;
}

interface IUserContext {
  user?: IUser;
  answerQuestion: (questionKey: string, answer: number) => void;
  loginUser: (email: string, password: string) => Promise<boolean>;
  registerUser: (email: string, password: string) => Promise<boolean>;
  deleteProfile: () => Promise<boolean>;
  logoutUser: () => void;
}

export const UserContext = React.createContext<IUserContext>({
  answerQuestion: (questionKey: string, answer: number) => { },
  loginUser: (email: string, password: string) => new Promise(() => false),
  registerUser: (email: string, password: string) => new Promise(() => false),
  deleteProfile: () => new Promise(() => false),
  logoutUser: () => { }
});

export const UserContextProvider: React.FunctionComponent = (props) => {
  const [user, setUser] = React.useState<undefined | IUser>()

  const answerQuestion = (questionKey: string, answer: number) => {
    if (user) {
      const newUser = {
        ...user,
        [questionKey]: answer
      } as IUser;

      setUser(newUser);

      axios.put(`/api/users/${user._id}`, newUser, {
        headers: { Authorization: `Bearer ${user.token}` }
      }).then(res => console.log(res));
    }
  };

  const loginUser = (email: string, password: string) => {
    return axios.post("/api/users/authenticate", { email, password })
      .then(res => {
        setUser(res.data);
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  const logoutUser = () => {
    console.log('logout')
    localStorage.clear();
    setUser(undefined);
  }

  const registerUser = (email: string, password: string) => {
    console.log('what')
    return axios.post("/api/users/register", { email, password })
      .then(res => {
        return loginUser(email, password);
      })
      .catch(() => {
        return false;
      });
  }

  const deleteProfile: () => Promise<boolean> = () => {
    if (user) {
      return axios.delete(`/api/users/${user._id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      }).then(() => {
        return true;
      }).catch(() => {
        return false;
      })
    }
    return new Promise(() => false);
  }

  React.useEffect(() => {
    if (user) {
      localStorage.setItem('_token', user.token);
    }
  }, [user && user.token]);

  React.useEffect(() => {
    const token = localStorage.getItem('_token');
    if (token) {
      localStorage.setItem('_token', token);
      axios.get('/api/users/current', {
        headers: { Authorization: `Bearer ${token}` }
      }).then(res => {
        setUser(res.data);
      }).catch(err => {
        localStorage.clear();
        console.error(err);
      })
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, answerQuestion, loginUser, registerUser, deleteProfile, logoutUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
