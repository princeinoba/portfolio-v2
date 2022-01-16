import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Page from "../../components/Page";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkList from "../../components/LinkList";

import resume from "./princeInoba_resume2021.pdf";
import { skills } from "./skills.js";
import "./style.css";

// import {
//   Briefcase,
//   Home,
//   MapPin,
// } from "react-feather";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";

// import {
//   faFacebook,
//   faLinkedin,
//   faGithub,
//   faTwitter
// } from "@fortawesome/free-brands-svg-icons";

// import avatar1 from "../../img/avatar-1.jpg";

function About() {
  return (
    <Page title="About" description="Get to know me a little bit better">
      <Container className="pb-5 mt-4">
        <Row>
          <Col>
            <h1 className="mb-4 display-4 left-border-title">About</h1>
            <div className="left-border-line">
              <Row>
                <Col xd={12} md={8}>
                  <p className="lead">
                    Currently a student at Carleton University studying
                    Software Engineering and recent graduate of the
                    Carleton Coding Bootcamp.
                  </p>
                  <p>
                    Full-stack developer with a background in multimedia design
                    seeking to build elegant and intuitive websites. I love 
                    bringing design ideas to life through programming, 
                    I enjoy experimenting with web design and animations..

                  </p>
                  <p className="mb-5">
                    Innovative problem-solver who is passionate about 
                    developing apps with a focus on mobile-first design and 
                    development. Strengths in creativity, teamwork, where 
                    excellence thrives, and result is priority 
                    and building projects from ideation to execution.
                  </p>
                </Col>
              </Row>
              <Row className="pb-3">
                {skills.map((skill, index) => (
                  <Col key={index} xs={12} md className="mb-3">
                    <h2 className="font-weight-light">
                      <i
                        className={skill.icon + " mr-3"}
                        aria-hidden="true"
                      ></i>
                      {skill.title}
                    </h2>
                    <LinkList items={skill.items} />
                  </Col>
                ))}
              </Row>
              <p className="mb-5">
                <a href={resume} className="icon-link">
                  <i className="far fa-file-pdf" aria-hidden="true"></i>
                  View my Resume for more information
                </a>
              </p>
              <Link to="/contact" className="btn btn-dark" role="button">
                Let's get in touch
                <i
                  className="fas fa-long-arrow-alt-right ml-2"
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

// const ProfileDetails = () => (
//   <Container>
//     <Row><p></p></Row>
//     <Row><p></p></Row>
//     <Row><p></p></Row>
//     <Row>
//       <Col tag="h5" className="mb-0">
//         Profile Details
//       </Col>
//     </Row>
//     <Row><p></p></Row>
//     <Row><p></p></Row>
//     <Col className="text-center">
//       <img
//         src={avatar1}
//         alt="Prince Inoba"
//         className="img-fluid rounded-circle mb-2"
//         width="150"
//         height="150"
//       />
//       <Col tag="h5" className="mb-0">
//         Prince Inoba
//       </Col>
//       <div className="text-muted mb-2">Lead Developer</div>

//       <div>
//         <Button href="https://twitter.com/@RoyceInoba" size="sm" color="primary" className="mr-1">
//           Follow
//         </Button>
//         <Button href="/contact" className="btn btn-dark" role="button"size="sm" color="primary" >
//           Message
//         </Button>
//       </div>
//     </Col>
//     <Row><p></p></Row>
//     <hr className="my-0" />
//     <Row><p></p></Row> 
//     <Col>
//       <Col tag="h5">Skills</Col>
      
//       <Badge color="primary" className="mr-1 my-1">
//         HTML
//       </Badge>
//       <Badge color="primary" className="mr-1 my-1">
//         JavaScript
//       </Badge>
//       <Badge color="primary" className="mr-1 my-1">
//         CSS
//       </Badge>
//       <Badge color="primary" className="mr-1 my-1">
//         Github
//       </Badge>
//       <Badge color="primary" className="mr-1 my-1">
//         Heroku
//       </Badge>
//       <Badge color="primary" className="mr-1 my-1">
//         React
//       </Badge>
//       <Badge color="primary" className="mr-1 my-1">
//         Redux
//       </Badge>
//       <Badge color="primary" className="mr-1 my-1">
//         API
//       </Badge>
//       <Badge color="primary" className="mr-1 my-1">
//         UI
//       </Badge>
//     </Col>
//     <Row><p></p></Row>
//     <hr className="my-0" />
//     <Row><p></p></Row>
//     <Col>
//       <Col tag="h5">About</Col>
//       <Row><p></p></Row>
//       <ul className="list-unstyled mb-0">
//         <li className="mb-1">
//           <Home width={14} height={14} className="mr-1" /> Lives in{" "}
//           <Link to="/dashboard/default">Ottawa, ON</Link>
//         </li>

//         <li className="mb-1">
//           <Briefcase width={14} height={14} className="mr-1" /> Works at{" "}
//           <Link to="/dashboard/default">Courtyard Marriot Ottawa</Link>
//         </li>
//         <li className="mb-1">
//           <MapPin width={14} height={14} className="mr-1" /> From{" "}
//           <Link to="/dashboard/default">Delta</Link>
//         </li>
//       </ul>
//     </Col>
//     <Row>
//       <p> </p>
//     </Row>
//     <hr className="my-0" />
//     <Row><p></p></Row>
//     <Col>
//       <Col tag="h5">Elsewhere</Col>
//       <Row><p></p></Row>

//       <ul className="list-unstyled mb-0">
//         <li className="mb-1">
//           <FontAwesomeIcon icon={faGlobe} fixedWidth className="mr-1" />
//           <a href="/dashboard/default">PrinceInoba.co</a>
//         </li>
//         <li className="mb-1">
//           <FontAwesomeIcon icon={faTwitter} fixedWidth className="mr-1" />
//           <a href="https://twitter.com/@RoyceInoba">Twitter</a>
//         </li>
//         <li className="mb-1">
//           <FontAwesomeIcon icon={faFacebook} fixedWidth className="mr-1" />
//           <a href="https://www.facebook.com/princeinoba">Facebook</a>
//         </li>
//         <li className="mb-1">
//           <FontAwesomeIcon icon={faGithub} fixedWidth className="mr-1" />
//           <a href="https://github.com/prince.inoba/">Github</a>
//         </li>
//         <li className="mb-1">
//           <FontAwesomeIcon icon={faLinkedin} fixedWidth className="mr-1" />
//           <a href="https://www.linkedin.com/in/prince-inoba-803990121/">LinkedIn</a>
//         </li>
//       </ul>
//     </Col>
//   </Container>
// );

const Profile = () => (
  <Container fluid className="p-0">
    <Row>
      <Col md="4" xl="3">
        {/* <ProfileDetails /> */}
      </Col>
      <Col md="8" xl="9">
        <About />
      </Col>
    </Row>
  </Container>
);

export default Profile;
