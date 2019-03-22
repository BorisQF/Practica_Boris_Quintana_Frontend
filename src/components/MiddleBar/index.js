import React from 'react'
import { Dropdown, Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import sIcon from './../../assets/search_icon.png';
import './styless.css'

const MiddleBar = ({getCourseSearch}) => {


    const setField = (e) => {
        getCourseSearch(e.target.value);
    }

    return (
      <Container fluid="false" className="containerMiddleBar">
        <Row className="justify-content-md-center maxWidth">
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
        <Row className="rowMargin maxWidth">
            <Col sm={12} lg={{ span: 6, offset: 3 }}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default" className="inputFinder">
                            <img src={sIcon} alt="" className="sIcon"/>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    onChange={(e)=>setField(e)}
                    placeholder="Search courses and providers"
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


export default MiddleBar;

