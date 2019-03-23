import React, { Component } from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import CourseDetails from './CourseDetails';
import CourseFeatured from './CourseFeatured';
import './styless.css';


class CoursesList extends Component {

    constructor(props){
        super(props);
        const { courseSearch } = this.props;
        this.state = {
            courseSearch,
            coursesFeaturedJson: null,
            coursesDatailsJson: null
        }
    }

    componentDidMount(){ 
        this.updateCourseFeatured();
        this.updateCourseDetails();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.courseSearch !== this.props.courseSearch){
            
            this.setState({coursesDatailsJson:null,
                            coursesFeaturedJson: null
                        });
            this.updateCourseFeatured();
            this.updateCourseDetails();            
        }
    }

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

    updateCourseDetails = () => {
        fetch(`https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=${this.props.courseSearch}`)
        .then((coursesDatails) => coursesDatails.json())
        .then(coursesDatailsJson => {
            this.setState({
                coursesDatailsJson
            })
        })
        .catch(err => console.log(err));
    }

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


  render() {
      const { coursesFeaturedJson, coursesDatailsJson } = this.state;
    return (
      <div>
        <Row className="rowResulsAndSorted">
            <Col sm={12} lg={5}>
            <div className="divResult">{`Page 1 of ${ coursesDatailsJson != null ? coursesDatailsJson.totalItems: '' } Results`}</div>
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
            <Col sm={12}>
                {/* <CourseFeatured /> */}
                { coursesFeaturedJson != null ? this.mapCourseFeatured(coursesFeaturedJson) : null}
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                {/* <CourseDetails /> */}
                { coursesDatailsJson != null ? this.mapCourseDetails(coursesDatailsJson) : null}
            </Col>
        </Row>
      </div>
    )
  }
}

export default CoursesList;
