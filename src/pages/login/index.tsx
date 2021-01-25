import React from 'react';
import { Container } from './styles';

const logoIheart =
  'https://images.squarespace-cdn.com/content/v1/54becebee4b05d09416fe7e4/1475621488473-GG13ZAH35UK8B4AQ7IG6/ke17ZwdGBToddI8pDm48kPatQlumu_Sh_yEKNNtje2NZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7aXK0t8ahyzoOLFEHArbPTIvsJ8ZBSuac1iGVlJVssK0Dume1Xhlc5QUWr24itNJvQ/iHM_primary_Color.jpg?format=300w';

const Login: React.FC = () => (
  <Container>
    <form>
      <img src={logoIheart} alt="iheart_logo" />
      <label htmlFor="uname">
        <input type="text" placeholder="Username" name="uname" required />
      </label>

      <label htmlFor="psw">
        <input type="password" placeholder="Password" name="psw" required />
      </label>
      <button type="submit">Login</button>
    </form>
  </Container>
);

export default Login;
