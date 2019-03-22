import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import clock from './../../../assets/clock.png';
import laptop from './../../../assets/laptop.png';
import share from './../../../assets/share.png';
import './styless.css';

const hola = '888.88';

function CourseFeatured(props) {
    return (
<Paper className="coursePaper">
        <Row>
            <Col sm={9} className="colTitle">
              <Typography className="courseDetailTitle">
                Preventing MEdical Errors Preventing MEdical Errors
              </Typography>
              <Typography color="textSecondary" className="courseDetailContent">
                Preventing MEdical Errors Preventing MEdical Errors
                  Sorted by: 
              </Typography>
              <Typography color="textSecondary" className="courseDetailExtraInfo">
                  <img src={clock} alt="clock" className="imgSize"/> {`${hola} Hours `} 
                  <img src={laptop} alt="laptop" className="imgSize" /> {hola}
              </Typography>
            </Col>
            <Col sm={3} className="colTitle">
              <Typography className="titleCourse priceFont priceDetailFont">
                {`$ ${hola}`}
              </Typography>
              <Typography className="titleCourse priceFont">
                <img src={share} alt="share" className="shareDetailImg" />
              </Typography>
            </Col>
        </Row>
    </Paper>
    )
  }
  
  CourseFeatured.propTypes = {
  
  }
  
  export default CourseFeatured;
  
