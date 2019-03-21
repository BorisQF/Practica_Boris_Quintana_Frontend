import React, { Component } from 'react';
import {Tab, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import PropTypes from 'prop-types';
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
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="tabsItem">
                    <Nav.Link eventKey="second" >Tab 2</Nav.Link>
                  </Nav.Item> 
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row className="justify-content-md-center">
                      <Col sm={12} lg={{ span: 10, offset: 1 }}>
                        <Row>
                          <Col sm={12} lg={4}>
                            <Card>
                              <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>;
                            <h1>hola1 Col4</h1>
                          </Col>
                          <Col sm={12} lg={8}>
                            <h1>hola1 Col8</h1>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <h1>hola2</h1>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
          </Tab.Container>;
        </Row>
      </Container>
    )
  }
}


export default CoursesContainer;
