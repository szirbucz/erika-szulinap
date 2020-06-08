import React from 'react';
import playbook from './playbook'
import { Container, Image, Row, Col } from 'react-bootstrap';
import Quiz from './quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Container>
      <Row>
          <Col xs={12}>
            <Image src="%PUBLIC_URL%/szulinap.png" fluid />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Quiz playbook={playbook}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
