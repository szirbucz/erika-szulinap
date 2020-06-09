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

    let song  = new Audio(process.env.PUBLIC_URL + "/final.mp3")
    song.play();
    return (
        <Container className="Question">
            <Row className="storyText">
                <Col xs={12}>
                    <Image src={process.env.PUBLIC_URL + image} fluid/>
                </Col>
            </Row>
        </Container>
    )
}