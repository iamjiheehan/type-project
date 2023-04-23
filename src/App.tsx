import React from 'react';
import Header from './components/header';
import Project from './components/project';
import Contact from './components/contact';
import GlobalStyles from './Theme/GlobalStyles';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
        <Container>
          <Header />
          <hr />
          <Project />
          <Contact />
        </Container>

    </div>
  );
}
export default App;
