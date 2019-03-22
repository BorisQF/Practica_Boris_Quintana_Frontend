import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import clock from './../../../assets/clock.png';
import laptop from './../../../assets/laptop.png';
import share from './../../../assets/share.png';
import './styless.css';

const CourseFeatured = ({name, totalHours, price, deliveryMethod, providerName}) => {
    return (
<Paper className="coursePaper">
        <Row>
            <Col sm={9} className="colTitle">
              <Typography className="courseDetailTitle">
                {name}
              </Typography>
              <Typography color="textSecondary" className="courseDetailContent">
                {providerName} 
              </Typography>
              <Typography color="textSecondary" className="courseDetailExtraInfo">
                  <img src={clock} alt="clock" className="imgSize"/> {`${totalHours} Hours `} 
                  <img src={laptop} alt="laptop" className="imgSize" /> {deliveryMethod}
              </Typography>
            </Col>
            <Col sm={3} className="colTitle">
              <Typography className="titleCourse priceFont priceDetailFont">
                {price != 0 ? `$ ${price}` : `FREE`}
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
  
