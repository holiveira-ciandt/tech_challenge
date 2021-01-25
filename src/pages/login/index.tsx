import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Settings from 'settings';
import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  titleSubmit: string;
  showIcon: boolean;
}

const Login: React.FC<ButtonProps> = ({ titleSubmit = 'Submit' }) => {
  const history = useHistory();
  const [user, setUser] = useState<string>('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('Event', event);
    history.push('/songs');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img src={Settings.logoIheart} alt="iheart_logo" />
        <label htmlFor="uname">
          <input
            type="text"
            value={user}
            onChange={handleChange}
            placeholder="Username"
            name="uname"
            required
          />
        </label>

        <label htmlFor="psw">
          <input type="password" placeholder="Password" name="psw" required />
        </label>
        <button disabled={!user} type="submit">
          {titleSubmit}
        </button>
      </form>
    </Container>
  );
};

export default Login;
