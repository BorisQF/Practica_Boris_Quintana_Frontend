import React from 'react'
import Paper from '@material-ui/core/Paper';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import clock from './../../../assets/clock.png';
import laptop from './../../../assets/laptop.png';
import share from './../../../assets/share.png';
import image from './../../../assets/Capture36.PNG';
import './styless.css';

const hola = '888.88';

function CourseFeatured(props) {
  return (
    <Paper className="coursePaper">
        <Row>
            <Col sm={4}>
              <img src={image} alt="imag" className="imgCourse"/>
            </Col>
            <Col sm={5} className="colTitle">
              <Typography className="courseTitle">
                Preventing MEdical Errors Preventing MEdical Errors
              </Typography>
              <div className="featured">
                FEATURED
              </div>
              <Typography color="textSecondary" className="courseContent">
                Preventing MEdical Errors Preventing MEdical Errors
                  Sorted by: 
              </Typography>
              <Typography color="textSecondary" className="courseExtraInfo">
                  <img src={clock} alt="clock" className="imgSize"/> {`${hola} Hours `} 
                  <img src={laptop} alt="laptop" className="imgSize" /> {hola}
              </Typography>
            </Col>
            <Col sm={3} className="colTitle">
              <Typography className="titleCourse priceFont">
                {`$ ${hola}`}
              </Typography>
              <Typography className="titleCourse priceFont">
                <img src={share} alt="share" className="shareImg" />
              </Typography>
            </Col>
        </Row>
    </Paper>
  )
}

CourseFeatured.propTypes = {

}

export default CourseFeatured;

