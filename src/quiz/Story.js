import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import "../style/quiz/Story.scss"


export default function Story({text, image, onNext}) {

    if (!!text)
    return (
        <Container className="Question">
            <Row className="storyText">
                <Col xs={12}>
                    <p>{text}</p>
                </Col>
            </Row>
            <Row className="storyButton">
                <Button onClick={onNext} variant="light">Kezdjük!</Button>
            </Row>
        </Container>
    )

    return (
        <Container className="Question">
            <Row className="storyText">
                <Col xs={12}>
                    <Image src={image} fluid/>
                </Col>
            </Row>
        </Container>
    )
}