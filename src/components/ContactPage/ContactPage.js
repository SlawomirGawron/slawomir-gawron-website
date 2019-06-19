import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import avatar from "src/images/Slawomir-Gawron-Photo.png";

import './ContactPage.scss';

class Contacts extends Component {
    render() {
        return (
            <div className="contact-page">
                <Grid container
                      className="contact-grid"
                      justify="center"
                      spacing={0}
                      direction="row"
                      alignItems="stretch"
                >
                    <Grid item xs className="left-column-contact">
                        <Typography variant="h3" gutterBottom>
                            Slawomir Gawron
                        </Typography>
                        <hr />
                        <img
                            src={avatar}
                            alt="portfolio-avatar"
                            className="portfolio-photo-contact"
                        />
                        <Typography className="contact-paragraph" variant="body1" gutterBottom>
                            <b>Preferred method of contact:</b> email <br/>
                            <b>Availability</b> 10:00 am - 7:00 pm <br/>
                            If necessary, I can use other forms of communication.
                        </Typography>
                    </Grid>
                    <Grid item xs className="right-column-contact">
                        <Typography variant="h3" gutterBottom>
                            Contact Me
                        </Typography>
                        <hr />
                        <div className="contact-right-list">
                            <List>
                                {/* Phone */}
                                <ListItem>
                                    <ListItemIcon>
                                        <SmartphoneIcon
                                            style={{fontSize: 40, color: "green"}}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography variant="h6" style={{ color: '#ff6f00' }}>
                                                (647) 409-1935
                                            </Typography>
                                        }
                                        secondary="Call or text" />
                                </ListItem>

                                {/* Email */}
                                <ListItem>
                                    <ListItemIcon>
                                        <EmailOutlinedIcon
                                            style={{fontSize: 40, color: "green"}}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography variant="h6" style={{ color: '#ff6f00' }}>
                                                SlawomirGawron8@gmail.com
                                            </Typography>
                                        }
                                        secondary="Checked daily" />
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Contacts;