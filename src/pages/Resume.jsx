/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import "../sass/Resume.scss";

const Resume = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      id="resume"
    >
      <div className="resume-container">
        <div className="my-resume-header">
          <h2 className="display-6">Edward Kim</h2>
        </div>

        <div className="mt-3" style={{ marginBottom: "4rem" }}>
          <p>Frontend Web Developer</p>
        </div>

        <div className="main-projects-container">
          <h3 style={{ marginTop: "3rem" }}>Projects</h3>
          <div className="my-resume-projects">
            <div className="project">
              <ul className="project-links-container">
                <li>
                  <h5 className="mb-3">Tech Blog</h5>
                  <p className="text-muted">
                    MVC paradigm full stack web application. Write a blog, and
                    share comments with other users. Sequelize.js ORM for
                    relational database modeling. Backend server codes written
                    with Express.js. Static web pages rendered using
                    Handlebars.js templating engine. Two week build. Deployed on
                    Heroku.
                  </p>
                  <div className="project-links mb-4">
                    <ul>
                      <li>
                        <a
                          href="https://eddyk15501-tech-blog-de175d772777.herokuapp.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://eddyk15501-tech-blog-de175d772777.herokuapp.com/
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/eddyK15501/tech-blog"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://github.com/eddyK15501/tech-blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <h5>Youtube Project</h5>
                  <p className="text-muted">
                    Create React App written with class based components. Video
                    player application that integrates the YouTube Data API v3.
                  </p>
                  <div className="project-links mb-4">
                    <ul>
                      <li>
                        <a
                          href="https://eddyk15501.github.io/youtube-react/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://eddyk15501.github.io/youtube-react/
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/eddyK15501/youtube-react/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://github.com/eddyK15501/youtube-react
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <h5>Timed Trivia Quiz</h5>
                  <p className="text-muted">
                    HTML, CSS, and JavaScript. Pure fundamentals to frontend web
                    development. Test your JavaScript knowledge with a simple,
                    yet complex, timed trivia quiz.
                  </p>
                  <div className="project-links mb-4">
                    <ul>
                      <li>
                        <a
                          href="https://eddyk15501.github.io/timed-trivia-quiz/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://eddyk15501.github.io/timed-trivia-quiz/
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/eddyK15501/timed-trivia-quiz"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://github.com/eddyK15501/timed-trivia-quiz
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-resume-certifications">
          <h3>Courses/Certifications</h3>
          <div className="my-resume-certificates">
            <ul>
              <li id="resource-one">
                <h5>Codecademy</h5>
                <div className="certificate">
                  <ul>
                    <li>Front-End Engineer</li>
                  </ul>
                </div>
              </li>
            </ul>

            <ul>
              <li id="resource-two">
                <h5>Udemy</h5>
                <div className="certificate">
                  <ul>
                    <li>Modern React with Redux - Stephen Grider</li>
                    <li>React Tutorial and Projects Course - John Smilga</li>
                    <li>The Modern Javascript Bootcamp Course - Colt Steele</li>
                    <li>
                      50 Projects In 50 Days - HTML, CSS & JavaScript - Brad
                      Traversy
                    </li>
                    <li>
                      The Complete 2022 Web Development Bootcamp - Dr. Angela Yu
                    </li>
                    <li>
                      Build Responsive Real-World Websites with HTML and CSS -
                      Jonas Schmedtmann
                    </li>
                    <li>
                      Data Structures and Algorithms: Deep Dive Using Java - Tim
                      Buchalka
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-resume-education">
          <h3>Education</h3>
          <div className="edu-container d-flex justify-content-between flex-wrap mb-4">
            <div className="edu-top">
              <p style={{ fontSize: "1.1rem" }}>
                Full Stack Web Development Bootcamp
              </p>
              <p style={{ fontSize: "0.9rem" }}>Chapel Hill, North Carolina</p>
            </div>
          </div>

          <div className="edu-container d-flex justify-content-between align-items-center flex-wrap">
            <div className="edu-top">
              <p style={{ fontSize: "1.1rem" }}>
                Wake Technical Community College
              </p>
              <p style={{ fontSize: "0.9rem" }}>Raleigh, North Carolina</p>
            </div>
            <div className="edu-bottom text-end">
              <ul>
                <li style={{ listStyleType: "none" }}>
                  <h6>
                    <em style={{ fontSize: "1rem" }}>
                      Associate in Science in Computer Science
                    </em>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-resume-skills">
          <h3>Skills</h3>
          <div className="skills-container d-flex justify-content-between align-items-start">
            <ul>
              <li>React.js</li>
              <li>Redux Toolkit</li>
              <li>JavaScript</li>
              <li>Next.js</li>
              <li>TypeScript</li>
            </ul>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git</li>
              <li>Jest</li>
              <li>Bootstrap</li>
            </ul>

            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Resume;
