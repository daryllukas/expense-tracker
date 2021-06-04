import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import * as ROUTES from './constants/routes';
import Landing from './pages/Landing';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Home from './pages/Home';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Container>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.HOME} component={Home} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
