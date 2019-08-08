import React, { Component } from 'react';
import 'src/components/HomePage/HomePageContent/HomePageContent.scss';
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class HomePageContent extends Component {
    render() {
        return (
            <div className="home-page-content">
                <div className="home-page-content-header">
                    <div className="home-page-content-header-text">
                        <h1>Junior Front End Web Developer</h1>
                        <p> React &nbsp;&bull;&nbsp; HTML &nbsp;&bull;&nbsp; CSS &nbsp;&bull;&nbsp; JavaScript &nbsp;&bull;&nbsp; Java &nbsp;&bull;&nbsp; SQL </p>
                    </div>
                    <div className="home-page-content-header-buttons">
                        <nav>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/slawomir-gawron/" className="fab fa-linkedin" rel="noopener noreferrer" target="_blank">
                                        <span>Linkedin</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/SlawomirGawron" className="fab fa-github" rel="noopener noreferrer" target="_blank">
                                        <span>Github</span>
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
                <Link to="/resume">
                        <span className="home-page-learn-more-button">
                            Learn More
                        </span>
                </Link>
                <footer className="home-page-content-footer">
                    <span className="developer-name">Made by Slawomir Gawron</span>
                </footer>
            </div>
        );
    }
}

export default HomePageContent;