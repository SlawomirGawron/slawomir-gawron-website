import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';

class ProjectsPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    };

    handleChange = (event, activeTab) => {
        this.setState({activeTab});
    };

    toggleCategories() {
        {/* React */}
        if (this.state.activeTab === 0) {
            return (
                <ProjectCard
                    component="img"
                    alt="project-0"
                    className="project-0-name0"
                    height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshWiWv45FVxyM80R8ayP_bBIpJW4r-wQCQiEyz-sREDCTi8Qp"
                    title="Title 0"
                    summary="Tab 0 summary"
                    buttonsList={
                        [
                            {text: "Learn More", url: "https://www.google.ca/"},
                            {text: "button 1", url: "https://react-redux.js.org/"},
                            {text: "button 2", url: "https://react-redux.js.org/"},
                        ]
                    }
                />
            );
        {/* Java */}
        } else if (this.state.activeTab === 1) {
            return (
                <ProjectCard
                    component="img"
                    alt="project-1"
                    className="project-1-name1"
                    height="140"
                    image="https://assets.exercism.io/tracks/java-bordered-turquoise.png"
                    title="Title 1"
                    summary="Tab 1 summary"
                    buttonsList={
                        [
                            {text: "Learn More", url: "https://www.google.ca/"},
                            {text: "button 1", url: "https://react-redux.js.org/"},
                            {text: "button 2", url: "https://react-redux.js.org/"},
                        ]
                    }

                />
            );
        {/* Other */}
        } else if (this.state.activeTab === 2) {
            return (
                <ProjectCard
                    component="img"
                    alt="project-2"
                    className="project-2-name2"
                    height="140"
                    image="https://raddevon.com/wp-content/uploads/2018/10/react.jpg"
                    title="Title 2"
                    summary="Tab 2 summary"
                    buttonsList={
                        [
                            {text: "Learn More", url: "https://www.google.ca/"},
                            {text: "button 1", url: "https://react-redux.js.org/"},
                            {text: "button 2", url: "https://react-redux.js.org/"},
                        ]
                    }
                />
            );
        } else {
            return (
                alert("Error #101")
            );
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs
                    value={this.state.activeTab}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="React" />
                    <Tab label="Java" />
                    <Tab label="Other" />
                </Tabs>

                <Grid container
                      spacing={16}
                      className="projects-grid"
                      alignItems="center"
                      direction="column"
                      justify="center"
                >
                    <Grid item>
                        <div className="projects-grid-content">
                            {this.toggleCategories()}
                        </div>
                    </Grid>
                </Grid>


            </div>
        );
    }
}

export default ProjectsPage;