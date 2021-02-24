import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

export default function Search () {
    return(
        <div>
            <Form.Group controlId="search" style={{width:"100%"}}>
            <Container>
            <Row>
                <Col>
                <Form.Label>Search:</Form.Label>
                <Form.Control
                    type='text'
                />
                </Col>
                <Col>
                <Form.Label>Location:</Form.Label>
                <Form.Control
                    type='text'
                />
                </Col>
                <Col>
                <div style={{marginTop:"4.5%"}}>
                    <br/>
                    <Button >Find!</Button>
                </div>
                </Col>
            </Row>
            </Container>
            </Form.Group>       
        </div>
    );
}