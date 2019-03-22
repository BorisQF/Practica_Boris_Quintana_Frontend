import React from 'react'
import Paper from '@material-ui/core/Paper';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import clock from './../../../assets/clock.png';
import laptop from './../../../assets/laptop.png';
import share from './../../../assets/share.png';
import './styless.css';

const hola = '888.88';

const CourseFeatured = ({name, totalHours, price, featuredBanner, providerName}) => {
  return (
    <Paper className="coursePaper">
        <Row>
            <Col sm={4}>
              <img src={`https://storage.cebroker.com/CEBroker/${featuredBanner}`} alt="imag" className="imgCourse"/>
            </Col>
            <Col sm={5} className="colTitle">
              <Typography className="courseTitle">
                {name}
              </Typography>
              <div className="featured">
                FEATURED
              </div>
              <Typography color="textSecondary" className="courseContent">
                {providerName} 
              </Typography>
              <Typography color="textSecondary" className="courseExtraInfo">
                  <img src={clock} alt="clock" className="imgSize"/> {`${totalHours} Hours `} 
                  <img src={laptop} alt="laptop" className="imgSize" /> {`Computer-Based Training`}
              </Typography>
            </Col>
            <Col sm={3} className="colTitle">
              <Typography className="titleCourse priceFont">
                {price != null ? `$ ${price}` : `FREE`}
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

