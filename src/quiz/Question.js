import React, { useState } from "react";
import "../style/quiz/Question.scss"
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default function Question({ ...props }) {

    let [error, setError] = useState(false);

    let question, convertedAnswers;

    const wrongAnswer = () => {
        setError(true);
        console.log(error);
        window.setTimeout(() => {setError(false)}, 1000);
    }

    const giveAnswer = (index) => ((index === 0) ? () => window.setTimeout(props.onRightAnswer, 500) : wrongAnswer);

    const decideClass = (i) => ("answer_" + (i === 0 ? "right" : "wrong"));


    const convertAnswer = (answer, i) => (
        <Row>
            <Col>
                <Button onClick={giveAnswer(i)} className={"answer " + decideClass(i)} variant="light">
                    {answer}
                </Button>
            </Col>
        </Row>
    );


    if (question !== props.question) {
        question = props.question;
        convertedAnswers = props.answers.map(convertAnswer).sort(() => (Math.random()) - 0.5);
    }

    return (
        <Container className="Question">
            <Row>
                <Col xs={6}>
                    <Image src={process.env.PUBLIC_URL + props.image} fluid roundedCircle className="question-image"/>
                    <p>{props.question}</p>
                </Col>
                <Col xs={6}>
                    {convertedAnswers}
                </Col>
            </Row>
            <Image src={process.env.PUBLIC_URL + "/hanna.png"} fluid className={["error", error ? "active" : "inactive"]}/>
        </Container>
    );
}