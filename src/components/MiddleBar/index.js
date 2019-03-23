import React from 'react'
import { Dropdown, Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import PropTypes from 'prop-types';
import sIcon from './../../assets/search_icon.png';
import './styless.css'

//MiddleBar Component
const MiddleBar = ({getCourseSearch}) => {

    //Get input
    const setField = (e) => {
        getCourseSearch(e.target.value);
    }

    return (
      <Container fluid="false" className="containerMiddleBar">
        <Row className="justify-content-md-center maxWidth">
            <Col sm={12} lg={"auto"}>
                <h3>Find CE for a</h3>
            </Col>
            <Col sm={12} lg={"auto"} className="paddingDropDown">
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
            <Col sm={12} lg={"auto"} className="paddingDropDown">
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
        {/* Search Input */}
            <Col sm={12} lg={{ span: 8, offset: 2 }}>
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

  MiddleBar.propTypes = {
    getCourseSearch : PropTypes.func.isRequired,
  }

export default MiddleBar;

