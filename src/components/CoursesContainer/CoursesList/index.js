import React, { Component } from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Pagination from "react-js-pagination";
import PropTypes from 'prop-types';
import CourseDetails from './CourseDetails';
import CourseFeatured from './CourseFeatured';
import './styless.css';

//CoursesList Component
class CoursesList extends Component {

    constructor(props){
        super(props);
        const { courseSearch } = this.props;
        this.state = {
            courseSearch,
            coursesFeaturedJson: null,
            coursesDatailsJson: null,
            activePage: 1
        }
    }
    
    componentDidMount(){ 
        this.updateCourseFeatured();
        this.updateCourseDetails();
    }


    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.courseSearch !== this.props.courseSearch || prevState.activePage !== this.state.activePage){
            
            this.setState({coursesDatailsJson:null,
                            coursesFeaturedJson: null,
                        });

            if(prevProps.courseSearch !== this.props.courseSearch){
                this.setState({
                    activePage: 1
                }); 
            }

            this.updateCourseFeatured();
            this.updateCourseDetails();            
        }
    }

    //Get Course Featured list
    updateCourseFeatured = () => {
        fetch(`https://api.cebroker.com/v2/featuredCoursesProfession?profession=36`)
        .then((coursesFeatured) => coursesFeatured.json())
        .then(coursesFeaturedJson => {
            this.setState({
                coursesFeaturedJson
            })
        })
        .catch(err => console.log(err));
    }

    //Get list of courses
    updateCourseDetails = () => {
        fetch(`https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=${this.state.activePage}&pageSize=10&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=${this.props.courseSearch}`)
        .then((coursesDatails) => coursesDatails.json())
        .then(coursesDatailsJson => {
            this.setState({
                coursesDatailsJson
            })
        })
        .catch(err => console.log(err));
    }

    //Render a list of courses featured
    mapCourseFeatured = (coursesFeatured) => (
        coursesFeatured.map( course =>{
            return ( <CourseFeatured 
                key={course.coursePublicationId}
                name={course.coursePublication.course.name} 
                totalHours={course.coursePublication.totalHours}
                price={course.coursePublication.price}
                featuredBanner={course.coursePublication.course.featuredBanner}
                providerName={course.coursePublication.course.provider.name} 
                />);
        })
    );

    //Render a list of courses 
    mapCourseDetails = (coursesDetails) => (
        coursesDetails.items.map( course =>{
            return ( <CourseDetails 
                key={course.id}
                name={course.course.name} 
                totalHours={course.course.components[1].profession.totalHours}
                price={course.price}
                providerName={course.course.provider.name}
                deliveryMethod={course.course.deliveryMethod.description} 
                />);
        })
    );
    
    //Get page number
    handlePageChange = (pageNumber) => {
        this.setState({activePage: pageNumber});
    }


  render() {
      const { coursesFeaturedJson, coursesDatailsJson, activePage } = this.state;
    return (
      <div>
        <Row className="rowResulsAndSorted">
            {/* Render page number and result number  */}
            <Col sm={12} lg={5}>
                <div className="divResult">{`Page ${activePage} of ${ coursesDatailsJson != null ? coursesDatailsJson.totalItems: '' } Results`}</div>
            </Col>
            <Col sm={12} lg={{ span: 5, offset: 2 }}>
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
            {/* Render a list of courses featured */}
            <Col sm={12}>
                { coursesFeaturedJson != null ? this.mapCourseFeatured(coursesFeaturedJson) : null}
            </Col>
        </Row>
        <Row>
            {/* Render a listo of courses */}
            <Col sm={12}>
                { coursesDatailsJson != null ? this.mapCourseDetails(coursesDatailsJson) : null}
                {/* Render pagination component */}
                { <div>
                    <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={this.state.coursesDatailsJson != null ? this.state.coursesDatailsJson.totalItems: 0 }
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    />
                </div> }
            </Col>
        </Row>
      </div>
    )
  }
}

CoursesList.propTypes = {
    courseSearch: PropTypes.string.isRequired,
}

export default CoursesList;
