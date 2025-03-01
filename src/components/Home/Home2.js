import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a  passionate Full Stack Developer specializing in <b className="purple">React and Node.js</b>.
              I enjoy building scalable, efficient applications and solving complex problems. With experience in <b className="purple">MySQL, AWS, and Serverless technologies</b>, I ensure robust and efficient backend solutions.
              <br />
              <br />
              My technical skills include:
              <ul>
                <li><b className="purple">Frontend:</b> React, JavaScript</li>
                <li><b className="purple">Backend:</b> Node.js, Express.js, MySQL, MongoDB</li>
                <li><b className="purple">Cloud & DevOps:</b> AWS, Serverless, Git</li>
                <li><b className="purple">Other Skills:</b> Debugging, API Integration, Scalable Architecture</li>
              </ul>
              <br />
              My field of interest includes building innovative <b className="purple">Web Technologies and Products</b> and exploring <b className="purple">Blockchain</b>.
              <br />
              <br />
              I love working with <b className="purple">Node.js</b> and modern JavaScript frameworks like <b className="purple">React.js and Next.js</b> to develop high-quality products.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} alt="avatar" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AromalSurendran47"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aromal-surendran-04213523b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pzycho_boi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
