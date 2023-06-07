import { Container } from '@mui/material';
import SignIn from '../components/SignIn/SignIn';

const SignInPage = () => {
  return (
    <div className="bg-container padding-container">
      <Container>
        <SignIn />
      </Container>
    </div>
  );
};

export default SignInPage;
