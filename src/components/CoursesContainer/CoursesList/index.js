import React, { Component } from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import CourseDetails from './CourseDetails';
import CourseFeatured from './CourseFeatured';
import './styless.css';


class CoursesList extends Component {
  render() {
    return (
      <div>
        <Row className="rowResulsAndSorted">
            <Col sm={12} lg={3}>
            <div className="divResult">1773 Results</div>
            </Col>
            <Col sm={12} lg={{ span: 5, offset: 4 }}>
                <Row className="justify-content-md-center">
                    <Col sm={{ span: 3, offset: 4 }} className="colFilter">
                        <Typography color="textSecondary" className="typography">
                            Sorted by: 
                        </Typography>
                    </Col>
                    <Col sm={5} className="buttonMargin">   
                        <Dropdown>
                            <Dropdown.Toggle variant="default" id="dropdown-basic" className="dropDown">
                                Relevance
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Relevance</Dropdown.Item>
                                <Dropdown.Item>Relevance</Dropdown.Item>
                                <Dropdown.Item>Relevance</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col> 
                </Row>   
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <CourseFeatured />
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <CourseDetails />
            </Col>
        </Row>
      </div>
    )
  }
}

export default CoursesList;
