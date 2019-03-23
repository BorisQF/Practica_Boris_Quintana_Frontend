import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import sIcon from './../../assets/triangle_icon.png';
import './styless.css';

//Filters component
const Filters = () => { 
    return (
        <div>
            <ListGroup className="filterListGroup"> 
                <ListGroup.Item> 
                    <Typography className="typeFont">
                        <img src={sIcon} alt="sIcon" className="expIcon"/> FILTER COURSE RESULTS
                    </Typography>
                </ListGroup.Item>
                {/* Filter course type */}
                <ListGroup.Item className="listGroupItem">
                    <ExpansionPanel className="expPanel" defaultExpanded={true}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                        <Typography className="typeFont">Course type</Typography> 
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl component="fieldset" >
                                <RadioGroup
                                    aria-label="Gender"
                                    name="gender1"
                                >
                                    <FormControlLabel value="Self paced" control={<Radio color="primary"/>} label="Self paced" />
                                    <FormControlLabel value="Live" control={<Radio color="primary" />} label="Live" />
                                </RadioGroup>
                            </FormControl>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </ListGroup.Item>
                {/* Filter Delivery type */}
                <ListGroup.Item className="listGroupItem">
                    <ExpansionPanel className="expPanel" defaultExpanded={true}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="typeFont">Delivery type</Typography> 
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl component="fieldset" >
                                <RadioGroup
                                    aria-label="Gender"
                                    name="gender1"
                                >
                                    <FormControlLabel value="Any delivery type" control={<Radio color="primary"/>} label="Any delivery type" />
                                    <FormControlLabel value="Computer-Based Training" control={<Radio color="primary" />} label="Computer-Based Training" />
                                    <FormControlLabel value="Correspondence" control={<Radio color="primary" />} label="Correspondence" />
                                    <FormControlLabel value="Mailed Material" control={<Radio color="primary" />} label="Mailed Material" />
                                </RadioGroup>
                                <div className="vMore">
                                    View more
                                </div>
                            </FormControl>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </ListGroup.Item>
                {/* Filter Subject area */}
                <ListGroup.Item className="listGroupItem">
                    <ExpansionPanel className="expPanel" defaultExpanded={true}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="typeFont">Subject area</Typography> 
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl component="fieldset" >
                                <RadioGroup
                                    aria-label="Gender"
                                    name="gender1"
                                >
                                    <FormControlLabel value="Any subject area" control={<Radio color="primary"/>} label="Any subject area" />
                                    <FormControlLabel value="HIV/AIDS" control={<Radio color="primary" />} label="HIV/AIDS" />
                                    <FormControlLabel value="End-of-Life Care and Palliative Health Care" control={<Radio color="primary" />} label="End-of-Life Care and Palliative Health Care" className="alignEnd"/>
                                    <FormControlLabel value="Domestic Violence" control={<Radio color="primary" />} label="Domestic Violence" />
                                </RadioGroup>
                                <div className="vMore">
                                    View more
                                </div>
                            </FormControl>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Filters;