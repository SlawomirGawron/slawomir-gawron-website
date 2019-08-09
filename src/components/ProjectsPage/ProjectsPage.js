import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import ProjectCard from "src/components/ProjectsPage/projectCard/ProjectCard";
import TicTacToeGameImage from "src/images/TicTacToe.png";
import addMenuBarToComponent from "src/HOC/addMenuBarToComponent/addMenuBarToComponent";

import './ProjectsPage.scss';

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
        const { activeTab } = this.state;

        // React
        if (activeTab === 0) {
            return (
                <ProjectCard
                    component="img"
                    alt="project-0"
                    maxHeight= "500px"
                    maxWidth= "500px"
                    imageHeight={250}
                    imageWidth={400}
                    image={TicTacToeGameImage}
                    title="Tic Tac Toe"
                    summary="A simple Tic Tac Toe game built using react."
                    onImageClickURL="https://sgawron-react-game.netlify.com/"
                    buttonsList={
                        [
                            {text: "Learn More", url: "https://en.wikipedia.org/wiki/Tic-tac-toe"},
                            {text: "Game Link", url: "https://sgawron-react-game.netlify.com/"},
                            {text: "Github", url: "https://github.com/SlawomirGawron/react-game"},
                        ]
                    }
                />
            );
        // Java
        } else if (activeTab === 1) {
            return (
                <ProjectCard
                    component="img"
                    alt="project-1"
                    maxHeight= "500px"
                    maxWidth= "500px"
                    imageHeight={250}
                    imageWidth={400}
                    image="https://assets.exercism.io/tracks/java-bordered-turquoise.png"
                    title="Title 1"
                    summary="Tab 1 summary"
                    onImageClickURL="https://react-redux.js.org/"
                    buttonsList={
                        [
                            {text: "Learn More", url: "https://www.google.ca/"},
                            {text: "button 1", url: "https://react-redux.js.org/"},
                            {text: "button 2", url: "https://react-redux.js.org/"},
                        ]
                    }

                />
            );
        // Other
        } else if (activeTab === 2) {
            return (
                <ProjectCard
                    component="img"
                    alt="project-2"
                    maxHeight= "500px"
                    maxWidth= "500px"
                    imageHeight={250}
                    imageWidth={400}
                    image="https://raddevon.com/wp-content/uploads/2018/10/react.jpg"
                    title="Title 2"
                    summary="Tab 2 summary"
                    onImageClickURL="https://react-redux.js.org/"
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

    componentDidMount() {
        this.setState({
            imageHeightInpx: this.props.mH,
            imageWidthInpx: this.props.mW
        });
    }

    render() {
        const { activeTab } = this.state;

        return (
            <div className="projects-page">
                <Tabs
                    className="projects-page-tabs"
                    value={activeTab}
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
                      className="projects-page-grid"
                      alignItems="center"
                      direction="column"
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

export default addMenuBarToComponent(ProjectsPage);