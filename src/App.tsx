import React from 'react';
import Header from './components/header';
import Project from './components/project';
import Contact from './components/contact';
import Intro from './components/intro';
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
          <Intro />
          <Contact />
          <Project />
        <h2 style={{textAlign:'center'}}>감사합니다</h2> <br />
        </Container>
    </div>
  );
}
export default App;
