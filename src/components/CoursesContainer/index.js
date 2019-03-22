import React, { Component } from 'react';
import {Tab, Nav, Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Filters from './Filters';
import CoursesList from './CoursesList';
import './styless.css';


class CoursesContainer extends Component {

  render() {
    return (
      <Container fluid="false">
        <Row className="justify-content-md-center">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Col sm={12} className="colTabs">
                <Nav variant="pills" className="flex-row justify-content-md-center">
                  <Nav.Item className="tabsItem">
                    <Nav.Link eventKey="first">COURSES</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="tabsItem">
                    <Nav.Link eventKey="second" >PROVIDERS</Nav.Link>
                  </Nav.Item> 
                </Nav>
              </Col>
              <Col sm={12} className="colContent">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row className="justify-content-md-center rowMarginTop">
                      <Col sm={12} lg={{ span: 10, offset: 1 }}>
                        <Row>
                          <Col sm={12} lg={3}>
                            <div>
                              <Filters></Filters>
                            </div>
                          </Col>
                          <Col sm={12} lg={7}>
                            <div className="cardMargin">
                              <CoursesList></CoursesList>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  </Tab.Pane>
                </Tab.Content>
              </Col>
          </Tab.Container>
        </Row>
      </Container>
    )
  }
}


export default CoursesContainer;
