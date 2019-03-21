import React from 'react';
import { ListGroup, Form, Col } from 'react-bootstrap';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import sIcon from './../../assets/triangle_icon.png';
import './styless.css';


const Filters = () => { 
    return (
        <div>
            <ListGroup className="filterListGroup"> 
                <ListGroup.Item> 
                    <Typography className="typeFont">
                        <img src={sIcon} alt="sIcon" className="expIcon"/> FILTER COURSE RESULTS
                    </Typography>
                </ListGroup.Item>
                <ListGroup.Item className="listGroupItem">
                    <ExpansionPanel className="expPanel" defaultExpanded="true">
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expPanelSummary">
                        <Typography className="typeFont">Course type</Typography> 
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Form.Group as={Col}>
                                <Form.Check
                                custom="false"
                                type="radio"
                                label="Self paced"
                                name="formHorizontalRadios1"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                custom="false"
                                type="radio"
                                label="Live"
                                name="formHorizontalRadios1"
                                id="formHorizontalRadios2"
                                />
                                <div className="vMore">
                                    view more
                                </div>
                            </Form.Group>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </ListGroup.Item>
                <ListGroup.Item className="listGroupItem">
                    <ExpansionPanel className="expPanel" defaultExpanded="true">
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="typeFont">Delivery type</Typography> 
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Form.Group as={Col}>
                                <Form.Check
                                custom="false"
                                type="radio"
                                label="Any delivery type"
                                name="formHorizontalRadios2"
                                id="formHorizontalRadios3"
                                />
                                <Form.Check
                                custom="false"
                                type="radio"
                                label="Computer-Based Training"
                                name="formHorizontalRadios2"
                                id="formHorizontalRadios4"
                                />
                                <Form.Check
                                custom="false"
                                type="radio"
                                label="Correspondence"
                                name="formHorizontalRadios2"
                                id="formHorizontalRadios5"
                                />
                                <Form.Check
                                custom="false"
                                type="radio"
                                label="Mailed Material"
                                name="formHorizontalRadios2"
                                id="formHorizontalRadios6"
                                />
                                <div className="vMore">
                                    view more
                                </div>
                            </Form.Group>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </ListGroup.Item>
                <ListGroup.Item className="listGroupItem">
                    <ExpansionPanel className="expPanel" defaultExpanded="true">
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="typeFont">Subject area</Typography> 
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Form.Group as={Col} >
                                <Form.Check
                                custom="false"
                                type="radio"
                                label="Any subject area"
                                name="formHorizontalRadios3"
                                id="formHorizontalRadios7"
                                />
                                <Form.Check
                                custom="false"
                                type="radio"
                                label="HIV/AIDS"
                                name="formHorizontalRadios3"
                                id="formHorizontalRadios8"
                                />
                                <Form.Check
                                custom="false"
                                type="radio"
                                label="End-of-Life Care and Palliative Health Care"
                                name="formHorizontalRadios3"
                                id="formHorizontalRadios9"
                                />
                                <Form.Check
                                custom="false"
                                type="radio"
                                label="Domestic Violence"
                                name="formHorizontalRadios3"
                                id="formHorizontalRadios10"
                                />
                                <div className="vMore">
                                    view more
                                </div>
                            </Form.Group>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Filters;