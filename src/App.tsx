import React from 'react';

import Header from './components/header';
import Project from './components/project';
import Contact from './components/contact';
import Intro from './components/intro';
import Skill from './components/skill';

import GlobalStyles from './styles/GlobalStyles';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

const App: React.FC = () => {

  return (
    <div className="App">
      <GlobalStyles />
        <Container>
          <Header />
          <hr />
          <Intro />
          <Contact />
          <Project />
          <Skill />
        <h2 style={{textAlign:'center'}}>감사합니다</h2> <br />
        </Container>
    </div>
  );
}
export default App;
