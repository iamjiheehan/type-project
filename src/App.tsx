import React from 'react';
import Header from './components/header';
import Project from './components/project';
import GlobalStyles from './Theme/GlobalStyles';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <Header />
        <Project />
      </Container>
    </div>
  );
}
export default App;
