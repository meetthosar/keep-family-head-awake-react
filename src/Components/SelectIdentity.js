import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap';

export default function SelectIdentity(props) {
  return (
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/glasses-and-mustache.png" />
                        <Card.Body>
                            <Card.Text>
                            I will deply 5000 Tokens and My family will keep me awake
                            </Card.Text>
                            <Button variant="warning" onClick={props.iAmHead}>I am Head</Button>
                        </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/family.png" />
                        <Card.Body>
                            <Card.Text>
                            We are family!! we will keep our Head awake!
                            </Card.Text>
                            <Button variant="info" onClick={props.iAmFamily}>We are Family</Button>
                        </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/thief.png" />
                        <Card.Body>
                            <Card.Text>
                            I am thief!! I will put Head into Sleep and rob the Tokens
                            </Card.Text>
                            <Button variant="danger" onClick={props.iAmThief}>I am Thief</Button>
                        </Card.Body>
                </Card>
            </Col>
        </Row>
  )
}
