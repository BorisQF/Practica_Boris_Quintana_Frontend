import React, { Component } from 'react'
import { Dropdown, Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import Lupa from './../../assets/Lupa.png';
import './styless.css'

class MiddleBar extends Component {
  render() {
    return (
      <Container fluid="false" className="containerMiddleBar">
        <Row className="justify-content-md-center">
            <Col sm={12} lg={"auto"}>
                <h3>Find CE for a</h3>
            </Col>
            <Col sm={12} lg={"auto"}>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic1" className="dropButton">
                        Florida
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Florida</Dropdown.Item>
                        <Dropdown.Item href="#">Florida</Dropdown.Item>
                        <Dropdown.Item href="#">Florida</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col sm={12} lg={"auto"}>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic2" className="dropButton">
                        Medical Doctor
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Medical Doctor</Dropdown.Item>
                        <Dropdown.Item href="#">Medical Doctor</Dropdown.Item>
                        <Dropdown.Item href="#">Medical Doctor</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row> 
        <Row className="rowMargin">
            <Col sm={12} lg={{ span: 6, offset: 3 }}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default" className="inputFinder">
                            <img src={Lupa} alt="" className="lupa"/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Username"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" 
                    className="inputFinder"
                    />
                </InputGroup>
            </Col>
        </Row>   
      </Container>
    )
  }
}

export default MiddleBar;

